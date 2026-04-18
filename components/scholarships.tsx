"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Award,
  Calendar,
  DollarSign,
  MapPin,
  GraduationCap,
  FileText,
  Upload,
  CheckCircle2,
  Clock,
  XCircle,
  Filter,
  BookOpen,
  Users,
  TrendingUp,
  AlertCircle,
} from "lucide-react"

const scholarships = [
  {
    id: 1,
    name: "Pi Network Education Grant",
    provider: "Pi Foundation",
    amount: "π500 - π2,000",
    deadline: "March 31, 2024",
    country: "All East Africa",
    level: "Undergraduate",
    category: "Technology",
    spots: 50,
    requirements: "3.0 GPA, Technology major, Financial need",
    description: "Supporting students pursuing technology and blockchain education across East Africa.",
  },
  {
    id: 2,
    name: "Women in STEM Scholarship",
    provider: "African Tech Foundation",
    amount: "π1,500 - π3,000",
    deadline: "April 15, 2024",
    country: "Rwanda, Kenya, Uganda",
    level: "Undergraduate",
    category: "STEM",
    spots: 30,
    requirements: "Female, STEM major, 3.2 GPA",
    description: "Empowering young women to pursue careers in Science, Technology, Engineering, and Mathematics.",
  },
  {
    id: 3,
    name: "Master's Research Scholarship",
    provider: "East Africa Research Council",
    amount: "π3,000 - π5,000",
    deadline: "May 20, 2024",
    country: "All East Africa",
    level: "Master's",
    category: "Research",
    spots: 20,
    requirements: "Research proposal, Bachelor's degree, Publications preferred",
    description: "Full funding for graduate students conducting innovative research in any field.",
  },
  {
    id: 4,
    name: "TVET Skills Development Fund",
    provider: "Workforce Development Initiative",
    amount: "π300 - π800",
    deadline: "February 28, 2024",
    country: "Rwanda, Tanzania",
    level: "TVET",
    category: "Vocational",
    spots: 100,
    requirements: "Enrolled in TVET program, Financial need",
    description: "Supporting vocational and technical training to build skilled workforce.",
  },
  {
    id: 5,
    name: "PhD Innovation Fellowship",
    provider: "Global Education Partners",
    amount: "π5,000 - π10,000",
    deadline: "June 30, 2024",
    country: "All East Africa",
    level: "PhD",
    category: "All Fields",
    spots: 10,
    requirements: "Master's degree, Research excellence, Innovation focus",
    description: "Comprehensive funding for doctoral students pursuing innovative research.",
  },
  {
    id: 6,
    name: "Refugee Education Support",
    provider: "UNHCR Education Initiative",
    amount: "π400 - π1,200",
    deadline: "Ongoing",
    country: "All East Africa",
    level: "All Levels",
    category: "Humanitarian",
    spots: 200,
    requirements: "Refugee status, Educational enrollment",
    description: "Providing educational opportunities for displaced students across the region.",
  },
]

const myApplications = [
  {
    id: 1,
    scholarship: "Pi Network Education Grant",
    appliedDate: "Jan 15, 2024",
    status: "under-review",
    deadline: "March 31, 2024",
  },
  {
    id: 2,
    scholarship: "Women in STEM Scholarship",
    appliedDate: "Jan 10, 2024",
    status: "approved",
    deadline: "April 15, 2024",
    amount: "π1,800",
  },
]

export function Scholarships() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedScholarship, setExpandedScholarship] = useState<number | null>(null)

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCountry = selectedCountry === "all" || scholarship.country.includes(selectedCountry)
    const matchesLevel = selectedLevel === "all" || scholarship.level === selectedLevel
    const matchesCategory = selectedCategory === "all" || scholarship.category === selectedCategory

    return matchesSearch && matchesCountry && matchesLevel && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Scholarship Portal</h1>
        <p className="text-muted-foreground text-lg">Access education funding opportunities across East Africa</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="browse">Browse</TabsTrigger>
          <TabsTrigger value="apply">Apply</TabsTrigger>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Find Scholarships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Search Scholarships</Label>
                <Input
                  placeholder="Search by name, provider, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Country</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Countries</SelectItem>
                      <SelectItem value="Rwanda">Rwanda</SelectItem>
                      <SelectItem value="Kenya">Kenya</SelectItem>
                      <SelectItem value="Uganda">Uganda</SelectItem>
                      <SelectItem value="Tanzania">Tanzania</SelectItem>
                      <SelectItem value="Burundi">Burundi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Education Level</Label>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="Master's">Master's</SelectItem>
                      <SelectItem value="PhD">PhD</SelectItem>
                      <SelectItem value="TVET">TVET</SelectItem>
                      <SelectItem value="All Levels">All Levels</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="STEM">STEM</SelectItem>
                      <SelectItem value="Research">Research</SelectItem>
                      <SelectItem value="Vocational">Vocational</SelectItem>
                      <SelectItem value="Humanitarian">Humanitarian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                Showing {filteredScholarships.length} of {scholarships.length} scholarships
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {filteredScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-xl">{scholarship.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {scholarship.provider}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{scholarship.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Amount</div>
                        <div className="font-semibold text-sm">{scholarship.amount}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Deadline</div>
                        <div className="font-semibold text-sm">{scholarship.deadline}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Location</div>
                        <div className="font-semibold text-sm">{scholarship.country}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Level</div>
                        <div className="font-semibold text-sm">{scholarship.level}</div>
                      </div>
                    </div>
                  </div>

                  {expandedScholarship === scholarship.id && (
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Description</h4>
                        <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Requirements</h4>
                        <p className="text-sm text-muted-foreground">{scholarship.requirements}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{scholarship.spots} spots available</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setExpandedScholarship(expandedScholarship === scholarship.id ? null : scholarship.id)
                      }
                      className="flex-1"
                    >
                      {expandedScholarship === scholarship.id ? "Show Less" : "View Details"}
                    </Button>
                    <Button size="sm" className="flex-1" onClick={() => setActiveTab("apply")}>
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="apply" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scholarship Application</CardTitle>
              <CardDescription>Complete the form below to apply for a scholarship</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" placeholder="Enter your full name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+250 XXX XXX XXX" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select>
                    <SelectTrigger id="country" className="mt-1">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rwanda">Rwanda</SelectItem>
                      <SelectItem value="kenya">Kenya</SelectItem>
                      <SelectItem value="uganda">Uganda</SelectItem>
                      <SelectItem value="tanzania">Tanzania</SelectItem>
                      <SelectItem value="burundi">Burundi</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="scholarship">Select Scholarship *</Label>
                  <Select>
                    <SelectTrigger id="scholarship" className="mt-1">
                      <SelectValue placeholder="Choose scholarship" />
                    </SelectTrigger>
                    <SelectContent>
                      {scholarships.map((s) => (
                        <SelectItem key={s.id} value={s.id.toString()}>
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="level">Education Level *</Label>
                  <Select>
                    <SelectTrigger id="level" className="mt-1">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="masters">Master's</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="tvet">TVET</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="institution">Current Institution *</Label>
                <Input id="institution" placeholder="Name of your school/university" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="gpa">GPA / Academic Performance *</Label>
                <Input id="gpa" placeholder="e.g. 3.5 or 85%" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="essay">Personal Statement / Essay (500 words) *</Label>
                <Textarea
                  id="essay"
                  placeholder="Tell us about yourself, your goals, and why you deserve this scholarship..."
                  className="mt-1 min-h-[200px]"
                />
              </div>

              <div className="space-y-3">
                <Label>Required Documents</Label>
                <div className="grid gap-3">
                  <div className="border-2 border-dashed rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">Academic Transcript</div>
                        <div className="text-xs text-muted-foreground">PDF, max 5MB</div>
                      </div>
                      <Button size="sm" variant="outline">
                        Upload
                      </Button>
                    </div>
                  </div>
                  <div className="border-2 border-dashed rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">Recommendation Letter</div>
                        <div className="text-xs text-muted-foreground">PDF, max 5MB</div>
                      </div>
                      <Button size="sm" variant="outline">
                        Upload
                      </Button>
                    </div>
                  </div>
                  <div className="border-2 border-dashed rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">ID / Passport Copy</div>
                        <div className="text-xs text-muted-foreground">PDF/Image, max 2MB</div>
                      </div>
                      <Button size="sm" variant="outline">
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">Application Fee</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      A processing fee of π2 is required to submit your application, paid via Pi on GCV.
                    </p>
                    <Badge variant="secondary">Pay π2 on GCV</Badge>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Submit Application
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Scholarship Applications</CardTitle>
              <CardDescription>Track the status of your scholarship applications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {myApplications.map((app) => (
                <Card key={app.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{app.scholarship}</h3>
                        <p className="text-sm text-muted-foreground">Applied: {app.appliedDate}</p>
                      </div>
                      {app.status === "approved" && (
                        <Badge className="bg-green-500">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Approved
                        </Badge>
                      )}
                      {app.status === "under-review" && (
                        <Badge variant="secondary">
                          <Clock className="w-3 h-3 mr-1" />
                          Under Review
                        </Badge>
                      )}
                      {app.status === "rejected" && (
                        <Badge variant="destructive">
                          <XCircle className="w-3 h-3 mr-1" />
                          Rejected
                        </Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Deadline</div>
                        <div className="font-medium text-sm">{app.deadline}</div>
                      </div>
                      {app.amount && (
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Award Amount</div>
                          <div className="font-medium text-sm text-green-600">{app.amount}</div>
                        </div>
                      )}
                    </div>

                    {app.status === "approved" && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-800">
                          Congratulations! Your scholarship has been approved. Check your email for next steps.
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        View Details
                      </Button>
                      {app.status === "approved" && (
                        <Button size="sm" className="flex-1">
                          Accept Award
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {myApplications.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No applications yet</p>
                  <Button className="mt-4" onClick={() => setActiveTab("browse")}>
                    Browse Scholarships
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Application Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Start Early</h4>
                    <p className="text-sm text-muted-foreground">
                      Begin your applications at least 2 months before deadlines
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Personalize Essays</h4>
                    <p className="text-sm text-muted-foreground">Tailor your personal statement to each scholarship</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Strong References</h4>
                    <p className="text-sm text-muted-foreground">
                      Request recommendation letters from teachers who know you well
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Proofread Everything</h4>
                    <p className="text-sm text-muted-foreground">
                      Check for grammar and spelling errors multiple times
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Success Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">2,450+</div>
                  <div className="text-sm text-muted-foreground">Scholarships awarded in 2023</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">π3.2M</div>
                  <div className="text-sm text-muted-foreground">Total funding distributed</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">68%</div>
                  <div className="text-sm text-muted-foreground">Application success rate</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Eligibility Checker
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Answer a few questions to find scholarships you're eligible for
                </p>
                <div className="space-y-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="masters">Master's</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="tvet">TVET</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Field of study" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="stem">STEM</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="arts">Arts & Humanities</SelectItem>
                      <SelectItem value="vocational">Vocational</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Your GPA (e.g. 3.5)" />
                  <Button className="w-full">Check Eligibility</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Academic Transcripts</h4>
                    <p className="text-xs text-muted-foreground">Official records from your institution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Recommendation Letters</h4>
                    <p className="text-xs text-muted-foreground">2-3 letters from teachers/professors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Personal Statement</h4>
                    <p className="text-xs text-muted-foreground">500-1000 word essay</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">ID/Passport</h4>
                    <p className="text-xs text-muted-foreground">Valid identification document</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
