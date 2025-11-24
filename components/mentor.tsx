import { Card } from '@/components/ui/card'

export default function Mentor() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Know Your Mentor
          </h2>
        </div>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <div className="p-8 md:p-12 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Zuber Shaikh</h3>
              <p className="text-lg opacity-90">500k+ Followers on LinkedIn, YouTube & Twitter</p>
            </div>

            <ul className="space-y-3 text-lg">
              <li>✓ Alumni - IIT Delhi & Stanford University</li>
              <li>✓ Ex-Senior Engineer at Google & Meta</li>
              <li>✓ Founder & CEO of Global AIIT</li>
              <li>✓ Trained 50K+ working professionals & students in Big Data & Cloud Computing</li>
            </ul>

            <p className="text-base opacity-90 leading-relaxed border-t border-white/20 pt-6">
              "I have trained people who are now leading big teams at top product-based companies. It's not just a course to help you crack interviews; Interview cracking is just one part. The bigger part is to help you prepare so well that you can work on the hardest of projects with ease. Join us to master the technologies that power tomorrow's data infrastructure."
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
