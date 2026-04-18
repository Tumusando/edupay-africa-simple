import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, School, UserCircle, Building2 } from "lucide-react"

const userTypes = [
  {
    icon: School,
    title: "For Schools",
    description: "Manage fees, payroll, and supplies",
  },
  {
    icon: UserCircle,
    title: "For Students",
    description: "Pay fees, track scholarships",
  },
  {
    icon: Building2,
    title: "For Institutions",
    description: "TVET, universities, training centers",
  },
]

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2">
        <CardContent className="p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Transform Education Payments?</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Join schools, students, and educators across Africa using EduPay to manage education finances
                without banks
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              {userTypes.map((type, index) => (
                <div key={index} className="bg-card rounded-lg p-4 border border-border">
                  <type.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold text-sm mb-1">{type.title}</div>
                  <div className="text-xs text-muted-foreground">{type.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="text-base">
                Start Free Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Contact Us
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required • Free for first 3 months • Cancel anytime
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
