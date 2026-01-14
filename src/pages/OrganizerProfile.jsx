import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';
import { MdEvent, MdPeople, MdDashboard, MdAdd, MdSettings, MdTrendingUp } from 'react-icons/md';
import SeoSchema from '../components/SeoSchema';

const OrganizerProfile = () => {
  const [tabVal, setTabVal] = React.useState(0);

  const mockStats = [
    { label: 'Active Events', value: '4', icon: MdEvent, color: '#418BCA' },
    { label: 'Total Registrations', value: '128', icon: MdPeople, color: '#F26A27' },
    { label: 'Total Revenue', value: '$8,450', icon: MdTrendingUp, color: '#0C3042' },
  ];

  const mockEvents = [
    { title: "Summer Swim Meet 2026", date: "June 15, 2026", participants: 45, status: "Active" },
    { title: "Regional Athletics Qualifier", date: "July 20, 2026", participants: 82, status: "Draft" },
    { title: "City Marathon", date: "August 5, 2026", participants: 1200, status: "Planning" },
  ];

  return (
    <Box sx={{ bgcolor: 'var(--gray-50)', minHeight: '100vh', pb: 10 }}>
      <SeoSchema
        type="ProfilePage"
        name="Organizer Dashboard | You In Sports"
        description="Manage your sports events and communities."
        url="https://youinsports.com/profile/organizer"
      />

      {/* --- TOP BAR --- */}
      <Box sx={{ bgcolor: 'white', borderBottom: '1px solid var(--gray-200)', py: 2 }}>
        <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: '8px', bgcolor: 'var(--uinsports-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <MdDashboard size={24} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Organizer Dashboard</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button startIcon={<MdAdd />} variant="contained">Create Event</Button>
            <Button startIcon={<MdSettings />} variant="outlined">Settings</Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          {/* --- STATS --- */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {mockStats.map((stat, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Paper
                    elevation={0}
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    sx={{ p: 3, borderRadius: '16px', border: '1px solid var(--gray-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Box>
                      <Typography sx={{ color: 'var(--gray-500)', fontSize: '0.9rem', fontWeight: 600 }}>{stat.label}</Typography>
                      <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5 }}>{stat.value}</Typography>
                    </Box>
                    <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <stat.icon size={28} color={stat.color} />
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* --- MAIN CONTENT --- */}
          <Grid item xs={12} lg={8}>
            <Paper elevation={0} sx={{ borderRadius: '16px', border: '1px solid var(--gray-200)', overflow: 'hidden' }}>
              <Box sx={{ borderBottom: '1px solid var(--gray-200)' }}>
                <Tabs value={tabVal} onChange={(e, v) => setTabVal(v)} sx={{ px: 2 }}>
                  <Tab label="My Events" />
                  <Tab label="Participants" />
                  <Tab label="Messages" />
                </Tabs>
              </Box>
              <Box sx={{ p: 0 }}>
                {tabVal === 0 && (
                  <Box>
                    {mockEvents.map((event, i) => (
                      <Box key={i} sx={{ p: 3, borderBottom: '1px solid var(--gray-100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', '&:last-child': { borderBottom: 'none' }, '&:hover': { bgcolor: 'var(--gray-50)' } }}>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{event.title}</Typography>
                          <Typography variant="body2" sx={{ color: 'var(--gray-500)' }}>{event.date} • {event.participants} Participants</Typography>
                        </Box>
                        <Button size="small" variant="outlined" sx={{ borderRadius: '20px' }}>Manage</Button>
                      </Box>
                    ))}
                  </Box>
                )}
                {tabVal !== 0 && <Box sx={{ p: 5, textAlign: 'center', color: 'var(--gray-400)' }}>Work in progress...</Box>}
              </Box>
            </Paper>
          </Grid>

          {/* --- SIDEBAR --- */}
          <Grid item xs={12} lg={4}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid var(--gray-200)', bgcolor: 'var(--uinsports-navy)', color: 'white' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Quick Actions</Typography>
              <Button fullWidth variant="contained" sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.1)', justifyContent: 'flex-start' }}>Post Announcement</Button>
              <Button fullWidth variant="contained" sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.1)', justifyContent: 'flex-start' }}>Verify Results</Button>
              <Button fullWidth variant="contained" sx={{ bgcolor: 'rgba(255,255,255,0.1)', justifyContent: 'flex-start' }}>Invite Coaches</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OrganizerProfile;
