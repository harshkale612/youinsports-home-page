import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Button,
  Box,
  Paper,
  LinearProgress,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton,
  Tooltip,
  Alert,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  MdTrendingUp as TrendingIcon,
  MdAttachMoney as MoneyIcon,
  MdPeople as PeopleIcon,
  MdEmojiEvents as TrophyIcon,
  MdAssessment as AssessmentIcon,
  MdTimeline as TimelineIcon,
  MdInsights as PieChartIcon,
  MdBarChart as BarChartIcon,
  MdShowChart as LineChartIcon,
  MdDonutLarge as DonutIcon,
  MdExpandMore as ExpandMoreIcon,
  MdVisibility as ViewIcon,
  MdShare as ShareIcon,
  MdDownload as DownloadIcon,
  MdFilterList as FilterIcon,
  MdCalendarToday as CalendarIcon,
  MdLocationOn as LocationIcon,
  MdSports as SportsIcon,
  MdSchool as SchoolIcon,
  MdLocalHospital as MedicalIcon,
  MdDirectionsRun as TrainingIcon,
  MdFlight as TravelIcon,
  MdCheckCircle as CheckIcon,
  MdStar as StarIcon,
  MdThumbUp as ThumbUpIcon,
  MdComment as CommentIcon,
  MdInfo as InfoIcon,
  MdWarning as WarningIcon,
  MdTrendingDown as TrendingDownIcon,
  MdTrendingFlat as TrendingFlatIcon,
  MdRefresh as RefreshIcon
} from 'react-icons/md';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
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

const StatCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8]
  }
}));

const ChartCard = styled(Card)(({ theme }) => ({
  height: '100%',
  '& .recharts-wrapper': {
    fontFamily: theme.typography.fontFamily
  }
}));

// Mock data
const monthlyData = [
  { month: 'Jan', amount: 45000, athletes: 45, events: 12 },
  { month: 'Feb', amount: 52000, athletes: 52, events: 15 },
  { month: 'Mar', amount: 48000, athletes: 48, events: 13 },
  { month: 'Apr', amount: 61000, athletes: 61, events: 18 },
  { month: 'May', amount: 58000, athletes: 58, events: 16 },
  { month: 'Jun', amount: 67000, athletes: 67, events: 20 },
  { month: 'Jul', amount: 72000, athletes: 72, events: 22 },
  { month: 'Aug', amount: 69000, athletes: 69, events: 19 },
  { month: 'Sep', amount: 75000, athletes: 75, events: 25 },
  { month: 'Oct', amount: 82000, athletes: 82, events: 28 },
  { month: 'Nov', amount: 78000, athletes: 78, events: 24 },
  { month: 'Dec', amount: 85000, athletes: 85, events: 30 }
];

const categoryData = [
  { name: 'Training Equipment', value: 35, color: '#8884d8', amount: 297500 },
  { name: 'Competition Travel', value: 25, color: '#82ca9d', amount: 212500 },
  { name: 'Nutrition Support', value: 20, color: '#ffc658', amount: 170000 },
  { name: 'Medical Support', value: 12, color: '#ff7300', amount: 102000 },
  { name: 'Education', value: 8, color: '#00ff00', amount: 68000 }
];

const sportData = [
  { name: 'Basketball', athletes: 125, amount: 180000, events: 45 },
  { name: 'Soccer', athletes: 98, amount: 142000, events: 38 },
  { name: 'Track & Field', athletes: 87, amount: 125000, events: 32 },
  { name: 'Swimming', athletes: 76, amount: 110000, events: 28 },
  { name: 'Tennis', athletes: 54, amount: 78000, events: 22 },
  { name: 'Volleyball', athletes: 43, amount: 62000, events: 18 },
  { name: 'Other', athletes: 67, amount: 97000, events: 25 }
];

const successStories = [
  {
    id: 1,
    athlete: 'Sarah Johnson',
    sport: 'Swimming',
    achievement: 'Qualified for Olympic Trials',
    fundsRaised: 15000,
    supporters: 124,
    image: '/placeholder-user.jpg',
    progress: 100
  },
  {
    id: 2,
    athlete: 'Marcus Rodriguez',
    sport: 'Basketball',
    achievement: 'Earned College Scholarship',
    fundsRaised: 12000,
    supporters: 89,
    image: '/placeholder-user.jpg',
    progress: 95
  },
  {
    id: 3,
    athlete: 'Emma Thompson',
    sport: 'Track & Field',
    achievement: 'State Champion 100m',
    fundsRaised: 8000,
    supporters: 67,
    image: '/placeholder-user.jpg',
    progress: 88
  },
  {
    id: 4,
    athlete: 'David Park',
    sport: 'Tennis',
    achievement: 'Regional Tournament Winner',
    fundsRaised: 6500,
    supporters: 52,
    image: '/placeholder-user.jpg',
    progress: 82
  }
];

const recentTransactions = [
  {
    id: 1,
    supporter: 'Mike Chen',
    athlete: 'Sarah Johnson',
    amount: 500,
    date: '2024-01-15',
    message: 'Go for gold!'
  },
  {
    id: 2,
    supporter: 'Lisa Park',
    athlete: 'Marcus Rodriguez',
    amount: 250,
    date: '2024-01-14',
    message: 'You\'ve got this!'
  },
  {
    id: 3,
    supporter: 'Anonymous',
    athlete: 'Emma Thompson',
    amount: 100,
    date: '2024-01-13',
    message: 'Keep grinding!'
  },
  {
    id: 4,
    supporter: 'Coach Williams',
    athlete: 'David Park',
    amount: 1000,
    date: '2024-01-12',
    message: 'Proud of your dedication'
  }
];

const Tracker = () => {
  const [tabValue, setTabValue] = useState(0);
  const [timeframe, setTimeframe] = useState('yearly');
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyDialogOpen, setStoryDialogOpen] = useState(false);

  const totalFundsRaised = monthlyData[monthlyData.length - 1]?.amount || 0;
  const totalAthletesBenefited = sportData.reduce((sum, sport) => sum + sport.athletes, 0);
  const totalEvents = monthlyData[monthlyData.length - 1]?.events || 0;
  const successRate = 78;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setStoryDialogOpen(true);
  };

  const getTrendIcon = (current, previous) => {
    if (current > previous) return <TrendingIcon color="success" />;
    if (current < previous) return <TrendingDownIcon color="error" />;
    return <TrendingFlatIcon color="action" />;
  };

  const getTrendPercentage = (current, previous) => {
    return Math.round(((current - previous) / previous) * 100);
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Impact <span style={{ color: '#FFD700' }}>Tracker</span>
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Track the impact of your support and see how it's helping athletes achieve their dreams
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              icon={<AssessmentIcon style={{ color: "white" }} />}
              label="Real-time Analytics"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
            <Chip
              icon={<TimelineIcon  style={{ color: "white" }}/>}
              label="Progress Tracking"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
            <Chip
              icon={<TrophyIcon style={{ color: "white" }}/>}
              label="Success Stories"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
          </Box>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Summary Stats */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <MoneyIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
                  <Box>
                    {getTrendIcon(totalFundsRaised, monthlyData[monthlyData.length - 2]?.amount)}
                  </Box>
                </Box>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                  ${totalFundsRaised.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Total Funds Raised
                </Typography>
                <Typography variant="caption" color="success.main" sx={{ fontWeight: 'bold' }}>
                  +{getTrendPercentage(totalFundsRaised, monthlyData[monthlyData.length - 2]?.amount)}% from last month
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <StatCard>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <PeopleIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
                  <Box>
                    {getTrendIcon(totalAthletesBenefited, sportData.reduce((sum, sport) => sum + sport.athletes, 0))}
                  </Box>
                </Box>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                  {totalAthletesBenefited}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Athletes Supported
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Across {sportData.length} sports
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <StatCard>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <AssessmentIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
                  <Box>
                    {getTrendIcon(totalEvents, monthlyData[monthlyData.length - 2]?.events)}
                  </Box>
                </Box>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                  {totalEvents}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Events This Month
                </Typography>
                <Typography variant="caption" color="success.main" sx={{ fontWeight: 'bold' }}>
                  +{getTrendPercentage(totalEvents, monthlyData[monthlyData.length - 2]?.events)}% from last month
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <StatCard>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <TrophyIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
                  <Box>
                    <TrendingIcon color="success" />
                  </Box>
                </Box>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                  {successRate}%
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Success Rate
                </Typography>
                <Typography variant="caption" color="success.main" sx={{ fontWeight: 'bold' }}>
                  Athletes achieving their goals
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
        </Grid>

        {/* Main Content Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Analytics" />
            <Tab label="Success Stories" />
            <Tab label="Transactions" />
            <Tab label="Reports" />
          </Tabs>
        </Paper>

        {/* Analytics Tab */}
        {tabValue === 0 && (
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography variant="h5" component="h2">
                Performance Analytics
              </Typography>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Timeframe</InputLabel>
                <Select
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  label="Timeframe"
                >
                  <MenuItem value="monthly">Last 30 Days</MenuItem>
                  <MenuItem value="quarterly">Quarterly</MenuItem>
                  <MenuItem value="yearly">Yearly</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Grid container spacing={4}>
              {/* Funds Raised Over Time */}
              <Grid item xs={12} lg={8}>
                <ChartCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Funds Raised Over Time
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <RechartsTooltip 
                          formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
                          labelStyle={{ color: '#333' }}
                        />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="amount" 
                          stroke="#667eea" 
                          fill="#667eea" 
                          fillOpacity={0.3}
                          strokeWidth={3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </ChartCard>
              </Grid>

              {/* Funds by Category */}
              <Grid item xs={12} lg={4}>
                <ChartCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Funds by Category
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <RechartsTooltip 
                          formatter={(value, name) => [
                            `$${(value * 850000 / 100).toLocaleString()}`,
                            name
                          ]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </ChartCard>
              </Grid>

              {/* Athletes by Sport */}
              <Grid item xs={12} lg={8}>
                <ChartCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Athletes Supported by Sport
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={sportData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Bar dataKey="athletes" fill="#667eea" name="Number of Athletes" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </ChartCard>
              </Grid>

              {/* Top Performing Categories */}
              <Grid item xs={12} lg={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Top Categories
                    </Typography>
                    <List>
                      {categoryData.slice(0, 5).map((category, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: category.color, width: 32, height: 32 }}>
                              <Typography variant="caption" sx={{ color: 'white', fontWeight: 'bold' }}>
                                {index + 1}
                              </Typography>
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={category.name}
                            secondary={`$${category.amount.toLocaleString()}`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Success Stories Tab */}
        {tabValue === 1 && (
          <Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
              Success Stories
            </Typography>
            
            <Grid container spacing={3}>
              {successStories.map((story) => (
                <Grid item xs={12} sm={6} md={3} key={story.id}>
                  <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handleStoryClick(story)}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar src={story.image} sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {story.athlete}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {story.sport}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
                        "{story.achievement}"
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">
                            ${story.fundsRaised.toLocaleString()}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {story.supporters} supporters
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={story.progress} 
                          sx={{ height: 8, borderRadius: 4 }}
                        />
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Chip 
                          label={`${story.progress}% Complete`} 
                          color="success" 
                          size="small" 
                        />
                        <IconButton size="small">
                          <ViewIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Transactions Tab */}
        {tabValue === 2 && (
          <Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
              Recent Transactions
            </Typography>
            
            <Card>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Supporter</TableCell>
                      <TableCell>Athlete</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell>Message</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ mr: 2, width: 32, height: 32 }}>
                              {transaction.supporter.charAt(0)}
                            </Avatar>
                            {transaction.supporter}
                          </Box>
                        </TableCell>
                        <TableCell>{transaction.athlete}</TableCell>
                        <TableCell align="right">
                          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                            ${transaction.amount.toLocaleString()}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                            "{transaction.message}"
                          </Typography>
                        </TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell align="center">
                          <IconButton size="small">
                            <ThumbUpIcon />
                          </IconButton>
                          <IconButton size="small">
                            <CommentIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Box>
        )}

        {/* Reports Tab */}
        {tabValue === 3 && (
          <Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
              Generate Reports
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Monthly Impact Report
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      Generate a comprehensive report of monthly impact metrics and achievements.
                    </Typography>
                    <Button variant="contained" startIcon={<DownloadIcon />}>
                      Download Report
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Success Stories Summary
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      Export a summary of all success stories and achievements.
                    </Typography>
                    <Button variant="contained" startIcon={<DownloadIcon />}>
                      Download Summary
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Financial Report
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      Detailed financial breakdown of funds raised and distributed.
                    </Typography>
                    <Button variant="contained" startIcon={<DownloadIcon />}>
                      Download Financial Report
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Custom Report
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      Create a custom report with specific metrics and timeframes.
                    </Typography>
                    <Button variant="outlined" startIcon={<FilterIcon />}>
                      Create Custom Report
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* FAQ Section */}
            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" gutterBottom>
                Frequently Asked Questions
              </Typography>
              
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">How is the success rate calculated?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The success rate is calculated based on athletes who have achieved their primary goals (such as qualifying for competitions, earning scholarships, or reaching performance milestones) within 12 months of receiving support.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">How often is the data updated?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    All data is updated in real-time. Financial transactions are reflected immediately, while performance metrics are updated daily.
      </Typography>
                </AccordionDetails>
              </Accordion>
              
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Can I export data for my own analysis?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, you can download various reports in CSV, PDF, and Excel formats from the Reports tab above.
      </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        )}
    </Container>

      {/* Success Story Dialog */}
      <Dialog 
        open={storyDialogOpen} 
        onClose={() => setStoryDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        {selectedStory && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={selectedStory.image} sx={{ width: 48, height: 48 }} />
                <Box>
                  <Typography variant="h6">
                    {selectedStory.athlete} - {selectedStory.sport}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Success Story
                  </Typography>
                </Box>
              </Box>
            </DialogTitle>
            
            <DialogContent>
              <Alert severity="success" sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Achievement: {selectedStory.achievement}
                </Typography>
              </Alert>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Funds Raised
                  </Typography>
                  <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                    ${selectedStory.fundsRaised.toLocaleString()}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Supporters
                  </Typography>
                  <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                    {selectedStory.supporters}
                  </Typography>
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Progress
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={selectedStory.progress} 
                  sx={{ height: 10, borderRadius: 5, mb: 1 }}
                />
                <Typography variant="body2" color="text.secondary">
                  {selectedStory.progress}% goal achieved
                </Typography>
              </Box>
            </DialogContent>
            
            <DialogActions sx={{ p: 3 }}>
              <Button onClick={() => setStoryDialogOpen(false)}>
                Close
              </Button>
              <Button variant="contained" startIcon={<ShareIcon />}>
                Share Story
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Tracker;