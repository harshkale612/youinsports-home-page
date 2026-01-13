import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { FaFacebook as Facebook, FaInstagram as Instagram, FaTwitter as Twitter,  } from 'react-icons/fa';
import { MdFavorite as Favorite } from 'react-icons/md';
import logo from '../../public/uinsports-logo.png';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Community', href: '/community' },
      // { name: 'Plans & Pricing', href: '/plans' },
    ],
    Support: [
      // { name: 'Support Athletes', href: '/support' },
      // { name: 'Impact Tracker', href: '/tracker' },
      { name: 'FAQ', href: '/faq' },
      { name: 'For Organizers', href: '/organizers' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <img src={logo} alt="UinSports Logo" style={{ height: '80px' }} />
              </Link>
              <Typography
                variant="body2"
                sx={{
                  color: '#6b7280',
                  lineHeight: 1.6,
                  maxWidth: '300px',
                }}
              >
                Empowering amateur athletes through networking and community support. Building the future of sports, one
                athlete at a time.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/uinsportsinc"
                  aria-label="Facebook"
                  sx={{
                    color: '#9ca3af',
                    '&:hover': {
                      color: '#418BCA',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://x.com/uinsportsinc"
                  aria-label="Twitter"
                  sx={{
                    color: '#9ca3af',
                    '&:hover': {
                      color: '#418BCA',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  aria-label="Instagram"
                  sx={{
                    color: '#9ca3af',
                    '&:hover': {
                      color: '#418BCA',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                component="a"
                href="https://www.youtube.com/@uinsportsinc"
                aria-label="YouTube"
                sx={{
                  color: '#9ca3af',
                  '&:hover': {
                    color: '#418BCA',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                <BsYoutube />
              </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Platform Links */}
          <Grid item xs={12} sm={4} md={2}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#0C3042',
                  mb: 2,
                  fontSize: '18px',
                }}
              >
                Platform
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.Platform.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    style={{
                      textDecoration: 'none',
                      color: '#6b7280',
                      fontSize: '14px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#418BCA';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Support Links */}
          <Grid item xs={12} sm={4} md={2}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#0C3042',
                  mb: 2,
                  fontSize: '18px',
                }}
              >
                Support
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.Support.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    style={{
                      textDecoration: 'none',
                      color: '#6b7280',
                      fontSize: '14px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#418BCA';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Legal Links */}
          <Grid item xs={12} sm={4} md={2}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#0C3042',
                  mb: 2,
                  fontSize: '18px',
                }}
              >
                Legal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.Legal.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    style={{
                      textDecoration: 'none',
                      color: '#6b7280',
                      fontSize: '14px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#418BCA';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Empty column for spacing */}
          <Grid item xs={12} md={2} />
        </Grid>

        <Divider sx={{ my: 4, background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)' }} />

        {/* Copyright Section */}
        <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
            &copy; {currentYear} You In Sports. All rights reserved. Made with{' '}💗
            {/* <Favorite sx={{ color: '#ef4444', fontSize: '16px' }} />  */}
            for athletes everywhere.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
