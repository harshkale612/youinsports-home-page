import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import SeoSchema from '../components/SeoSchema';
import { MdAutoAwesome } from 'react-icons/md';
import { BsQuote } from 'react-icons/bs';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: 'white' }}>
      <SeoSchema
        type="WebPage"
        name="About You In Sports"
        description="Learn about You In Sports and our mission to support amateur athletes"
        url="https://youinsports.com/about"
      />

      {/* --- HERO SECTION (Editorial Style) --- */}
      <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: 'var(--gray-50)' }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Box sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 2,
                  py: 0.5,
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(242, 106, 39, 0.1)',
                  color: 'var(--uinsports-orange)',
                  mb: 4,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Our Story
              </Box>
              <Typography
                className="text-display"
                sx={{
                  color: 'var(--gray-900)',
                  mb: 4,
                  fontWeight: 800,
                  fontSize: { xs: '3rem', md: '5rem' } // Override for bigger impact
                }}
              >
                Empowering the <span className="text-gradient-primary">Underdogs</span>.
              </Typography>
              <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, color: 'var(--gray-500)', lineHeight: 1.6 }}>
                We built this platform for the dreamers, the grinders, and the believers. Because every athlete deserves a shot at greatness, no matter where they start.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* --- IMAGE + MISSION GRID --- */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 400, md: 600 },
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.1)'
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
                  alt="Athletes training"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                }} />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <Box sx={{ pr: { md: 4 } }}>
                <motion.div variants={fadeIn}>
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: 'var(--gray-900)' }}>
                    The Mission
                  </Typography>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Typography sx={{ fontSize: '1.125rem', color: 'var(--gray-600)', mb: 3, lineHeight: 1.8 }}>
                    At You In Sports, we noticed a gap. Millions of talented athletes fly under the radar simply because they lack connections. We're here to fix that.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Typography sx={{ fontSize: '1.125rem', color: 'var(--gray-600)', mb: 4, lineHeight: 1.8 }}>
                    Our platform democratizes sports access. Whether you need sponsorship, coaching, or just a community that gets it, we provide the tools to build your legacy.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Box sx={{ borderLeft: '4px solid var(--uinsports-orange)', pl: 3, py: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'var(--gray-800)', fontStyle: 'italic' }}>
                      "It's not just about stats; it's about the story behind every score."
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>


      {/* --- STATS STRIP --- */}
      <Box sx={{ bgcolor: 'var(--uinsports-navy)', color: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <MotionGrid container spacing={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} sx={{ display: 'flex' }}>
            {[
              { label: "Community", value: "Global", sub: "Connecting athletes worldwide" },
              { label: "Growth", value: "300%", sub: "Year-over-year platform growth" },
              { label: "Impact", value: "$2M+", sub: "Direct funding to athletes" }
            ].map((stat, i) => (
              <Grid item xs={12} md={4} key={i}>
                <motion.div variants={fadeIn}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography sx={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', mb: 1 }}>{stat.label}</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>{stat.value}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>{stat.sub}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </MotionGrid>
        </Container>
      </Box>

      {/* --- TEAM SECTION (Clean Cards) --- */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 800, mb: 8 }}>
            Meet the Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  border: '1px solid var(--gray-200)',
                  borderRadius: '24px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-8px)' }
                }}
              >
                <Avatar
                  sx={{ width: 100, height: 100, mx: 'auto', mb: 3, bgcolor: 'var(--uinsports-blue)' }}
                >
                  RI
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>Roshan Ingole</Typography>
                <Typography sx={{ color: 'var(--uinsports-orange)', fontWeight: 600, mb: 2 }}>Founder & CEO</Typography>
                <Typography sx={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>
                  Passionate about leveling the playing field for athletes everywhere.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- BIG CTA --- */}
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 4 }}>
          Ready to join the movement?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'var(--gray-900)',
            color: 'white',
            px: 5,
            py: 2,
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: 700,
            '&:hover': { bgcolor: 'black' }
          }}
        >
          Get Started Now
        </Button>
      </Container>

    </Box>
  );
};
// Helper for Motion Grid
const MotionGrid = motion(Grid);

export default About;
