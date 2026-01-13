import React from "react"
import { Link } from "react-router-dom"
import SeoSchema from "../components/SeoSchema"
import { Box, Container, Typography, Chip, Card, CardContent } from "@mui/material"
import { MdLockOutline } from "react-icons/md"

export default function Privacy() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SeoSchema
        type="WebPage"
        name="Privacy Policy - UinSports"
        description="UinSports Privacy Policy - How we collect, use, and protect your personal information"
        url="https://uinsports.com/privacy"
      />
      <Box sx={{ width: "100%", py: 8, background: "linear-gradient(135deg, #0C3042 0%, #418BCA 100%)", color: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", px: 1.5, py: 0.5, borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.1)", fontWeight: 600, mb: 1 }}>
              <MdLockOutline style={{ marginRight: 8 }} /> Privacy First
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: 32, md: 40 } }}>Privacy Policy</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 600 }}>
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ width: "100%", py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 960, mx: "auto" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>1. Introduction</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  Welcome to UinSports ("we," "our," or "us"). This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our website
                  <Box component="span" sx={{ mx: 0.5 }}>
                    <Link to="/" style={{ color: "#418BCA", textDecoration: "underline" }}>uinsports.com</Link>
                  </Box>
                  and use our services. Please read this privacy policy carefully. If you do not agree with the terms of
                  this privacy policy, please do not access the site.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>2. Information We Collect</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>2.1 Personal Information</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8, mb: 1 }}>
                      We may collect personal information that you voluntarily provide to us when you:
                    </Typography>
                    <Box component="ul" sx={{ pl: 3, color: "#374151" }}>
                      <li>Register for an account</li>
                      <li>Create your athlete profile</li>
                      <li>Contact us with inquiries</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Participate in community discussions</li>
                      <li>Make donations or support athletes</li>
                    </Box>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8, mt: 1 }}>
                      This information may include: name, email address, phone number, date of birth, location, sports
                      achievements, photos, videos, and payment information.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>2.2 Automatically Collected Information</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      When you visit our website, we may automatically collect certain information about your device,
                      including information about your web browser, IP address, time zone, and some of the cookies that
                      are installed on your device. We may also collect information about how you interact with our
                      website.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>2.3 Cookies and Tracking Technologies</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      We use cookies and similar tracking technologies to track activity on our website and hold certain
                      information. Cookies are files with small amounts of data which may include an anonymous unique
                      identifier.
                    </Typography>
                  </div>
                </Box>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>3. How We Use Your Information</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8, mb: 1 }}>We use the information we collect to:</Typography>
                <Box component="ul" sx={{ pl: 3, color: "#374151" }}>
                  <li>Provide, operate, and maintain our services</li>
                  <li>Create and manage your athlete profile</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and provide customer service</li>
                  <li>Monitor and analyze usage and trends to improve our services</li>
                  <li>Personalize your experience on our platform</li>
                  <li>Facilitate networking between athletes, coaches, and sponsors</li>
                  <li>Send you newsletters and marketing communications (with your consent)</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                </Box>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>4. Information Sharing and Disclosure</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>4.1 Public Information</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      Information in your athlete profile may be visible to other users of our platform, including
                      coaches, sponsors, and other athletes. You can control the visibility of your information through
                      your privacy settings.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>4.2 Service Providers</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      We may share your information with third-party service providers who perform services on our
                      behalf, such as payment processing, data analysis, email delivery, hosting services, customer
                      service, and marketing assistance.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>4.3 Legal Requirements</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      We may disclose your information if required to do so by law or in response to valid requests by
                      public authorities (e.g., a court or government agency).
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>4.4 Business Transfers</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      In the event of a merger, acquisition, or sale of all or a portion of our assets, your information
                      may be transferred as part of that transaction.
                    </Typography>
                  </div>
                </Box>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>5. Data Security</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
                  security.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>6. Data Retention</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy, unless a longer retention period is required or permitted by law. When we no
                  longer need your personal information, we will securely delete or anonymize it.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>7. Your Rights and Choices</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>7.1 Account Information</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      You may update, correct, or delete your account information at any time by logging into your
                      account or contacting us directly.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>7.2 Marketing Communications</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      You may opt out of receiving promotional emails from us by following the unsubscribe instructions
                      in those emails or by contacting us directly.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>7.3 Cookies</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      Most web browsers are set to accept cookies by default. You can usually modify your browser
                      settings to decline cookies if you prefer.
                    </Typography>
                  </div>
                </Box>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>8. Children's Privacy</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us immediately.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>9. International Data Transfers</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  Your information may be transferred to and processed in countries other than your own. These countries
                  may have different data protection laws than your country. We take appropriate measures to ensure your
                  information receives adequate protection.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>10. Changes to This Privacy Policy</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>11. Contact Us</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8, mb: 2 }}>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </Typography>
                <Card sx={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 2 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography sx={{ color: "#374151", mb: 1 }}>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:privacy@uinsports.com" style={{ color: "#418BCA", textDecoration: "underline" }}>privacy@uinsports.com</a>
                    </Typography>
                    <Typography sx={{ color: "#374151", mb: 1 }}>
                      <strong>Address:</strong> UinSports Privacy Team, 123 Sports Avenue, Athletic City, AC 12345
                    </Typography>
                    <Typography sx={{ color: "#374151" }}>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </Typography>
                  </CardContent>
                </Card>
              </section>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
