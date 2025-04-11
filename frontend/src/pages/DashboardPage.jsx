// frontend/src/pages/DashboardPage.js
import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Divider
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Dashboard as DashboardIcon,
  History as HistoryIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Drawer width
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Learning Platform
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            Welcome, {user?.name || 'User'}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Practice History" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Performance" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: 'none', sm: 'block' },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Practice History" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Performance" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="lg">
        // frontend/src/pages/DashboardPage.js (continued)
          <Grid container spacing={3}>
            {/* Quick Start Card */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Quick Start
                </Typography>
                <Typography variant="body1" paragraph>
                  Ready to practice? Choose an activity to begin.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
                    Start New Practice Session
                  </Button>
                  <Button variant="outlined" color="primary" fullWidth>
                    Continue Last Session
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Performance Summary Widget */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Performance Summary
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Weekly Progress
                  </Typography>
                  <Box sx={{ height: 20, bgcolor: '#e0e0e0', borderRadius: 1, mt: 1, mb: 2 }}>
                    <Box
                      sx={{
                        height: '100%',
                        width: '65%',
                        bgcolor: 'primary.main',
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Sessions Completed
                      </Typography>
                      <Typography variant="h6">12</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Total Practice Time
                      </Typography>
                      <Typography variant="h6">5h 23m</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>

            {/* Practice History Timeline */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Practice History
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <List>
                    {[1, 2, 3].map((item) => (
                      <ListItem key={item} sx={{ borderLeft: '2px solid #e0e0e0', pl: 3, py: 2, position: 'relative' }}>
                        <Box
                          sx={{
                            position: 'absolute',
                            left: -5,
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                          }}
                        />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            Practice Session #{item}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {`${item} day${item !== 1 ? 's' : ''} ago • 45 minutes`}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Completed {3 * item} exercises with an average score of {85 + item}%
                          </Typography>
                        </Box>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardPage;