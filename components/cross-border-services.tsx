"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  FileText,
  Bus,
  CheckCircle,
  Clock,
  AlertCircle,
  DessertIcon as PassportIcon,
  MapPin,
  Users,
  Shield,
  BookOpen,
  Building,
} from "lucide-react"

const visaTypes = [
  { id: "student", name: "Student Visa", duration: "1-4 years", price: "π15" },
  { id: "study-permit", name: "Study Permit", duration: "6-12 months", price: "π12" },
  { id: "tourist", name: "Tourist Visa", duration: "30-90 days", price: "π8" },
  { id: "work-study", name: "Work-Study Visa", duration: "1-2 years", price: "π18" },
]

const countries = [
  { code: "RW", name: "Rwanda", capital: "Kigali" },
  { code: "KE", name: "Kenya", capital: "Nairobi" },
  { code: "UG", name: "Uganda", capital: "Kampala" },
  { code: "TZ", name: "Tanzania", capital: "Dar es Salaam" },
  { code: "BI", name: "Burundi", capital: "Gitega" },
  { code: "SS", name: "South Sudan", capital: "Juba" },
  { code: "ET", name: "Ethiopia", capital: "Addis Ababa" },
  { code: "SO", name: "Somalia", capital: "Mogadishu" },
  { code: "CD", name: "DRC", capital: "Kinshasa" },
]

const passportServices = [
  { id: "new", name: "New Passport Application", duration: "3-4 weeks", price: "π20" },
  { id: "renewal", name: "Passport Renewal", duration: "2-3 weeks", price: "π18" },
  { id: "urgent", name: "Urgent Processing", duration: "3-5 days", price: "π35" },
  { id: "child", name: "Child Passport", duration: "3-4 weeks", price: "π15" },
]

const myApplications = [
  {
    id: "1",
    type: "Student Visa",
    country: "Kenya",
    status: "approved",
    submittedDate: "2025-01-05",
    processDate: "2025-01-10",
  },
  {
    id: "2",
    type: "Study Permit",
    country: "Tanzania",
    status: "processing",
    submittedDate: "2025-01-08",
    processDate: "Est. 2025-01-18",
  },
]

export function CrossBorderServices() {
  const [activeTab, setActiveTab] = useState("visa")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Cross-Border Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Complete travel documentation and support for international students
          </p>
          <Badge variant="secondary" className="mt-3">
            All services paid in Pi on GCV
          </Badge>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            <TabsTrigger value="visa" className="flex items-center gap-2">
              <PassportIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Visa Services</span>
              <span className="sm:hidden">Visa</span>
            </TabsTrigger>
            <TabsTrigger value="passport" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Passport</span>
              <span className="sm:hidden">Pass</span>
            </TabsTrigger>
            <TabsTrigger value="customs" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Customs</span>
              <span className="sm:hidden">Customs</span>
            </TabsTrigger>
            <TabsTrigger value="travel-docs" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Documents</span>
              <span className="sm:hidden">Docs</span>
            </TabsTrigger>
            <TabsTrigger value="my-apps" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">My Applications</span>
              <span className="sm:hidden">My Apps</span>
            </TabsTrigger>
          </TabsList>

          {/* Visa Services Tab */}
          <TabsContent value="visa" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PassportIcon className="w-5 h-5 text-primary" />
                  Visa Application Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Visa Types */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visaTypes.map((visa) => (
                    <Card key={visa.id} className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold mb-1">{visa.name}</h3>
                            <p className="text-sm text-muted-foreground">Duration: {visa.duration}</p>
                          </div>
                          <Badge variant="secondary">{visa.price}</Badge>
                        </div>
                        <Button size="sm" className="w-full">
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Visa Application Form */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold mb-4">Quick Visa Application</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="visa-type">Visa Type</Label>
                      <Select>
                        <SelectTrigger id="visa-type">
                          <SelectValue placeholder="Select visa type" />
                        </SelectTrigger>
                        <SelectContent>
                          {visaTypes.map((visa) => (
                            <SelectItem key={visa.id} value={visa.id}>
                              {visa.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination Country</Label>
                      <Select>
                        <SelectTrigger id="destination">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="full-name">Full Name</Label>
                      <Input id="full-name" placeholder="As on passport" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="passport-number">Passport Number</Label>
                      <Input id="passport-number" placeholder="Enter passport number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travel-date">Intended Travel Date</Label>
                      <Input id="travel-date" type="date" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose of Travel</Label>
                      <Select>
                        <SelectTrigger id="purpose">
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="education">Education/Study</SelectItem>
                          <SelectItem value="research">Research</SelectItem>
                          <SelectItem value="conference">Conference</SelectItem>
                          <SelectItem value="training">Training</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="university">Institution/University Name</Label>
                    <Input id="university" placeholder="Name of institution you'll attend" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea id="additional-info" placeholder="Any additional details..." rows={3} />
                  </div>

                  <Button className="w-full">Submit Visa Application</Button>
                </div>

                {/* Visa Benefits */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      What's Included
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        Complete application assistance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        Document verification and review
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        Embassy appointment booking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        Application status tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        Interview preparation support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Passport Services Tab */}
          <TabsContent value="passport" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Passport Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {passportServices.map((service) => (
                    <Card key={service.id} className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{service.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">Processing: {service.duration}</p>
                            <Badge variant="secondary">{service.price}</Badge>
                          </div>
                          <FileText className="w-8 h-8 text-primary/30" />
                        </div>
                        <Button size="sm" className="w-full mt-3">
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Required Documents */}
                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">Required Documents</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary shrink-0" />
                        National ID or Birth Certificate
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary shrink-0" />
                        Recent passport-size photos (2)
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary shrink-0" />
                        Proof of address
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary shrink-0" />
                        Old passport (for renewal)
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary shrink-0" />
                        Student enrollment letter (if applicable)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customs & Immigration Tab */}
          <TabsContent value="customs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Customs & Immigration Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <Building className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Customs Clearance</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Help with clearing personal items, books, and equipment through customs
                      </p>
                      <Badge variant="secondary" className="mb-3">
                        π8 per clearance
                      </Badge>
                      <Button size="sm" className="w-full">
                        Request Service
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <MapPin className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Border Crossing Guide</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Step-by-step guide and support for crossing East African borders
                      </p>
                      <Badge variant="secondary" className="mb-3">
                        π5 per route
                      </Badge>
                      <Button size="sm" className="w-full">
                        Get Guide
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <Bus className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Border Transport</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Safe transportation to and from border crossings
                      </p>
                      <Badge variant="secondary" className="mb-3">
                        π15-π40
                      </Badge>
                      <Button size="sm" className="w-full">
                        Book Transport
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <Users className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Immigration Consultation</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Expert advice on immigration requirements and processes
                      </p>
                      <Badge variant="secondary" className="mb-3">
                        π10 per session
                      </Badge>
                      <Button size="sm" className="w-full">
                        Book Session
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Important Tips */}
                <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      Important Customs Tips
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Declare all items honestly on customs forms</li>
                      <li>• Keep receipts for expensive electronics and equipment</li>
                      <li>• Books and educational materials are usually duty-free</li>
                      <li>• Check prohibited items list for each country</li>
                      <li>• Carry your student ID and enrollment letter</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Travel Documents Tab */}
          <TabsContent value="travel-docs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Essential Travel Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">International Student ID</h3>
                      <p className="text-sm text-muted-foreground mb-3">Get recognized student status across borders</p>
                      <Badge variant="secondary" className="mb-3">
                        π6
                      </Badge>
                      <Button size="sm" className="w-full">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Travel Insurance Certificate</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Required for visa applications and border crossing
                      </p>
                      <Badge variant="secondary" className="mb-3">
                        π12/year
                      </Badge>
                      <Button size="sm" className="w-full">
                        Get Insurance
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Enrollment Verification Letter</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Official letter confirming your student status
                      </p>
                      <Badge variant="secondary" className="mb-3">
                        π3
                      </Badge>
                      <Button size="sm" className="w-full">
                        Request Letter
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">EAC Border Pass</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Simplified travel within East African Community
                      </p>
                      <Badge variant="secondary" className="mb-3">
                        π10
                      </Badge>
                      <Button size="sm" className="w-full">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Health Certificate</h3>
                      <p className="text-sm text-muted-foreground mb-3">Vaccination records and health clearance</p>
                      <Badge variant="secondary" className="mb-3">
                        π5
                      </Badge>
                      <Button size="sm" className="w-full">
                        Get Certificate
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Document Translation</h3>
                      <p className="text-sm text-muted-foreground mb-3">Certified translation of academic documents</p>
                      <Badge variant="secondary" className="mb-3">
                        π8 per doc
                      </Badge>
                      <Button size="sm" className="w-full">
                        Order Translation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Applications Tab */}
          <TabsContent value="my-apps" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  My Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {myApplications.map((app) => (
                  <Card key={app.id} className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold mb-1">{app.type}</h3>
                          <p className="text-sm text-muted-foreground mb-2">Destination: {app.country}</p>
                        </div>
                        <Badge
                          variant={app.status === "approved" ? "default" : "secondary"}
                          className={app.status === "approved" ? "bg-green-500 hover:bg-green-600" : ""}
                        >
                          {app.status === "approved" ? (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          ) : (
                            <Clock className="w-3 h-3 mr-1" />
                          )}
                          {app.status === "approved" ? "Approved" : "Processing"}
                        </Badge>
                      </div>
                      <div className="text-sm space-y-1 mb-3">
                        <p className="text-muted-foreground">Submitted: {app.submittedDate}</p>
                        <p className="text-muted-foreground">
                          {app.status === "approved" ? "Approved" : "Expected"}: {app.processDate}
                        </p>
                      </div>
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}

                {myApplications.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No applications yet</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
