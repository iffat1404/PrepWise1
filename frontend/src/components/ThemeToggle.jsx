"use client"
import { IconButton, useTheme } from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import { useColorMode } from "../context/ColorModeContext"

const ThemeToggle = () => {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton onClick={toggleColorMode} color="inherit" aria-label="toggle theme">
      {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default ThemeToggle

