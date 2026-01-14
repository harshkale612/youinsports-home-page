import React from "react"
import { Link } from "react-router-dom"
import SeoSchema from "../components/SeoSchema"
import { Box, Container, Typography, Card, CardContent, Paper, Divider } from "@mui/material"
import { MdLock, MdSecurity, MdContactMail } from "react-icons/md"
import { motion } from "framer-motion"

export default function Privacy() {
  return (
    <Box sx={{ bgcolor: 'var(--gray-50)', minHeight: '100vh' }}>
      <SeoSchema
        type="WebPage"
        name="Privacy Policy | You In Sports"
        description="How we collect, use, and protect your personal information."
        url="https://youinsports.com/privacy"
      />

      {/* --- HERO --- */}
      <Box sx={{ py: 10, bgcolor: 'var(--uinsports-navy)', color: 'white', textAlign: 'center', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'radial-gradient(circle at 50% 50%, var(--uinsports-blue), transparent 70%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
              <MdLock size={28} color="#93C5FD" />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>Privacy Policy</Typography>
            <Typography sx={{ color: 'var(--gray-300)', fontSize: '1.2rem' }}>
              Last updated: January 2026
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* --- CONTENT --- */}
      <Container maxWidth="md" sx={{ py: 10, mt: -5, position: 'relative', zIndex: 2 }}>
        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: '24px', border: '1px solid var(--gray-200)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>

          <Section title="1. Introduction">
            Welcome to You In Sports. We are committed to protecting your personal information and your right to privacy.
            If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information,
            please contact us at <Link to="/contact" style={{ color: 'var(--uinsports-blue)', fontWeight: 600 }}>privacy@youinsports.com</Link>.
          </Section>

          <Divider sx={{ my: 4 }} />

          <Section title="2. Information We Collect">
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Personal Information</Typography>
            <Typography paragraph sx={{ color: 'var(--gray-600)' }}>
              We collect personal information that you voluntarily provide to us when you register on the website,
              express an interest in obtaining information about us or our products and services, when you participate in activities on the website
              (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise when you contact us.
            </Typography>

            <Box sx={{ bgcolor: 'var(--gray-50)', p: 3, borderRadius: '12px', mb: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'var(--gray-900)' }}>Data Points:</Typography>
              <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--gray-600)' }}>
                <li>Names and Contact Data</li>
                <li>Credentials (passwords, hints)</li>
                <li>Payment Data (processed securely by Stripe)</li>
                <li>Social Media Login Data</li>
              </ul>
            </Box>
          </Section>

          <Section title="3. How We Use Your Data">
            <Typography paragraph sx={{ color: 'var(--gray-600)' }}>
              We use personal information collected via our website for a variety of business purposes described below.
              We process your personal information for these purposes in reliance on our legitimate business interests,
              in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--gray-600)' }}>
              <li>To facilitate account creation and logon process.</li>
              <li>To post testimonials.</li>
              <li>To request feedback.</li>
              <li>To enable user-to-user communications.</li>
              <li>To manage user accounts and match athletes with sponsors.</li>
            </ul>
          </Section>

          <Section title="4. Contact Us">
            If you have questions or comments about this policy, you may email us or contact us by post at:

            <Box sx={{ mt: 3, p: 3, border: '1px solid var(--gray-200)', borderRadius: '16px', display: 'flex', gap: 2 }}>
              <MdContactMail size={24} color="var(--uinsports-orange)" />
              <Box>
                <Typography sx={{ fontWeight: 700, color: 'var(--gray-900)' }}>You In Sports Legal Team</Typography>
                <Typography sx={{ color: 'var(--gray-600)' }}>123 Sports Ave, Athletic City, AC 90210</Typography>
                <Typography sx={{ color: 'var(--uinsports-blue)', fontWeight: 600, mt: 1 }}>privacy@youinsports.com</Typography>
              </Box>
            </Box>
          </Section>

        </Paper>
      </Container>
    </Box>
  )
}

const Section = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'var(--gray-900)', fontFamily: 'var(--font-display)' }}>{title}</Typography>
    <Typography component="div" sx={{ color: 'var(--gray-600)', lineHeight: 1.8 }}>
      {children}
    </Typography>
  </Box>
)
