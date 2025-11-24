'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Terms() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-primary">Terms & Conditions</h1>
          
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              Last Updated: November 2025
            </p>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Global AIIT's website and courses, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Intellectual Property Rights</h2>
              <p>
                All content, including but not limited to text, graphics, logos, images, audio, video, and software, is the exclusive property of Global AIIT or licensed to us. You may not reproduce, distribute, transmit, or display any content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. User Responsibilities</h2>
              <p>
                Users agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use the platform only for lawful purposes</li>
                <li>Not harass or cause distress or inconvenience to any person</li>
                <li>Not offend, abuse, or intimidate fellow users</li>
                <li>Maintain the confidentiality of login credentials</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Course Access and Use</h2>
              <p>
                Upon enrollment, you receive a non-transferable license to access course materials. Your access may be revoked if you violate these terms. Course materials are provided "as is" and are intended for personal use only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Payment and Refunds</h2>
              <p>
                All course fees are non-refundable except as required by law. We reserve the right to change pricing at any time. Refund requests must be made within 7 days of enrollment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
              <p>
                Global AIIT shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service or materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Termination</h2>
              <p>
                We reserve the right to terminate your account at any time if we believe you have violated these terms or engaged in fraudulent activity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Us</h2>
              <p>
                For questions regarding these terms, please contact us at support@datahubacademy.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
