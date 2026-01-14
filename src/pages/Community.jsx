import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Tabs,
  Tab,
  Avatar,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  MdPeople as People,
  MdAutoAwesome as AutoAwesome,
  MdSmartToy as SmartToy,
  MdStar as Star,
} from 'react-icons/md';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { fetchAthletes, fetchCommunities } from '../lib/api';
import SeoSchema from '../components/SeoSchema';
import { motion } from 'framer-motion';

const Community = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [athletes, setAthletes] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const loadData = async () => {
      try {
        const communitiesData = await fetchCommunities();
        setSportsData(communitiesData.sports);
        setGenderData(communitiesData.gender);

        const athletesData = await fetchAthletes();
        setAthletes(athletesData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSportClick = (entry) => {
    setSelectedSport(entry.name === 'Others' ? null : entry.name);
  };

  const handleGenderClick = (entry) => {
    setSelectedGender(entry.name);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'var(--gray-50)', minHeight: '100vh', overflowX: 'hidden' }}>
      <SeoSchema
        type="WebPage"
        name="UinSports Community"
        description="Explore our diverse sports communities and connect with athletes from around the world"
        url="https://uinsports.com/community"
      />

      {/* --- HERO SECTION --- */}
      <Box
        sx={{
          py: { xs: 8, md: 15 },
          background: 'var(--uinsports-navy)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'radial-gradient(circle at 70% 30%, var(--uinsports-blue), transparent 60%)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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
                color: '#FDBA74',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                mb: 3,
              }}
            >
              <People style={{ marginRight: 6 }} />
              Find Your Tribe
            </Box>
            <Typography
              className="text-display"
              sx={{
                color: 'white',
                mb: 3,
                fontWeight: 800,
                fontSize: { xs: '3rem', md: '5rem' }
              }}
            >
              Global <span className="text-gradient-primary">Communities</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, color: 'rgba(255,255,255,0.7)', maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}>
              Connect with thousands of athletes, coaches, and changemakers. Your network is your net worth.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* --- STATS DASHBOARD --- */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: '24px',
            border: '1px solid var(--gray-200)',
            bgcolor: 'white',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
          }}
        >
          <Box sx={{ borderBottom: '1px solid var(--gray-200)', mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              sx={{
                '& .MuiTabs-indicator': { backgroundColor: 'var(--uinsports-blue)', height: 3 },
                '& .MuiTab-root': { fontWeight: 600, fontSize: '1rem', textTransform: 'none', color: 'var(--gray-500)', '&.Mui-selected': { color: 'var(--uinsports-blue)' } }
              }}
            >
              <Tab label="By Sport" />
              <Tab label="By Gender" />
            </Tabs>
          </Box>

          <Box sx={{ height: 500, width: '100%', position: 'relative' }}>
            {loading ? (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Box sx={{ width: 40, height: 40, border: '3px solid var(--gray-200)', borderTopColor: 'var(--uinsports-orange)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
              </Box>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tabValue === 0 ? sportsData : genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={120}
                    outerRadius={180}
                    paddingAngle={2}
                    dataKey="value"
                    onClick={(_, index) => tabValue === 0 ? handleSportClick(sportsData[index]) : handleGenderClick(genderData[index])}
                  >
                    {(tabValue === 0 ? sportsData : genderData).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff', padding: '10px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                </PieChart>
              </ResponsiveContainer>
            )}

            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: 'var(--gray-900)' }}>10k+</Typography>
              <Typography sx={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>Active Athletes</Typography>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* --- FEATURES GRID --- */}
      <Box sx={{ bgcolor: 'var(--gray-900)', color: 'white', py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 800, mb: 10 }}>
            One Platform, <span className="text-gradient-primary">Infinite Possibilities</span>
          </Typography>
          <Grid container spacing={6}>
            {[
              { icon: People, title: 'Connect', desc: 'Find teammates and training partners nearby.' },
              { icon: AutoAwesome, title: 'Share', desc: 'Post your highlights and get discovered.' },
              { icon: SmartToy, title: 'Grow', desc: 'Access mentorship and premium coaching resources.' },
            ].map((f, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  sx={{
                    p: 4,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center',
                    height: '100%',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-10px)', bgcolor: 'rgba(255,255,255,0.08)' }
                  }}
                >
                  <Box sx={{ width: 60, height: 60, mx: 'auto', mb: 3, borderRadius: '16px', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <f.icon size={28} color="#FDBA74" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>{f.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{f.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'var(--uinsports-orange)',
                color: 'white',
                px: 6,
                py: 2,
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 700,
                '&:hover': { bgcolor: '#d95d22' }
              }}
            >
              Join the Community
            </Button>
          </Box>
        </Container>
      </Box>

    </Box>
  );
};

export default Community;
