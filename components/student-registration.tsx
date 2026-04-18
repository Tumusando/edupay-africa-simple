"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, UserPlus, CheckCircle2, ArrowRight } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function StudentRegistration() {
  const [step, setStep] = useState<"form" | "success">("form")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    educationLevel: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("success")
  }

  if (step === "success") {
    return (
      <section className="container mx-auto px-4 py-12 md:py-16">
        <Card className="max-w-2xl mx-auto border-2 border-primary">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl md:text-3xl mb-2">Welcome to EduPay Africa!</CardTitle>
            <CardDescription className="text-base">
              Your account has been created successfully. You can now access all our services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted rounded-lg p-4 space-y-3">
              <h3 className="font-semibold flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Start Learning Now
              </h3>
              <p className="text-sm text-muted-foreground">
                Browse our online courses, connect with teachers, and access the marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button className="w-full">
                Browse Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                View Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section id="student-registration" className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-8">
        <Badge className="mb-4">Get Started Today</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Register as a Student</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Create your free account and start accessing online courses, connect with teachers, and more
        </p>
      </div>

      <Card className="max-w-2xl mx-auto border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-primary" />
            Student Registration Form
          </CardTitle>
          <CardDescription>Fill in your details to create your EduPay Africa account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+250 XXX XXX XXX"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Select
                value={formData.country}
                onValueChange={(value) => setFormData({ ...formData, country: value })}
                required
              >
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rwanda">Rwanda</SelectItem>
                  <SelectItem value="kenya">Kenya</SelectItem>
                  <SelectItem value="uganda">Uganda</SelectItem>
                  <SelectItem value="tanzania">Tanzania</SelectItem>
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="ghana">Ghana</SelectItem>
                  <SelectItem value="south-africa">South Africa</SelectItem>
                  <SelectItem value="egypt">Egypt</SelectItem>
                  <SelectItem value="ethiopia">Ethiopia</SelectItem>
                  <SelectItem value="morocco">Morocco</SelectItem>
                  <SelectItem value="algeria">Algeria</SelectItem>
                  <SelectItem value="senegal">Senegal</SelectItem>
                  <SelectItem value="cameroon">Cameroon</SelectItem>
                  <SelectItem value="ivory-coast">Côte d'Ivoire</SelectItem>
                  <SelectItem value="tunisia">Tunisia</SelectItem>
                  <SelectItem value="zambia">Zambia</SelectItem>
                  <SelectItem value="zimbabwe">Zimbabwe</SelectItem>
                  <SelectItem value="botswana">Botswana</SelectItem>
                  <SelectItem value="mozambique">Mozambique</SelectItem>
                  <SelectItem value="namibia">Namibia</SelectItem>
                  <SelectItem value="burundi">Burundi</SelectItem>
                  <SelectItem value="malawi">Malawi</SelectItem>
                  <SelectItem value="mali">Mali</SelectItem>
                  <SelectItem value="benin">Benin</SelectItem>
                  <SelectItem value="togo">Togo</SelectItem>
                  <SelectItem value="somalia">Somalia</SelectItem>
                  <SelectItem value="drc">Democratic Republic of Congo</SelectItem>
                  <SelectItem value="south-sudan">South Sudan</SelectItem>
                  <SelectItem value="other">Other African Country</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="educationLevel">Current Education Level *</Label>
              <Select
                value={formData.educationLevel}
                onValueChange={(value) => setFormData({ ...formData, educationLevel: value })}
                required
              >
                <SelectTrigger id="educationLevel">
                  <SelectValue placeholder="Select your education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="early-childhood">Early Childhood / Preschool</SelectItem>
                  <SelectItem value="primary">Primary School</SelectItem>
                  <SelectItem value="secondary">Secondary School</SelectItem>
                  <SelectItem value="tvet">TVET / Vocational Training</SelectItem>
                  <SelectItem value="university">University / College</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD / Doctorate</SelectItem>
                  <SelectItem value="professional">Professional Training</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Create Account & Start Learning
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By registering, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
