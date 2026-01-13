import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Button,
  TextField,
  Box,
  LinearProgress,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Fab,
  Badge,
  Tooltip,
  Alert,
  Snackbar
} from '@mui/material';
import {
  MdSearch as SearchIcon,
  MdFilterList as FilterIcon,
  MdFavorite as HeartIcon,
  MdShare as ShareIcon,
  MdVisibility as ViewIcon,
  MdAttachMoney as MoneyIcon,
  MdTrendingUp as TrendingIcon,
  MdGroup as GroupIcon,
  MdEmojiEvents as TrophyIcon,
  MdSchool as SchoolIcon,
  MdLocalHospital as MedicalIcon,
  MdDirectionsRun as TrainingIcon,
  MdFlight as TravelIcon,
  MdCheckCircle as VerifiedIcon,
  MdStar as StarIcon,
  MdThumbUp as ThumbUpIcon,
  MdComment as CommentIcon,
  MdSend as SendIcon,
  MdClose as CloseIcon,
  MdAdd as AddIcon
} from 'react-icons/md';
import { styled } from '@mui/material/styles';

// Custom styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0C3042 0%, #418BCA 100%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    animation: 'float 20s ease-in-out infinite'
  }
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8]
  }
}));

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.palette.grey[200],
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
  }
}));

const FloatingActionButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
  color: 'white',
  zIndex: 1000
}));

// Mock data
const mockAthletes = [
  {
    id: 1,
    name: "Sarah Johnson",
    sport: "Swimming",
    image: "/placeholder-user.jpg",
    verified: true,
    goal: 15000,
    raised: 8750,
    supporters: 124,
    story: "Olympic hopeful training for Paris 2024. Need support for training equipment and competition travel.",
    needs: [
      { type: "Training Equipment", amount: 5000, raised: 3200 },
      { type: "Competition Travel", amount: 8000, raised: 4200 },
      { type: "Nutrition Support", amount: 2000, raised: 1350 }
    ],
    location: "Los Angeles, CA",
    achievements: ["National Champion 2022", "Olympic Trials Qualifier"],
    recentSupporters: [
      { name: "Mike Chen", amount: 500, message: "Go for gold!" },
      { name: "Lisa Park", amount: 250, message: "You've got this!" }
    ]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    sport: "Basketball",
    image: "/placeholder-user.jpg",
    verified: true,
    goal: 12000,
    raised: 6800,
    supporters: 89,
    story: "College basketball player seeking support for summer league training and academic expenses.",
    needs: [
      { type: "Summer Training", amount: 4000, raised: 2800 },
      { type: "Academic Support", amount: 3000, raised: 2000 },
      { type: "Equipment", amount: 2000, raised: 1500 },
      { type: "Travel", amount: 3000, raised: 500 }
    ],
    location: "Chicago, IL",
    achievements: ["Conference Player of the Year", "Academic All-American"],
    recentSupporters: [
      { name: "Coach Williams", amount: 1000, message: "Proud of your dedication" },
      { name: "Anonymous", amount: 200, message: "Keep grinding!" }
    ]
  },
  {
    id: 3,
    name: "Emma Thompson",
    sport: "Track & Field",
    image: "/placeholder-user.jpg",
    verified: false,
    goal: 8000,
    raised: 4200,
    supporters: 67,
    story: "High school track star aiming for college scholarships. Need help with coaching and equipment.",
    needs: [
      { type: "Personal Coaching", amount: 3000, raised: 1800 },
      { type: "Running Gear", amount: 1500, raised: 900 },
      { type: "Competition Fees", amount: 2000, raised: 1000 },
      { type: "Nutrition", amount: 1500, raised: 500 }
    ],
    location: "Austin, TX",
    achievements: ["State Champion 100m", "Regional Record Holder"],
    recentSupporters: [
      { name: "Family Friend", amount: 300, message: "Believe in yourself!" }
    ]
  }
];

const Support = () => {
  const [athletes, setAthletes] = useState(mockAthletes);
  const [filteredAthletes, setFilteredAthletes] = useState(mockAthletes);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSport, setFilterSport] = useState('');
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [supportDialogOpen, setSupportDialogOpen] = useState(false);
  const [supportAmount, setSupportAmount] = useState(50);
  const [supportMessage, setSupportMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const sports = ['All Sports', 'Swimming', 'Basketball', 'Track & Field', 'Soccer', 'Tennis'];

  useEffect(() => {
    let filtered = athletes;
    
    if (searchQuery) {
      filtered = filtered.filter(athlete =>
        athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        athlete.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
        athlete.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (filterSport && filterSport !== 'All Sports') {
      filtered = filtered.filter(athlete => athlete.sport === filterSport);
    }
    
    setFilteredAthletes(filtered);
  }, [searchQuery, filterSport, athletes]);

  const handleSupportSubmit = () => {
    if (selectedAthlete) {
      // Mock support submission
      const newSupporter = {
        name: "You",
        amount: supportAmount,
        message: supportMessage || "Keep going!"
      };
      
      setAthletes(prevAthletes =>
        prevAthletes.map(athlete =>
          athlete.id === selectedAthlete.id
            ? {
                ...athlete,
                raised: athlete.raised + supportAmount,
                supporters: athlete.supporters + 1,
                recentSupporters: [newSupporter, ...athlete.recentSupporters.slice(0, 1)]
              }
            : athlete
        )
      );
      
      setSnackbarMessage(`Successfully supported ${selectedAthlete.name} with $${supportAmount}!`);
      setSnackbarOpen(true);
      setSupportDialogOpen(false);
      setSupportAmount(50);
      setSupportMessage('');
    }
  };

  const getProgressPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Support Your <span style={{ color: '#FFD700' }}>Athletes</span>
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Help amateur athletes achieve their dreams through community support
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              icon={<HeartIcon />}
              label="Community Driven"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
            <Chip
              icon={<VerifiedIcon />}
              label="Verified Athletes"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
            <Chip
              icon={<TrophyIcon />}
              label="Transparent Impact"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
          </Box>
        </Container>
      </HeroSection>

      {/* Search and Filter Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search athletes, sports, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Filter by Sport</InputLabel>
                <Select
                  value={filterSport}
                  onChange={(e) => setFilterSport(e.target.value)}
                  label="Filter by Sport"
                >
                  {sports.map((sport) => (
                    <MenuItem key={sport} value={sport}>
                      {sport}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FilterIcon />}
                onClick={() => {
                  setSearchQuery('');
                  setFilterSport('');
                }}
              >
                Clear Filters
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Stats Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <CardContent>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                  ${athletes.reduce((sum, athlete) => sum + athlete.raised, 0).toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Raised
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <CardContent>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                  {athletes.reduce((sum, athlete) => sum + athlete.supporters, 0)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Supporters
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <CardContent>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                  {athletes.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Athletes
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <CardContent>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                  {Math.round(athletes.reduce((sum, athlete) => sum + (athlete.raised / athlete.goal * 100), 0) / athletes.length)}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Avg. Goal Progress
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Athletes Grid */}
        <Grid container spacing={3}>
          {filteredAthletes.map((athlete) => (
            <Grid item xs={12} md={6} lg={4} key={athlete.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={athlete.image}
                  alt={athlete.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
                      {athlete.name}
                    </Typography>
                    {athlete.verified && (
                      <Tooltip title="Verified Athlete">
                        <VerifiedIcon color="primary" />
                      </Tooltip>
                    )}
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                      {athlete.sport}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • {athlete.location}
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {athlete.story}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">
                        ${athlete.raised.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${athlete.goal.toLocaleString()}
                      </Typography>
                    </Box>
                    <ProgressBar 
                      variant="determinate" 
                      value={getProgressPercentage(athlete.raised, athlete.goal)} 
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      {Math.round(getProgressPercentage(athlete.raised, athlete.goal))}% funded
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <GroupIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {athlete.supporters} supporters
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {athlete.achievements.slice(0, 2).map((achievement, index) => (
                        <Chip key={index} size="small" label={achievement} variant="outlined" />
                      ))}
                    </Box>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="subtitle2" gutterBottom>
                    Support Needed:
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {athlete.needs.slice(0, 2).map((need, index) => (
                      <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="caption">
                          {need.type}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          ${need.raised}/${need.amount}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    startIcon={<ViewIcon />}
                    onClick={() => setSelectedAthlete(athlete)}
                  >
                    View Details
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<HeartIcon />}
                    onClick={() => {
                      setSelectedAthlete(athlete);
                      setSupportDialogOpen(true);
                    }}
                    sx={{ ml: 'auto' }}
                  >
                    Support
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {filteredAthletes.length === 0 && (
          <Paper sx={{ p: 4, textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              No athletes found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search criteria or filters
            </Typography>
          </Paper>
        )}
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
            <Avatar src={selectedAthlete?.image} />
            <Box>
              <Typography variant="h6">
                Support {selectedAthlete?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedAthlete?.sport} • {selectedAthlete?.location}
              </Typography>
            </Box>
          </Box>
        </DialogTitle>
        
        <DialogContent>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" gutterBottom>
              {selectedAthlete?.story}
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

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />

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

export default Support;