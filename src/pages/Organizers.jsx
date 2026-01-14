import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  Paper,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Avatar
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  MdEvent,
  MdGroup,
  MdAttachMoney,
  MdAnalytics,
  MdCampaign,
  MdSupportAgent,
  MdContactMail,
  MdArrowForward,
  MdExpandMore,
  MdCheckCircle,
  MdBusiness
} from 'react-icons/md';
import SeoSchema from '../components/SeoSchema';

// --- DATA ---
const organizerBenefits = [
  {
    icon: MdEvent,
    title: "Event Tools",
    description: "Plan, organize, and execute successful sports events with our comprehensive suite.",
    color: "#F26A27"
  },
  {
    icon: MdAttachMoney,
    title: "Sponsorships",
    description: "Connect with verified sponsors looking to fund events like yours.",
    color: "#418BCA"
  },
  {
    icon: MdGroup,
    title: "Athlete Network",
    description: "Access a global database of athletes to fill your rosters.",
    color: "#0C3042"
  },
  {
    icon: MdAnalytics,
    title: "Smart Analytics",
    description: "Track engagement, ROI, and participant metrics in real-time.",
    color: "#F26A27"
  },
  {
    icon: MdCampaign,
    title: "Marketing",
    description: "Promotional tools to boost visibility and ticket sales.",
    color: "#418BCA"
  },
  {
    icon: MdSupportAgent,
    title: "24/7 Support",
    description: "Dedicated account managers to help you succeed.",
    color: "#0C3042"
  }
];

const processSteps = [
  { step: 1, title: "Register", desc: "Create your organization profile." },
  { step: 2, title: "Plan", desc: "Set up event details and requirements." },
  { step: 3, title: "Connect", desc: "Match with sponsors and athletes." },
  { step: 4, title: "Execute", desc: "Run your event with our pro tools." }
];

const eventTypes = [
  'Basketball Tournament', 'Soccer League', 'Track & Field Meet',
  'Swimming Competition', 'Tennis Tournament', 'Volleyball League', 'Other'
];

// --- COMPONENTS ---

const Organizers = () => {
  const [tabValue, setTabValue] = useState(0);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '', email: '', organization: '', eventType: '', message: ''
  });

  const handleTabChange = (event, newValue) => setTabValue(newValue);
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'var(--gray-50)', minHeight: '100vh', overflowX: 'hidden' }}>
      <SeoSchema
        type="WebPage"
        name="For Organizers | You In Sports"
        description="Tools for sports organizers to manage events and secure sponsorships."
        url="https://youinsports.com/organizers"
      />

      {/* --- HERO SECTION --- */}
      <Box sx={{
        py: { xs: 8, md: 15 },
        bgcolor: 'var(--uinsports-navy)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'radial-gradient(circle at 30% 70%, var(--uinsports-orange), transparent 60%)' }} />
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
              <MdBusiness style={{ marginRight: 6 }} />
              For Organizers
            </Box>
            <Typography
              className="text-display"
              sx={{
                color: 'white',
                mb: 3,
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4.5rem' }
              }}
            >
              Organize Events, <br />
              <span className="text-gradient-primary" style={{ background: 'linear-gradient(135deg, #FFD700, #F26A27)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Get Sponsored</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.125rem', md: '1.25rem' }, color: 'rgba(255,255,255,0.7)', maxWidth: 700, mx: 'auto', mb: 5, lineHeight: 1.6 }}>
              The all-in-one platform to plan tournaments, manage athletes, and secure the funding you need.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => setContactDialogOpen(true)}
                sx={{
                  bgcolor: 'var(--uinsports-orange)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  '&:hover': { bgcolor: '#d95d22' }
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' }
                }}
              >
                See How It Works
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* --- STATS STRIP --- */}
      <Container maxWidth="lg" sx={{ mt: -6, position: 'relative', zIndex: 2 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid white',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
          }}
        >
          <Grid container spacing={4} divider={<Box sx={{ width: 1, height: { xs: 1, md: 60 }, bgcolor: 'var(--gray-200)', mx: 2, display: { xs: 'none', md: 'block' } }} />}>
            {[
              { label: "Events Organized", value: "500+" },
              { label: "Sponsorships", value: "$2.5M+" },
              { label: "Participants", value: "10K+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: 'var(--uinsports-blue)', mb: 1 }}>{stat.value}</Typography>
                  <Typography sx={{ color: 'var(--gray-500)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>{stat.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>


      {/* --- CONTENT TABS --- */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
          <Tabs centered value={tabValue} onChange={handleTabChange} sx={{ '& .MuiTabs-indicator': { bgcolor: 'var(--uinsports-orange)' } }}>
            <Tab label="Features" sx={{ fontSize: '1.1rem', fontWeight: 600, textTransform: 'none', '&.Mui-selected': { color: 'var(--uinsports-orange)' } }} />
            <Tab label="How It Works" sx={{ fontSize: '1.1rem', fontWeight: 600, textTransform: 'none', '&.Mui-selected': { color: 'var(--uinsports-orange)' } }} />
          </Tabs>
        </Box>

        {/* TAB 0: FEATURES */}
        {tabValue === 0 && (
          <Grid container spacing={4}>
            {organizerBenefits.map((b, i) => (
              <Grid item xs={12} md={4} key={i}>
                <motion.div whileHover={{ y: -5 }}>
                  <Paper sx={{ p: 4, height: '100%', borderRadius: '20px', border: '1px solid var(--gray-200)', bgcolor: 'white', '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.05)' } }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: '12px', bgcolor: `${b.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                      <b.icon size={28} color={b.color} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>{b.title}</Typography>
                    <Typography sx={{ color: 'var(--gray-500)', lineHeight: 1.6 }}>{b.description}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* TAB 1: PROCESS */}
        {tabValue === 1 && (
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            {processSteps.map((step, i) => (
              <Paper key={i} sx={{ display: 'flex', p: 4, mb: 3, borderRadius: '20px', alignItems: 'center', border: '1px solid var(--gray-200)', gap: 3 }}>
                <Avatar sx={{ width: 60, height: 60, bgcolor: 'var(--uinsports-blue)', fontWeight: 700, fontSize: '1.5rem' }}>{step.step}</Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>{step.title}</Typography>
                  <Typography sx={{ color: 'var(--gray-500)' }}>{step.desc}</Typography>
                </Box>
                <MdArrowForward size={24} color="var(--gray-400)" />
              </Paper>
            ))}
          </Box>
        )}
      </Container>

      {/* --- FAQ SECTION --- */}
      <Box sx={{ bgcolor: 'white', py: 10 }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 800, mb: 6 }}>
            FAQ
          </Typography>
          <Accordion sx={{ mb: 2, borderRadius: '16px !important', boxShadow: 'none', border: '1px solid var(--gray-200)', '&:before': { display: 'none' } }}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>How does sponsorship matching work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'var(--gray-600)' }}>Our AI analyzes your event type, audience, and reach to match you with brands looking for exactly those demographics.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2, borderRadius: '16px !important', boxShadow: 'none', border: '1px solid var(--gray-200)', '&:before': { display: 'none' } }}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Is there a fee to organize events?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'var(--gray-600)' }}>We offer flexible pricing. You can start for free, and we take a small commission on paid registrations or sponsorships secured through the platform.</Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>

      {/* --- CTA --- */}
      <Box sx={{ py: 10, bgcolor: 'var(--gray-50)', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Ready to launch?</Typography>
          <Typography sx={{ color: 'var(--gray-500)', mb: 4, fontSize: '1.1rem' }}>
            Join hundreds of organizers creating the future of sports.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setContactDialogOpen(true)}
            sx={{
              bgcolor: 'var(--uinsports-navy)',
              color: 'white',
              px: 6, py: 2, borderRadius: '50px',
              fontSize: '1.1rem', fontWeight: 700,
              '&:hover': { bgcolor: 'black' }
            }}
          >
            Contact Our Team
          </Button>
        </Container>
      </Box>

      {/* --- DIALOG --- */}
      <Dialog
        open={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: '24px', p: 2 }
        }}
      >
        <DialogTitle>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>Start Organizing</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 0.5 }}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Event Type</InputLabel>
                <Select label="Event Type" value={contactForm.eventType} onChange={(e) => setContactForm({ ...contactForm, eventType: e.target.value })}>
                  {eventTypes.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={4} label="Tell us about your event" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setContactDialogOpen(false)} sx={{ color: 'var(--gray-500)' }}>Cancel</Button>
          <Button variant="contained" sx={{ bgcolor: 'var(--uinsports-orange)', color: 'white', borderRadius: '50px', px: 4, '&:hover': { bgcolor: '#d95d22' } }}>Submit Request</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Organizers;