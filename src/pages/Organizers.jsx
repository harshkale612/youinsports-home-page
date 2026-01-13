import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Button,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tab,
  Tabs,
  Alert,
  LinearProgress,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  MdEvent as EventIcon,
  MdGroup as GroupIcon,
  MdAttachMoney as MoneyIcon,
  MdTrendingUp as TrendingIcon,
  MdStar as StarIcon,
  MdVerified as VerifiedIcon,
  MdCalendarToday as CalendarIcon,
  MdLocationOn as LocationIcon,
  MdPeople as PeopleIcon,
  MdEmojiEvents as TrophyIcon,
  MdBusiness as BusinessIcon,
  MdPhone as PhoneIcon,
  MdEmail as EmailIcon,
  MdWeb as WebIcon,
  MdShare as ShareIcon,
  MdFavorite as FavoriteIcon,
  MdExpandMore as ExpandMoreIcon,
  MdCheckCircle as CheckIcon,
  MdPlayArrow as PlayIcon,
  MdClose as CloseIcon,
  MdAdd as AddIcon,
  MdEdit as EditIcon,
  MdAnalytics as AnalyticsIcon,
  MdCampaign as CampaignIcon,
  MdSupportAgent as SupportIcon,
  MdAssessment as AssessmentIcon,
  MdPublic as PublicIcon,
  MdSchool as SchoolIcon,
  MdSports as SportsIcon,
  MdTimeline as TimelineIcon,
  MdContactMail as ContactIcon,
  MdInfo as InfoIcon,
  MdArrowForward as ArrowForwardIcon
} from 'react-icons/md';
import { styled } from '@mui/material/styles';

// Custom styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0C3042 0%, #418BCA 100%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  border: '2px solid transparent',
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[8]
  }
}));

const ProcessStep = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.grey[50],
  border: `2px solid ${theme.palette.primary.light}`,
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  }
}));

const StatsCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}15)`,
  border: `1px solid ${theme.palette.primary.light}30`
}));

// Mock data
const organizerBenefits = [
  {
    icon: <EventIcon />,
    title: "Event Management Tools",
    description: "Comprehensive platform to plan, organize, and execute successful sports events with ease.",
    features: ["Event Registration", "Participant Management", "Schedule Builder", "Results Tracking"]
  },
  {
    icon: <MoneyIcon />,
    title: "Sponsorship Network",
    description: "Connect with verified sponsors looking to support sports events and athletes.",
    features: ["Sponsor Matching", "Proposal Templates", "Contract Management", "Payment Processing"]
  },
  {
    icon: <GroupIcon />,
    title: "Athlete Community",
    description: "Access to our network of verified athletes across various sports disciplines.",
    features: ["Athlete Database", "Skill Matching", "Recruitment Tools", "Performance Tracking"]
  },
  {
    icon: <AnalyticsIcon />,
    title: "Analytics & Insights",
    description: "Detailed analytics to measure event success and participant engagement.",
    features: ["Performance Metrics", "Engagement Analytics", "ROI Tracking", "Custom Reports"]
  },
  {
    icon: <CampaignIcon />,
    title: "Marketing Support",
    description: "Promotional tools and resources to increase event visibility and attendance.",
    features: ["Social Media Tools", "Email Campaigns", "Press Release Templates", "Media Kit"]
  },
  {
    icon: <SupportIcon />,
    title: "24/7 Support",
    description: "Dedicated support team to help you succeed with your sports events.",
    features: ["Live Chat Support", "Phone Support", "Email Support", "Training Resources"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Register as Organizer",
    description: "Create your organizer profile with organization details and past event experience.",
    details: "Complete your profile verification and showcase your event management expertise."
  },
  {
    step: 2,
    title: "Plan Your Event",
    description: "Use our planning tools to define event details, budget, and sponsorship requirements.",
    details: "Set up event registration, create schedules, and identify sponsorship opportunities."
  },
  {
    step: 3,
    title: "Connect with Sponsors",
    description: "Browse potential sponsors or let them discover your event through our matching system.",
    details: "Send proposals, negotiate terms, and secure sponsorship deals for your event."
  },
  {
    step: 4,
    title: "Promote & Execute",
    description: "Use promotional tools to attract participants and run a successful event.",
    details: "Launch marketing campaigns, manage registrations, and execute your event flawlessly."
  }
];

// const testimonials = [
//   {
//     name: "Michael Rodriguez",
//     organization: "City Basketball League",
//     image: "/placeholder-user.jpg",
//     rating: 5,
//     text: "You In Sportstransformed how we organize our annual basketball tournament. We increased participation by 40% and secured two major sponsors that covered our entire event budget.",
//     event: "Annual Basketball Tournament",
//     results: "40% increase in participation, $50K in sponsorships"
//   },
//   {
//     name: "Sarah Chen",
//     organization: "Youth Soccer Association",
//     image: "/placeholder-user.jpg",
//     rating: 5,
//     text: "The platform's tools made everything from registration to promotion seamless. Our youth soccer tournament was the most successful one we've ever organized.",
//     event: "Youth Soccer Championship",
//     results: "300+ participants, 15 sponsors secured"
//   },
//   {
//     name: "David Park",
//     organization: "Track & Field Club",
//     image: "/placeholder-user.jpg",
//     rating: 5,
//     text: "The analytics and insights helped us understand participant engagement better than ever. We're planning three more events this year using You In Sports.",
//     event: "Regional Track Meet",
//     results: "85% participant satisfaction, 200+ athletes"
//   }
// ];

// const pricingPlans = [
//   {
//     name: "Starter",
//     price: "Free",
//     description: "Perfect for small events and new organizers",
//     features: [
//       "Up to 50 participants",
//       "Basic event management",
//       "Email support",
//       "Standard templates"
//     ],
//     popular: false
//   },
//   {
//     name: "Professional",
//     price: "$99/month",
//     description: "Ideal for regular event organizers",
//     features: [
//       "Up to 500 participants",
//       "Advanced analytics",
//       "Sponsor matching",
//       "Priority support",
//       "Custom branding"
//     ],
//     popular: true
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     description: "For large organizations and major events",
//     features: [
//       "Unlimited participants",
//       "White-label solution",
//       "Dedicated account manager",
//       "Custom integrations",
//       "24/7 phone support"
//     ],
//     popular: false
//   }
// ];

const Organizers = () => {
  const [tabValue, setTabValue] = useState(0);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: '',
    message: ''
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleContactSubmit = () => {
    // Mock form submission
    console.log('Contact form submitted:', contactForm);
    setContactDialogOpen(false);
    setContactForm({
      name: '',
      email: '',
      organization: '',
      eventType: '',
      message: ''
    });
  };

  const eventTypes = [
    'Basketball Tournament',
    'Soccer League',
    'Track & Field Meet',
    'Swimming Competition',
    'Tennis Tournament',
    'Volleyball League',
    'Other'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection className="hero-grid-overlay">
        <Container maxWidth="lg" className="floating-animation">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Organize Events, <span style={{ color: '#FFD700' }}>Get Sponsored</span>
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            You In Sportsprovides event organizers with the tools and connections to create successful sports events and secure valuable sponsorships.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              size="large"
              startIcon={<ContactIcon />}
              onClick={() => setContactDialogOpen(true)}
              sx={{
                color: 'white',
                backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                '&:hover': {
                  backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                },
              }}
            >
              Contact Us to Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              View Success Stories
            </Button>
          </Box>
        </Container>
      </HeroSection>

      {/* Quick Stats */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                500+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Events Organized
              </Typography>
            </StatsCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                $2.5M+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sponsorship Secured
              </Typography>
            </StatsCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                10K+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Participants Reached
              </Typography>
            </StatsCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                98%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Success Rate
              </Typography>
            </StatsCard>
          </Grid>
        </Grid>

        {/* Main Content Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Features" />
            <Tab label="How It Works" />
            {/* <Tab label="Success Stories" /> */}
            {/* <Tab label="Pricing" /> */}
          </Tabs>
        </Paper>

        {/* Features Tab */}
        {tabValue === 0 && (
          <Box>
            <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 4 }}>
              Why Choose <span style={{ color: '#667eea' }}>You In Sports</span>
            </Typography>
            <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
              Discover how our platform can transform your sports events and help you secure valuable sponsorships.
            </Typography>

            <Grid container spacing={4}>
              {organizerBenefits.map((benefit, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <FeatureCard>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                          {benefit.icon}
                        </Avatar>
                        <Typography variant="h6" component="h3">
                          {benefit.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {benefit.description}
                      </Typography>
                      <List dense>
                        {benefit.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* How It Works Tab */}
        {tabValue === 1 && (
          <Box>
            <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
              How It <span style={{ color: '#667eea' }}>Works</span>
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Box sx={{ mb: 4 }}>
                  {processSteps.map((step, index) => (
                    <ProcessStep key={index}>
                      <Avatar sx={{ bgcolor: 'primary.main', mr: 3, width: 48, height: 48 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          {step.step}
                        </Typography>
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {step.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mb: 1 }}>
                          {step.description}
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                          {step.details}
                        </Typography>
                      </Box>
                      {index < processSteps.length - 1 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                          <ArrowForwardIcon color="action" />
                        </Box>
                      )}
                    </ProcessStep>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ p: 3, height: 'fit-content' }}>
                  <Typography variant="h6" gutterBottom>
                    Get Started Today
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Ready to organize your next successful sports event? Contact our team to get started.
                  </Typography>
                  <Button
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                      '&:hover': {
                        backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                      },
                    }}
                    fullWidth
                    startIcon={<ContactIcon />}
                    onClick={() => setContactDialogOpen(true)}
                  >
                    Contact Us
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Success Stories Tab */}
        {/* {tabValue === 2 && (
          <Box>
            <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
              What Organizers <span style={{ color: '#667eea' }}>Say</span>
            </Typography>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ height: '100%' }} className="clean-hover-lift">
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar src={testimonial.image} sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.organization}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', mb: 2 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} color="warning" fontSize="small" />
                        ))}
                      </Box>

                      <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
                        "{testimonial.text}"
                      </Typography>

                      <Divider sx={{ my: 2 }} />

                      <Box>
                        <Typography variant="subtitle2" gutterBottom>
                          Event: {testimonial.event}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Results: {testimonial.results}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )} */}

        {/* Pricing Tab */}
        {/* {tabValue === 3 && (
          <Box>
            <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
              Choose Your <span style={{ color: '#667eea' }}>Plan</span>
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {pricingPlans.map((plan, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      position: 'relative',
                      border: plan.popular ? '2px solid #667eea' : '1px solid #e0e0e0',
                      transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s ease-in-out'
                    }}
                    className="clean-hover-lift"
                  >
                    {plan.popular && (
                      <Chip
                        label="Most Popular"
                        color="primary"
                        sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)' }}
                      />
                    )}

                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {plan.name}
                      </Typography>
                      <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {plan.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {plan.description}
                      </Typography>

                      <List>
                        {plan.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>

                      <Button
                        variant={plan.popular ? 'contained' : 'outlined'}
                        fullWidth
                        sx={{ mt: 3 }}
                        onClick={() => setContactDialogOpen(true)}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )} */}

        {/* FAQ Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 4 }}>
            Frequently Asked <span style={{ color: '#667eea' }}>Questions</span>
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">How do I get started as an organizer?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Simply contact our team through the form above or call us directly. We'll set up your account and guide you through the process of creating your first event.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">What types of sports events can I organize?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We support all types of sports events including tournaments, leagues, competitions, and training camps across various sports disciplines.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item xs={12} md={6}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">How does the sponsorship matching work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Our AI-powered system matches your event with relevant sponsors based on sport type, audience demographics, and sponsor preferences.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">What support do you provide?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We provide 24/7 support through chat, email, and phone, along with training resources and dedicated account managers for enterprise clients.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Paper
          elevation={3}
          sx={{
            p: 6,
            mt: 6,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea15, #764ba215)'
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Organize Your Next Event?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Contact our team to discuss how You In Sportscan help you organize successful sports events and connect with the right sponsors.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              size="large"
              startIcon={<ContactIcon />}
              onClick={() => setContactDialogOpen(true)}
              sx={{
                color: 'white',
                backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                '&:hover': {
                  backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                },
              }}
            >
              Contact Us Today
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Contact Dialog */}
      <Dialog
        open={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <ContactIcon color="rgba(46, 150, 255, 0.976)" />
            <Typography variant="h6">Get Started with You In Sports</Typography>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Organization"
                value={contactForm.organization}
                onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Event Type</InputLabel>
                <Select
                  value={contactForm.eventType}
                  onChange={(e) => setContactForm({ ...contactForm, eventType: e.target.value })}
                  label="Event Type"
                >
                  {eventTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Tell us about your event"
                placeholder="Describe your event, expected participants, and any specific requirements..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button
          sx={{
                color: 'white',
                backgroundColor: 'rgba(46, 150, 255, 0.976)',
                '&:hover': {
                  backgroundColor: 'rgba(46, 150, 255, 0.976)',
                },
              }}
          onClick={() => setContactDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            sx={{
                color: 'white',
                backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                '&:hover': {
                  backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                },
              }}
            onClick={handleContactSubmit}
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Organizers;