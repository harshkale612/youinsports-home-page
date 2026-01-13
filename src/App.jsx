import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Support from './pages/Support';
import Organizers from './pages/Organizers';
import Tracker from './pages/Tracker';
import VideoAnalysis from './pages/VideoAnalysis';
import AIAgents from './pages/AIAgents';
import Plans from './pages/Plans';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AthleteProfile from './pages/AthleteProfile';
import PlayerProfile from './pages/PlayerProfile';
import OrganizerProfile from './pages/OrganizerProfile';
import './App.css';

let theme = createTheme({
  palette: {
    primary: {
      main: '#418BCA', 
    },
    secondary: {
      main: '#F26A27', 
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#0C3042',
      secondary: '#6b7280',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.875rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
        },
        containedPrimary: {
          backgroundImage: 'linear-gradient(135deg, #F26A27, #418BCA)',
          color: '#ffffff',
          '&:hover': {
            backgroundImage: 'linear-gradient(135deg, rgba(242,106,39,0.9), rgba(65,139,202,0.9))',
          },
        },
        outlined: {
          borderWidth: 2,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          color: '#0C3042',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)'
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          minWidth: 'auto',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        notchedOutline: {
          borderColor: '#e5e7eb',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/community" component={Community} />
              {/* <Route path="/support" component={Support} /> */}
              <Route path="/organizers" component={Organizers} />
              {/* <Route path="/tracker" component={Tracker} /> */}
              {/* <Route path="/video-analysis" component={VideoAnalysis} />
              <Route path="/ai-agents" component={AIAgents} />
              <Route path="/plans" component={Plans} /> */}
              <Route path="/faq" component={FAQ} />
              <Route path="/contact" component={Contact} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/terms" component={Terms} />
              <Route path="/athletes/:id" component={AthleteProfile} />
              {/* <Route path="/profile/player" component={PlayerProfile} /> */}
              <Route path="/profile/organizer" component={OrganizerProfile} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
