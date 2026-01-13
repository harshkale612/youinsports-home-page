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
} from '@mui/material';
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
} from 'react-icons/md';
import { MdElectricBolt as ElectricBoltIcon } from 'react-icons/md';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { fetchAthletes } from '../lib/api';
import SeoSchema from '../components/SeoSchema';
import { FaRobot } from 'react-icons/fa6';
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

// const totalUsers = communityStats.reduce((sum, sport) => sum + sport.value, 0);
const totalUsers = 10000;

const Home = () => {
  const [featuredAthletes, setFeaturedAthletes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dailyJoins, setDailyJoins] = useState(127);

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

    // Simulate real-time daily joins counter
    const interval = setInterval(() => {
      setDailyJoins((prev) => prev + Math.floor(Math.random() * 3));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <SeoSchema type="WebSite" />

      {/* Clean Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0C3042 0%, #418BCA 100%)',
          color: 'white',
          overflow: 'hidden',
        }}
        className="hero-grid-overlay"
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                <Box sx={{ mb: 4 }} className="floating-animation">
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
                    Every Athlete Matters
                  </Box>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '3rem', md: '4rem', lg: '4rem' },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      mb: 3,
                    }}
                  >
                    Your Sports Journey,
                    <Box component="span" sx={{ display: 'block', color: '#fde047' }}>
                      But Make It Epic!
                    </Box>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      maxWidth: '600px',
                      mb: 4,
                      mx: { xs: 'auto', lg: 0 },
                    }}
                  >
                    The first platform to create your sports CV, manage your athletic journey, and connect with a
                    supportive community at any level. No cap!
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    justifyContent: { xs: 'center', lg: 'flex-start' },
                    mb: 4,
                  }}
                  className="transition-base"
                >
                  <Button
                    size="large"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      px: 3,
                      py: 1.5,
                      borderRadius: '8px',
                      backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 150, 255, 0.976)',
                      },
                    }}
                  >
                    <Rocket style={{ marginRight: 5 }} />
                    Let's Get Started!
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    justifyContent: { xs: 'center', lg: 'flex-start' },
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      textAlign: 'center',
                      p: 2,
                    }}
                    className="clean-hover-lift"
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'white' }}>
                      {totalUsers.toLocaleString()}+
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                      Athletes
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      textAlign: 'center',
                      p: 2,
                    }}
                    className="clean-hover-lift"
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'white' }}>
                      50+
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                      Sports
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      textAlign: 'center',
                      p: 2,
                    }}
                    className="clean-hover-lift"
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'white' }}>
                      $2M+
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                      Raised
                    </Typography>
                  </Card>
                </Box>
              </Box>
            </Grid>

            {/* Community Stats Chart */}
            <Grid item xs={12} lg={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    width: '100%',
                    marginTop: "20px",
                    maxWidth: '500px',
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    marginBottom: "20px",
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: '#0C3042',
                          }}
                        >
                          {totalUsers.toLocaleString()}+ Athletes
                        </Typography>
                        <Box
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
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
                          <TrendingUp sx={{ fontSize: '12px', mr: 0.5 }} />
                          Trending
                        </Box>
                      </Box>
                      <Typography sx={{ color: '#6b7280' }}>
                        <Box component="span" sx={{ fontWeight: 700, color: '#F26A27', fontSize: '1.25rem' }}>
                          {dailyJoins}
                        </Box>{' '}
                        joined today!
                      </Typography>
                    </Box>

                    <Box sx={{ height: '300px', mb: 3 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={communityStats}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={130}
                            paddingAngle={3}
                            dataKey="value"
                          >
                            {communityStats.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                  <Card sx={{ p: 2, boxShadow: 2 }}>
                                    <Typography sx={{ fontWeight: 700, color: '#0C3042' }}>
                                      {data.name}
                                    </Typography>
                                    <Typography sx={{ color: '#6b7280' }}>
                                      {data.value.toLocaleString()} athletes ({data.percentage}%)
                                    </Typography>
                                  </Card>
                                );
                              }
                              return null;
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>

                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography
                        sx={{
                          background: 'linear-gradient(135deg, #F26A27, #418BCA)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Join the World's Most Vibrant Sports Community!
                      </Typography>
                      <Typography sx={{ color: '#6b7280' }}>
                        Connect with athletes from every sport, everywhere
                      </Typography>
                    </Box>

                    {/* Top Sports List */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {communityStats.slice(0, 4).map((sport) => (
                        <Box
                          key={sport.name}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '14px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            p: 1.5,
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-1px)',
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box
                              sx={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                backgroundColor: sport.color,
                              }}
                            />
                            <Typography sx={{ fontWeight: 600, color: '#0C3042' }}>
                              {sport.name}
                            </Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 700, color: '#0C3042' }}>
                            {sport.value.toLocaleString()}
                          </Typography>
                        </Box>
                      ))}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '14px',
                          pt: 1,
                          borderTop: '1px solid #e5e7eb',
                        }}
                      >
                        <Typography sx={{ fontWeight: 600, color: '#0C3042' }}>
                          + 50 more sports
                        </Typography>
                        <Link
                          to="/community"
                          style={{
                            color: '#418BCA',
                            textDecoration: 'none',
                            fontWeight: 600,
                          }}
                        >
                          Explore All →
                        </Link>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 3,
                py: 1,
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'rgba(242, 106, 39, 0.1)',
                color: '#F26A27',
                border: '1px solid rgba(242, 106, 39, 0.2)',
                mb: 2,
              }}
            >
              Why You In Sports Hits Different
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#0C3042',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Everything You Need to{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Level Up</Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '768px',
                mx: 'auto',
                fontSize: '1.125rem',
              }}
            >
              Our platform provides all the tools and connections you need to take your athletic career to the next
              level
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

      {/* AI Features Highlight Section */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(to right, rgba(65, 139, 202, 0.1), rgba(242, 106, 39, 0.1))',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 3,
                py: 1,
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'rgba(242, 106, 39, 0.1)',
                color: '#F26A27',
                border: '1px solid rgba(242, 106, 39, 0.2)',
                mb: 2,
              }}
            >
              Coming Soon
            </Box>
            {/* <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(to right, #418BCA, #F26A27)',
                mb: 3,
              }}
            >
              <FaRobot style={{ color: 'white', fontSize: '30px' }} />
            </Box> */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#0C3042',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              AI-Powered <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Performance Analysis</Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '768px',
                mx: 'auto',
                mb: 4,
                fontSize: '1.125rem',
              }}
            >
              Upload your training videos and get instant AI analysis of your technique. Our advanced computer vision
              identifies areas for improvement and provides personalized recommendations.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <Link
                // to="/video-analysis" 
                style={{ textDecoration: 'none' }}>
                <Button
                  size="large"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: '8px',
                    backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 150, 255, 0.976)',
                      },
                  }}
                >
                  <VideoLibrary style={{ marginRight: 5 }} />
                  Try AI Video Analysis
                </Button>
              </Link>
              <Link
                // to="/ai-agents" 
                style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: '#418BCA',
                    color: '#418BCA',
                    backgroundColor: 'transparent',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: '8px',
                    '&:hover': {
                      borderColor: '#418BCA',
                      backgroundColor: 'rgba(65, 139, 202, 0.04)',
                    },
                  }}
                >
                  <AutoAwesome style={{ marginRight: 5 }} />
                  Explore AI Agents
                </Button>
              </Link>
            </Box>
          </Box>

          <Grid container spacing={4} sx={{ maxWidth: '1280px', mx: 'auto' }}>
            <Grid item xs={10} md={4}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '64px',
                    height: '64px',
                    mx: 'auto',
                    mb: 3,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(65, 139, 202, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FiTarget style={{ color: '#418BCA', fontSize: '32px' }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: '#0C3042',
                    mb: 2,
                  }}
                >
                  Technique Analysis
                </Typography>
                <Typography sx={{ color: '#6b7280' }}>
                  AI analyzes your form, mechanics, and execution with frame-by-frame precision to identify improvement
                  areas.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={10} md={4}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '64px',
                    height: '64px',
                    mx: 'auto',
                    mb: 3,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(242, 106, 39, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TrendingUp style={{ color: '#F26A27', fontSize: '32px' }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: '#0C3042',
                    mb: 2,
                  }}
                >
                  Performance Insights
                </Typography>
                <Typography sx={{ color: '#6b7280' }}>
                  Get detailed feedback on timing, positioning, and overall performance metrics with confidence scores.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={10} md={4}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '64px',
                    height: '64px',
                    mx: 'auto',
                    mb: 3,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(12, 48, 66, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ElectricBoltIcon style={{ color: '#0C3042', fontSize: '32px' }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: '#0C3042',
                    mb: 2,
                  }}
                >
                  Instant Results
                </Typography>
                <Typography sx={{ color: '#6b7280' }}>
                  Upload your video and receive comprehensive analysis within minutes, not hours or days.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 3,
                py: 1,
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'rgba(242, 106, 39, 0.1)',
                color: '#F26A27',
                border: '1px solid rgba(242, 106, 39, 0.2)',
                mb: 2,
              }}
            >
              Simple Process
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#0C3042',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              How <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>You In Sports</Box> Works
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '768px',
                mx: 'auto',
                fontSize: '1.125rem',
              }}
            >
              Get started in minutes and begin building your athletic network today
            </Typography>
          </Box>

          <Box sx={{ maxWidth: '1280px', mx: 'auto' }}>
            <Grid container spacing={8}>
              {[
                {
                  number: 1,
                  title: 'Create Your Profile',
                  description: 'Sign up and build your professional sports CV with achievements, stats, and media in minutes.',
                  color: '#F26A27',
                },
                {
                  number: 2,
                  title: 'Connect & Network',
                  description: 'Join communities, connect with coaches and sponsors, and build your professional network.',
                  color: '#418BCA',
                },
                {
                  number: 3,
                  title: 'Achieve Your Goals',
                  description: 'Get discovered, receive support, and take your athletic career to new heights.',
                  color: '#0C3042',
                },
              ].map((step, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ position: 'relative', mb: 4 }}>
                      <Box
                        sx={{
                          width: '80px',
                          height: '80px',
                          mx: 'auto',
                          borderRadius: '50%',
                          backgroundColor: step.color,
                          color: 'white',
                          fontSize: '24px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        {step.number}
                      </Box>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: '#0C3042',
                        mb: 2,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: '#6b7280' }}>
                      {step.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Success Stories Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#0C3042', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Box>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 3,
                    py: 1,
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 500,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    mb: 2,
                  }}
                >
                  Success Stories
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Real Athletes, <Box component="span" sx={{ color: '#F26A27' }}>Real Results</Box>
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 4,
                    fontSize: '1.125rem',
                  }}
                >
                  "You In Sports connected me with a sponsor who funded my journey to the national championships. Without
                  this platform, I wouldn't have had the opportunity to compete at this level and achieve my dreams.
                  This app is literally life-changing!"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <Box
                    sx={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#F26A27',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: 'white', fontWeight: 700 }}>
                      SJ
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: 'white' }}>
                      Sarah Johnson
                    </Typography>
                    <Typography sx={{ color: '#F26A27', fontWeight: 500 }}>
                      Track & Field Athlete
                    </Typography>
                  </Box>
                </Box>

                <Grid container spacing={3}>
                  {[
                    { value: '500+', label: 'Success Stories' },
                    { value: '$2M+', label: 'Funds Raised' },
                    { value: '78%', label: 'Goal Achievement' },
                  ].map((stat, index) => (
                    <Grid item xs={4} key={index}>
                      <Card
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          textAlign: 'center',
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: '#F26A27',
                            mb: 1,
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                          {stat.label}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mt: 4 }}>
                  <Button
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      px: 3,
                      py: 1.5,
                      borderRadius: '8px',
                      backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 150, 255, 0.976)',
                      },
                    }}
                  >
                    Read More Stories
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '500px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <Box
                    component="img"
                    src="/placeholder.svg?height=500&width=600&text=Success+Story"
                    alt="Success story"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 24,
                      left: 24,
                      right: 24,
                    }}
                  >
                    <Card
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        p: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircle sx={{ color: '#10b981', fontSize: '24px' }} />
                        <Typography sx={{ color: 'white', fontWeight: 700 }}>
                          Funding Goal Achieved!
                        </Typography>
                      </Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>
                        Sarah raised $15,000 for her training and competition expenses
                      </Typography>
                    </Card>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '1024px', mx: 'auto' }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 3,
                py: 1,
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'rgba(242, 106, 39, 0.1)',
                color: '#F26A27',
                border: '1px solid rgba(242, 106, 39, 0.2)',
                mb: 3,
              }}
            >
              Ready to Get Started?
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#0C3042',
                mb: 4,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Your Athletic Journey
              <Box component="span" sx={{ display: 'block', background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Starts Here!
              </Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                mb: 6,
                maxWidth: '512px',
                mx: 'auto',
                fontSize: '1.125rem',
              }}
            >
              Join thousands of athletes who are taking control of their sports careers with You In Sports. Create your
              profile, build your network, and achieve your dreams.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
                justifyContent: 'center',
                mb: 6,
              }}
            >
              <Button
                size="large"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  px: 3,
                  py: 1.5,
                  borderRadius: '8px',
                  backgroundColor: '#F26A27',
                  '&:hover': {
                    backgroundColor: 'rgba(242, 106, 39, 0.9)',
                  },
                }}
              >
                <GpsFixed style={{ marginRight: 10 }} />
                Create Your Profile
              </Button>
              <Button
                size="large"
                sx={{
                  backgroundColor: '#418BCA',
                  color: 'white',
                  fontWeight: 600,
                  px: 3,
                  py: 1.5,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'rgba(65, 139, 202, 0.9)',
                  },
                }}
              >
                <Favorite style={{ marginRight: 10 }} />
                Support Athletes
              </Button>
              <Button
                size="large"
                sx={{
                  borderColor: '#418BCA',
                  // color: '#418BCA',
                  backgroundColor: 'rgba(46, 150, 255, 0.976)',
                  fontWeight: 600,
                  px: 3,
                  py: 1.5,
                  borderRadius: '8px',
                  '&:hover': {
                    borderColor: '#418BCA',
                    color: "white",
                    backgroundColor: 'rgba(46, 150, 255, 0.976)',
                  },
                }}
              >
                View Plans
              </Button>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              {[
                { value: `${totalUsers.toLocaleString()}+`, label: 'Active Athletes' },
                { value: '50+', label: 'Sports Covered' },
                { value: '4+', label: 'Countries' },
              ].map((stat, index) => (
                <Card
                  key={index}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    p: 2,
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#0C3042',
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography sx={{ color: '#6b7280', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
