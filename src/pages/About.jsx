import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from '@mui/material';
import {
  MdAutoAwesome as AutoAwesome,
  MdPeople as People,
  MdEmojiEvents as EmojiEvents,
  MdGroups as Groups,
  MdGpsFixed as GpsFixed,
  MdRocket as Rocket,
} from 'react-icons/md';
import { MdElectricBolt as ElectricBoltIcon } from 'react-icons/md';
import SeoSchema from '../components/SeoSchema';
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { BsAward } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { GoZap } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { IoTrendingUp } from "react-icons/io5";

const iconsMap = {
    FaArrowsDownToPeople: FaArrowsDownToPeople,
    BsAward: BsAward,
    LuUsers: LuUsers,
    GoZap: GoZap,
    GoTrophy: GoTrophy,
    IoTrendingUp: IoTrendingUp,
}


const About = () => {
  return (
    <Box>
      <SeoSchema
        type="WebPage"
        name="About You In Sports"
        description="Learn about You In Sportsand our mission to support amateur athletes"
        url="https://You In Sports.com/about"
      />

      {/* About Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #0C3042 0%, #418BCA 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Box className="floating-animation">
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 3,
                    py: 1,
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 700,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    mb: 2,
                  }}
                >
                  <AutoAwesome style={{ marginRight: 5, fontSize: '16px' }} />
                  Our Story
                </Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '3rem', md: '4rem', lg: '5rem' },
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  About <Box component="span" sx={{ color: '#fde047' }}>You In Sports</Box>
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '600px',
                    fontSize: '1.125rem',
                  }}
                >
                  Bringing the power of networking to support amateur athletes at every stage of their journey. We're
                  here to make dreams happen!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="/placeholder.svg?height=400&width=600&text=Team+You In Sports"
                  alt="Team You In Sports"
                  sx={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Mission Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '768px', mx: 'auto' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#0C3042',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mission</Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                fontSize: '1.125rem',
                mb: 4,
              }}
            >
              Empowering amateur athletes through the power of networking and community support. No cap! 
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography sx={{ color: '#374151', lineHeight: 1.7, fontSize: '1.125rem' }}>
                At You In Sports, we believe that every athlete deserves the opportunity to reach their full potential,
                regardless of their background or resources. Our platform is designed to bridge the gap between amateur
                athletes and the support they need to succeed. It's giving main character energy! 
              </Typography>
              <Typography sx={{ color: '#374151', lineHeight: 1.7, fontSize: '1.125rem' }}>
                Through our innovative sports CV system, we provide athletes with a professional way to showcase their
                skills, achievements, and potential. This digital portfolio becomes their passport to opportunities,
                connecting them with coaches, sponsors, and supporters who can help them advance their careers. That's
                the glow-up we're talking about! 
              </Typography>
              <Typography sx={{ color: '#374151', lineHeight: 1.7, fontSize: '1.125rem' }}>
                We're more than just a platform we're a community of athletes, coaches, sponsors, and sports
                enthusiasts who share a passion for sports and a commitment to supporting athletic talent at all levels.
                We're all about that squad energy! 
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* How We Support Athletes Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#0C3042',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              How We <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Empower Athletes</Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '768px',
                mx: 'auto',
                fontSize: '1.125rem',
              }}
            >
              Our comprehensive approach to athlete development and support hits different! 
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ maxWidth: '1792px', mx: 'auto' }}>
                      {[
                        {
                          icon: 'FaArrowsDownToPeople',
                          title: 'Sports Networking',
                          description: 'Connect with coaches, sponsors, and fellow athletes worldwide. Build meaningful relationships that advance your career.',
                          color: '#418BCA',
                        },
                        {
                          icon: 'BsAward',
                          title: 'Professional Sports CV',
                          description: 'Create a stunning digital portfolio showcasing your achievements, skills, and potential.',
                          color: '#F26A27',
                        },
                        {
                          icon: 'LuUsers',
                          title: 'Community Support',
                          description: 'Join sport-specific communities where athletes share experiences, advice, and support each other\'s journeys.',
                          color: '#0C3042',
                        },
                        {
                          icon: 'GoZap',
                          title: 'Funding Platform',
                          description: 'Get financial support for coaching, travel, equipment, and more from your supporters and sponsors.',
                          color: '#F26A27',
                          badge: 'Coming Soon',
                        },
                        {
                          icon: 'GoTrophy',
                          title: 'Achievement Tracking',
                          description: 'Document and showcase your sports achievements, medals, and records in one comprehensive platform.',
                          color: '#418BCA',
                        },
                        {
                          icon: 'IoTrendingUp',
                          title: 'Performance Analytics',
                          description: 'Track your progress with detailed analytics and AI-powered insights for continuous improvement.',
                          color: '#0C3042',
                          badge: 'Coming Soon',
                        },
                      ].map((feature, index) => {
                        const IconComponent = iconsMap[feature.icon]
                        return (
                          <Grid item xs={10} md={6} lg={4} key={index}>
                            <Card
                              sx={{
                                backgroundColor: 'white',
                                border: '1px solid #e5e7eb',
                                borderRadius: '12px',
                                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                p: 3,
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'translateY(-4px)' },
                              }}
                            >
                              {feature.badge && (
                                <Box
                                  sx={{
                                    position: 'absolute',
                                    top: 16,
                                    right: 16,
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: '9999px',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    backgroundColor: 'rgba(242, 106, 39, 0.1)',
                                    color: '#F26A27',
                                    border: '1px solid rgba(242, 106, 39, 0.2)',
                                  }}
                                >
                                  {feature.badge}
                                </Box>
                              )}
          
                              <Box
                                sx={{
                                  width: '64px',
                                  height: '64px',
                                  mx: 'auto',
                                  mb: 3,
                                  borderRadius: '50%',
                                  backgroundColor: `${feature.color}1A`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <IconComponent style={{ color: feature.color, fontSize: '32px' }} />
                              </Box>
          
                              <Typography variant="h5" sx={{ fontWeight: 600, color: '#0C3042', mb: 2 }}>
                                {feature.title}
                              </Typography>
                              <Typography sx={{ color: '#6b7280' }}>
                                {feature.description}
                              </Typography>
                            </Card>
                          </Grid>
                        )
                      })}
          </Grid>
        </Container>
      </Box>

      {/* Our Impact Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#0C3042',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Impact</Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '768px',
                mx: 'auto',
                fontSize: '1.125rem',
              }}
            >
              How You In Sportsis changing the landscape for amateur athletes. The numbers don't lie!
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ maxWidth: '1280px', mx: 'auto', mb: 8 }}>
            {[
              { value: '5,000+', label: 'Athletes supported 🏃‍♀️' },
              { value: '$2M+', label: 'Funds raised for athletes 💰' },
              { value: '30+', label: 'Sports communities 🏆' },
              { value: '500+', label: 'Success stories 📖' },
            ].map((impact, index) => (
              <Grid item xs={10} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    p: 3,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #F26A27, #418BCA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      mb: 1,
                    }}
                  >
                    {impact.value}
                  </Typography>
                  <Typography sx={{ color: '#6b7280' }}>
                    {impact.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Card
            sx={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              p: 4,
              maxWidth: '768px',
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#374151',
                fontStyle: 'italic',
                fontSize: '1.125rem',
                mb: 2,
              }}
            >
              You In Sports has revolutionized how amateur athletes connect with opportunities and support. By bringing the
              power of networking to sports, we're helping athletes at all levels achieve their dreams. This platform is
              literally life-changing!
            </Typography>
            <Typography sx={{ fontWeight: 700, color: '#0C3042' }}>
              - Roshan Ingole, Founder & CEO
            </Typography>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
