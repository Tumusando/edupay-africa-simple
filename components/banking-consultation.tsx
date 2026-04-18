"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  TrendingUp,
  Handshake,
  FileText,
  Users,
  Globe,
  Building,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowLeft,
} from "lucide-react"

export function BankingConsultation() {
  const [view, setView] = useState<"home" | "request" | "sessions">("home")
  const [formData, setFormData] = useState({
    institution: "",
    contactPerson: "",
    email: "",
    phone: "",
    consultationType: "",
    description: "",
  })

  const consultationTypes = [
    "Bank Partnership Setup",
    "Financial Planning",
    "Digital Banking Integration",
    "Payment Gateway Setup",
    "Investment Advisory",
    "Compliance & Regulations",
  ]

  const upcomingSessions = [
    {
      id: 1,
      title: "Bank Partnership Meeting",
      advisor: "Jean Paul Uwimana",
      date: "Jan 20, 2026",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Financial Planning Review",
      advisor: "Grace Mutesi",
      date: "Jan 25, 2026",
      time: "2:00 PM",
      status: "pending",
    },
  ]

  const advisors = [
    {
      name: "Jean Paul Uwimana",
      title: "Senior Banking Consultant",
      expertise: "Bank Partnerships & Integration",
      experience: "15+ years",
      rating: 4.9,
    },
    {
      name: "Grace Mutesi",
      title: "Financial Planning Expert",
      expertise: "Education Finance & Investment",
      experience: "12+ years",
      rating: 4.8,
    },
    {
      name: "David Nkurunziza",
      title: "Digital Banking Specialist",
      expertise: "Payment Systems & Web3",
      experience: "10+ years",
      rating: 4.9,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Consultation request submitted! You will receive confirmation via email within 24 hours.")
    setView("home")
    setFormData({
      institution: "",
      contactPerson: "",
      email: "",
      phone: "",
      consultationType: "",
      description: "",
    })
  }

  if (view === "request") {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <Button variant="ghost" onClick={() => setView("home")} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Banking Consultation
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Request Banking Consultation
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Fill out this form and our financial advisors will contact you within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution/School Name *</Label>
                  <Input
                    id="institution"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="Enter your institution name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+250 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="consultationType">Type of Consultation *</Label>
                  <select
                    id="consultationType"
                    required
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select consultation type</option>
                    {consultationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Describe Your Needs *</Label>
                  <Textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your banking and financial consultation needs..."
                    rows={5}
                  />
                </div>

                <div className="bg-primary/10 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-medium">Consultation Fee</p>
                  <p className="text-2xl font-bold">50 Pi on GCV</p>
                  <p className="text-xs text-muted-foreground">
                    First 30-minute session. Extended sessions available at additional cost.
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Request & Pay 50 Pi
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (view === "sessions") {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" onClick={() => setView("home")} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Banking Consultation
          </Button>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Consultation Sessions</CardTitle>
                <p className="text-sm text-muted-foreground">Upcoming and past banking consultation meetings</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <Card key={session.id} className="border-2">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{session.title}</h3>
                              <Badge variant={session.status === "confirmed" ? "default" : "secondary"}>
                                {session.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">with {session.advisor}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-primary" />
                                {session.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-primary" />
                                {session.time}
                              </div>
                            </div>
                          </div>
                          <Button size="sm">Join Meeting</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Banking Consultation Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect with expert financial advisors to guide your institution's banking partnerships, digital
            integration, and financial planning
          </p>
          <Badge variant="secondary" className="mt-4">
            Consultation fees paid in Pi on GCV
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Request Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Schedule a session with our banking experts for personalized guidance on partnerships, integration, and
                financial strategy.
              </p>
              <Button onClick={() => setView("request")} className="w-full">
                Book a Session
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                My Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                View your upcoming consultation meetings, past sessions, and manage your appointments with advisors.
              </p>
              <Button onClick={() => setView("sessions")} variant="outline" className="w-full">
                View My Sessions
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Consultation Services We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Handshake className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Bank Partnership Setup</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Guidance on establishing relationships with financial institutions for your school or organization.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Financial Planning</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strategic financial planning and budgeting for educational institutions of all sizes.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Digital Banking Integration</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Support for integrating modern digital banking and Web3 payment systems into your operations.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Payment Gateway Setup</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Technical guidance for setting up secure payment processing for fees and transactions.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Investment Advisory</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expert advice on investment opportunities and financial growth strategies for institutions.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Compliance & Regulations</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Navigate banking regulations and compliance requirements specific to East African countries.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meet Our Financial Advisors</CardTitle>
            <p className="text-sm text-muted-foreground">
              Experienced professionals ready to help your institution succeed
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisors.map((advisor) => (
                <Card key={advisor.name} className="border-2">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold">{advisor.name}</h3>
                      <p className="text-sm text-muted-foreground">{advisor.title}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Expertise:</span> {advisor.expertise}
                      </div>
                      <div>
                        <span className="font-medium">Experience:</span> {advisor.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Rating:</span>
                        <span className="text-primary">★ {advisor.rating}/5.0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
