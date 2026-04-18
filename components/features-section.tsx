import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe2, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "Web3 technology ensures every transaction is secure, verifiable, and transparent for all parties.",
  },
  {
    icon: Zap,
    title: "Instant Payments",
    description: "Process fee payments, payroll, and scholarships instantly without waiting for bank clearance.",
  },
  {
    icon: Globe2,
    title: "No Geographic Barriers",
    description: "Serve rural and urban areas equally. No bank branch required to participate in the digital economy.",
  },
  {
    icon: HeartHandshake,
    title: "Community Focused",
    description: "Built for African education communities with local language support and cultural understanding.",
  },
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EduPay Africa</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Designed specifically for the education ecosystem in Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
