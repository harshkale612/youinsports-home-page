import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Avatar, Button, Chip, LinearProgress, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { MdLocationOn, MdSports, MdCheckCircle, MdShare, MdMessage, MdTrendingUp, MdEmojiEvents } from 'react-icons/md';
import SeoSchema from '../components/SeoSchema';
import { fetchAthletes } from '../lib/api';

const AthleteProfile = () => {
  const { id } = useParams();
  const [athlete, setAthlete] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock extended data generator if not present in basic API
  const getExtendedData = (baseData) => ({
    ...baseData,
    bio: "Passionate athlete dedicated to pushing boundaries and achieving excellence. Currently training for the upcoming national selection.",
    stats: [
      { label: 'Matches', value: '42' },
      { label: 'Wins', value: '28' },
      { label: 'Avg Score', value: '8.5' }
    ],
    achievements: [
      "Regional Champion 2024",
      "MVP of the Season 2023",
      "Top Scorer - Winter League"
    ],
    goals: [
      { title: "Training Camp Fund", current: 1200, target: 2000 },
      { title: "New Equipment", current: 450, target: 800 }
    ],
    videos: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544367563-12123d832d34?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop"
    ]
  });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const athletes = await fetchAthletes();
        // Simulate finding by ID, or default to first if ID not found/provided to ensure it works for demo
        const found = athletes.find(a => a.id.toString() === id) || athletes[0];
        setAthlete(getExtendedData(found));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (loading) return <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>Loading Profile...</Typography></Box>;

  if (!athlete) return <Box sx={{ p: 10, textAlign: 'center' }}>Athlete not found</Box>;

  return (
    <Box sx={{ bgcolor: 'var(--gray-50)', minHeight: '100vh', pb: 10 }}>
      <SeoSchema
        type="ProfilePage"
        name={`${athlete.name} | Athlete Profile`}
        description={`Check out ${athlete.name}'s sports profile on You In Sports.`}
        url={`https://youinsports.com/athletes/${id}`}
      />

      {/* --- COVER & AVATAR --- */}
      <Box sx={{ height: 300, bgcolor: 'var(--uinsports-navy)', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--uinsports-blue), var(--uinsports-navy))', opacity: 0.8 }} />
      </Box>

      <Container maxWidth="lg" sx={{ mt: -10, position: 'relative', zIndex: 2 }}>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: '24px', position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
            <IconButton sx={{ bgcolor: 'var(--gray-100)' }}><MdShare /></IconButton>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: { xs: -8, md: -12 } }}>
              <Box sx={{
                width: 180, height: 180, borderRadius: '50%', border: '6px solid white',
                overflow: 'hidden', mx: 'auto', bgcolor: 'var(--gray-200)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <img src={athlete.image} alt={athlete.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Typography variant="h4" sx={{ mt: 2, fontWeight: 800 }}>{athlete.name}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 1, color: 'var(--gray-500)' }}>
                <MdSports color="var(--uinsports-orange)" />
                <Typography sx={{ fontWeight: 600 }}>{athlete.sport}</Typography>
                <span>•</span>
                <MdLocationOn />
                <Typography>{athlete.location}</Typography>
              </Box>
              <Button
                variant="contained" fullWidth sx={{ mt: 3, borderRadius: '50px' }}
                startIcon={<MdMessage />}
              >
                Contact
              </Button>
            </Grid>

            <Grid item xs={12} md={9}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>About</Typography>
                    <Typography sx={{ color: 'var(--gray-600)', lineHeight: 1.6 }}>{athlete.bio}</Typography>
                  </Box>

                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Funding Goals</Typography>
                    {athlete.goals.map((goal, i) => (
                      <Box key={i} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography sx={{ fontWeight: 600 }}>{goal.title}</Typography>
                          <Typography sx={{ fontWeight: 700, color: 'var(--uinsports-blue)' }}>${goal.current} / ${goal.target}</Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={(goal.current / goal.target) * 100}
                          sx={{ height: 10, borderRadius: 5, bgcolor: 'var(--gray-200)', '& .MuiLinearProgress-bar': { bgcolor: i % 2 === 0 ? 'var(--uinsports-blue)' : 'var(--uinsports-orange)' } }}
                        />
                        <Button size="small" variant="outlined" sx={{ mt: 1, borderRadius: '20px' }}>Support this goal</Button>
                      </Box>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box sx={{ bgcolor: 'var(--gray-50)', p: 3, borderRadius: '16px', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <MdTrendingUp color="var(--uinsports-blue)" /> Stats
                    </Typography>
                    {athlete.stats.map((stat, i) => (
                      <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: '1px dashed var(--gray-200)' }}>
                        <Typography sx={{ color: 'var(--gray-600)' }}>{stat.label}</Typography>
                        <Typography sx={{ fontWeight: 700 }}>{stat.value}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ bgcolor: '#FFF7ED', p: 3, borderRadius: '16px', border: '1px solid #FFEDD5' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1, color: '#9A3412' }}>
                      <MdEmojiEvents /> Achievements
                    </Typography>
                    {athlete.achievements.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1.5, mb: 1.5 }}>
                        <MdCheckCircle color="#F97316" size={20} style={{ minWidth: 20 }} />
                        <Typography sx={{ fontSize: '0.9rem', color: '#7C2D12' }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/* --- GALLERY MOCK --- */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Media Gallery</Typography>
          <Grid container spacing={2}>
            {[
              "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
            ].map((img, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box sx={{ paddingTop: '100%', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                  <img src={img} alt={`Gallery ${index}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="hover-scale" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default AthleteProfile;
