import React, { useState } from "react"
import SeoSchema from "../components/SeoSchema"
import { Link } from "react-router-dom"
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { MdEmail, MdPhone, MdPlace, MdAccessTime, MdSend, MdChat, MdGroups, MdFavorite } from "react-icons/md"

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

  const handleSelectChange = (value) => setFormData((prev) => ({ ...prev, category: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitSuccess(true)
    setIsSubmitting(false)

    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SeoSchema
        type="WebPage"
        name="Contact Us - You In Sports"
        description="Get in touch with the You In Sports team. We're here to help athletes, coaches, and supporters."
        url="https://uinsports.com/contact"
      />
      <Box sx={{ width: "100%", py: 8, background: "linear-gradient(135deg, #0C3042 0%, #418BCA 100%)", color: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", px: 1.5, py: 0.5, borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.1)", fontWeight: 600, mb: 1 }}>
              <MdChat style={{ marginRight: 8 }} /> Get in Touch
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: 32, md: 40 } }}>Contact Us</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 600 }}>
              We're here to help athletes, coaches, and supporters. Reach out to us and let's make sports dreams happen together!
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ width: "100%", py: 8, backgroundColor: "#f9fafb" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className="clean-card clean-hover-lift" sx={{ textAlign: "center" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ width: 48, height: 48, mx: "auto", mb: 1.5, borderRadius: "9999px", backgroundColor: "rgba(65,139,202,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MdEmail style={{ color: "#418BCA", fontSize: 24 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: "#0C3042", mb: 0.5 }}>Email Us</Typography>
                  <Typography sx={{ fontSize: 14, color: "#6b7280", mb: 1 }}>General inquiries</Typography>
                  <a href="mailto:hello@youinsports.com" style={{ color: "#418BCA", textDecoration: "underline", fontWeight: 600 }}>hello@youinsports.com</a>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className="clean-card clean-hover-lift" sx={{ textAlign: "center" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ width: 48, height: 48, mx: "auto", mb: 1.5, borderRadius: "9999px", backgroundColor: "rgba(242,106,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MdPhone style={{ color: "#F26A27", fontSize: 24 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: "#0C3042", mb: 0.5 }}>Call Us</Typography>
                  <Typography sx={{ fontSize: 14, color: "#6b7280", mb: 1 }}>Mon-Fri 9AM-6PM PST</Typography>
                  <a href="tel:+15551234567" style={{ color: "#F26A27", textDecoration: "underline", fontWeight: 600 }}>+1 (555) 123-4567</a>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className="clean-card clean-hover-lift" sx={{ textAlign: "center" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ width: 48, height: 48, mx: "auto", mb: 1.5, borderRadius: "9999px", backgroundColor: "rgba(12,48,66,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MdPlace style={{ color: "#0C3042", fontSize: 24 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: "#0C3042", mb: 0.5 }}>Visit Us</Typography>
                  <Typography sx={{ fontSize: 14, color: "#6b7280" }}>123 Sports Avenue<br/>Athletic City, AC 12345</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className="clean-card clean-hover-lift" sx={{ textAlign: "center" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ width: 48, height: 48, mx: "auto", mb: 1.5, borderRadius: "9999px", backgroundColor: "rgba(65,139,202,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MdAccessTime style={{ color: "#418BCA", fontSize: 24 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: "#0C3042", mb: 0.5 }}>Support Hours</Typography>
                  <Typography sx={{ fontSize: 14, color: "#6b7280" }}>Monday - Friday<br/>9:00 AM - 6:00 PM PST</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <Card>
                <Typography>
                  <Typography sx={{ fontWeight: 600, padding: 3, fontSize: "25px" }}>Send us a Message</Typography>
                  <Typography sx={{ fontWeight: 400, marginLeft: 3, fontSize: "20px" , color: "#6b7280",marginTop: -3 }}>
                    Fill out the form below and we'll get back to you within 24 hours. Let's chat! 
                  </Typography>
                </Typography>
                <CardContent>
                  {submitSuccess ? (
                    <Box sx={{ textAlign: "center", py: 4 }}>
                      <Box sx={{ width: 64, height: 64, mx: "auto", mb: 2, borderRadius: "9999px", backgroundColor: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <MdSend style={{ color: "#16a34a", fontSize: 32 }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: "#16a34a", fontWeight: 700, mb: 1 }}>Message Sent Successfully! 🎉</Typography>
                      <Typography sx={{ color: "#6b7280" }}>
                        Thanks for reaching out! We'll get back to you within 24 hours. Keep being awesome!
                      </Typography>
                    </Box>
                  ) : (
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField id="name" name="name" type="text" label="Full Name *" required value={formData.name} onChange={handleInputChange} fullWidth />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField id="email" name="email" type="email" label="Email Address *" required value={formData.email} onChange={handleInputChange} fullWidth />
                        </Grid>
                      </Grid>

                      <Box>
                        <InputLabel id="category-label">Category *</InputLabel>
                        <Select labelId="category-label" id="category" value={formData.category} label="Category *" onChange={(e) => handleSelectChange(e.target.value)} fullWidth required>
                          <MenuItem value="general">General Inquiry</MenuItem>
                          <MenuItem value="athlete">Athlete Support</MenuItem>
                          <MenuItem value="coach">Coach/Sponsor</MenuItem>
                          <MenuItem value="technical">Technical Support</MenuItem>
                          <MenuItem value="partnership">Partnership</MenuItem>
                          <MenuItem value="media">Media Inquiry</MenuItem>
                        </Select>
                      </Box>

                      <TextField id="subject" name="subject" type="text" label="Subject *" required value={formData.subject} onChange={handleInputChange} fullWidth />
                      <TextField id="message" name="message" label="Message *" required value={formData.message} onChange={handleInputChange} fullWidth multiline rows={6} />

                      <Button type="submit" disabled={isSubmitting} size="large" sx={{ 
                        width: "100%", 
                        color: "white",
                        backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 150, 255, 0.976)',
                      }, }}>
                        {isSubmitting ? "Sending Message..." : (<> <MdSend style={{ marginRight: 8 }} /> Send Message</>)}
                      </Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Card className="clean-card">
                  <Typography>
                    <Typography sx={{ fontWeight: 600, padding: 3, fontSize: "25px" }}>Quick Help</Typography>
                    <Typography sx={{ marginLeft: 3, fontSize: "20px", color: "#6b7280", marginTop: -3 }}>Need immediate assistance? Check out these resources:</Typography>
                  </Typography>
                  <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <MdGroups style={{ color: "#418BCA", fontSize: 20, marginTop: 4 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 600, color: "#0C3042" }}>For Athletes</Typography>
                        <Typography sx={{ fontSize: 14, color: "#6b7280" }}>
                          Need help creating your profile or connecting with supporters? Check our <Link to="/faq" style={{ color: "#418BCA", textDecoration: "underline" }}>FAQ section</Link> for quick answers.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <MdFavorite style={{ color: "#F26A27", fontSize: 20, marginTop: 4 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 600, color: "#0C3042" }}>For Supporters</Typography>
                        <Typography sx={{ fontSize: 14, color: "#6b7280" }}>
                          Questions about supporting athletes or making donations? Visit our <Link style={{ color: "#F26A27", textDecoration: "underline" }}>support page</Link> for guidance.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <MdChat style={{ color: "#0C3042", fontSize: 20, marginTop: 4 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 600, color: "#0C3042" }}>Technical Issues</Typography>
                        <Typography sx={{ fontSize: 14, color: "#6b7280" }}>
                          Experiencing technical problems? Email us directly at <a href="mailto:support@uinsports.com" style={{ color: "#0C3042", textDecoration: "underline" }}>support@uinsports.com</a>
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Card className="clean-card">
                    <Typography sx={{ fontWeight: 600, padding: 2, fontSize: "20px" }}>Frequently Asked Questions</Typography>
                  <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: "#0C3042", mb: 0.5 }}>How quickly will you respond?</Typography>
                      <Typography sx={{ fontSize: 14, color: "#6b7280" }}>
                        We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: "#0C3042", mb: 0.5 }}>Can I schedule a call?</Typography>
                      <Typography sx={{ fontSize: 14, color: "#6b7280" }}>
                        Mention in your message that you'd like to schedule a call, and we'll send you our calendar link to book a convenient time.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: "#0C3042", mb: 0.5 }}>Do you offer partnerships?</Typography>
                      <Typography sx={{ fontSize: 14, color: "#6b7280" }}>
                        Yes! We're always interested in partnerships that benefit our athlete community. Select "Partnership" in the category above to get started.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
