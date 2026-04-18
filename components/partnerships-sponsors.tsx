"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Award,
  Handshake,
  Users,
  Building2,
  Globe,
  TrendingUp,
  Heart,
  Search,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  Mail,
  Phone,
  Star,
  Gift,
  Target,
  Lightbulb,
  BarChart3,
  GraduationCap,
  UserPlus,
} from "lucide-react"

export function PartnershipsSponsors() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchQuery, setSearchQuery] = useState("")

  const sponsors = [
    {
      id: 1,
      name: "Tech for Education Foundation",
      type: "Corporate",
      country: "Kenya",
      focus: "Technology & STEM Education",
      studentsSupported: 850,
      fundingAmount: "π50,000",
      rating: 4.9,
      description: "Supporting technology education across East Africa with scholarships, equipment, and training.",
      contact: "info@techforedu.org",
      phone: "+254 712 345 678",
      active: true,
    },
    {
      id: 2,
      name: "East African Education Alliance",
      type: "Non-Profit",
      country: "Regional",
      focus: "General Education",
      studentsSupported: 2400,
      fundingAmount: "π120,000",
      rating: 4.8,
      description:
        "Regional partnership providing scholarships and school infrastructure across all East African countries.",
      contact: "contact@eaea.org",
      phone: "+256 700 123 456",
      active: true,
    },
    {
      id: 3,
      name: "Rwanda Skills Development Fund",
      type: "Government",
      country: "Rwanda",
      focus: "Vocational Training",
      studentsSupported: 1200,
      fundingAmount: "π80,000",
      rating: 4.7,
      description: "Government initiative supporting TVET and vocational education programs in Rwanda.",
      contact: "info@rsdf.gov.rw",
      phone: "+250 788 123 456",
      active: true,
    },
    {
      id: 4,
      name: "Women in STEM Initiative",
      type: "Non-Profit",
      country: "Uganda",
      focus: "Women in Technology",
      studentsSupported: 650,
      fundingAmount: "π45,000",
      rating: 5.0,
      description: "Empowering young women to pursue careers in science, technology, engineering, and mathematics.",
      contact: "hello@wistem.ug",
      phone: "+256 750 987 654",
      active: true,
    },
    {
      id: 5,
      name: "Global Education Partners",
      type: "International",
      country: "Global",
      focus: "Higher Education",
      studentsSupported: 3200,
      fundingAmount: "π200,000",
      rating: 4.9,
      description: "International scholarship program for African students pursuing university education worldwide.",
      contact: "apply@globaledupartners.org",
      phone: "+1 555 123 4567",
      active: true,
    },
    {
      id: 6,
      name: "Tanzania Youth Empowerment",
      type: "Corporate",
      country: "Tanzania",
      focus: "Youth Development",
      studentsSupported: 980,
      fundingAmount: "π60,000",
      rating: 4.6,
      description: "Corporate social responsibility program supporting secondary and tertiary education in Tanzania.",
      contact: "info@tye.co.tz",
      phone: "+255 654 321 987",
      active: true,
    },
  ]

  const partnerships = [
    {
      id: 1,
      school: "Kigali Institute of Science and Technology",
      partner: "Tech for Education Foundation",
      type: "Technology Partnership",
      established: "2023",
      benefit: "Lab equipment & scholarships",
      status: "Active",
    },
    {
      id: 2,
      school: "Makerere University",
      partner: "Global Education Partners",
      type: "Scholarship Program",
      established: "2022",
      benefit: "Full scholarships for 50 students",
      status: "Active",
    },
    {
      id: 3,
      school: "Nairobi Technical Training Institute",
      partner: "East African Education Alliance",
      type: "Infrastructure Development",
      established: "2024",
      benefit: "Workshop construction & equipment",
      status: "Active",
    },
    {
      id: 4,
      school: "Dar es Salaam Girls School",
      partner: "Women in STEM Initiative",
      type: "Mentorship Program",
      established: "2023",
      benefit: "STEM mentorship & coding classes",
      status: "Active",
    },
  ]

  const sponsorshipPackages = [
    {
      id: 1,
      name: "Bronze Sponsor",
      amount: "π5,000",
      benefits: ["Support 5 students", "Logo on website", "Quarterly impact reports", "Certificate of appreciation"],
      color: "bg-orange-100 border-orange-300",
    },
    {
      id: 2,
      name: "Silver Sponsor",
      amount: "π15,000",
      benefits: [
        "Support 15 students",
        "Featured logo on website",
        "Monthly impact reports",
        "Social media recognition",
        "Invitation to annual events",
      ],
      color: "bg-gray-100 border-gray-400",
    },
    {
      id: 3,
      name: "Gold Sponsor",
      amount: "π30,000",
      benefits: [
        "Support 35 students",
        "Premium website placement",
        "Weekly impact updates",
        "Press release features",
        "VIP event access",
        "Direct student mentorship",
      ],
      color: "bg-yellow-100 border-yellow-400",
    },
    {
      id: 4,
      name: "Platinum Sponsor",
      amount: "π50,000+",
      benefits: [
        "Support 50+ students",
        "Named scholarship program",
        "Real-time impact dashboard",
        "Partnership branding rights",
        "Executive board participation",
        "Custom mentorship programs",
        "Annual recognition gala",
      ],
      color: "bg-blue-100 border-blue-400",
    },
  ]

  const successStories = [
    {
      id: 1,
      name: "Grace Uwase",
      field: "Computer Science",
      sponsor: "Tech for Education Foundation",
      achievement: "Graduated with honors, now a software engineer at a leading tech company in Kigali",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "John Kamau",
      field: "Mechanical Engineering",
      sponsor: "East African Education Alliance",
      achievement: "Founded a successful manufacturing startup creating 50+ jobs in Nairobi",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Amina Hassan",
      field: "Medical Doctor",
      sponsor: "Global Education Partners",
      achievement: "Now serving rural communities, treated over 3,000 patients in her first year",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const impactMetrics = {
    totalStudentsSupported: 12500,
    totalFunding: "π850,000",
    activeSponsors: 45,
    graduationRate: "94%",
    employmentRate: "87%",
    averageGPA: 3.6,
  }

  const mentorshipPrograms = [
    {
      id: 1,
      name: "Tech Mentorship Program",
      sponsor: "Tech for Education Foundation",
      mentors: 25,
      students: 80,
      duration: "6 months",
      focus: "Coding, Web Development, AI",
    },
    {
      id: 2,
      name: "Business Leadership Program",
      sponsor: "Tanzania Youth Empowerment",
      mentors: 15,
      students: 45,
      duration: "3 months",
      focus: "Entrepreneurship, Finance, Management",
    },
    {
      id: 3,
      name: "Women in STEM Mentorship",
      sponsor: "Women in STEM Initiative",
      mentors: 20,
      students: 65,
      duration: "12 months",
      focus: "Science, Engineering, Research",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold">Partnerships & Sponsors</h1>
          </div>
          <p className="text-lg opacity-90 max-w-2xl text-pretty">
            Connect with sponsors, apply for scholarships, and build educational partnerships across East Africa
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:w-auto lg:inline-grid gap-1">
            <TabsTrigger value="browse">Browse</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="apply">Apply</TabsTrigger>
            <TabsTrigger value="my-applications">My Apps</TabsTrigger>
          </TabsList>

          {/* ... existing browse tab code ... */}
          <TabsContent value="browse" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Find Sponsors & Funding Opportunities</CardTitle>
                <CardDescription>Search for sponsors matching your education goals and needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name, focus area, or country..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button>Search</Button>
                </div>

                <div className="grid gap-4">
                  {sponsors.map((sponsor) => (
                    <Card key={sponsor.id} className="border-2">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                              {sponsor.type === "Corporate" && <Building2 className="w-6 h-6 text-primary" />}
                              {sponsor.type === "Non-Profit" && <Heart className="w-6 h-6 text-primary" />}
                              {sponsor.type === "Government" && <Award className="w-6 h-6 text-primary" />}
                              {sponsor.type === "International" && <Globe className="w-6 h-6 text-primary" />}
                            </div>
                            <div>
                              <CardTitle className="text-lg mb-1">{sponsor.name}</CardTitle>
                              <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant="secondary">{sponsor.type}</Badge>
                                <Badge variant="outline">{sponsor.country}</Badge>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm font-medium">{sponsor.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {sponsor.active && (
                            <Badge className="bg-green-500">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Active
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{sponsor.description}</p>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Focus Area</p>
                              <p className="text-sm font-medium">{sponsor.focus}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Students Supported</p>
                              <p className="text-sm font-medium">{sponsor.studentsSupported.toLocaleString()}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Total Funding</p>
                              <p className="text-sm font-medium">{sponsor.fundingAmount}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span>{sponsor.contact}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span>{sponsor.phone}</span>
                          </div>
                        </div>

                        <Button className="w-full">Apply for Sponsorship</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="packages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Become a Sponsor</CardTitle>
                <CardDescription>
                  Choose a sponsorship package that fits your budget and commitment level
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {sponsorshipPackages.map((pkg) => (
                    <Card key={pkg.id} className={`border-2 ${pkg.color}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{pkg.name}</CardTitle>
                          <Gift className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-primary">{pkg.amount}</div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          {pkg.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full">Choose This Package</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 border-2 border-primary">
                  <CardHeader>
                    <CardTitle>Custom Sponsorship</CardTitle>
                    <CardDescription>Create a personalized sponsorship program tailored to your goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Work with our team to design a custom sponsorship package that aligns with your organization's
                      values and impact goals. Options include named scholarships, infrastructure projects, research
                      funding, and more.
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Contact Us for Custom Package
                    </Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ... existing partnerships tab code ... */}
          <TabsContent value="partnerships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Partnerships</CardTitle>
                <CardDescription>
                  Successful partnerships between schools and sponsors across East Africa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partnerships.map((partnership) => (
                    <Card key={partnership.id} className="border-2">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base mb-2">{partnership.school}</CardTitle>
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge>{partnership.type}</Badge>
                              <Badge variant="outline">Est. {partnership.established}</Badge>
                              <Badge className="bg-green-500">
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                                {partnership.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Handshake className="w-4 h-4 text-primary" />
                          <span className="text-sm">
                            <span className="font-medium">Partner:</span> {partnership.partner}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="text-sm">
                            <span className="font-medium">Benefit:</span> {partnership.benefit}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mentorship Programs</CardTitle>
                <CardDescription>
                  Sponsor-led mentorship programs connecting professionals with students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mentorshipPrograms.map((program) => (
                    <Card key={program.id} className="border-2">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg mb-2">{program.name}</CardTitle>
                            <div className="flex items-center gap-2">
                              <Badge>{program.duration}</Badge>
                              <Badge variant="outline">{program.focus}</Badge>
                            </div>
                          </div>
                          <UserPlus className="w-6 h-6 text-primary" />
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Handshake className="w-4 h-4 text-primary" />
                          <span>
                            <span className="font-medium">Sponsor:</span> {program.sponsor}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-muted/50 rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Active Mentors</p>
                            <p className="text-2xl font-bold text-primary">{program.mentors}</p>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Students Enrolled</p>
                            <p className="text-2xl font-bold text-primary">{program.students}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1">Join as Mentor</Button>
                          <Button variant="outline" className="flex-1 bg-transparent">
                            Enroll as Student
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Start Your Own Mentorship Program</CardTitle>
                    <CardDescription>
                      Create and sponsor a mentorship program in your field of expertise
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Organizations and individuals can establish mentorship programs to share knowledge and guide the
                      next generation. Mentorship programs include structured curriculum, regular check-ins, and
                      measurable outcomes.
                    </p>
                    <Button className="w-full">Propose a Mentorship Program</Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Impact & Success Metrics</CardTitle>
                <CardDescription>See the real-world impact of sponsorships and partnerships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Users className="w-5 h-5 text-primary" />
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        {impactMetrics.totalStudentsSupported.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">Students Supported</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{impactMetrics.totalFunding}</p>
                      <p className="text-xs text-muted-foreground">Total Funding</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{impactMetrics.activeSponsors}</p>
                      <p className="text-xs text-muted-foreground">Active Sponsors</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{impactMetrics.graduationRate}</p>
                      <p className="text-xs text-muted-foreground">Graduation Rate</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Target className="w-5 h-5 text-primary" />
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{impactMetrics.employmentRate}</p>
                      <p className="text-xs text-muted-foreground">Employment Rate</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{impactMetrics.averageGPA}</p>
                      <p className="text-xs text-muted-foreground">Average GPA</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Success Stories</h3>
                  {successStories.map((story) => (
                    <Card key={story.id} className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <img
                            src={story.image || "/placeholder.svg"}
                            alt={story.name}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shrink-0"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-1">{story.name}</h4>
                            <Badge variant="secondary" className="mb-2">
                              {story.field}
                            </Badge>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-2">{story.achievement}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <Heart className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">
                                Sponsored by <span className="font-medium text-foreground">{story.sponsor}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Monthly Impact Reports</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          All sponsors receive detailed monthly reports showing student progress, academic achievements,
                          graduation rates, and employment outcomes. Platinum sponsors get access to a real-time impact
                          dashboard.
                        </p>
                        <Button variant="outline">View Sample Report</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ... existing apply and my-applications tabs ... */}
          <TabsContent value="apply" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Apply for Sponsorship or Partnership</CardTitle>
                <CardDescription>Submit your application to connect with sponsors and funding partners</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="applicant-type">Application Type</Label>
                    <Select>
                      <SelectTrigger id="applicant-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student - Seeking Scholarship</SelectItem>
                        <SelectItem value="school">School - Seeking Partnership</SelectItem>
                        <SelectItem value="teacher">Teacher - Professional Development</SelectItem>
                        <SelectItem value="institution">Institution - Infrastructure Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Full Name / Institution Name</Label>
                      <Input id="full-name" placeholder="Enter name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+250 XXX XXX XXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select>
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rwanda">Rwanda</SelectItem>
                          <SelectItem value="kenya">Kenya</SelectItem>
                          <SelectItem value="uganda">Uganda</SelectItem>
                          <SelectItem value="tanzania">Tanzania</SelectItem>
                          <SelectItem value="burundi">Burundi</SelectItem>
                          <SelectItem value="south-sudan">South Sudan</SelectItem>
                          <SelectItem value="ethiopia">Ethiopia</SelectItem>
                          <SelectItem value="somalia">Somalia</SelectItem>
                          <SelectItem value="drc">DRC</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="focus-area">Focus Area / Field of Study</Label>
                    <Select>
                      <SelectTrigger id="focus-area">
                        <SelectValue placeholder="Select focus area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stem">STEM (Science, Technology, Engineering, Math)</SelectItem>
                        <SelectItem value="business">Business & Economics</SelectItem>
                        <SelectItem value="arts">Arts & Humanities</SelectItem>
                        <SelectItem value="vocational">Vocational & Technical Training</SelectItem>
                        <SelectItem value="medical">Medical & Health Sciences</SelectItem>
                        <SelectItem value="education">Education & Teaching</SelectItem>
                        <SelectItem value="agriculture">Agriculture & Environment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="funding-needed">Funding Amount Needed (in Pi)</Label>
                    <Input id="funding-needed" placeholder="e.g., π5000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purpose">Purpose of Funding</Label>
                    <Textarea
                      id="purpose"
                      placeholder="Describe what the funding will be used for..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about">About You / Your Institution</Label>
                    <Textarea
                      id="about"
                      placeholder="Tell us about yourself, your achievements, goals, and why you need support..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documents">Supporting Documents</Label>
                    <Input id="documents" type="file" multiple />
                    <p className="text-xs text-muted-foreground">
                      Upload transcripts, recommendation letters, project proposals, etc.
                    </p>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm mb-1">Application Fee</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Application processing fee: <span className="font-bold text-primary">π2</span> (paid on GCV)
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application (Pay π2 on GCV)
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track the status of your sponsorship and partnership applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-base mb-2">STEM Scholarship Application</CardTitle>
                          <p className="text-sm text-muted-foreground">Tech for Education Foundation</p>
                        </div>
                        <Badge className="bg-yellow-500">
                          <Clock className="w-3 h-3 mr-1" />
                          Under Review
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Applied:</span> Dec 15, 2024
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Funding Requested:</span> π5,000
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                        View Application Details
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-base mb-2">Partnership Application</CardTitle>
                          <p className="text-sm text-muted-foreground">East African Education Alliance</p>
                        </div>
                        <Badge className="bg-green-500">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Approved
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Applied:</span> Nov 28, 2024
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Approved:</span> Jan 5, 2025
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Funding Awarded:</span> π3,500
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                        View Award Details
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="text-center text-muted-foreground text-sm py-8">No more applications</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
