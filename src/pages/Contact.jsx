import React, { useState } from "react"
import SeoSchema from "../components/SeoSchema"
import { Link } from "react-router-dom"
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme
} from "@mui/material"
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime, MdSend, MdArrowForward, MdExpandMore } from "react-icons/md"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e) => setFormData((prev) => ({ ...prev, category: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setSubmitSuccess(true)
    setIsSubmitting(false)
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({ name: "", email: "", subject: "", category: "", message: "" })
    }, 3000)
  }

  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      <SeoSchema
        type="WebPage"
        name="Contact Us | You In Sports"
        description="Get in touch with the You In Sports team."
        url="https://youinsports.com/contact"
      />

      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Grid container sx={{ minHeight: '100vh' }}>
          {/* LEFT: Content & Form */}
          <Grid item xs={12} lg={6} sx={{ p: { xs: 4, md: 10 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Box sx={{ mb: 6 }}>
                <Typography
                  className="text-display"
                  sx={{
                    color: 'var(--gray-900)',
                    fontSize: { xs: '3rem', md: '5rem' },
                    fontWeight: 800,
                    lineHeight: 1,
                    mb: 3
                  }}
                >
                  Let's Talk <br /> <span className="text-gradient-primary">Sports.</span>
                </Typography>
                <Typography sx={{ fontSize: '1.2rem', color: 'var(--gray-500)', maxWidth: 500 }}>
                  Whether you're an athlete, organizer, or brand, we're ready to help you level up.
                </Typography>
              </Box>

              {submitSuccess ? (
                <Paper sx={{ p: 4, bgcolor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', textAlign: 'center' }}>
                  <Box sx={{ width: 60, height: 60, bgcolor: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                    <MdCheckCircle color="white" size={32} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#15803d', mb: 1 }}>Message Sent!</Typography>
                  <Typography sx={{ color: '#166534' }}>We'll be in touch shortly.</Typography>
                </Paper>
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: 600 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth label="Name" name="name" required value={formData.name} onChange={handleInputChange}
                        variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth label="Email" name="email" type="email" required value={formData.email} onChange={handleInputChange}
                        variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                      />
                    </Grid>
                  </Grid>

                  <Select
                    fullWidth displayEmpty value={formData.category} onChange={handleSelectChange} required
                    sx={{ borderRadius: '12px' }}
                  >
                    <MenuItem value="" disabled>Select a Topic</MenuItem>
                    <MenuItem value="general">General Inquiry</MenuItem>
                    <MenuItem value="athlete">Support for Athletes</MenuItem>
                    <MenuItem value="organizer">For Organizers</MenuItem>
                    <MenuItem value="partnership">Partnerships</MenuItem>
                  </Select>

                  <TextField
                    fullWidth label="Message" name="message" multiline rows={4} required value={formData.message} onChange={handleInputChange}
                    variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'var(--gray-900)',
                      color: 'white',
                      py: 2,
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'black' }
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Box>
              )}
            </motion.div>
          </Grid>

          {/* RIGHT: Visuals & Info */}
          <Grid item xs={12} lg={6} sx={{ position: 'relative', bgcolor: 'var(--uinsports-navy)', color: 'white', p: { xs: 4, md: 10 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'radial-gradient(circle at 100% 0%, var(--uinsports-orange), transparent 50%)' }} />

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 6 }}>Contact Info</Typography>

                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                      <Box sx={{ width: 48, height: 48, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MdEmail size={24} color="#FDBA74" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Email</Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>hello@youinsports.com</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                      <Box sx={{ width: 48, height: 48, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MdPhone size={24} color="#FDBA74" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Phone</Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>+1 (555) 123-4567</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                      <Box sx={{ width: 48, height: 48, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MdLocationOn size={24} color="#FDBA74" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Office</Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>123 Sports Ave, AC 90210</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                      <Box sx={{ width: 48, height: 48, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MdAccessTime size={24} color="#FDBA74" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Hours</Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Mon-Fri, 9am - 6pm PST</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 8, p: 4, borderRadius: '24px', bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>FAQ</Typography>
                  <Accordion sx={{ bgcolor: 'transparent', boxShadow: 'none', color: 'white', '&:before': { display: 'none' }, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <AccordionSummary expandIcon={<MdExpandMore color="white" />} sx={{ px: 0 }}>
                      <Typography sx={{ fontWeight: 600 }}>What is current response time?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0 }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>Usually within 24 hours.</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ bgcolor: 'transparent', boxShadow: 'none', color: 'white', '&:before': { display: 'none' } }}>
                    <AccordionSummary expandIcon={<MdExpandMore color="white" />} sx={{ px: 0 }}>
                      <Typography sx={{ fontWeight: 600 }}>Where are you located?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0 }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>We are a remote-first company with HQ in Sports City.</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>

              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
import { MdCheckCircle } from "react-icons/md";
