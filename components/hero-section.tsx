"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, Globe } from "lucide-react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
          <Globe className="w-4 h-4" />
          <span>Web3 Education for Africa</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Education Payment with Pi
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
          EduPay Africa empowers schools, students, and educators across Africa with digital fee management,
          payroll, scholarships, and more using Pi cryptocurrency on GCV.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button
            size="lg"
            className="text-base"
            onClick={() => {
              const registrationSection = document.getElementById("student-registration")
              registrationSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Get Started Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base bg-transparent"
            onClick={() => {
              const servicesSection = document.getElementById("services")
              servicesSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Learn More
          </Button>
        </div>

        <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>No Bank Account Required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full" />
            <span>Instant Digital Receipts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Secure & Transparent</span>
          </div>
        </div>
      </div>
    </section>
  )
}
