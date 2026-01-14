import React, { createContext, useMemo, useState, useEffect } from 'react';
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

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#0F172A', // Deep Navy
          light: '#334155',
          dark: '#020617',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#F26A27', // Signature Orange
          light: '#FB923C',
          dark: '#C2410C',
          contrastText: '#ffffff',
        },
        background: {
          default: '#F8FAFC', // Slate 50
          paper: '#FFFFFF',
        },
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
          disabled: '#94A3B8',
        },
        divider: 'rgba(15, 23, 42, 0.06)',
      }
      : {
        primary: {
          main: '#38BDF8', // Sky Blue
          light: '#7DD3FC',
          dark: '#0369A1',
          contrastText: '#0F172A',
        },
        secondary: {
          main: '#F26A27',
          light: '#FB923C',
          dark: '#C2410C',
          contrastText: '#ffffff',
        },
        background: {
          default: '#020617', // Onyx
          paper: '#0F172A', // Navy Surface
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          disabled: '#475569',
        },
        divider: 'rgba(255, 255, 255, 0.06)',
      }),
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '4rem',
      lineHeight: 1.1,
      letterSpacing: '-0.04em',
      textTransform: 'tight',
    },
    h2: {
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontWeight: 800,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === 'light' ? '#F8FAFC' : '#020617',
          color: mode === 'light' ? '#0F172A' : '#F8FAFC',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          '& ::-webkit-scrollbar': { width: '10px' },
          '& ::-webkit-scrollbar-track': { background: mode === 'light' ? '#F1F5F9' : '#0B1120' },
          '& ::-webkit-scrollbar-thumb': {
            background: mode === 'light' ? '#CBD5E1' : '#334155',
            borderRadius: '10px',
            border: `3px solid ${mode === 'light' ? '#F1F5F9' : '#0B1120'}`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          padding: '12px 28px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: mode === 'light' ? '#0F172A' : 'linear-gradient(135deg, #38BDF8 0%, #0369A1 100%)',
          '&:hover': {
            background: mode === 'light' ? '#1E293B' : 'linear-gradient(135deg, #7DD3FC 0%, #0EA5E9 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #F26A27 0%, #EA580C 100%)',
          boxShadow: '0 10px 15px -3px rgba(242, 106, 39, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(2, 6, 23, 0.7)',
          backdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: `1px solid ${mode === 'light' ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255, 255, 255, 0.05)'}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 32,
          border: `1px solid ${mode === 'light' ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255, 255, 255, 0.05)'}`,
          boxShadow: mode === 'light'
            ? '0 20px 25px -5px rgba(15, 23, 42, 0.05)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: mode === 'light'
              ? '0 40px 40px -10px rgba(15, 23, 42, 0.08)'
              : '0 40px 40px -10px rgba(0, 0, 0, 0.5)',
            transform: 'scale(1.02) translateY(-8px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 24,
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
          borderRadius: 12,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#418BCA',
          },
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('uinsports-theme');
    return savedMode || 'light';
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('uinsports-theme', newMode);
          return newMode;
        });
      },
    }),
    [],
  );

  const theme = useMemo(() => responsiveFontSizes(createTheme(getDesignTokens(mode))), [mode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
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
                <Route path="/support" component={Support} />
                <Route path="/organizers" component={Organizers} />
                <Route path="/tracker" component={Tracker} />
                <Route path="/video-analysis" component={VideoAnalysis} />
                <Route path="/ai-agents" component={AIAgents} />
                <Route path="/plans" component={Plans} />
                <Route path="/faq" component={FAQ} />
                <Route path="/contact" component={Contact} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/terms" component={Terms} />
                <Route path="/athletes/:id" component={AthleteProfile} />
                <Route path="/profile/player" component={PlayerProfile} />
                <Route path="/profile/organizer" component={OrganizerProfile} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
