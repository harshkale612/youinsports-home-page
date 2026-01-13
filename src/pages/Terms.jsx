import React from "react"
import { Link } from "react-router-dom"
import SeoSchema from "../components/SeoSchema"
import { Box, Container, Typography, Card, CardContent } from "@mui/material"
import { MdGavel } from "react-icons/md"

export default function Terms() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SeoSchema
        type="WebPage"
        name="Terms of Service - UinSports"
        description="UinSports Terms of Service - Legal terms and conditions for using our platform"
        url="https://uinsports.com/terms"
      />
      <Box sx={{ width: "100%", py: 8, background: "linear-gradient(135deg, #0C3042 0%, #418BCA 100%)", color: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", px: 1.5, py: 0.5, borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.1)", fontWeight: 600, mb: 1 }}>
              <MdGavel style={{ marginRight: 8 }} /> Legal Terms
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: 32, md: 40 } }}>Terms of Service</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 600 }}>
              Legal terms and conditions for using the UinSports platform and services.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ width: "100%", py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 960, mx: "auto" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>1. Acceptance of Terms</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  Welcome to UinSports. These Terms of Service ("Terms") govern your use of the UinSports website
                  located at <Link to="/" style={{ color: "#418BCA", textDecoration: "underline" }}>uinsports.com</Link>
                  and our related services (collectively, the "Service") operated by UinSports ("us", "we", or "our").
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part
                  of these terms, then you may not access the Service.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>2. Description of Service</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  UinSports is a platform that connects amateur athletes with coaches, sponsors, and supporters. Our
                  Service allows users to create sports profiles, join communities, seek funding support, and network
                  within the sports industry. We provide tools for athletes to showcase their achievements and connect
                  with opportunities to advance their athletic careers.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>3. User Accounts</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>3.1 Account Creation</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      To access certain features of our Service, you must create an account. You agree to provide
                      accurate, current, and complete information during the registration process and to update such
                      information to keep it accurate, current, and complete.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>3.2 Account Security</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      You are responsible for safeguarding the password and for maintaining the confidentiality of your
                      account. You agree not to disclose your password to any third party and to take sole
                      responsibility for any activities or actions under your account.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>3.3 Account Termination</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      We reserve the right to terminate or suspend your account immediately, without prior notice or
                      liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </Typography>
                  </div>
                </Box>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>4. User Content</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>4.1 Content Ownership</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      You retain ownership of any content you submit, post, or display on or through the Service ("User
                      Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free
                      license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and
                      distribute such content.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>4.2 Content Standards</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8, mb: 1 }}>You agree that your User Content will not:</Typography>
                    <Box component="ul" sx={{ pl: 3, color: "#374151" }}>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe upon the rights of any third party</li>
                      <li>Contain hate speech, harassment, or discriminatory content</li>
                      <li>Include false or misleading information</li>
                      <li>Contain spam, advertising, or promotional material</li>
                      <li>Include malicious code or harmful software</li>
                    </Box>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>4.3 Content Moderation</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      We reserve the right to review, monitor, and remove User Content at our sole discretion, without
                      notice, for any reason or no reason.
                    </Typography>
                  </div>
                </Box>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>5. Funding and Donations</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>5.1 Funding Platform</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      Our Service may include features that allow users to request and provide financial support for
                      athletic endeavors. We act as a platform to facilitate these transactions but are not a party to
                      the funding arrangements between users.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>5.2 Payment Processing</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      All payments are processed through third-party payment processors. We do not store your payment
                      information and are not responsible for any issues related to payment processing.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>5.3 Refunds</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      Refund policies for donations and funding are determined by the individual campaigns and our
                      platform policies. Please review the specific terms for each funding request before contributing.
                    </Typography>
                  </div>
                </Box>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>6. Prohibited Uses</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8, mb: 1 }}>You may not use our Service:</Typography>
                <Box component="ul" sx={{ pl: 3, color: "#374151" }}>
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>
                    To violate any international, federal, provincial, or state regulations, rules, laws, or local
                    ordinances
                  </li>
                  <li>
                    To infringe upon or violate our intellectual property rights or the intellectual property rights of
                    others
                  </li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To collect or track the personal information of others</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                  <li>To interfere with or circumvent the security features of the Service</li>
                </Box>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>7. Intellectual Property Rights</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  The Service and its original content, features, and functionality are and will remain the exclusive
                  property of UinSports and its licensors. The Service is protected by copyright, trademark, and other
                  laws. Our trademarks and trade dress may not be used in connection with any product or service without
                  our prior written consent.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>8. Privacy Policy</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                  Service, to understand our practices. Our Privacy Policy is available at{" "}
                  <Link to="/privacy" style={{ color: "#418BCA", textDecoration: "underline" }}>uinsports.com/privacy</Link>.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>9. Disclaimers</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>9.1 Service Availability</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      We do not guarantee that the Service will be available at all times. We may experience hardware,
                      software, or other problems or need to perform maintenance related to the Service, resulting in
                      interruptions, delays, or errors.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>9.2 User Interactions</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      We are not responsible for the conduct of any user of our Service. You agree to use caution in all
                      interactions with other users, particularly if you decide to communicate off the Service or meet
                      in person.
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#0C3042", mb: 1 }}>9.3 Third-Party Content</Typography>
                    <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                      Our Service may contain links to third-party websites or services that are not owned or controlled
                      by UinSports. We have no control over and assume no responsibility for the content, privacy
                      policies, or practices of any third-party websites or services.
                    </Typography>
                  </div>
                </Box>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>10. Limitation of Liability</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  In no event shall UinSports, nor its directors, employees, partners, agents, suppliers, or affiliates,
                  be liable for any indirect, incidental, special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use
                  of the Service.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>11. Indemnification</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  You agree to defend, indemnify, and hold harmless UinSports and its licensee and licensors, and their
                  employees, contractors, agents, officers and directors, from and against any and all claims, damages,
                  obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's
                  fees).
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>12. Termination</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  We may terminate or suspend your account and bar access to the Service immediately, without prior
                  notice or liability, under our sole discretion, for any reason whatsoever and without limitation,
                  including but not limited to a breach of the Terms.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>13. Governing Law</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  These Terms shall be interpreted and governed by the laws of the State of California, without regard
                  to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will
                  not be considered a waiver of those rights.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>14. Changes to Terms</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  What constitutes a material change will be determined at our sole discretion.
                </Typography>
              </section>

              <section>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0C3042", mb: 1.5 }}>15. Contact Information</Typography>
                <Typography sx={{ color: "#374151", lineHeight: 1.8, mb: 2 }}>
                  If you have any questions about these Terms of Service, please contact us:
                </Typography>
                <Card sx={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 2 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography sx={{ color: "#374151", mb: 1 }}>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:legal@uinsports.com" style={{ color: "#418BCA", textDecoration: "underline" }}>legal@uinsports.com</a>
                    </Typography>
                    <Typography sx={{ color: "#374151", mb: 1 }}>
                      <strong>Address:</strong> UinSports Legal Team, 123 Sports Avenue, Athletic City, AC 12345
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
