import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Users, ShoppingBag, Award, Briefcase, BookOpen } from "lucide-react"

const services = [
  {
    icon: Wallet,
    title: "Fee Management",
    description: "Manage school fees, training payments, and tuition without traditional banks",
  },
  {
    icon: Users,
    title: "Payroll System",
    description: "Digital payroll for teachers, instructors, and staff across all institutions",
  },
  {
    icon: ShoppingBag,
    title: "Supplies Marketplace",
    description: "Purchase school supplies, books, and learning materials digitally",
  },
  {
    icon: Award,
    title: "Scholarships",
    description: "Access and manage education scholarships and sponsorship opportunities",
  },
  {
    icon: Briefcase,
    title: "Job Matching",
    description: "Connect teachers, instructors, and education professionals with opportunities",
  },
  {
    icon: BookOpen,
    title: "Digital Records",
    description: "Secure education records, receipts, and proof of payment certificates",
  },
]

export function ServicesGrid() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Complete Education Ecosystem</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Supporting every level from early childhood to PhD, including TVET and vocational training
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
