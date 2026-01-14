import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { MdCheck, MdStar, MdDiamond, MdFlashOn } from 'react-icons/md';
import { motion } from 'framer-motion';
import SeoSchema from '../components/SeoSchema';
import { Link } from 'react-router-dom';

const plans = [
  {
    title: 'Starter',
    price: 'Free',
    period: 'forever',
    icon: MdFlashOn,
    color: '#F26A27',
    features: ['Basic Athlete Profile', 'Join 1 Community', 'Limited Event Access', 'Community Support'],
    cta: 'Get Started',
    popular: false
  },
  {
    title: 'Pro Athlete',
    price: '$12',
    period: '/month',
    icon: MdStar,
    color: '#418BCA',
    features: ['Verified Badge', 'Advanced Analytics', 'Unlimited Community Access', 'Direct Messaging with Coaches', 'Priority Support'],
    cta: 'Go Pro',
    popular: true
  },
  {
    title: 'Organization',
    price: '$49',
    period: '/month',
    icon: MdDiamond,
    color: '#0C3042',
    features: ['Manage Multiple Events', 'Sponsor Matching', 'Advanced Team Analytics', 'Custom Branding', 'Dedicated Account Manager'],
    cta: 'Contact Sales',
    popular: false
  }
];

const Plans = () => {
  return (
    <Box sx={{ bgcolor: 'var(--gray-50)', minHeight: '100vh', pb: 10 }}>
      <SeoSchema
        type="WebPage"
        name="Plans & Pricing | You In Sports"
        description="Choose the perfect plan for your sports journey."
        url="https://youinsports.com/plans"
      />

      <Box sx={{ py: 10, bgcolor: 'var(--uinsports-navy)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)', width: '120%', height: '100%', opacity: 0.1, background: 'radial-gradient(circle at 50% 50%, #418BCA, transparent 70%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography className="text-display" sx={{ mb: 2, fontWeight: 800 }}>Invest in Your Game</Typography>
            <Typography sx={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: 600, mx: 'auto' }}>
              Unlock premium tools, analytics, and connections to take your sports career to the next level.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    border: plan.popular ? `2px solid ${plan.color}` : '1px solid var(--gray-200)',
                    boxShadow: plan.popular ? '0 20px 40px rgba(65, 139, 202, 0.15)' : '0 10px 20px rgba(0,0,0,0.05)',
                    transform: plan.popular ? 'scale(1.05)' : 'none',
                    bgcolor: 'white'
                  }}
                >
                  {plan.popular && (
                    <Chip
                      label="Most Popular"
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        bgcolor: plan.color,
                        color: 'white',
                        fontWeight: 700
                      }}
                    />
                  )}

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: '12px', bgcolor: `${plan.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <plan.icon size={28} color={plan.color} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'var(--gray-900)' }}>{plan.title}</Typography>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, display: 'inline-block' }}>{plan.price}</Typography>
                    <Typography sx={{ display: 'inline-block', color: 'var(--gray-500)', ml: 1, fontWeight: 500 }}>{plan.period}</Typography>
                  </Box>

                  <List sx={{ mb: 4 }}>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <MdCheck color={plan.color} />
                        </ListItemIcon>
                        <ListItemText primary={feature} primaryTypographyProps={{ fontSize: '0.95rem', color: 'var(--gray-700)' }} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    fullWidth
                    variant={plan.popular ? 'contained' : 'outlined'}
                    size="large"
                    component={Link}
                    to="/contact"
                    sx={{
                      py: 1.5,
                      borderRadius: '12px',
                      fontWeight: 700,
                      ...(plan.popular ? { bgcolor: plan.color, '&:hover': { bgcolor: plan.color } } : { color: 'var(--gray-900)', borderColor: 'var(--gray-300)' })
                    }}
                  >
                    {plan.cta}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Trusted by teams worldwide</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', opacity: 0.5 }}>
            {/* Mock logos */}
            {['SportCo', 'Athletix', 'WinMore', 'FitLife'].map(brand => (
              <Typography key={brand} variant="h4" sx={{ fontWeight: 800, color: 'var(--gray-400)' }}>{brand}</Typography>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default Plans;
