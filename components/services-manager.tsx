"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Wallet,
  Users,
  ShoppingBag,
  Award,
  Briefcase,
  BookOpen,
  GraduationCap,
  Code,
  Globe,
  Handshake,
  MessageSquare,
  Video,
  ChevronDown,
  ChevronUp,
  BookMarked,
  ShoppingCart,
  DollarSign,
  UserCheck,
  FileText,
  Trophy,
  Utensils,
  Home,
  HeartPulse,
  Shield,
  MapPin,
  Building,
  Bus,
  Search,
  TrendingUp,
  Plane,
  Dessert as Passport,
} from "lucide-react"

const services = [
  {
    id: "fees",
    icon: Wallet,
    title: "Fee Management",
    shortDesc: "Manage all education payments without banks",
    paymentNote: "Pay with Pi on GCV",
    features: [
      { icon: DollarSign, text: "School fees payment tracking" },
      { icon: FileText, text: "Digital receipts & proof of payment" },
      { icon: UserCheck, text: "Parent & student fee dashboards" },
      { icon: Trophy, text: "Payment history & installment plans" },
    ],
  },
  {
    id: "banking",
    icon: TrendingUp,
    title: "Banking Consultation",
    shortDesc: "Expert guidance on financial partnerships and services",
    paymentNote: "Consultation paid in Pi on GCV",
    features: [
      { icon: Handshake, text: "Bank partnership setup guidance" },
      { icon: FileText, text: "Financial planning for institutions" },
      { icon: Users, text: "Connect schools with financial advisors" },
      { icon: Globe, text: "Digital banking integration support" },
    ],
  },
  {
    id: "suppliers",
    icon: Utensils,
    title: "Food & Supplies",
    shortDesc: "Suppliers delivering meals and supplies to schools",
    paymentNote: "Pay suppliers in Pi on GCV",
    features: [
      { icon: Utensils, text: "School meal programs & catering" },
      { icon: ShoppingCart, text: "Bulk supplies for institutions" },
      { icon: Users, text: "Verified supplier network" },
      { icon: FileText, text: "Order tracking & invoicing" },
    ],
  },
  {
    id: "accommodation",
    icon: Home,
    title: "Accommodation",
    shortDesc: "Housing for students and teachers",
    paymentNote: "Rent paid in Pi on GCV",
    features: [
      { icon: Home, text: "Student dormitories & hostels" },
      { icon: Building, text: "Teacher housing near schools" },
      { icon: MapPin, text: "Location-based search" },
      { icon: DollarSign, text: "Flexible payment plans" },
    ],
  },
  {
    id: "health",
    icon: HeartPulse,
    title: "Health Services",
    shortDesc: "Medical clinics for students and staff",
    paymentNote: "Medical services paid in Pi on GCV",
    features: [
      { icon: HeartPulse, text: "On-campus & nearby clinics" },
      { icon: Users, text: "Doctor consultations" },
      { icon: FileText, text: "Medical records management" },
      { icon: Video, text: "Telemedicine support" },
    ],
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Health Insurance",
    shortDesc: "Affordable health coverage for education community",
    paymentNote: "Premiums paid in Pi on GCV",
    features: [
      { icon: Shield, text: "Student health insurance plans" },
      { icon: Users, text: "Staff & teacher coverage" },
      { icon: FileText, text: "Claims processing" },
      { icon: HeartPulse, text: "Emergency coverage" },
    ],
  },
  {
    id: "flights",
    icon: Plane,
    title: "Flight Tickets",
    shortDesc: "International flight booking for students studying abroad",
    paymentNote: "Book flights with Pi on GCV",
    features: [
      { icon: Plane, text: "International & domestic flight booking" },
      { icon: Globe, text: "Student discount programs" },
      { icon: MapPin, text: "Route planning to universities" },
      { icon: FileText, text: "Travel documentation support" },
    ],
  },
  {
    id: "cross-border",
    icon: Passport,
    title: "Cross-Border Services",
    shortDesc: "Complete travel support for international students",
    paymentNote: "Services paid in Pi on GCV",
    features: [
      { icon: Passport, text: "Visa application assistance" },
      { icon: FileText, text: "Immigration documentation" },
      { icon: Bus, text: "Border crossing transportation" },
      { icon: Globe, text: "Multi-country travel planning" },
    ],
  },
  {
    id: "learning",
    icon: GraduationCap,
    title: "Online Learning Platform",
    shortDesc: "Complete e-learning for all subjects and levels",
    paymentNote: "Courses paid in Pi on GCV",
    features: [
      { icon: BookOpen, text: "Live & recorded classes" },
      { icon: Video, text: "Video lessons for all subjects" },
      { icon: FileText, text: "Assignments & assessments" },
      { icon: Trophy, text: "Certificates & progress tracking" },
    ],
  },
  {
    id: "coding",
    icon: Code,
    title: "Coding & Tech Training",
    shortDesc: "Programming courses taught by expert instructors",
    paymentNote: "Courses paid in Pi on GCV",
    features: [
      { icon: Code, text: "Web development (HTML, CSS, JavaScript)" },
      { icon: Code, text: "Python, Java, C++ programming" },
      { icon: Globe, text: "Mobile app development" },
      { icon: UserCheck, text: "Connect with coding teachers" },
    ],
  },
  {
    id: "jobs",
    icon: Briefcase,
    title: "Job Board & Recruitment",
    shortDesc: "Connect educators with schools hiring staff",
    paymentNote: "Job postings paid in Pi on GCV",
    features: [
      { icon: Briefcase, text: "Teacher & headteacher positions" },
      { icon: UserCheck, text: "Staff & administrator jobs" },
      { icon: FileText, text: "Application & CV management" },
      { icon: Handshake, text: "School recruitment platform" },
    ],
  },
  {
    id: "school-finder",
    icon: Search,
    title: "School Discovery",
    shortDesc: "Find schools offering your desired subjects",
    paymentNote: "Free to browse",
    features: [
      { icon: Search, text: "Search by subject or program" },
      { icon: MapPin, text: "Location-based school finder" },
      { icon: BookOpen, text: "View curriculum & courses" },
      { icon: Trophy, text: "School ratings & reviews" },
    ],
  },
  {
    id: "transport",
    icon: Bus,
    title: "Student Transport",
    shortDesc: "School transportation services",
    paymentNote: "Transport paid in Pi on GCV",
    features: [
      { icon: Bus, text: "School bus services" },
      { icon: MapPin, text: "Route planning & tracking" },
      { icon: UserCheck, text: "Driver verification" },
      { icon: DollarSign, text: "Monthly transport passes" },
    ],
  },
  {
    id: "marketplace",
    icon: ShoppingBag,
    title: "Education Marketplace",
    shortDesc: "Buy everything students and schools need",
    paymentNote: "Products paid in Pi on GCV",
    features: [
      { icon: BookMarked, text: "Textbooks & study materials" },
      { icon: ShoppingCart, text: "School supplies & uniforms" },
      { icon: Globe, text: "Digital learning resources" },
      { icon: DollarSign, text: "Secure Web3 payments" },
    ],
  },
  {
    id: "chat",
    icon: MessageSquare,
    title: "Student-Teacher Chat",
    shortDesc: "Connect students with teachers and peers",
    paymentNote: "Free messaging",
    features: [
      { icon: MessageSquare, text: "Direct messaging with teachers" },
      { icon: Users, text: "Study group discussions" },
      { icon: Video, text: "Video call support" },
      { icon: FileText, text: "Share files & assignments" },
    ],
  },
  {
    id: "partnerships",
    icon: Handshake,
    title: "Partnerships & Sponsors",
    shortDesc: "Connect schools with sponsors and partners",
    paymentNote: "Partnership management",
    features: [
      { icon: Award, text: "Scholarship programs" },
      { icon: Handshake, text: "Corporate sponsorships" },
      { icon: Globe, text: "International partnerships" },
      { icon: Users, text: "Sponsor-student matching" },
    ],
  },
  {
    id: "payroll",
    icon: Users,
    title: "Payroll System",
    shortDesc: "Digital payroll for all education staff",
    paymentNote: "Salaries paid in Pi on GCV",
    features: [
      { icon: DollarSign, text: "Teacher & staff salary payments" },
      { icon: FileText, text: "Payslip generation" },
      { icon: UserCheck, text: "Attendance tracking" },
      { icon: Trophy, text: "Performance bonuses" },
    ],
  },
  {
    id: "scholarships",
    icon: Award,
    title: "Scholarships",
    shortDesc: "Access education funding opportunities",
    paymentNote: "Application processing",
    features: [
      { icon: Award, text: "Scholarship database" },
      { icon: FileText, text: "Application management" },
      { icon: UserCheck, text: "Eligibility matching" },
      { icon: Trophy, text: "Award tracking" },
    ],
  },
  {
    id: "records",
    icon: BookOpen,
    title: "Digital Records",
    shortDesc: "Secure education documentation",
    paymentNote: "Blockchain verified records",
    features: [
      { icon: FileText, text: "Academic transcripts" },
      { icon: Trophy, text: "Certificates & diplomas" },
      { icon: DollarSign, text: "Payment records" },
      { icon: Globe, text: "Blockchain verified" },
    ],
  },
]

export function ServicesManager() {
  const [openServices, setOpenServices] = useState<string[]>(services.map((s) => s.id))
  const router = useRouter()

  const toggleService = (id: string) => {
    setOpenServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const openAll = () => {
    setOpenServices(services.map((s) => s.id))
  }

  const closeAll = () => {
    setOpenServices([])
  }

  const handleServiceAccess = (serviceId: string) => {
    const routeMap: { [key: string]: string } = {
      fees: "/fees",
      banking: "/banking",
      suppliers: "/food-supplies",
      accommodation: "/accommodation",
      health: "/health",
      insurance: "/insurance",
      flights: "/flights",
      "cross-border": "/cross-border",
      learning: "/learning",
      coding: "/coding",
      jobs: "/jobs",
      "school-finder": "/school-discovery",
      transport: "/transport",
      marketplace: "/marketplace",
      chat: "/chat",
      partnerships: "/partnerships",
      payroll: "/payroll",
      scholarships: "/scholarships",
      records: "/records",
    }

    const route = routeMap[serviceId]
    if (route) {
      router.push(route)
    }
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Complete Education Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty mb-2">
          Everything schools, students, and educators need in one platform
        </p>
        <Badge variant="secondary" className="mb-6">
          All payments processed with Pi on GCV
        </Badge>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button onClick={openAll} variant="default" size="sm">
            Open All Services
          </Button>
          <Button onClick={closeAll} variant="outline" size="sm">
            Close All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => {
          const isOpen = openServices.includes(service.id)
          return (
            <Card key={service.id} className="border-2 hover:border-primary transition-colors">
              <CardHeader className="pb-3">
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1 flex items-center gap-2 flex-wrap">
                        {service.title}
                        {[
                          "banking",
                          "suppliers",
                          "accommodation",
                          "health",
                          "insurance",
                          "school-finder",
                          "transport",
                          "flights",
                          "cross-border",
                        ].includes(service.id) && (
                          <Badge variant="secondary" className="text-xs">
                            New
                          </Badge>
                        )}
                        {service.id === "coding" && (
                          <Badge variant="secondary" className="text-xs">
                            Popular
                          </Badge>
                        )}
                        {service.id === "scholarships" && (
                          <Badge variant="secondary" className="text-xs">
                            Scholarships
                          </Badge>
                        )}
                        {service.id === "records" && (
                          <Badge variant="secondary" className="text-xs">
                            Records
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.shortDesc}</p>
                      <p className="text-xs text-primary font-medium mt-1">{service.paymentNote}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0 ml-2">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
              </CardHeader>

              {isOpen && (
                <CardContent className="pt-0">
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <feature.icon className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" size="sm" onClick={() => handleServiceAccess(service.id)}>
                    Access {service.title}
                  </Button>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
