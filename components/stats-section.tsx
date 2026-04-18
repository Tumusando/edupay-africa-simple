import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    value: "50K+",
    label: "Students Served",
    description: "Across Africa",
  },
  {
    value: "200+",
    label: "Schools & Institutions",
    description: "Including TVET centers",
  },
  {
    value: "100%",
    label: "Digital Receipts",
    description: "Instant & verifiable",
  },
  {
    value: "0",
    label: "Bank Requirements",
    description: "Fully accessible",
  },
]

export function StatsSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="bg-primary rounded-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Transforming Education in Rwanda
          </h2>
          <p className="text-primary-foreground/90 text-lg">Building the future of education payments</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/95">
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="font-semibold text-sm md:text-base">{stat.label}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
