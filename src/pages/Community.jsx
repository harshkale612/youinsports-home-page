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
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Avatar,
} from '@mui/material';
import {
  MdSearch as Search,
  MdPeople as People,
  MdAutoAwesome as AutoAwesome,
  MdSmartToy as SmartToy,
  MdVideoLibrary as VideoLibrary,
  MdStar as Star,
  MdTrendingUp as TrendingUp,
} from 'react-icons/md';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { fetchAthletes, fetchCommunities } from '../lib/api';
import SeoSchema from '../components/SeoSchema';
import { FaRobot } from 'react-icons/fa6';

const Community = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  // const [searchQuery, setSearchQuery] = useState('');
  const [athletes, setAthletes] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);

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

  // const filteredAthletes = athletes.filter((athlete) => {
  //   const matchesSport = selectedSport ? athlete.sport === selectedSport : true;
  //   const matchesGender = selectedGender ? athlete.gender === selectedGender : true;
  //   const matchesSearch =
  //     athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     athlete.location.toLowerCase().includes(searchQuery.toLowerCase());
  //   return matchesSport && matchesGender && matchesSearch;
  // });

  const handleSportClick = (entry) => {
    setSelectedSport(entry.name === 'Others' ? null : entry.name);
  };

  const handleGenderClick = (entry) => {
    setSelectedGender(entry.name);
  };

  // const clearFilters = () => {
  //   setSelectedSport(null);
  //   setSelectedGender(null);
  //   setSearchQuery('');
  // };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <SeoSchema
        type="WebPage"
        name="UinSports Community"
        description="Explore our diverse sports communities and connect with athletes from around the world"
        url="https://uinsports.com/community"
      />

      {/* Community Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #0C3042 0%, #418BCA 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }} className="floating-animation">
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
              <People style={{ marginRight: 5, fontSize: '16px' }} />
              Find Your Tribe
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
              Sports <Box component="span" sx={{ color: '#fde047' }}>Communities</Box>
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1.125rem',
              }}
            >
              Explore our diverse sports communities and connect with athletes from around the world. It's giving
              global squad energy!
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* AI Features Highlight */}
      {/* <Box sx={{ py: 4, background: 'linear-gradient(to right, rgba(65, 139, 202, 0.1), rgba(242, 106, 39, 0.1))' }}>
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              maxWidth: '1024px',
              mx: 'auto',
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, #418BCA, #F26A27)',
                    mb: 2,
                  }}
                >
                  <FaRobot style={{ color: 'white', fontSize: '30px' }}/>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: '#0C3042',
                    mb: 1,
                  }}
                >
                  AI-Powered <Box component="span" sx={{ color: '#418BCA' }}>Training Tools</Box>
                </Typography>
                <Typography sx={{ color: '#6b7280', mb: 3 }}>
                  Enhance your training with our AI-powered video analysis and personalized coaching agents.
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Link to="/video-analysis" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#F26A27',
                        color: 'white',
                        width: '100%',
                        height: 'auto',
                        p: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(242, 106, 39, 0.9)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <VideoLibrary sx={{ fontSize: '20px' }} />
                        <Box sx={{ textAlign: 'left' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>
                            Video Analysis
                          </Typography>
                          <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                            AI-powered technique analysis
                          </Typography>
                        </Box>
                      </Box>
                    </Button>
                  </Link>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Link to="/ai-agents" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: '#418BCA',
                        color: '#418BCA',
                        backgroundColor: 'transparent',
                        width: '100%',
                        height: 'auto',
                        p: 2,
                        '&:hover': {
                          borderColor: '#418BCA',
                          backgroundColor: 'rgba(65, 139, 202, 0.04)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <AutoAwesome sx={{ fontSize: '20px' }} />
                        <Box sx={{ textAlign: 'left' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>
                            AI Coaching
                          </Typography>
                          <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                            Personalized training plans
                          </Typography>
                        </Box>
                      </Box>
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box> */}

      {/* Community Charts Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              sx={{
                mb: 3,
                '& .MuiTabs-indicator': {
                  backgroundColor: tabValue === 0 ? '#418BCA' : '#F26A27',
                },
              }}
            >
              <Tab
                label="Sports Distribution"
                sx={{
                  color: tabValue === 0 ? '#418BCA' : '#6b7280',
                  fontWeight: 600,
                }}
              />
              <Tab
                label="Gender Distribution"
                sx={{
                  color: tabValue === 1 ? '#F26A27' : '#6b7280',
                  fontWeight: 600,
                }}
              />
            </Tabs>

            {tabValue === 0 && (
              <Card
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #F26A27, #418BCA)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        mb: 1,
                      }}
                    >
                      Sports Communities Distribution
                    </Typography>
                    <Typography sx={{ color: '#6b7280' }}>
                      Click on a segment to view athletes from that sport
                    </Typography>
                  </Box>

                  {loading ? (
                    <Box sx={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          width: '48px',
                          height: '48px',
                          border: '2px solid #418BCA',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite',
                        }}
                      />
                    </Box>
                  ) : (
                    <Box sx={{ height: '400px', width: '100%', maxWidth: '768px', mx: 'auto' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sportsData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            onClick={(_, index) => handleSportClick(sportsData[index])}
                          >
                            {sportsData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                                stroke={selectedSport === entry.name ? '#000' : 'none'}
                                strokeWidth={selectedSport === entry.name ? 2 : 0}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  )}
                </CardContent>
              </Card>
            )}

            {tabValue === 1 && (
              <Card
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #F26A27, #418BCA)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        mb: 1,
                      }}
                    >
                      Gender Distribution
                    </Typography>
                    <Typography sx={{ color: '#6b7280' }}>
                      Click on a segment to view athletes by gender
                    </Typography>
                  </Box>

                  {loading ? (
                    <Box sx={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          width: '48px',
                          height: '48px',
                          border: '2px solid #F26A27',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite',
                        }}
                      />
                    </Box>
                  ) : (
                    <Box sx={{ height: '400px', width: '100%', maxWidth: '768px', mx: 'auto' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={genderData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            onClick={(_, index) => handleGenderClick(genderData[index])}
                          >
                            {genderData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                                stroke={selectedGender === entry.name ? '#000' : 'none'}
                                strokeWidth={selectedGender === entry.name ? 2 : 0}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  )}
                </CardContent>
              </Card>
            )}
          </Box>
        </Container>
      </Box>

      {/* Athletes Grid Section */}
      {/* <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #F26A27, #418BCA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    mb: 1,
                  }}
                >
                  Athletes
                  {selectedSport && <Box component="span" sx={{ color: '#418BCA' }}> - {selectedSport}</Box>}
                  {selectedGender && <Box component="span" sx={{ color: '#F26A27' }}> - {selectedGender}</Box>}
                </Typography>
                <Typography sx={{ color: '#6b7280' }}>
                  {filteredAthletes.length} athletes found - that's a whole squad! 🙌
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', md: 'auto' } }}>
                <TextField
                  placeholder="Search athletes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    width: { xs: '100%', md: '300px' },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: '#9ca3af' }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  onClick={clearFilters}
                  variant="outlined"
                  sx={{
                    borderColor: '#418BCA',
                    color: '#418BCA',
                    fontWeight: 600,
                    px: 3,
                    borderRadius: '8px',
                    '&:hover': {
                      borderColor: '#418BCA',
                      backgroundColor: 'rgba(65, 139, 202, 0.04)',
                    },
                  }}
                >
                  Clear Filters
                </Button>
              </Box>
            </Box>
          </Box>

          {loading ? (
            <Grid container spacing={2}>
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    <Card
                      sx={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      <CardContent sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: '96px', height: '96px', backgroundColor: '#e5e7eb', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                          <Box sx={{ width: '96px', height: '20px', backgroundColor: '#e5e7eb', borderRadius: '4px', animation: 'pulse 2s infinite' }} />
                          <Box sx={{ width: '64px', height: '16px', backgroundColor: '#e5e7eb', borderRadius: '4px', animation: 'pulse 2s infinite' }} />
                          <Box sx={{ width: '80px', height: '16px', backgroundColor: '#e5e7eb', borderRadius: '4px', animation: 'pulse 2s infinite' }} />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          ) : (
            <Grid container spacing={2}>
              {filteredAthletes.map((athlete) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={athlete.id}>
                  <Card
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ position: 'relative' }}>
                          <Avatar
                            src={athlete.image || '/placeholder.svg'}
                            alt={athlete.name}
                            sx={{ width: 96, height: 96 }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              top: -4,
                              right: -4,
                              width: '24px',
                              height: '24px',
                              backgroundColor: '#F26A27',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Star sx={{ color: 'white', fontSize: '12px' }} />
                          </Box>
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: '#0C3042' }}>
                          {athlete.name}
                        </Typography>
                        <Box sx={{ textAlign: 'center', fontSize: '14px', color: '#6b7280' }}>
                          <Typography sx={{ color: '#418BCA', fontWeight: 600 }}>
                            {athlete.sport}
                          </Typography>
                          <Typography>
                            {athlete.gender}, {athlete.age} years
                          </Typography>
                          <Typography>{athlete.location}</Typography>
                        </Box>
                        <Link to={`/athletes/${athlete.id}`} style={{ textDecoration: 'none', width: '100%' }}>
                          <Button
                            size="small"
                            sx={{
                              backgroundColor: '#F26A27',
                              color: 'white',
                              width: '100%',
                              fontWeight: 600,
                              borderRadius: '8px',
                              '&:hover': {
                                backgroundColor: 'rgba(242, 106, 39, 0.9)',
                              },
                            }}
                          >
                            View Profile
                          </Button>
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box> */}

      {/* Community Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#0C3042', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Join Our <Box component="span" sx={{ color: '#F26A27' }}>Global Community</Box>
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '768px',
                mx: 'auto',
                fontSize: '1.125rem',
              }}
            >
              Connect with athletes, coaches, and sports enthusiasts from around the world. Share your journey, learn
              from others, and grow together.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: People,
                title: 'Connect & Network',
                description: 'Build meaningful relationships with athletes and coaches who share your passion for sports.',
                color: '#F26A27',
              },
              {
                icon: AutoAwesome,
                title: 'Share Your Journey',
                description: 'Document your progress, celebrate achievements, and inspire others with your athletic story.',
                color: '#F26A27',
              },
              {
                icon: SmartToy,
                title: 'AI-Powered Growth',
                description: 'Leverage cutting-edge AI tools for video analysis, training plans, and performance insights.',
                color: '#F26A27',
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: '64px',
                      height: '64px',
                      mx: 'auto',
                      mb: 3,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(242, 106, 39, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <feature.icon style={{ color: '#F26A27', fontSize: '32px' }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 8 }} className="floating-animation">
            <Link 
            // to="/signup" 
            style={{ textDecoration: 'none' }}>
              <Button
                size="large"
                sx={{
                  backgroundColor: '#F26A27',
                  color: 'white',
                  fontWeight: 600,
                  px: 3,
                  py: 1.5,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'rgba(242, 106, 39, 0.9)',
                  },
                }}
              >
                Join the Community
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Community;
