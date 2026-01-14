import React, { useState } from "react"
import { Link } from "react-router-dom"
import SeoSchema from "../components/SeoSchema"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  Chip,
  InputAdornment
} from "@mui/material"
import { MdExpandMore, MdSearch, MdMessage, MdEmail, MdHelpOutline } from "react-icons/md"
import { motion } from "framer-motion"

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        { id: "gs-1", q: "How do I create an account?", a: "Click 'Sign Up', choose your role (Athlete, Coach, Organizer), and verify your email to get started." },
        { id: "gs-2", q: "Is it free to join?", a: "Yes! Basic membership is free for everyone. Premium features are available for power users." },
      ]
    },
    {
      category: "For Athletes",
      questions: [
        { id: "at-1", q: "How do I get sponsored?", a: "Build your profile, post highlights, and use our matching tool to connect with verified sponsors." },
        { id: "at-2", q: "Can I track my stats?", a: "Absolutely. Use the Performance Tracker to log training sessions and match results." },
      ]
    },
    {
      category: "For Organizers",
      questions: [
        { id: "or-1", q: "How do I list an event?", a: "Go to your dashboard, select 'Create Event', and fill in the details. It will be published to our global calendar." },
        { id: "or-2", q: "What are the fees?", a: "Listing is free. We take a small commission only on paid ticket sales." },
      ]
    }
  ];

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q =>
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <Box sx={{ bgcolor: 'var(--gray-50)', minHeight: '100vh' }}>
      <SeoSchema
        type="WebPage"
        name="Help Center | You In Sports"
        description="Frequently asked questions and support."
        url="https://youinsports.com/faq"
      />

      {/* --- HERO --- */}
      <Box sx={{ py: 10, bgcolor: 'var(--uinsports-navy)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, bgcolor: 'var(--uinsports-blue)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2 }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography className="text-display" sx={{ mb: 3, fontWeight: 800 }}>How can we help?</Typography>
            <Paper
              elevation={0}
              sx={{
                p: 1,
                display: 'flex',
                alignItems: 'center',
                borderRadius: '50px',
                bgcolor: 'white',
                maxWidth: 600,
                mx: 'auto',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              <Box sx={{ p: 1.5, display: 'flex' }}><MdSearch size={24} color="#9CA3AF" /></Box>
              <TextField
                fullWidth
                placeholder="Search questions, topics..."
                variant="standard"
                InputProps={{ disableUnderline: true }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ px: 1 }}
              />
              <Button variant="contained" sx={{ borderRadius: '50px', px: 4, bgcolor: 'var(--uinsports-orange)', '&:hover': { bgcolor: '#d95d22' } }}>Search</Button>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* --- FAQ LIST --- */}
      <Container maxWidth="md" sx={{ py: 10 }}>
        {filteredCategories.length > 0 ? filteredCategories.map((cat, i) => (
          <Box key={i} sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'var(--gray-800)' }}>{cat.category}</Typography>
            {cat.questions.map((q, j) => (
              <Accordion
                key={j}
                sx={{
                  mb: 2,
                  borderRadius: '16px !important',
                  boxShadow: 'none',
                  border: '1px solid var(--gray-200)',
                  '&:before': { display: 'none' },
                  transition: 'all 0.2s',
                  '&:hover': { borderColor: 'var(--uinsports-blue)', transform: 'translateY(-2px)' }
                }}
              >
                <AccordionSummary expandIcon={<MdExpandMore color="var(--gray-400)" />}>
                  <Typography sx={{ fontWeight: 600, color: 'var(--gray-900)' }}>{q.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: 'var(--gray-600)', lineHeight: 1.6 }}>{q.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )) : (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h6" sx={{ color: 'var(--gray-500)' }}>No results found for "{searchTerm}"</Typography>
          </Box>
        )}
      </Container>


      {/* --- SUPPORT BOTTOM --- */}
      <Box sx={{ bgcolor: 'white', py: 10, borderTop: '1px solid var(--gray-100)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Still stuck?</Typography>
            <Typography sx={{ color: 'var(--gray-500)' }}>Our team is just a message away.</Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Paper
                  sx={{
                    p: 4, textAlign: 'center', borderRadius: '24px',
                    border: '1px solid var(--gray-200)',
                    transition: '0.3s',
                    cursor: 'pointer',
                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', borderColor: 'var(--uinsports-blue)' }
                  }}
                >
                  <Box sx={{ width: 60, height: 60, mx: 'auto', mb: 3, borderRadius: '50%', bgcolor: 'rgba(65, 139, 202, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdMessage size={28} color="#418BCA" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'var(--gray-900)' }}>Chat with Support</Typography>
                  <Typography sx={{ color: 'var(--gray-500)' }}>Get real-time assistance.</Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <a href="mailto:support@youinsports.com" style={{ textDecoration: 'none' }}>
                <Paper
                  sx={{
                    p: 4, textAlign: 'center', borderRadius: '24px',
                    border: '1px solid var(--gray-200)',
                    transition: '0.3s',
                    cursor: 'pointer',
                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', borderColor: 'var(--uinsports-orange)' }
                  }}
                >
                  <Box sx={{ width: 60, height: 60, mx: 'auto', mb: 3, borderRadius: '50%', bgcolor: 'rgba(242, 106, 39, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdEmail size={28} color="#F26A27" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'var(--gray-900)' }}>Email Us</Typography>
                  <Typography sx={{ color: 'var(--gray-500)' }}>We reply within 24 hours.</Typography>
                </Paper>
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  )
}
