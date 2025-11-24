'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-primary">Privacy Policy</h1>
          
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              Last Updated: November 2025
            </p>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p>
                Global AIIT ("we", "us", "our", or "company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and courses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Personal Data:</strong> Name, email address, phone number, billing address</li>
                <li><strong>Course Data:</strong> Progress, assessment results, quiz scores</li>
                <li><strong>Technical Data:</strong> IP address, browser type, pages visited, time spent</li>
                <li><strong>Device Data:</strong> Device type, operating system, device identifiers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide and improve our courses and services</li>
                <li>Process payments and send related information</li>
                <li>Send promotional emails and updates (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns for security purposes</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. How We Protect Your Information</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Encryption of data in transit using SSL/TLS protocols</li>
                <li>Secure password storage using industry-standard hashing</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls limiting data to authorized personnel</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Sharing</h2>
              <p>
                We do not sell your personal information to third parties. We may share your information only with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Service providers who assist us in operating our website and conducting business</li>
                <li>Payment processors to handle transactions</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Download your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Please note that disabling cookies may limit functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant changes by email or by posting the new policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Us</h2>
              <p>
                If you have questions or concerns about our Privacy Policy, please contact us at:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> privacy@datahubacademy.com<br />
                <strong>Address:</strong> Global AIIT, Tech Park, Suite 200, San Francisco, CA 94105
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
