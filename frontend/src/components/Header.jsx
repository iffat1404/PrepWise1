import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Features", path: "/#features" },
    { name: "How it Works", path: "/#how-it-works" },
    { name: "Pricing", path: "/#pricing" }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontWeight: 700,
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textFillColor: "transparent",
            textDecoration: "none"
          }}
        >
          PrepBuddy
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={Link} 
            to={item.path}
            sx={{ 
              textAlign: "center",
              color: theme.palette.text.primary,
              textDecoration: "none",
              py: 1
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ 
                fontWeight: isActive(item.path) ? 600 : 400,
                color: isActive(item.path) ? "#6366f1" : "inherit"
              }} 
            />
          </ListItem>
        ))}
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
          {location.pathname !== "/login" && (
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                borderColor: "#6366f1",
                color: "#6366f1",
                "&:hover": {
                  borderColor: "#4f46e5",
                  backgroundColor: "rgba(99, 102, 241, 0.04)"
                }
              }}
            >
              Log in
            </Button>
          )}
          {location.pathname !== "/signup" && (
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              fullWidth
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                "&:hover": {
                  background: "linear-gradient(90deg, #4f46e5, #7c3aed)"
                }
              }}
            >
              Sign up
            </Button>
          )}
        </Box>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
      sx={{ 
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(18, 18, 18, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 0 } }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textFillColor: "transparent",
              textDecoration: "none"
            }}
          >
            PrepBuddy
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    mx: 1,
                    color: isActive(item.path) ? "#6366f1" : theme.palette.text.primary,
                    fontWeight: isActive(item.path) ? 600 : 400,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#6366f1"
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeToggle />
            
            {!isMobile && (
              <>
                {location.pathname !== "/login" && (
                  <Button
                    component={Link}
                    to="/login"
                    variant="outlined"
                    sx={{
                      ml: 2,
                      borderRadius: "8px",
                      textTransform: "none",
                      borderColor: "#6366f1",
                      color: "#6366f1",
                      "&:hover": {
                        borderColor: "#4f46e5",
                        backgroundColor: "rgba(99, 102, 241, 0.04)"
                      }
                    }}
                  >
                    Log in
                  </Button>
                )}
                {location.pathname !== "/signup" && (
                  <Button
                    component={Link}
                    to="/signup"
                    variant="contained"
                    sx={{
                      ml: 2,
                      borderRadius: "8px",
                      textTransform: "none",
                      background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                      "&:hover": {
                        background: "linear-gradient(90deg, #4f46e5, #7c3aed)"
                      }
                    }}
                  >
                    Sign up
                  </Button>
                )}
              </>
            )}
            
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
      
      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: 280,
            backgroundColor: theme.palette.background.paper
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
