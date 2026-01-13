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
  Avatar,
  Chip,
  LinearProgress,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
  Tooltip,
  Alert,
  Fab,
  InputAdornment
} from '@mui/material';
import {
  MdEdit as EditIcon,
  MdShare as ShareIcon,
  MdFavorite as HeartIcon,
  MdMessage as MessageIcon,
  MdSettings as SettingsIcon,
  MdVerified as VerifiedIcon,
  MdEmojiEvents as TrophyIcon,
  MdTrendingUp as TrendingIcon,
  MdPeople as PeopleIcon,
  MdAttachMoney as MoneyIcon,
  MdLocationOn as LocationIcon,
  MdCalendarToday as CalendarIcon,
  MdCameraAlt as CameraIcon,
  MdVideoLibrary as VideoIcon,
  MdFileUpload as UploadIcon,
  MdDownload as DownloadIcon,
  MdPlayArrow as PlayIcon,
  MdAdd as AddIcon,
  MdClose as CloseIcon,
  MdExpandMore as ExpandMoreIcon,
  MdVisibility as ViewIcon,
  MdStar as StarIcon,
  MdThumbUp as ThumbUpIcon,
  MdComment as CommentIcon,
  MdSend as SendIcon,
  MdBusiness as BusinessIcon,
  MdSchool as SchoolIcon,
  MdLocalHospital as MedicalIcon,
  MdDirectionsRun as TrainingIcon,
  MdFlight as TravelIcon,
  MdAssessment as AssessmentIcon,
  MdTimeline as TimelineIcon,
  MdSports as SportsIcon,
  MdGroup as GroupIcon,
  MdPerson as PersonIcon,
  MdInfo as InfoIcon,
  MdWarning as WarningIcon,
  MdCheckCircle as CheckIcon,
  MdCancel as CancelIcon
} from 'react-icons/md';
import { styled } from '@mui/material/styles';

// Custom styled components
const ProfileHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: theme.spacing(6, 0),
  position: 'relative',
  overflow: 'hidden'
}));

const StatCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8]
  }
}));

const FloatingActionButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  background: 'linear-gradient(45deg, #667eea, #764ba2)',
  color: 'white',
  zIndex: 1000
}));

// Mock data
const playerData = {
  id: "player-123",
  name: "Alex Thompson",
  sport: "Basketball",
  position: "Point Guard",
  age: 22,
  height: "6'2\"",
  weight: "180 lbs",
  location: "Los Angeles, CA",
  profileImage: "/placeholder-user.jpg",
  coverImage: "/placeholder.jpg",
  bio: "Passionate basketball player with 8 years of competitive experience. Currently playing for UCLA and training for professional opportunities. Known for exceptional court vision and leadership skills.",
  verified: true,
  followers: 1247,
  following: 342,

  // Sports Stats
  stats: {
    basketball: {
      season: "2023-24",
      gamesPlayed: 28,
      pointsPerGame: 18.5,
      assistsPerGame: 7.2,
      reboundsPerGame: 4.8,
      fieldGoalPercentage: 0.456,
      threePointPercentage: 0.389,
      freeThrowPercentage: 0.842,
    },
  },

  // Achievements
  achievements: [
    {
      id: 1,
      title: "NCAA Division I All-American",
      year: 2023,
      description: "Selected as one of the top college basketball players in the nation",
      icon: "trophy",
    },
    {
      id: 2,
      title: "Conference Player of the Year",
      year: 2023,
      description: "Led the Pac-12 conference in assists and steals",
      icon: "medal",
    },
    {
      id: 3,
      title: "Team Captain",
      year: 2022,
      description: "Elected team captain by teammates and coaching staff",
      icon: "award",
    },
  ],

  // Media Gallery
  media: {
    photos: [
      {
        id: 1,
        url: "/placeholder.jpg",
        caption: "Championship game winning shot",
      },
      { id: 2, url: "/placeholder.jpg", caption: "Morning practice session" },
      {
        id: 3,
        url: "/placeholder.jpg",
        caption: "Team photo after conference win",
      },
      {
        id: 4,
        url: "/placeholder.jpg",
        caption: "Player of the Year award ceremony",
      },
    ],
    videos: [
      {
        id: 1,
        url: "/placeholder.jpg",
        title: "Season Highlights 2023",
        duration: "3:45",
      },
      {
        id: 2,
        url: "/placeholder.jpg",
        title: "Training Session",
        duration: "2:30",
      },
    ],
  },

  // Coaches and Associates
  team: {
    coaches: [
      {
        id: 1,
        name: "Coach Mike Johnson",
        role: "Head Coach",
        experience: "15 years",
        image: "/placeholder-user.jpg",
        achievements: "3x Conference Champion",
      },
      {
        id: 2,
        name: "Sarah Williams",
        role: "Skills Coach",
        experience: "8 years",
        image: "/placeholder-user.jpg",
        achievements: "Former WNBA Player",
      },
    ],
    institutions: [
      {
        id: 1,
        name: "UCLA Bruins",
        type: "University Team",
        role: "Starting Point Guard",
        period: "2021 - Present",
        logo: "/placeholder.jpg",
      },
      {
        id: 2,
        name: "Elite Basketball Academy",
        type: "Training Facility",
        role: "Member",
        period: "2019 - Present",
        logo: "/placeholder.jpg",
      },
    ],
  },

  // Support/Funding
  support: {
    currentFunding: 8500,
    goalFunding: 15000,
    supporters: 156,
    needs: [
      { type: "Training Equipment", amount: 3000, raised: 2100 },
      { type: "Competition Travel", amount: 5000, raised: 3200 },
      { type: "Nutrition & Recovery", amount: 2000, raised: 1500 },
      { type: "Professional Development", amount: 5000, raised: 1700 },
    ],
  },

  // Performance Analytics
  analytics: {
    performanceTrend: "improving",
    trainingHours: 25,
    competitionsThisYear: 28,
    improvementAreas: ["Three-point shooting", "Defensive positioning"],
    strengths: ["Court vision", "Leadership", "Ball handling"],
  },
};

const PlayerProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [supportDialogOpen, setSupportDialogOpen] = useState(false);
  const [supportAmount, setSupportAmount] = useState(50);
  const [supportMessage, setSupportMessage] = useState('');
  const [mediaDialogOpen, setMediaDialogOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const fundingPercentage = (playerData.support.currentFunding / playerData.support.goalFunding) * 100;

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSupportSubmit = () => {
    // Mock support submission
    console.log('Support submitted:', { amount: supportAmount, message: supportMessage });
    setSupportDialogOpen(false);
    setSupportAmount(50);
    setSupportMessage('');
  };

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setMediaDialogOpen(true);
  };

  const TabPanel = ({ children, value, index, ...other }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Box>
      {/* Cover Photo */}
      <Box sx={{ position: 'relative', height: '300px' }}>
        <CardMedia
          component="img"
          height="300"
          image={playerData.coverImage}
          alt="Player cover photo"
          sx={{ objectFit: 'cover' }}
        />
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' 
        }} />
        
        {/* Edit Button */}
        <Button
          sx={{ 
            position: 'absolute', 
            top: 16, 
            right: 16,
            bgcolor: 'rgba(255,255,255,0.9)',
            color: 'text.primary',
            '&:hover': { bgcolor: 'white' }
          }}
          startIcon={<EditIcon />}
        >
          Edit Cover
        </Button>
      </Box>

      {/* Profile Header */}
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: -8, mb: 4 }}>
          {/* Profile Image */}
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src={playerData.profileImage}
              sx={{ 
                width: { xs: 120, md: 160 }, 
                height: { xs: 120, md: 160 },
                border: '4px solid white',
                boxShadow: 3
              }}
            />
            {playerData.verified && (
              <Tooltip title="Verified Athlete">
                <Avatar sx={{ 
                  position: 'absolute', 
                  bottom: 8, 
                  right: 8, 
                  bgcolor: 'primary.main',
                  width: 32,
                  height: 32
                }}>
                  <VerifiedIcon fontSize="small" />
                </Avatar>
              </Tooltip>
            )}
          </Box>

          {/* Profile Info */}
          <Box sx={{ flexGrow: 1, mt: { xs: 2, md: 8 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 2 }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                    {playerData.name}
                  </Typography>
                  <Chip label="Verified" color="primary" size="small" />
                </Box>
                <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                  {playerData.sport} - {playerData.position}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationIcon fontSize="small" color="action" />
                    <Typography variant="body2">{playerData.location}</Typography>
                  </Box>
                  <Typography variant="body2">
                    {playerData.age} years • {playerData.height} • {playerData.weight}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    {playerData.followers} followers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {playerData.following} following
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<HeartIcon />}
                  onClick={() => setSupportDialogOpen(true)}
                >
                  Support
                </Button>
                <Button variant="outlined" startIcon={<ShareIcon />}>
                  Share
                </Button>
                <Button variant="outlined" startIcon={<SettingsIcon />}>
                  Settings
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Quick Stats */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={6} sm={3}>
            <StatCard>
              <CardContent sx={{ p: 2 }}>
                <TrophyIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {playerData.achievements.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Achievements
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
          <Grid item xs={6} sm={3}>
            <StatCard>
              <CardContent sx={{ p: 2 }}>
                <TrendingIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {playerData.stats.basketball.pointsPerGame}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  PPG
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
          <Grid item xs={6} sm={3}>
            <StatCard>
              <CardContent sx={{ p: 2 }}>
                <PeopleIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {playerData.support.supporters}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Supporters
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
          <Grid item xs={6} sm={3}>
            <StatCard>
              <CardContent sx={{ p: 2 }}>
                <MoneyIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {Math.round(fundingPercentage)}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Goal Reached
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
        </Grid>

        {/* Main Content Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
            <Tab label="Overview" />
            <Tab label="Stats" />
            <Tab label="Achievements" />
            <Tab label="Media" />
            <Tab label="Team" />
            <Tab label="Support" />
            <Tab label="Analytics" />
          </Tabs>
        </Paper>

        {/* Overview Tab */}
        <TabPanel value={activeTab} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonIcon />
                    About
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {playerData.bio}
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrendingIcon />
                    Performance Overview
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.light', borderRadius: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>
                          {playerData.stats.basketball.pointsPerGame}
                        </Typography>
                        <Typography variant="body2" color="primary.contrastText">
                          Points/Game
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'secondary.light', borderRadius: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'secondary.contrastText' }}>
                          {playerData.stats.basketball.assistsPerGame}
                        </Typography>
                        <Typography variant="body2" color="secondary.contrastText">
                          Assists/Game
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.light', borderRadius: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>
                          {playerData.stats.basketball.reboundsPerGame}
                        </Typography>
                        <Typography variant="body2" color="primary.contrastText">
                          Rebounds/Game
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Card className="clean-hover-lift">
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AssessmentIcon />
                    AI Performance Insights
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Alert severity="info" sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>Strengths</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {playerData.analytics.strengths.map((strength, index) => (
                            <Chip key={index} label={strength} size="small" color="primary" />
                          ))}
                        </Box>
                      </Alert>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Alert severity="warning" sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>Areas for Improvement</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {playerData.analytics.improvementAreas.map((area, index) => (
                            <Chip key={index} label={area} size="small" color="warning" />
                          ))}
                        </Box>
                      </Alert>
                    </Grid>
                  </Grid>
                  <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                    Get Detailed AI Analysis
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Support Progress
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">
                        ${playerData.support.currentFunding.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${playerData.support.goalFunding.toLocaleString()}
                      </Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={fundingPercentage} sx={{ height: 8, borderRadius: 4 }} />
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      {Math.round(fundingPercentage)}% of goal reached
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<HeartIcon />}
                    onClick={() => setSupportDialogOpen(true)}
                  >
                    Support Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="clean-hover-lift">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Recent Media
                  </Typography>
                  <Grid container spacing={1}>
                    {playerData.media.photos.slice(0, 4).map((photo) => (
                      <Grid item xs={6} key={photo.id}>
                        <Box
                          sx={{
                            aspectRatio: '1',
                            borderRadius: 1,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            '&:hover': { opacity: 0.8 }
                          }}
                          onClick={() => handleMediaClick(photo)}
                        >
                          <CardMedia
                            component="img"
                            image={photo.url}
                            alt={photo.caption}
                            sx={{ height: '100%', objectFit: 'cover' }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  <Button variant="outlined" fullWidth sx={{ mt: 2 }} startIcon={<CameraIcon />}>
                    View All Media
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Stats Tab */}
        <TabPanel value={activeTab} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card className="clean-hover-lift">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Season Statistics ({playerData.stats.basketball.season})
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell>Games Played</TableCell>
                          <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                            {playerData.stats.basketball.gamesPlayed}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Points per Game</TableCell>
                          <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                            {playerData.stats.basketball.pointsPerGame}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Assists per Game</TableCell>
                          <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                            {playerData.stats.basketball.assistsPerGame}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Rebounds per Game</TableCell>
                          <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                            {playerData.stats.basketball.reboundsPerGame}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Shooting Percentages
                  </Typography>
                  <Box sx={{ space: 2 }}>
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Field Goal %</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {(playerData.stats.basketball.fieldGoalPercentage * 100).toFixed(1)}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={playerData.stats.basketball.fieldGoalPercentage * 100} 
                        sx={{ height: 6 }}
                      />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Three Point %</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {(playerData.stats.basketball.threePointPercentage * 100).toFixed(1)}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={playerData.stats.basketball.threePointPercentage * 100} 
                        sx={{ height: 6 }}
                      />
                    </Box>
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Free Throw %</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {(playerData.stats.basketball.freeThrowPercentage * 100).toFixed(1)}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={playerData.stats.basketball.freeThrowPercentage * 100} 
                        sx={{ height: 6 }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Achievements Tab */}
        <TabPanel value={activeTab} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Major Achievements
                  </Typography>
                  <List>
                    {playerData.achievements.map((achievement) => (
                      <ListItem key={achievement.id} sx={{ px: 0 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'primary.light' }}>
                            <TrophyIcon color="primary" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                {achievement.title}
                              </Typography>
                              <Chip label={achievement.year} size="small" color="primary" />
                            </Box>
                          }
                          secondary={achievement.description}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Goals & Targets
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Alert severity="info">
                      <Typography variant="subtitle2" gutterBottom>Short-term Goals</Typography>
                      <List dense>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemText primary="Improve three-point percentage to 40%" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemText primary="Lead team to conference championship" />
                        </ListItem>
                      </List>
                    </Alert>
                  </Box>
                  <Box>
                    <Alert severity="warning">
                      <Typography variant="subtitle2" gutterBottom>Long-term Goals</Typography>
                      <List dense>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemText primary="Get drafted to NBA" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemText primary="Represent national team" />
                        </ListItem>
                      </List>
                    </Alert>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Media Tab */}
        <TabPanel value={activeTab} index={3}>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Media Gallery</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" startIcon={<UploadIcon />}>
                  Upload
                </Button>
                <Button variant="contained" startIcon={<CameraIcon />}>
                  Add Photo
                </Button>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CameraIcon />
                    Photos ({playerData.media.photos.length})
                  </Typography>
                  <Grid container spacing={2}>
                    {playerData.media.photos.map((photo) => (
                      <Grid item xs={6} key={photo.id}>
                        <Box
                          sx={{
                            aspectRatio: '1',
                            borderRadius: 1,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            '&:hover': { opacity: 0.8 }
                          }}
                          onClick={() => handleMediaClick(photo)}
                        >
                          <CardMedia
                            component="img"
                            image={photo.url}
                            alt={photo.caption}
                            sx={{ height: '100%', objectFit: 'cover' }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <VideoIcon />
                    Videos ({playerData.media.videos.length})
                  </Typography>
                  <Box sx={{ space: 2 }}>
                    {playerData.media.videos.map((video) => (
                      <Box
                        key={video.id}
                        sx={{
                          position: 'relative',
                          aspectRatio: '16/9',
                          borderRadius: 1,
                          overflow: 'hidden',
                          mb: 2,
                          cursor: 'pointer'
                        }}
                        onClick={() => handleMediaClick(video)}
                      >
                        <CardMedia
                          component="img"
                          image={video.url}
                          alt={video.title}
                          sx={{ height: '100%', objectFit: 'cover' }}
                        />
                        <Box sx={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'rgba(0,0,0,0.3)'
                        }}>
                          <IconButton sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'grey.100' } }}>
                            <PlayIcon />
                          </IconButton>
                        </Box>
                        <Chip
                          label={video.duration}
                          size="small"
                          sx={{ position: 'absolute', bottom: 8, left: 8 }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Team Tab */}
        <TabPanel value={activeTab} index={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Coaches
                  </Typography>
                  <List>
                    {playerData.team.coaches.map((coach) => (
                      <ListItem key={coach.id} sx={{ px: 0 }}>
                        <ListItemAvatar>
                          <Avatar src={coach.image} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                {coach.name}
                              </Typography>
                              <Chip label={coach.role} size="small" color="primary" />
                            </Box>
                          }
                          secondary={
                            <Box>
                              <Typography variant="body2" color="text.secondary">
                                {coach.experience}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {coach.achievements}
                              </Typography>
                            </Box>
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton>
                            <MessageIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Institutions & Clubs
                  </Typography>
                  <List>
                    {playerData.team.institutions.map((institution) => (
                      <ListItem key={institution.id} sx={{ px: 0 }}>
                        <ListItemAvatar>
                          <Avatar src={institution.logo} variant="rounded" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                {institution.name}
                              </Typography>
                              <Chip label={institution.type} size="small" color="secondary" />
                            </Box>
                          }
                          secondary={
                            <Box>
                              <Typography variant="body2" color="text.secondary">
                                {institution.role}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {institution.period}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Support Tab */}
        <TabPanel value={activeTab} index={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Support Needs
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Box>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                          ${playerData.support.currentFunding.toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          of ${playerData.support.goalFunding.toLocaleString()} goal
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                          {Math.round(fundingPercentage)}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Complete
                        </Typography>
                      </Box>
                    </Box>
                    <LinearProgress variant="determinate" value={fundingPercentage} sx={{ height: 12, borderRadius: 6 }} />
                  </Box>

                  <Box>
                    {playerData.support.needs.map((need, index) => (
                      <Box key={index} sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2, mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                            {need.type}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            ${need.raised.toLocaleString()} / ${need.amount.toLocaleString()}
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={(need.raised / need.amount) * 100} 
                          sx={{ height: 6 }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Support Actions
                  </Typography>
                  <Box sx={{ space: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<HeartIcon />}
                      onClick={() => setSupportDialogOpen(true)}
                    >
                      Support Now
                    </Button>
                    <Button variant="outlined" fullWidth startIcon={<ShareIcon />}>
                      Share Profile
                    </Button>
                    <Button variant="outlined" fullWidth startIcon={<MessageIcon />}>
                      Send Message
                    </Button>
                  </Box>
                  
                  <Divider sx={{ my: 3 }} />
                  
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Supporters
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                      {playerData.support.supporters}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Analytics Tab */}
        <TabPanel value={activeTab} index={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TimelineIcon />
                    Performance Trends
                  </Typography>
                  <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.50', borderRadius: 2 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <AssessmentIcon sx={{ fontSize: 48, color: 'grey.400', mb: 2 }} />
                      <Typography variant="body2" color="text.secondary">
                        Advanced analytics and performance trends
                      </Typography>
                      <Button variant="contained" sx={{ mt: 2 }}>
                        Generate AI Analytics Report
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Training Summary
                  </Typography>
                  <List>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Training Hours This Week"
                        secondary={playerData.analytics.trainingHours + " hours"}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Competitions This Year"
                        secondary={playerData.analytics.competitionsThisYear + " events"}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Performance Trend"
                        secondary={
                          <Chip 
                            label={playerData.analytics.performanceTrend} 
                            color="success" 
                            size="small" 
                          />
                        }
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Container>

      {/* Support Dialog */}
      <Dialog 
        open={supportDialogOpen} 
        onClose={() => setSupportDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={playerData.profileImage} />
            <Box>
              <Typography variant="h6">
                Support {playerData.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {playerData.sport} • {playerData.location}
              </Typography>
            </Box>
          </Box>
        </DialogTitle>
        
        <DialogContent>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" gutterBottom>
              {playerData.bio}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Support Amount
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {[25, 50, 100, 200].map((amount) => (
                <Button
                  key={amount}
                  variant={supportAmount === amount ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => setSupportAmount(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </Box>
            <TextField
              fullWidth
              type="number"
              value={supportAmount}
              onChange={(e) => setSupportAmount(Number(e.target.value))}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
              }}
            />
          </Box>

          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Add a message of support (optional)"
            value={supportMessage}
            onChange={(e) => setSupportMessage(e.target.value)}
          />
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setSupportDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSupportSubmit}
            startIcon={<HeartIcon />}
          >
            Support ${supportAmount}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Media Dialog */}
      <Dialog 
        open={mediaDialogOpen} 
        onClose={() => setMediaDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        {selectedMedia && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6">
                  {selectedMedia.caption || selectedMedia.title}
                </Typography>
                <IconButton onClick={() => setMediaDialogOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            
            <DialogContent>
              <Box sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  image={selectedMedia.url}
                  alt={selectedMedia.caption || selectedMedia.title}
                  sx={{ maxHeight: 400, objectFit: 'contain' }}
                />
                {selectedMedia.duration && (
                  <Chip
                    label={selectedMedia.duration}
                    sx={{ position: 'absolute', top: 16, right: 16 }}
                  />
                )}
              </Box>
            </DialogContent>
            
            <DialogActions sx={{ p: 3 }}>
              <Button onClick={() => setMediaDialogOpen(false)}>
                Close
              </Button>
              <Button variant="contained" startIcon={<ShareIcon />}>
                Share
              </Button>
              <Button variant="outlined" startIcon={<DownloadIcon />}>
                Download
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Floating Action Button */}
      <FloatingActionButton
        color="primary"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <AddIcon />
      </FloatingActionButton>
    </Box>
  );
};

export default PlayerProfile;