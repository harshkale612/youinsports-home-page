import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Tabs,
  Tab,
  Grid,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
} from '@mui/material';
import {
  MdSmartToy as SmartToy,
  MdAutoAwesome as AutoAwesome,
  MdMessage as Message,
  MdGpsFixed as GpsFixed,
  MdPeople as People,
  MdEmojiEvents as EmojiEvents,
  MdElectricBolt as ElectricBoltIcon,
  MdSend as Send,
  MdMic as Mic,
  MdFileUpload as Upload,
  MdStar as Star,
  MdPlayArrow as PlayArrow,
} from 'react-icons/md';
import SeoSchema from '../components/SeoSchema';
import { MdCalendarMonth as CalendarMonthIcon } from 'react-icons/md';
import { FaRobot } from 'react-icons/fa';
const AIAgents = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [chatMessage, setChatMessage] = useState('');

  const agentTypes = [
    {
      id: 'player',
      name: 'Player AI Assistant',
      description: 'Personal AI coach for athletes to optimize performance, track progress, and get personalized training recommendations',
      icon: EmojiEvents,
      color: '#418BCA',
      features: [
        'Performance Analysis',
        'Training Optimization',
        'Nutrition Guidance',
        'Mental Coaching',
        'Injury Prevention',
        'Goal Setting',
      ],
      useCases: [
        'Analyze game footage for improvement areas',
        'Create personalized training schedules',
        'Track performance metrics and trends',
        'Provide motivational support and mental coaching',
      ],
    },
    {
      id: 'coach',
      name: 'Coach AI Assistant',
      description: 'Advanced AI tools for coaches to manage teams, analyze player performance, and develop winning strategies',
      icon: People,
      color: '#F26A27',
      features: [
        'Team Management',
        'Player Analytics',
        'Strategy Development',
        'Practice Planning',
        'Recruitment Insights',
        'Performance Tracking',
      ],
      useCases: [
        'Analyze team performance and identify weaknesses',
        'Create optimal lineups and rotations',
        'Develop game strategies based on opponent analysis',
        'Track individual player development',
      ],
    },
    {
      id: 'organizer',
      name: 'Organizer AI Assistant',
      description: 'Comprehensive AI platform for event organizers to create campaigns, manage events, and maximize engagement',
      icon: CalendarMonthIcon,
      color: '#418BCA',
      features: [
        'Event Planning',
        'Marketing Campaigns',
        'Social Media Management',
        'Sponsor Matching',
        'Audience Analytics',
        'Content Creation',
      ],
      useCases: [
        'Generate social media campaigns for events',
        'Match events with potential sponsors',
        'Create engaging promotional content',
        'Analyze event performance and ROI',
      ],
    },
  ];

  const aiCapabilities = [
    {
      icon: SmartToy,
      title: 'Advanced Analytics',
      description: 'Deep learning algorithms analyze performance data to provide actionable insights',
    },
    {
      icon: AutoAwesome,
      title: 'Content Generation',
      description: 'AI creates personalized content, training plans, and marketing materials',
    },
    {
      icon: GpsFixed,
      title: 'Predictive Modeling',
      description: 'Forecast performance trends and identify optimization opportunities',
    },
    {
      icon: ElectricBoltIcon,
      title: 'Real-time Insights',
      description: 'Instant analysis and recommendations during training and competitions',
    },
  ];

  const handleStartChat = (agentType) => {
    setSelectedAgent(agentType);
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  return (
    <Box>
      <SeoSchema
        type="WebPage"
        name="AI Agents - UinSports"
        description="Discover AI-powered assistants for players, coaches, and organizers to enhance sports performance and management"
        url="https://uinsports.com/ai-agents"
      />

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: 'linear-gradient(to bottom, rgba(65, 139, 202, 0.05), rgba(255, 255, 255, 1))',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(to right, #418BCA, #F26A27)',
                mb: 2,
              }}
            >
              <FaRobot sx={{ color: 'white', fontSize: '40px' }}/>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                mb: 2,
              }}
            >
              AI-Powered Sports <Box component="span" sx={{ color: '#418BCA' }}>Intelligence</Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.25rem',
                mb: 4,
              }}
            >
              Unlock your potential with personalized AI assistants designed for athletes, coaches, and organizers. Get
              intelligent insights, automated workflows, and data-driven recommendations.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
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
                <AutoAwesome sx={{ mr: 1 }} />
                Try AI Assistant
              </Button>
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
                <PlayArrow sx={{ mr: 1 }} />
                Watch Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* AI Capabilities */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Powered by Advanced AI
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '512px',
                mx: 'auto',
                fontSize: '1.125rem',
              }}
            >
              Our AI agents use cutting-edge machine learning and natural language processing to provide intelligent,
              personalized assistance for every aspect of sports.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {aiCapabilities.map((capability, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Card
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(65, 139, 202, 0.1)',
                        mb: 2,
                      }}
                    >
                      <capability.icon sx={{ color: '#418BCA', fontSize: '24px' }} />
                    </Box>
                    <Typography sx={{ fontWeight: 700, mb: 1 }}>
                      {capability.title}
                    </Typography>
                    <Typography sx={{ color: '#6b7280', fontSize: '14px' }}>
                      {capability.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            centered
            sx={{
              mb: 4,
              '& .MuiTabs-indicator': {
                backgroundColor: '#418BCA',
              },
            }}
          >
            <Tab label="Overview" />
            <Tab label="AI Agents" />
            <Tab label="Live Demo" />
            <Tab label="Pricing" />
          </Tabs>

          {/* Overview Tab */}
          {activeTab === 0 && (
            <Grid container spacing={6}>
              <Grid item xs={12} lg={8}>
                <Box sx={{ mb: 6 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    Choose Your AI Assistant
                  </Typography>
                  <Typography sx={{ color: '#6b7280', mb: 4 }}>
                    Select the AI agent that matches your role in sports. Each assistant is specifically trained to
                    understand your unique needs and challenges.
                  </Typography>
                </Box>

                <Grid container spacing={4}>
                  {agentTypes.map((agent) => (
                    <Grid item xs={12} md={6} key={agent.id}>
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
                        <CardHeader>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                p: 1.5,
                                borderRadius: '50%',
                                backgroundColor: `${agent.color}1A`,
                              }}
                            >
                              <agent.icon sx={{ color: agent.color, fontSize: '24px' }} />
                            </Box>
                            <Box>
                              <CardHeader sx={{ fontSize: '18px' }}>{agent.name}</CardHeader>
                            </Box>
                          </Box>
                        </CardHeader>
                        <CardContent>
                          <Typography sx={{ color: '#6b7280', mb: 3 }}>
                            {agent.description}
                          </Typography>
                          <Box sx={{ mb: 3 }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '14px', mb: 1 }}>
                              Key Features:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {agent.features.slice(0, 3).map((feature, index) => (
                                <Chip
                                  key={index}
                                  label={feature}
                                  variant="outlined"
                                  size="small"
                                  sx={{ fontSize: '12px' }}
                                />
                              ))}
                              {agent.features.length > 3 && (
                                <Chip
                                  label={`+${agent.features.length - 3} more`}
                                  variant="outlined"
                                  size="small"
                                  sx={{ fontSize: '12px' }}
                                />
                              )}
                            </Box>
                          </Box>
                          <Button
                            variant="contained"
                            fullWidth
                            sx={{
                              backgroundColor: '#F26A27',
                              color: 'white',
                              fontWeight: 600,
                              '&:hover': {
                                backgroundColor: 'rgba(242, 106, 39, 0.9)',
                              },
                            }}
                            onClick={() => handleStartChat(agent)}
                          >
                            <Message sx={{ mr: 1, fontSize: '16px' }} />
                            Start Conversation
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} lg={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Card
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <CardHeader>
                      <CardHeader>Success Stories</CardHeader>
                    </CardHeader>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box sx={{ p: 2, backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Star sx={{ color: '#fbbf24', fontSize: '16px' }} />
                            <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
                              Sarah M., Basketball Player
                            </Typography>
                          </Box>
                          <Typography sx={{ color: '#6b7280', fontSize: '14px' }}>
                            "The AI coach helped me improve my three-point percentage by 15% in just 2 months!"
                          </Typography>
                        </Box>
                        <Box sx={{ p: 2, backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Star sx={{ color: '#fbbf24', fontSize: '16px' }} />
                            <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
                              Coach Johnson
                            </Typography>
                          </Box>
                          <Typography sx={{ color: '#6b7280', fontSize: '14px' }}>
                            "AI analytics transformed how I develop game strategies. We won the championship!"
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <CardHeader>
                      <CardHeader>Quick Stats</CardHeader>
                    </CardHeader>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {[
                          { label: 'Active Users', value: '12,500+' },
                          { label: 'AI Interactions', value: '2.3M+' },
                          { label: 'Performance Improvement', value: '23% avg' },
                          { label: 'Satisfaction Rate', value: '96%' },
                        ].map((stat, index) => (
                          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '14px' }}>{stat.label}</Typography>
                            <Typography sx={{ fontWeight: 700 }}>{stat.value}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          )}

          {/* AI Agents Tab */}
          {activeTab === 1 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {agentTypes.map((agent) => (
                <Card
                  key={agent.id}
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <CardHeader>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: '50%',
                          backgroundColor: `${agent.color}1A`,
                        }}
                      >
                        <agent.icon sx={{ color: agent.color, fontSize: '32px' }} />
                      </Box>
                      <Box>
                        <CardHeader sx={{ fontSize: '20px' }}>{agent.name}</CardHeader>
                        <Typography sx={{ color: '#6b7280' }}>{agent.description}</Typography>
                      </Box>
                    </Box>
                  </CardHeader>
                  <CardContent>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 600, mb: 2 }}>
                          Features & Capabilities
                        </Typography>
                        <Grid container spacing={1}>
                          {agent.features.map((feature, index) => (
                            <Grid item xs={6} key={index}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '14px' }}>
                                <Box
                                  sx={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: '#418BCA',
                                  }}
                                />
                                <Typography sx={{ fontSize: '14px' }}>{feature}</Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 600, mb: 2 }}>
                          Use Cases
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          {agent.useCases.map((useCase, index) => (
                            <Typography key={index} sx={{ color: '#6b7280', fontSize: '14px' }}>
                              • {useCase}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#F26A27',
                          color: 'white',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: 'rgba(242, 106, 39, 0.9)',
                          },
                        }}
                        onClick={() => handleStartChat(agent)}
                      >
                        <Message sx={{ mr: 1, fontSize: '16px' }} />
                        Try {agent.name}
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: '#418BCA',
                          color: '#418BCA',
                          backgroundColor: 'transparent',
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: '#418BCA',
                            backgroundColor: 'rgba(65, 139, 202, 0.04)',
                          },
                        }}
                      >
                        <PlayArrow sx={{ mr: 1, fontSize: '16px' }} />
                        Watch Demo
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}

          {/* Live Demo Tab */}
          {activeTab === 2 && (
            <Box sx={{ maxWidth: '1024px', mx: 'auto' }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Try Our AI Assistant
                </Typography>
                <Typography sx={{ color: '#6b7280' }}>
                  Experience the power of AI-driven sports intelligence. Ask questions, get insights, and see how our
                  AI can help you achieve your goals.
                </Typography>
              </Box>

              {selectedAgent ? (
                <Card
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <CardHeader>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '50%',
                          backgroundColor: `${selectedAgent.color}1A`,
                        }}
                      >
                        <selectedAgent.icon sx={{ color: selectedAgent.color, fontSize: '24px' }} />
                      </Box>
                      <Box>
                        <CardHeader>{selectedAgent.name}</CardHeader>
                        <Typography sx={{ color: '#6b7280', fontSize: '14px' }}>
                          AI Assistant
                        </Typography>
                      </Box>
                      <Box sx={{ ml: 'auto' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box
                            sx={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#10b981',
                            }}
                          />
                          <Typography sx={{ fontSize: '12px', color: '#6b7280' }}>
                            Online
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardHeader>
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box
                        sx={{
                          height: '400px',
                          backgroundColor: '#f9fafb',
                          borderRadius: '8px',
                          p: 2,
                          overflowY: 'auto',
                        }}
                      >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Avatar
                              sx={{
                                width: '32px',
                                height: '32px',
                                backgroundColor: `${selectedAgent.color}1A`,
                              }}
                            >
                              <selectedAgent.icon sx={{ color: selectedAgent.color, fontSize: '16px' }} />
                            </Avatar>
                            <Box
                              sx={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                p: 2,
                                maxWidth: '80%',
                              }}
                            >
                              <Typography sx={{ fontSize: '14px' }}>
                                Hello! I'm your {selectedAgent.name.toLowerCase()}. I'm here to help you with
                                performance analysis, training optimization, and achieving your sports goals. What
                                would you like to know?
                              </Typography>
                            </Box>
                          </Box>

                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                            <Box
                              sx={{
                                backgroundColor: '#418BCA',
                                color: 'white',
                                borderRadius: '8px',
                                p: 2,
                                maxWidth: '80%',
                              }}
                            >
                              <Typography sx={{ fontSize: '14px' }}>
                                How can I improve my shooting accuracy in basketball?
                              </Typography>
                            </Box>
                          </Box>

                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Avatar
                              sx={{
                                width: '32px',
                                height: '32px',
                                backgroundColor: `${selectedAgent.color}1A`,
                              }}
                            >
                              <selectedAgent.icon sx={{ color: selectedAgent.color, fontSize: '16px' }} />
                            </Avatar>
                            <Box
                              sx={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                p: 2,
                                maxWidth: '80%',
                              }}
                            >
                              <Typography sx={{ fontSize: '14px' }}>
                                Great question! Here are some key areas to focus on for improving shooting accuracy:
                                <br />
                                <br />
                                1. <strong>Form and Mechanics</strong> - Consistent shooting form is crucial
                                <br />
                                2. <strong>Follow-through</strong> - Proper wrist snap and finger positioning
                                <br />
                                3. <strong>Practice Routine</strong> - Structured shooting drills
                                <br />
                                <br />
                                Would you like me to create a personalized shooting improvement plan for you?
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <TextField
                          fullWidth
                          placeholder="Type your message..."
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Box sx={{ display: 'flex', gap: 0.5 }}>
                                  <Button size="small" sx={{ minWidth: 'auto', p: 0.5 }}>
                                    <Mic sx={{ fontSize: '16px', color: '#9ca3af' }} />
                                  </Button>
                                  <Button size="small" sx={{ minWidth: 'auto', p: 0.5 }}>
                                    <Upload sx={{ fontSize: '16px', color: '#9ca3af' }} />
                                  </Button>
                                </Box>
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button
                          onClick={handleSendMessage}
                          variant="contained"
                          sx={{
                            backgroundColor: '#F26A27',
                            color: 'white',
                            minWidth: 'auto',
                            px: 2,
                            '&:hover': {
                              backgroundColor: 'rgba(242, 106, 39, 0.9)',
                            },
                          }}
                        >
                          <Send sx={{ fontSize: '16px' }} />
                        </Button>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {[
                          'Analyze my performance',
                          'Create training plan',
                          'Nutrition advice',
                          'Mental coaching',
                        ].map((action, index) => (
                          <Button
                            key={index}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: '#418BCA',
                              color: '#418BCA',
                              backgroundColor: 'transparent',
                              fontSize: '12px',
                              '&:hover': {
                                borderColor: '#418BCA',
                                backgroundColor: 'rgba(65, 139, 202, 0.04)',
                              },
                            }}
                          >
                            {action}
                          </Button>
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ) : (
                <Grid container spacing={3}>
                  {agentTypes.map((agent) => (
                    <Grid item xs={12} md={4} key={agent.id}>
                      <Card
                        sx={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '12px',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                          },
                        }}
                        onClick={() => handleStartChat(agent)}
                      >
                        <CardContent sx={{ p: 3, textAlign: 'center' }}>
                          <Box
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '64px',
                              height: '64px',
                              borderRadius: '50%',
                              backgroundColor: `${agent.color}1A`,
                              mb: 2,
                            }}
                          >
                            <agent.icon sx={{ color: agent.color, fontSize: '32px' }} />
                          </Box>
                          <Typography sx={{ fontWeight: 700, mb: 1 }}>
                            {agent.name}
                          </Typography>
                          <Typography sx={{ color: '#6b7280', fontSize: '14px', mb: 3 }}>
                            {agent.description}
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: '#F26A27',
                              color: 'white',
                              fontWeight: 600,
                              '&:hover': {
                                backgroundColor: 'rgba(242, 106, 39, 0.9)',
                              },
                            }}
                          >
                            <Message sx={{ mr: 1, fontSize: '16px' }} />
                            Start Chat
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          )}

          {/* Pricing Tab */}
          {activeTab === 3 && (
            <Box sx={{ maxWidth: '1024px', mx: 'auto' }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Choose Your AI Plan
                </Typography>
                <Typography sx={{ color: '#6b7280' }}>
                  Flexible pricing options to match your needs and budget. Start free and upgrade as you grow.
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      height: '100%',
                    }}
                  >
                    <CardHeader>
                      <CardHeader>Starter</CardHeader>
                      <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        Free
                      </Typography>
                      <Typography sx={{ color: '#6b7280' }}>
                        Perfect for trying out AI features
                      </Typography>
                    </CardHeader>
                    <CardContent>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                        {[
                          '50 AI interactions/month',
                          'Basic performance insights',
                          'Community support',
                        ].map((feature, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '14px' }}>
                            <Box
                              sx={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#418BCA',
                              }}
                            />
                            <Typography sx={{ fontSize: '14px' }}>{feature}</Typography>
                          </Box>
                        ))}
                      </Box>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderColor: '#418BCA',
                          color: '#418BCA',
                          backgroundColor: 'transparent',
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: '#418BCA',
                            backgroundColor: 'rgba(65, 139, 202, 0.04)',
                          },
                        }}
                      >
                        Get Started Free
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      backgroundColor: 'white',
                      border: '2px solid #418BCA',
                      borderRadius: '12px',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      height: '100%',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                    >
                      <Chip
                        label="Most Popular"
                        sx={{
                          backgroundColor: '#418BCA',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    <CardHeader>
                      <CardHeader>Pro</CardHeader>
                      <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        $29<Box component="span" sx={{ fontSize: '18px', fontWeight: 400 }}>/month</Box>
                      </Typography>
                      <Typography sx={{ color: '#6b7280' }}>
                        For serious athletes and coaches
                      </Typography>
                    </CardHeader>
                    <CardContent>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                        {[
                          'Unlimited AI interactions',
                          'Advanced analytics & insights',
                          'Personalized training plans',
                          'Priority support',
                        ].map((feature, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '14px' }}>
                            <Box
                              sx={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#418BCA',
                              }}
                            />
                            <Typography sx={{ fontSize: '14px' }}>{feature}</Typography>
                          </Box>
                        ))}
                      </Box>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: '#F26A27',
                          color: 'white',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: 'rgba(242, 106, 39, 0.9)',
                          },
                        }}
                      >
                        Start Pro Trial
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      height: '100%',
                    }}
                  >
                    <CardHeader>
                      <CardHeader>Enterprise</CardHeader>
                      <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        Custom
                      </Typography>
                      <Typography sx={{ color: '#6b7280' }}>
                        For teams and organizations
                      </Typography>
                    </CardHeader>
                    <CardContent>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                        {[
                          'Everything in Pro',
                          'Team management tools',
                          'Custom AI training',
                          'Dedicated support',
                        ].map((feature, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '14px' }}>
                            <Box
                              sx={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#418BCA',
                              }}
                            />
                            <Typography sx={{ fontSize: '14px' }}>{feature}</Typography>
                          </Box>
                        ))}
                      </Box>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderColor: '#418BCA',
                          color: '#418BCA',
                          backgroundColor: 'transparent',
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: '#418BCA',
                            backgroundColor: 'rgba(65, 139, 202, 0.04)',
                          },
                        }}
                      >
                        Contact Sales
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          )}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: 'linear-gradient(to right, rgba(65, 139, 202, 0.1), rgba(242, 106, 39, 0.1))' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                lineHeight: '2.25rem',
                fontSize: { xs: '1.5rem', md: '1.875rem' },
              }}
            >
              Ready to Transform Your Sports Journey?
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '512px',
                mx: 'auto',
                fontSize: '1.125rem',
                mb: 4,
              }}
            >
              Join thousands of athletes, coaches, and organizers who are already using AI to achieve their goals.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
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
                <AutoAwesome sx={{ mr: 1 }} />
                Start Free Trial
              </Button>
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
                <Message sx={{ mr: 1 }} />
                Talk to Sales
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AIAgents;
