import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  useTheme,
  useMediaQuery,
  Avatar,
  Paper
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdPlayArrow as PlayArrow,
  MdTrendingUp as TrendingUp,
  MdCheckCircle as CheckCircle,
  MdGpsFixed as GpsFixed,
  MdFavorite as Favorite,
  MdAutoAwesome as AutoAwesome,
  MdRocket as Rocket,
  MdSmartToy as SmartToy,
  MdVideoLibrary as VideoLibrary,
  MdArrowForward as ArrowForward,
} from 'react-icons/md';
import { MdElectricBolt as ElectricBoltIcon } from 'react-icons/md';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { fetchAthletes } from '../lib/api';
import SeoSchema from '../components/SeoSchema';
import { FiTarget } from 'react-icons/fi';
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { BsAward } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { GoZap } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { IoTrendingUp } from "react-icons/io5";

// Community stats data
const communityStats = [
  { name: "Football", value: 15420, color: "#F26A27", percentage: 30.8 },
  { name: "Basketball", value: 10280, color: "#418BCA", percentage: 20.6 },
  { name: "Swimming", value: 7650, color: "#0C3042", percentage: 15.3 },
  { name: "Athletics", value: 6120, color: "#F26A27", percentage: 12.2 },
  { name: "Tennis", value: 4080, color: "#418BCA", percentage: 8.2 },
  { name: "Gymnastics", value: 3060, color: "#0C3042", percentage: 6.1 },
  { name: "Others", value: 3390, color: "#F26A27", percentage: 6.8 },
];

const iconsMap = {
  FaArrowsDownToPeople: FaArrowsDownToPeople,
  BsAward: BsAward,
  LuUsers: LuUsers,
  GoZap: GoZap,
  GoTrophy: GoTrophy,
  IoTrendingUp: IoTrendingUp,
}

const totalUsers = 10000;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 },
  },
};

const Home = () => {
  const [featuredAthletes, setFeaturedAthletes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dailyJoins, setDailyJoins] = useState(127);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Fetch featured athletes
    const loadFeaturedAthletes = async () => {
      try {
        const athletes = await fetchAthletes({ featured: true });
        setFeaturedAthletes(athletes.slice(0, 3));
      } catch (error) {
        console.error("Error loading featured athletes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedAthletes();

    const interval = setInterval(() => {
      setDailyJoins((prev) => prev + Math.floor(Math.random() * 3));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <SeoSchema type="WebSite" />

      {/* --- HERO SECTION --- */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 10% 20%, rgb(12, 48, 66) 0%, rgb(32, 85, 128) 90.2%)',
          color: 'white',
          pt: { xs: 10, md: 0 },
          pb: { xs: 10, md: 0 },
        }}
        className="hero-grid-overlay"
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} lg={6} sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      px: 2,
                      py: 0.5,
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      color: '#FDBA74',
                      mb: 3,
                    }}
                  >
                    <AutoAwesome style={{ marginRight: 6 }} />
                    The Future of Sports Networking
                  </Box>
                  <Typography className="text-display" sx={{ mb: 2, color: 'white' }}>
                    Your Sports Journey, <br />
                    <Box component="span" className="text-gradient-primary">
                      But Make It Epic.
                    </Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 400,
                      maxWidth: '650px',
                      mx: { xs: 'auto', lg: 0 },
                      mb: 5,
                      lineHeight: 1.6,
                    }}
                  >
                    The first platform to create your sports CV, connect with sponsors, and manage your athletic legacy. Join the revolution.
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: 2,
                      justifyContent: { xs: 'center', lg: 'flex-start' },
                    }}
                  >
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          borderRadius: '50px',
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          background: 'var(--uinsports-orange)',
                          textTransform: 'none',
                          boxShadow: '0 4px 14px 0 rgba(242, 106, 39, 0.39)',
                          '&:hover': {
                            background: '#d95d22',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(242, 106, 39, 0.23)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Start Your Journey
                        <ArrowForward style={{ marginLeft: 8 }} />
                      </Button>
                    </Link>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderRadius: '50px',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderColor: 'rgba(255,255,255,0.3)',
                        color: 'white',
                        textTransform: 'none',
                        '&:hover': {
                          borderColor: 'white',
                          background: 'rgba(255,255,255,0.05)',
                        },
                      }}
                    >
                      <PlayArrow style={{ marginRight: 8 }} />
                      Watch Showreel
                    </Button>
                  </Box>

                  {/* Stats Row */}
                  <Box sx={{ mt: 8, display: 'flex', gap: 4, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                    {[
                      { label: 'Athletes', value: '10K+' },
                      { label: 'Sports', value: '50+' },
                      { label: 'Raised', value: '$2M+' },
                    ].map((stat) => (
                      <Box key={stat.label} sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: 'white' }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} lg={6}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <Box
                      className="glass-panel"
                      sx={{
                        p: 4,
                        maxWidth: 500,
                        width: '100%',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'rgba(12, 48, 66, 0.6) !important', // Override for dark contrast
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Box>
                          <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>Community Pulse</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>Live activity from athletes worldwide</Typography>
                        </Box>
                        <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '12px', px: 2, py: 1 }}>
                          <Typography variant="caption" sx={{ color: '#F26A27', fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                            <TrendingUp style={{ marginRight: 4 }} /> +{dailyJoins} Today
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ height: 250, width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={communityStats}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {communityStats.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }}
                              itemStyle={{ color: '#fff' }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </Box>

                      <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {communityStats.slice(0, 4).map((sport) => (
                          <Box key={sport.name} sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(255,255,255,0.05)', px: 1.5, py: 0.5, borderRadius: '50px' }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: sport.color }} />
                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>{sport.name}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* --- BENTO GRID FEATURES --- */}
      <Box sx={{ py: 12, bgcolor: 'var(--gray-50)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography className="text-subheading" sx={{ color: 'var(--uinsports-blue)', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Why UinSports?
            </Typography>
            <Typography className="text-heading" sx={{ color: 'var(--gray-900)', mb: 3 }}>
              Everything You Need to <span className="text-gradient-primary">Level Up</span>
            </Typography>
            <Typography sx={{ color: 'var(--gray-500)', maxWidth: 600, mx: 'auto', fontSize: '1.125rem' }}>
              A complete ecosystem designed to accelerate your career, from networking to funding.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Main Feature - Large */}
            <Grid item xs={12} md={8}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    height: '100%',
                    borderRadius: '24px',
                    bgcolor: 'white',
                    border: '1px solid var(--gray-200)',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 4,
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <Box sx={{ flex: 1, zIndex: 1 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: '12px', bgcolor: 'rgba(65, 139, 202, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                      <FaArrowsDownToPeople size={24} color="var(--uinsports-blue)" />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Sports Networking</Typography>
                    <Typography sx={{ color: 'var(--gray-500)', fontSize: '1.1rem', mb: 3 }}>
                      Connect directly with verified coaches, sponsors, and peers. Build the relationships that matter.
                    </Typography>
                    <Button variant="text" sx={{ color: 'var(--uinsports-blue)', fontWeight: 600, p: 0 }}>
                      Learn more <ArrowForward size={16} style={{ marginLeft: 8 }} />
                    </Button>
                  </Box>
                  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{
                      width: 250,
                      height: 300,
                      bgcolor: 'var(--gray-100)',
                      borderRadius: '16px',
                      position: 'relative',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                    }}>
                      {/* Mock UI Elements */}
                      <Box sx={{ position: 'absolute', top: 20, left: 20, right: 20, height: 60, bgcolor: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', px: 2, gap: 2 }}>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: '#F26A27' }}>S</Avatar>
                        <Box sx={{ width: '60%', height: 8, bgcolor: 'var(--gray-100)', borderRadius: 4 }} />
                      </Box>
                      <Box sx={{ position: 'absolute', top: 100, left: 20, right: 20, bottom: 20, bgcolor: 'white', borderRadius: '12px', p: 2 }}>
                        <Box sx={{ width: '100%', height: '100%', bgcolor: 'var(--gray-50)', borderRadius: '8px' }} />
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Secondary Feature - Vertical */}
            <Grid item xs={12} md={4}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }} style={{ height: '100%' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: '24px',
                    bgcolor: 'var(--uinsports-navy)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                      <BsAward size={24} color="white" />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Professional CV</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Showcase your stats, highlights, and achievements in one link.
                    </Typography>
                  </Box>
                  <Box sx={{
                    mt: 4,
                    height: 150,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }} />
                </Paper>
              </motion.div>
            </Grid>

            {/* 3rd Feature */}
            <Grid item xs={12} md={4}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    bgcolor: 'white',
                    border: '1px solid var(--gray-200)',
                    minHeight: 300
                  }}
                >
                  <Box sx={{ width: 50, height: 50, borderRadius: '12px', bgcolor: 'rgba(242, 106, 39, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <GoZap size={24} color="var(--uinsports-orange)" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Funding Platform</Typography>
                  <Typography sx={{ color: 'var(--gray-500)', mb: 2 }}>
                    Crowdfund your next tournament or training camp.
                  </Typography>
                  <Box sx={{
                    display: 'inline-block',
                    px: 1.5,
                    py: 0.5,
                    bgcolor: 'rgba(242, 106, 39, 0.1)',
                    color: 'var(--uinsports-orange)',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    COMING SOON
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* 4th Feature */}
            <Grid item xs={12} md={4}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    bgcolor: 'white',
                    border: '1px solid var(--gray-200)',
                    minHeight: 300
                  }}
                >
                  <Box sx={{ width: 50, height: 50, borderRadius: '12px', bgcolor: 'rgba(65, 139, 202, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <GoTrophy size={24} color="var(--uinsports-blue)" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Achievement Tracking</Typography>
                  <Typography sx={{ color: 'var(--gray-500)' }}>
                    Document every medal, record, and milestone.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* 5th Feature */}
            <Grid item xs={12} md={4}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    bgcolor: 'white',
                    border: '1px solid var(--gray-200)',
                    minHeight: 300
                  }}
                >
                  <Box sx={{ width: 50, height: 50, borderRadius: '12px', bgcolor: 'rgba(12, 48, 66, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <LuUsers size={24} color="var(--uinsports-navy)" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Communities</Typography>
                  <Typography sx={{ color: 'var(--gray-500)' }}>
                    Sport-specific groups to share tips and advice.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* --- AI SECTION --- */}
      <Box sx={{ py: 12, bgcolor: 'white', borderTop: '1px solid var(--gray-100)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  width: '100%',
                  height: '100%',
                  bgcolor: 'rgba(242, 106, 39, 0.05)',
                  borderRadius: '24px',
                  zIndex: 0
                }} />
                <Box sx={{
                  position: 'relative',
                  zIndex: 1,
                  bgcolor: 'var(--gray-900)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                  minHeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} >
                  <Typography sx={{ color: 'rgba(255,255,255,0.2)', fontWeight: 700, letterSpacing: 2 }}>
                    AI INTERFACE PREVIEW
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 } }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'var(--uinsports-blue)', fontWeight: 700, mb: 2, fontSize: '0.875rem' }}>
                  <AutoAwesome />
                  ARTIFICIAL INTELLIGENCE
                </Box>
                <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3rem' }, lineHeight: 1.1 }}>
                  Unlock Your <span className="text-gradient-primary">Full Potential</span> with AI
                </Typography>
                <Typography sx={{ color: 'var(--gray-500)', fontSize: '1.25rem', mb: 4, lineHeight: 1.6 }}>
                  Get instant analysis of your technique. Our computer vision identifies areas for improvement and provides personalized coaching tips.
                </Typography>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderColor: 'var(--gray-300)',
                    color: 'var(--gray-900)',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: 'var(--gray-900)',
                      background: 'transparent'
                    },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  Explore AI Tools <ArrowForward />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- CTA SECTION --- */}
      <Box sx={{ py: 16, bgcolor: 'var(--gray-900)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'radial-gradient(circle at 50% 50%, var(--uinsports-blue), transparent 70%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}>
            Ready to make history?
          </Typography>
          <Typography sx={{ color: 'var(--gray-400)', fontSize: '1.25rem', mb: 6, maxWidth: 600, mx: 'auto' }}>
            Join thousands of athletes who are taking control of their sports careers today.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: '50px',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                background: 'white',
                color: 'var(--gray-900)',
                textTransform: 'none',
                '&:hover': {
                  background: 'var(--gray-100)',
                }
              }}
            >
              Get Started Free
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: '50px',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
                textTransform: 'none',
                '&:hover': {
                  borderColor: 'white',
                  background: 'rgba(255,255,255,0.05)'
                }
              }}
            >
              Contact Sales
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
