"use client"

import { createContext, useState, useMemo, useContext, useEffect } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const useColorMode = () => useContext(ColorModeContext)

export const ColorModeProvider = ({ children }) => {
  // Try to get the mode from localStorage, default to 'light'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme-mode")
    return savedMode || "light"
  })

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    [],
  )

  // Save mode to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme-mode", mode)
  }, [mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // Light mode
                primary: {
                  main: "#6366f1",
                },
                secondary: {
                  main: "#8b5cf6",
                },
                background: {
                  default: "#f8fafc",
                  paper: "#ffffff",
                },
              }
            : {
                // Dark mode
                primary: {
                  main: "#818cf8",
                },
                secondary: {
                  main: "#a78bfa",
                },
                background: {
                  default: "#0f172a",
                  paper: "#1e293b",
                },
              }),
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 500,
              },
            },
          },
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

