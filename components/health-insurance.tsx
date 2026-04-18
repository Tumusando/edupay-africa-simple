"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Users, Check, FileText, AlertCircle, User, Heart } from "lucide-react"

const insurancePlans = [
  {
    id: "basic",
    name: "Basic Student Plan",
    price: "15 Pi/month",
    coverage: "50,000 Pi",
    type: "Student",
    features: [
      "Outpatient consultations",
      "Basic medications",
      "Laboratory tests",
      "X-rays & basic imaging",
      "Emergency room visits",
      "Annual health checkup",
    ],
  },
  {
    id: "premium",
    name: "Premium Student Plan",
    price: "30 Pi/month",
    coverage: "150,000 Pi",
    type: "Student",
    popular: true,
    features: [
      "All Basic Plan benefits",
      "Specialist consultations",
      "Advanced imaging (CT, MRI)",
      "Minor surgeries",
      "Dental care (2 visits/year)",
      "Vision care & glasses",
      "Mental health support",
    ],
  },
  {
    id: "family",
    name: "Family Coverage Plan",
    price: "80 Pi/month",
    coverage: "400,000 Pi",
    type: "Family",
    features: [
      "Coverage for up to 5 family members",
      "All Premium benefits for each member",
      "Maternity & newborn care",
      "Chronic disease management",
      "Home care services",
      "International emergency coverage",
    ],
  },
  {
    id: "teacher",
    name: "Teacher & Staff Plan",
    price: "45 Pi/month",
    coverage: "200,000 Pi",
    type: "Staff",
    features: [
      "Comprehensive medical coverage",
      "Specialist & consultant visits",
      "Major & minor surgeries",
      "Dental & vision care",
      "Mental health counseling",
      "Annual preventive care",
      "Prescription medications",
    ],
  },
]

const myClaims = [
  {
    id: 1,
    date: "2026-01-08",
    type: "Consultation",
    provider: "Kigali Medical Center",
    amount: "50 Pi",
    status: "Approved",
  },
  {
    id: 2,
    date: "2026-01-05",
    type: "Lab Tests",
    provider: "Nairobi Diagnostics",
    amount: "80 Pi",
    status: "Processing",
  },
  { id: 3, date: "2025-12-28", type: "Medication", provider: "Pharmacy Plus", amount: "30 Pi", status: "Approved" },
]

export function HealthInsurance() {
  const [activeTab, setActiveTab] = useState("plans")
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Health Insurance</h1>
              <p className="text-muted-foreground">Affordable coverage for students, teachers & families</p>
            </div>
          </div>
          <Badge variant="secondary">Premiums paid in Pi on GCV</Badge>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl">
            <TabsTrigger value="plans">Plans</TabsTrigger>
            <TabsTrigger value="enroll">Enroll</TabsTrigger>
            <TabsTrigger value="claims">Claims</TabsTrigger>
            <TabsTrigger value="coverage">My Coverage</TabsTrigger>
            <TabsTrigger value="dependents">Dependents</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Available Insurance Plans</h2>
              <p className="text-muted-foreground mb-6">Choose the plan that best fits your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insurancePlans.map((plan) => (
                <Card key={plan.id} className={`relative ${plan.popular ? "border-primary border-2" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1">{plan.name}</CardTitle>
                        <Badge variant="outline" className="mb-2">
                          {plan.type}
                        </Badge>
                      </div>
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl font-bold text-primary">{plan.price}</p>
                      <p className="text-sm text-muted-foreground">Coverage up to {plan.coverage}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => {
                        setSelectedPlan(plan.id)
                        setActiveTab("enroll")
                      }}
                    >
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enroll" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Enroll in Health Insurance</CardTitle>
                <CardDescription>Complete the form below to enroll in your selected plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedPlan && (
                  <div className="bg-primary/10 p-4 rounded-lg mb-4">
                    <p className="text-sm font-medium mb-1">Selected Plan:</p>
                    <p className="text-lg font-bold text-primary">
                      {insurancePlans.find((p) => p.id === selectedPlan)?.name}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input id="dob" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+250 XXX XXX XXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idNumber">National ID / Passport *</Label>
                    <Input id="idNumber" placeholder="ID Number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <select id="role" className="w-full h-10 rounded-md border border-input bg-background px-3">
                      <option>Student</option>
                      <option>Teacher</option>
                      <option>Staff</option>
                      <option>Parent</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">School / Institution *</Label>
                    <Input id="institution" placeholder="Institution name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <select id="country" className="w-full h-10 rounded-md border border-input bg-background px-3">
                      <option>Rwanda</option>
                      <option>Kenya</option>
                      <option>Uganda</option>
                      <option>Tanzania</option>
                      <option>Burundi</option>
                      <option>Ethiopia</option>
                      <option>South Sudan</option>
                      <option>Somalia</option>
                      <option>DRC</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Physical Address *</Label>
                  <Input id="address" placeholder="Street, City, District" />
                </div>

                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-primary" />
                    <p className="font-medium">Medical History (Optional)</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="conditions">Pre-existing Conditions</Label>
                    <Input id="conditions" placeholder="List any medical conditions" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medications">Current Medications</Label>
                    <Input id="medications" placeholder="List any medications" />
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">Payment Information</p>
                    <p className="text-muted-foreground">
                      Your premium will be charged monthly in Pi cryptocurrency via GCV. First payment due upon
                      enrollment.
                    </p>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Shield className="w-4 h-4 mr-2" />
                  Complete Enrollment & Pay in Pi
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="claims" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>My Claims</CardTitle>
                  <CardDescription>Track your insurance claims and reimbursements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {myClaims.map((claim) => (
                      <Card key={claim.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium">{claim.type}</p>
                                <p className="text-sm text-muted-foreground">{claim.provider}</p>
                              </div>
                            </div>
                            <Badge variant={claim.status === "Approved" ? "default" : "secondary"}>
                              {claim.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{claim.date}</span>
                            <span className="font-medium text-primary">{claim.amount}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    View All Claims
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Submit New Claim</CardTitle>
                  <CardDescription>File a claim for reimbursement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="claimType">Claim Type *</Label>
                    <select id="claimType" className="w-full h-10 rounded-md border border-input bg-background px-3">
                      <option>Medical Consultation</option>
                      <option>Laboratory Tests</option>
                      <option>Prescription Medication</option>
                      <option>Hospital Admission</option>
                      <option>Dental Care</option>
                      <option>Vision Care</option>
                      <option>Emergency Care</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="provider">Healthcare Provider *</Label>
                    <Input id="provider" placeholder="Hospital or clinic name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="claimDate">Service Date *</Label>
                    <Input id="claimDate" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="claimAmount">Amount Paid (Pi) *</Label>
                    <Input id="claimAmount" type="number" placeholder="0.00" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="diagnosis">Diagnosis / Treatment *</Label>
                    <Input id="diagnosis" placeholder="Brief description" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documents">Upload Documents *</Label>
                    <Input id="documents" type="file" multiple />
                    <p className="text-xs text-muted-foreground">Upload receipts, prescriptions, and medical reports</p>
                  </div>

                  <Button className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit Claim
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="coverage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Coverage Details</CardTitle>
                <CardDescription>View your current insurance plan and benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground p-6 rounded-lg mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm opacity-90 mb-1">Active Plan</p>
                      <p className="text-2xl font-bold">Premium Student Plan</p>
                    </div>
                    <Shield className="w-12 h-12 opacity-80" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm opacity-90">Coverage</p>
                      <p className="text-xl font-bold">150,000 Pi</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Monthly Premium</p>
                      <p className="text-xl font-bold">30 Pi</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Valid Until</p>
                      <p className="font-medium">January 12, 2027</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Status</p>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Coverage Utilization (2026)</h3>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Used</span>
                        <span className="font-medium">12,450 Pi</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "8.3%" }} />
                      </div>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Remaining: 137,550 Pi</span>
                        <span>8.3% used</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Covered Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Outpatient consultations",
                        "Specialist visits",
                        "Laboratory tests",
                        "Advanced imaging",
                        "Minor surgeries",
                        "Dental care (2 visits/year)",
                        "Vision care",
                        "Mental health support",
                        "Emergency room visits",
                        "Annual health checkup",
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-transparent" variant="outline">
                      Download Policy Document
                    </Button>
                    <Button className="flex-1">Upgrade Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dependents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Manage Dependents</CardTitle>
                <CardDescription>Add family members to your insurance coverage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/10 p-4 rounded-lg flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">Family Coverage Available</p>
                    <p className="text-muted-foreground">
                      Add up to 5 family members under the Family Coverage Plan (80 Pi/month). Each dependent receives
                      full coverage benefits.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Current Dependents (0)</h3>
                  <div className="text-center py-8 bg-muted/30 rounded-lg">
                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground mb-4">No dependents added yet</p>
                    <Button>
                      <User className="w-4 h-4 mr-2" />
                      Add Dependent
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Add New Dependent</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="depName">Full Name *</Label>
                        <Input id="depName" placeholder="Dependent name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="depRelation">Relationship *</Label>
                        <select
                          id="depRelation"
                          className="w-full h-10 rounded-md border border-input bg-background px-3"
                        >
                          <option>Spouse</option>
                          <option>Child</option>
                          <option>Parent</option>
                          <option>Sibling</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="depDob">Date of Birth *</Label>
                        <Input id="depDob" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="depId">ID / Birth Certificate Number *</Label>
                        <Input id="depId" placeholder="ID number" />
                      </div>
                    </div>
                    <Button className="w-full">
                      <User className="w-4 h-4 mr-2" />
                      Add to Coverage
                    </Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
