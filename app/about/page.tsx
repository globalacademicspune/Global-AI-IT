'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-primary">About Global AIIT</h1>
          
          <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
            <p>
              Welcome to Global AIIT, your premier destination for mastering Big Data and Cloud Computing technologies. Founded in 2018, we have established ourselves as a leader in technical education, transforming the careers of over 50,000 professionals worldwide.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-12">Our Mission</h2>
            <p>
              At Global AIIT, our mission is to democratize access to world-class technical education. We believe that talent exists everywhere, but opportunity doesn't. Through our carefully curated courses and hands-on training programs, we bridge the gap between academic knowledge and industry requirements, preparing professionals for roles at leading tech companies.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg border border-primary/20">
                <h3 className="font-bold text-primary mb-3">Expert Instructors</h3>
                <p>Learn from industry veterans with 15+ years of experience at FAANG companies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-primary/20">
                <h3 className="font-bold text-primary mb-3">Practical Learning</h3>
                <p>100% hands-on approach with real-world projects and assignments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-primary/20">
                <h3 className="font-bold text-primary mb-3">Career Support</h3>
                <p>Dedicated career coaching, interview preparation, and job placement assistance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-primary/20">
                <h3 className="font-bold text-primary mb-3">Lifetime Access</h3>
                <p>Access course materials forever, with regular updates to stay current.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mt-12">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-4xl font-bold text-primary">50K+</p>
                <p className="text-foreground/60 mt-2">Students Trained</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-4xl font-bold text-primary">95%</p>
                <p className="text-foreground/60 mt-2">Success Rate</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-4xl font-bold text-primary">500+</p>
                <p className="text-foreground/60 mt-2">Companies Hiring</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mt-12">Our Values</h2>
            <ul className="space-y-4 mt-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Quality:</strong> We never compromise on course quality and student experience.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Integrity:</strong> Transparent practices and honest communication are our foundation.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Innovation:</strong> We constantly update our curriculum to reflect industry trends.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Community:</strong> We foster a supportive community of learners and professionals.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
