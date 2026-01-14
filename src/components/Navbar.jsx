import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Container,
  Tooltip
} from '@mui/material';
import {
  MdMenu as MenuIcon,
  MdClose as CloseIcon,
  MdLightMode as LightModeIcon,
  MdDarkMode as DarkModeIcon,
} from 'react-icons/md';
import logo from '../../public/uinsports-logo.png';
import { ColorModeContext } from '../App';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handle scroll effect for transparency -> glass
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Community", href: "/community" },
    { name: "Organizers", href: "/organizers" },
    // { name: "FAQ", href: "/faq" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  // Mobile Drawer Content
  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={logo} alt="UinSports Logo" style={{ height: '60px' }} />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon fontSize="large" sx={{ color: 'text.primary' }} />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: 'divider' }} />
      <List sx={{ px: 2, pt: 3, flex: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
            <Link
              to={item.href}
              onClick={handleDrawerToggle}
              style={{
                textDecoration: 'none',
                width: '100%',
                display: 'block',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '1.125rem',
                fontWeight: isActive(item.href) ? 700 : 500,
                color: isActive(item.href) ? 'var(--uinsports-blue)' : 'var(--gray-700)',
                backgroundColor: isActive(item.href) ? 'var(--gray-50)' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              {item.name}
            </Link>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography sx={{ fontWeight: 600 }}>Theme</Typography>
          <IconButton onClick={colorMode.toggleColorMode} sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
        <Link to="/login" style={{ textDecoration: 'none', width: '100%' }}>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              mb: 2,
              borderColor: 'var(--uinsports-blue)',
              color: 'var(--uinsports-blue)',
              fontWeight: 600,
              py: 1.5,
              borderRadius: '8px',
              textTransform: 'none',
            }}
          >
            Login
          </Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none', width: '100%' }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              background: 'var(--gradient-primary)',
              color: 'white',
              fontWeight: 700,
              py: 1.5,
              borderRadius: '8px',
              textTransform: 'none',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: { xs: 70, md: 80 } }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt="UinSports Logo"
                style={{
                  height: isMobile ? '45px' : '60px',
                  transition: 'height 0.3s ease'
                }}
              />
            </Link>

            {/* Icons & Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Box sx={{ display: 'flex', gap: 4 }}>
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        style={{
                          textDecoration: 'none',
                          color: isActive(item.href) ? 'var(--uinsports-blue)' : 'var(--gray-600)',
                          fontWeight: isActive(item.href) ? 700 : 500,
                          fontSize: '1rem',
                          padding: '8px 0',
                          position: 'relative',
                          transition: 'color 0.2s ease',
                        }}
                        className="hover-lift"
                      >
                        {item.name}
                        {isActive(item.href) && (
                          <Box
                            component="span"
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              height: '2.5px',
                              borderRadius: '2px',
                              background: 'var(--gradient-primary)',
                              transformOrigin: 'left',
                              animation: 'fadeIn 0.3s ease',
                            }}
                          />
                        )}
                      </Link>
                    ))}
                  </Box>

                  {/* Theme Toggle Button */}
                  <Tooltip title={`Switch to ${theme.palette.mode === 'light' ? 'dark' : 'light'} mode`}>
                    <IconButton
                      onClick={colorMode.toggleColorMode}
                      color="inherit"
                      sx={{
                        bgcolor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.08)',
                        '&:hover': {
                          bgcolor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)',
                        }
                      }}
                    >
                      {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                  </Tooltip>

                  <Divider orientation="vertical" flexItem sx={{ height: 24, alignSelf: 'center', borderColor: 'divider' }} />

                  {/* Auth Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <Button
                        sx={{
                          color: 'text.primary',
                          fontWeight: 600,
                          textTransform: 'none',
                          fontSize: '1rem',
                          '&:hover': { color: 'var(--uinsports-blue)', background: 'transparent' },
                        }}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        sx={{
                          background: 'var(--gradient-primary)',
                          color: 'white',
                          px: 3,
                          py: 1,
                          borderRadius: '50px',
                          fontWeight: 700,
                          textTransform: 'none',
                          fontSize: '1rem',
                          boxShadow: '0 4px 12px rgba(242, 106, 39, 0.2)',
                          '&:hover': {
                            transform: 'translateY(-1px)',
                            boxShadow: '0 8px 16px rgba(242, 106, 39, 0.3)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </Box>
                </Box>
              )}

              {/* Mobile Actions */}
              {isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton
                    onClick={colorMode.toggleColorMode}
                    sx={{ color: 'text.primary' }}
                  >
                    {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{
                      color: 'text.primary',
                      background: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)',
                      '&:hover': { background: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.1)' }
                    }}
                  >
                    <MenuIcon fontSize="large" />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 300,
            background: 'background.default',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
