import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  TextField,
  Button
} from '@mui/material';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../../public/uinsports-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Community', href: '/community' },
      { name: 'Organizers', href: '/organizers' },
    ],
    Support: [
      { name: 'Help Center', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'API Documentation', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--uinsports-navy)',
        color: 'white',
        pt: 10,
        pb: 6,
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Brand Section */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 350 }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box
                  component="img"
                  src={logo}
                  alt="UinSports Logo"
                  sx={{ height: 60, filter: 'brightness(0) invert(1)' }}
                />
              </Link>
              <Typography sx={{ color: 'var(--gray-400)', lineHeight: 1.6 }}>
                Empowering amateur athletes through networking and community support. The future of sports is connected.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: 'var(--gray-400)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      '&:hover': { color: 'white', borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' }
                    }}
                  >
                    <Icon size={16} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} lg={5}>
            <Grid container spacing={4}>
              {Object.entries(footerLinks).map(([category, links]) => (
                <Grid item xs={6} md={4} key={category}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        style={{
                          textDecoration: 'none',
                          color: 'var(--gray-400)',
                          fontSize: '0.95rem',
                          transition: 'color 0.2s ease',
                        }}
                        className="hover-text-white"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} lg={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>
              Stay Updated
            </Typography>
            <Typography sx={{ color: 'var(--gray-400)', mb: 3, fontSize: '0.9rem' }}>
              Subscribe to our newsletter for the latest opportunities.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    borderRadius: '8px',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: 'var(--uinsports-blue)' }
                  }
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: 'var(--uinsports-orange)',
                  color: 'white',
                  fontWeight: 600,
                  py: 1,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#d95d22' }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--gray-500)' }}>
            &copy; {currentYear} You In Sports Inc. All rights reserved.
          </Typography>
          {/* <Box sx={{ display: 'flex', gap: 4 }}>
              <Link to="/privacy" style={{ textDecoration: 'none', color: 'var(--gray-500)', fontSize: '0.875rem' }}>Privacy</Link>
              <Link to="/terms" style={{ textDecoration: 'none', color: 'var(--gray-500)', fontSize: '0.875rem' }}>Terms</Link>
              <Link to="/cookies" style={{ textDecoration: 'none', color: 'var(--gray-500)', fontSize: '0.875rem' }}>Cookies</Link>
           </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
