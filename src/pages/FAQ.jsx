import React from "react"
import { Link } from "react-router-dom"
import SeoSchema from "../components/SeoSchema"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material"
import { MdHelpOutline, MdExpandMore, MdSearch, MdMessage, MdPhone, MdMail } from "react-icons/md"

export default function FAQ() {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          id: "getting-started-1",
          question: "How do I create an account on You In Sports?",
          answer:
            "Creating an account is simple! Click the 'Sign Up' button, choose your account type (Athlete, Coach, or Organizer), fill in your basic information, and verify your email. You'll be ready to start building your sports profile immediately.", // Placeholder video ID
          tags: ["account", "signup", "registration"],
        },
        {
          id: "getting-started-2",
          question: "What types of accounts are available?",
          answer:
            "You In Sports offers three main account types: Athlete accounts for sports professionals seeking support and opportunities, Coach accounts for mentors and trainers, and Organizer accounts for event planners and sports organizations. Each account type has specialized features tailored to your needs.",
          tags: ["account types", "features"],
        },
        {
          id: "getting-started-3",
          question: "How do I complete my profile?",
          answer:
            "After signing up, navigate to your profile settings. Add your sports background, achievements, photos, and goals. The more complete your profile, the better we can match you with opportunities and supporters. Our profile completion guide walks you through each step.",
          tags: ["profile", "setup", "completion"],
        },
      ],
    },
    {
      category: "For Athletes",
      questions: [
        {
          id: "athletes-1",
          question: "How can I get financial support for my sports career?",
          answer:
            "UinSports connects athletes with supporters through our funding platform. Create compelling content about your journey, set clear funding goals, and engage with your community. Supporters can contribute to specific needs like equipment, training, or competition travel.",
          tags: ["funding", "support", "financial"],
        },
        {
          id: "athletes-2",
          question: "How do I track my performance and progress?",
          answer:
            "Our performance tracker allows you to log training sessions, competition results, and personal bests. You can visualize your progress over time, share achievements with supporters, and use data to improve your training strategy.",
          tags: ["performance", "tracking", "analytics"],
        },
        {
          id: "athletes-3",
          question: "Can I connect with coaches and mentors?",
          answer:
            "Yes! Browse our coach directory, read reviews, and connect with certified professionals in your sport. Many coaches offer both in-person and virtual training sessions. You can also join group training programs and workshops.",
          tags: ["coaches", "mentors", "training"],
        },
      ],
    },
    {
      category: "For Coaches",
      questions: [
        {
          id: "coaches-1",
          question: "How can I offer my coaching services?",
          answer:
            "Create a detailed coach profile showcasing your experience, certifications, and coaching philosophy. Set your availability, pricing, and preferred training methods. Athletes can then book sessions directly through the platform.",
          tags: ["coaching", "services", "booking"],
        },
        {
          id: "coaches-2",
          question: "What tools are available for managing athletes?",
          answer:
            "Our coach dashboard includes athlete progress tracking, session scheduling, performance analytics, and communication tools. You can create custom training plans, monitor athlete development, and provide feedback efficiently.",
          tags: ["management", "tools", "dashboard"],
        },
      ],
    },
    {
      category: "For Organizers",
      questions: [
        {
          id: "organizers-1",
          question: "How do I create and promote sports events?",
          answer:
            "Use our event creation tool to set up competitions, tournaments, or training camps. Add event details, registration requirements, and promotional materials. Our platform helps you reach the right audience and manage registrations seamlessly.",
          tags: ["events", "promotion", "organization"],
        },
        {
          id: "organizers-2",
          question: "How can I find sponsors for my events?",
          answer:
            "Our sponsor matching system connects event organizers with potential sponsors based on event type, audience, and sponsor preferences. Create compelling sponsorship packages and track sponsor engagement through our analytics dashboard.",
          tags: ["sponsors", "funding", "partnerships"],
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          id: "technical-1",
          question: "I'm having trouble uploading photos or videos",
          answer:
            "Ensure your files are in supported formats (JPG, PNG for photos; MP4, MOV for videos) and under our size limits (10MB for photos, 100MB for videos). Clear your browser cache and try again. If issues persist, contact our technical support team.",
          tags: ["upload", "technical", "media"],
        },
        {
          id: "technical-2",
          question: "How do I reset my password?",
          answer:
            "Click 'Forgot Password' on the login page, enter your email address, and check your inbox for reset instructions. If you don't receive the email within 10 minutes, check your spam folder or contact support.",
          tags: ["password", "reset", "login"],
        },
        {
          id: "technical-3",
          question: "Is my personal information secure?",
          answer:
            "We use industry-standard encryption and security measures to protect your data. Your personal information is never shared without your consent, and you have full control over your privacy settings.",
          tags: ["security", "privacy", "data"],
        },
      ],
    },
  ]

  // const renderYouTube = (videoId) => {
  //   const src = `https://www.youtube.com/embed/${videoId}`
  //   return (
  //     <Box sx={{ position: "relative", paddingTop: "56.25%", borderRadius: 1, overflow: "hidden" }}>
  //       <Box component="iframe" src={src} title="FAQ video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} />
  //     </Box>
  //   )
  // }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SeoSchema
        type="WebPage"
        name="Frequently Asked Questions - You In Sports"
        description="Find answers to common questions about You In Sports platform, features, and services"
        url="https://uinsports.com/faq"
      />
      <Box sx={{ width: "100%", py: { xs: 6, md: 8 }, background: "linear-gradient(to bottom, rgba(65,139,202,0.05), #fff)" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: "9999px", backgroundColor: "rgba(65,139,202,0.1)", mb: 1 }}>
              <MdHelpOutline style={{ fontSize: 32, color: "#418BCA" }} />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: 28, sm: 34, md: 40 } }}>
              Frequently Asked <Box component="span" sx={{ color: "#418BCA" }}>Questions</Box>
            </Typography>
            <Typography sx={{ maxWidth: 700, color: "#6b7280", fontSize: { md: 18 } }}>
              Find quick answers to common questions about You In Sports. Can't find what you're looking for?
              <Box component="span" sx={{ ml: 1 }}>
                <Link to="/contact" style={{ color: "#418BCA", textDecoration: "underline" }}>Contact our support team</Link>.
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ width: "100%", py: 3, borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 480, mx: "auto", position: "relative" }}>
            {/* <MdSearch style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} /> */}
            <TextField fullWidth placeholder="Search FAQ..." variant="outlined" size="small" sx={{ pl: 4 }} />
          </Box>
        </Container>
      </Box>

      <Box sx={{ width: "100%", py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 960, mx: "auto", display: "flex", flexDirection: "column", gap: 4 }}>
            {faqCategories.map((category) => (
              <Box key={category.category}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>{category.category}</Typography>
                  <Chip label={`${category.questions.length} questions`} sx={{ backgroundColor: "rgba(65,139,202,0.1)", color: "#418BCA" }} />
                </Box>

                <Box>
                  {category.questions.map((faq) => (
                    <Card key={faq.id} className="clean-card clean-hover-lift" sx={{ mb: 2, borderRadius: 2, border: "1px solid #e5e7eb" }}>
                      <Accordion disableGutters>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                          <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Typography sx={{ color: "#6b7280", lineHeight: 1.75 }}>{faq.answer}</Typography>
                            {/* <Box sx={{ backgroundColor: "#f3f4f6", p: 2, borderRadius: 1 }}>
                              <Typography sx={{ fontWeight: 600, mb: 1, fontSize: 12, color: "#6b7280", textTransform: "uppercase", letterSpacing: 0.6 }}>Video Tutorial</Typography>
                              {renderYouTube(faq.videoId)}
                            </Box> */}
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                              {faq.tags.map((tag) => (
                                <Chip key={tag} variant="outlined" label={tag} sx={{ borderColor: "rgba(65,139,202,0.2)", color: "#418BCA" }} />
                              ))}
                            </Box>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Card>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ width: "100%", py: 6, backgroundColor: "#f3f4f6" }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 960, mx: "auto" }}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Still Need Help?</Typography>
              <Typography sx={{ color: "#6b7280" }}>Our support team is here to help you succeed on your sports journey.</Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card className="clean-card clean-hover-lift">
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: "9999px", backgroundColor: "rgba(65,139,202,0.1)", mb: 1.5 }}>
                      <MdMessage style={{ color: "#418BCA", fontSize: 24 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Live Chat</Typography>
                    <Typography sx={{ fontSize: 14, color: "#6b7280", mb: 1.5 }}>Get instant help from our support team</Typography>
                    <Button 
                      sx={{
                      color: 'white',
                      fontWeight: 600,
                      px: 3,
                      py: 1.5,
                      borderRadius: '8px',
                      backgroundColor: 'rgb(242 106 39 / var(--tw-bg-opacity, 1))',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 150, 255, 0.976)',
                      },
                    }}
                    >Start Chat</Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card className="clean-card clean-hover-lift">
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: "9999px", backgroundColor: "rgba(242,106,39,0.1)", mb: 1.5 }}>
                      <MdMail style={{ color: "#F26A27", fontSize: 24 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Email Support</Typography>
                    <Typography sx={{ fontSize: 14, color: "#6b7280", mb: 1.5 }}>Send us a detailed message</Typography>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                      <Button variant="outlined">Send Email</Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card className="clean-card clean-hover-lift">
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: "9999px", backgroundColor: "rgba(65,139,202,0.1)", mb: 1.5 }}>
                      <MdPhone style={{ color: "#418BCA", fontSize: 24 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Phone Support</Typography>
                    <Typography sx={{ fontSize: 14, color: "#6b7280", mb: 1.5 }}>Speak directly with our team</Typography>
                    <Button variant="outlined">Call Now</Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
