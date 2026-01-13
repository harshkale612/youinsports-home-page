import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from '@mui/material';
import {
  MdVideoLibrary as VideoLibrary,
  MdGpsFixed as GpsFixed,
  MdTrendingUp as TrendingUp,
  MdCheckCircle as CheckCircle,
  MdArrowForward as ArrowForward,
  MdPlayArrow as PlayArrow,
  MdSmartToy as SmartToy,
} from 'react-icons/md';
import { MdElectricBolt as ElectricBoltIcon } from 'react-icons/md';
import SeoSchema from '../components/SeoSchema';

const VideoAnalysis = () => {
  return (
    <Box>
      <SeoSchema
        type="WebPage"
        name="AI Video Analysis - UinSports"
        description="Upload your training videos and get instant AI-powered technique analysis and improvement recommendations"
        url="https://uinsports.com/video-analysis"
      />

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12, lg: 16 },
          background: 'linear-gradient(to bottom, rgba(65, 139, 202, 0.2), rgba(255, 255, 255, 1))',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="hero-grid-overlay"
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(to right, #418BCA, #F26A27)',
                mb: 2,
              }}
              className="pulse-glow"
            >
              <VideoLibrary style={{ color: 'white', fontSize: '25px' }} />
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '3rem', xl: '4rem' },
                lineHeight: 1,
                mb: 2,
              }}
            >
              AI-Powered <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Video Analysis</Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1.25rem',
                mb: 4,
              }}
            >
              Upload your training videos and get instant, professional-grade technique analysis powered by advanced
              AI. Improve faster with personalized recommendations.
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
                <VideoLibrary sx={{ mr: 1 }} />
                Start Analysis
              </Button>
              <Link to="/ai-agents" style={{ textDecoration: 'none' }}>
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
                  <SmartToy sx={{ mr: 1 }} />
                  Meet AI Coaches
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Overview */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                }}
                className="clean-hover-lift"
              >
                <CardHeader>
                  <Box
                    sx={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(65, 139, 202, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <GpsFixed sx={{ color: '#418BCA', fontSize: '24px' }} />
                  </Box>
                  <Typography>Technique Analysis</Typography>
                </CardHeader>
                <CardContent>
                  <Typography sx={{ color: '#6b7280' }}>
                    Advanced AI analyzes your form, posture, and movement patterns to identify areas for improvement.
                  </Typography>
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
                }}
                className="clean-hover-lift"
              >
                <CardHeader>
                  <Box
                    sx={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(242, 106, 39, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <TrendingUp sx={{ color: '#F26A27', fontSize: '24px' }} />
                  </Box>
                  <Typography>Performance Insights</Typography>
                </CardHeader>
                <CardContent>
                  <Typography sx={{ color: '#6b7280' }}>
                    Get detailed metrics on timing, coordination, and efficiency with confidence scores for each insight.
                  </Typography>
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
                }}
                className="clean-hover-lift"
              >
                <CardHeader>
                  <Box
                    sx={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <ElectricBoltIcon sx={{ color: '#10b981', fontSize: '24px' }} />
                  </Box>
                  <Typography>Instant Results</Typography>
                </CardHeader>
                <CardContent>
                  <Typography sx={{ color: '#6b7280' }}>
                    Upload your video and receive comprehensive analysis results in minutes, not hours or days.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Video Analysis Interface */}
      <Box sx={{ py: { xs: 6, md: 12 }, backgroundColor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              Upload & <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Analyze</Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1.25rem',
              }}
            >
              Get started with your first video analysis. Our AI will provide detailed feedback on your technique.
            </Typography>
          </Box>

          {/* Video Upload Component Placeholder */}
          <Card
            sx={{
              backgroundColor: 'white',
              border: '2px dashed #d1d5db',
              borderRadius: '12px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              p: 6,
              textAlign: 'center',
            }}
          >
            <VideoLibrary sx={{ fontSize: '64px', color: '#9ca3af', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Upload Your Training Video
            </Typography>
            <Typography sx={{ color: '#6b7280', mb: 3 }}>
              Drag and drop your video file here, or click to browse. Supports MP4, MOV, and AVI formats up to 100MB.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#F26A27',
                color: 'white',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(242, 106, 39, 0.9)',
                },
              }}
            >
              Choose Video File
            </Button>
          </Card>
        </Container>
      </Box>

      {/* How It Works */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              How It <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Works</Box>
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1.25rem',
              }}
            >
              Three simple steps to get professional-grade video analysis
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {[
              {
                number: 1,
                title: 'Upload Video',
                description: 'Upload your training video in MP4, MOV, or AVI format. Our system supports files up to 100MB.',
                color: '#418BCA',
              },
              {
                number: 2,
                title: 'AI Analysis',
                description: 'Our advanced AI analyzes your technique, timing, positioning, and overall performance in real-time.',
                color: '#F26A27',
              },
              {
                number: 3,
                title: 'Get Results',
                description: 'Receive detailed feedback with timestamps, confidence scores, and personalized improvement recommendations.',
                color: '#10b981',
              },
            ].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: step.color,
                      color: 'white',
                      fontSize: '20px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    {step.number}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
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
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 6, md: 12 }, background: 'linear-gradient(to right, rgba(65, 139, 202, 0.05), rgba(242, 106, 39, 0.05))' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  mb: 3,
                }}
              >
                Why Choose Our <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI Analysis</Box>?
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  {
                    title: 'Professional-Grade Analysis',
                    description: 'Get the same level of analysis that professional athletes receive from their coaches.',
                  },
                  {
                    title: 'Instant Feedback',
                    description: 'No waiting for coach availability. Get immediate insights to accelerate your improvement.',
                  },
                  {
                    title: 'Objective Analysis',
                    description: 'AI provides unbiased, data-driven feedback based on biomechanical principles and best practices.',
                  },
                  {
                    title: 'Track Progress',
                    description: 'Compare analyses over time to see your improvement and identify persistent issues.',
                  },
                ].map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <CheckCircle sx={{ color: '#10b981', fontSize: '24px', mt: 0.5 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 600, mb: 1 }}>
                        {benefit.title}
                      </Typography>
                      <Typography sx={{ color: '#6b7280' }}>
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Card sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(65, 139, 202, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PlayArrow sx={{ color: '#418BCA', fontSize: '24px' }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>Average Analysis Time</Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: '#418BCA' }}>
                        2-3 minutes
                      </Typography>
                    </Box>
                  </Box>
                </Card>

                <Card sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(242, 106, 39, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <GpsFixed sx={{ color: '#F26A27', fontSize: '24px' }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>Analysis Accuracy</Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: '#F26A27' }}>
                        94%
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              Ready to Improve Your <Box component="span" sx={{ background: 'linear-gradient(135deg, #F26A27, #418BCA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Technique</Box>?
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1.25rem',
                mb: 4,
              }}
            >
              Join thousands of athletes who are already using AI to accelerate their improvement.
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
                <VideoLibrary sx={{ mr: 1 }} />
                Start Free Analysis
              </Button>
              <Link to="/plans" style={{ textDecoration: 'none' }}>
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
                  View Plans
                  <ArrowForward sx={{ ml: 1 }} />
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default VideoAnalysis;
