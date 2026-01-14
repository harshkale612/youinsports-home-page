import React from "react"
import { Link } from "react-router-dom"
import SeoSchema from "../components/SeoSchema"
import { Box, Container, Typography, Paper, Divider } from "@mui/material"
import { MdGavel, MdWarning, MdSecurity } from "react-icons/md"
import { motion } from "framer-motion"

export default function Terms() {
  return (
    <Box sx={{ bgcolor: 'var(--gray-50)', minHeight: '100vh' }}>
      <SeoSchema
        type="WebPage"
        name="Terms of Service | You In Sports"
        description="Legal terms for using the You In Sports platform."
        url="https://youinsports.com/terms"
      />

      {/* --- HERO --- */}
      <Box sx={{ py: 10, bgcolor: 'var(--uinsports-navy)', color: 'white', textAlign: 'center', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'radial-gradient(circle at 80% 20%, var(--uinsports-orange), transparent 70%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
              <MdGavel size={28} color="#FDBA74" />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>Terms of Service</Typography>
            <Typography sx={{ color: 'var(--gray-300)', fontSize: '1.2rem' }}>
              Effective Date: January 1, 2026
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* --- CONTENT --- */}
      <Container maxWidth="md" sx={{ py: 10, mt: -5, position: 'relative', zIndex: 2 }}>
        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: '24px', border: '1px solid var(--gray-200)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>

          <Section title="1. Acceptance of Terms">
            By accessing or using You In Sports, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
          </Section>

          <Divider sx={{ my: 4 }} />

          <Section title="2. User Accounts">
            <Typography sx={{ fontWeight: 600, mb: 1 }}>2.1 Security</Typography>
            <Typography paragraph sx={{ color: 'var(--gray-600)' }}>
              You are responsible for safeguarding your password. You agree not to disclose your password to any third party.
            </Typography>

            <Typography sx={{ fontWeight: 600, mb: 1 }}>2.2 Termination</Typography>
            <Typography paragraph sx={{ color: 'var(--gray-600)' }}>
              We reserve the right to suspend or terminate your account at any time for violations of these Terms.
            </Typography>
          </Section>

          <Section title="3. Content Guidelines">
            <Box sx={{ bgcolor: '#FEF2F2', p: 3, borderRadius: '12px', mb: 3, border: '1px solid #FECACA' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: '#991B1B', display: 'flex', alignItems: 'center', gap: 1 }}>
                <MdWarning /> Prohibited Content:
              </Typography>
              <ul style={{ margin: 0, paddingLeft: 20, color: '#7F1D1D' }}>
                <li>Hate speech or harassment</li>
                <li>Copyright infringement</li>
                <li>Malicious software or spam</li>
                <li>False or misleading information</li>
              </ul>
            </Box>
          </Section>

          <Section title="4. Limitation of Liability">
            <Typography paragraph sx={{ color: 'var(--gray-600)' }}>
              In no event shall You In Sports be liable for any indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </Typography>
          </Section>

          <Section title="5. Contact">
            For legal inquiries, please contact us at <Link to="/contact" style={{ color: 'var(--uinsports-blue)', fontWeight: 600 }}>legal@youinsports.com</Link>.
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
