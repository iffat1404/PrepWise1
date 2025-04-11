"use client"

import React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#121212",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo and Brand */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#8b5cf6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1,
                }}
              >
                <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                  P
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >
                PrepBuddy
              </Typography>
            </Link>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link to="/features" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white", mx: 1 }}>Features</Button>
              </Link>
              <Link to="/pricing" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white", mx: 1 }}>Pricing</Button>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white", mx: 1 }}>About</Button>
              </Link>

              <IconButton sx={{ color: "white", mx: 1 }}>
                <SettingsIcon />
              </IconButton>

              {location.pathname !== "/login" && (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button sx={{ color: "white", mx: 1 }}>Login</Button>
                </Link>
              )}

              {location.pathname !== "/signup" && location.pathname !== "/register" && (
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#8b5cf6",
                      "&:hover": { backgroundColor: "#7c3aed" },
                      ml: 1,
                    }}
                  >
                    Register
                  </Button>
                </Link>
              )}
            </Box>
          ) : (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "#121212",
            color: "white",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem button component={Link} to="/features" onClick={handleDrawerToggle}>
            <ListItemText primary="Features" />
          </ListItem>
          <ListItem button component={Link} to="/pricing" onClick={handleDrawerToggle}>
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
            <ListItemText primary="About" />
          </ListItem>
          {location.pathname !== "/login" && (
            <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}>
              <ListItemText primary="Login" />
            </ListItem>
          )}
          {location.pathname !== "/signup" && location.pathname !== "/register" && (
            <ListItem
              button
              component={Link}
              to="/signup"
              onClick={handleDrawerToggle}
              sx={{
                backgroundColor: "#8b5cf6",
                "&:hover": { backgroundColor: "#7c3aed" },
                borderRadius: 1,
                my: 1,
                mx: 2,
              }}
            >
              <ListItemText primary="Register" sx={{ textAlign: "center" }} />
            </ListItem>
          )}
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Navbar

