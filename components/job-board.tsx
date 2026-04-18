"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Building,
  Search,
  Filter,
  Upload,
  FileText,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Calendar,
  MessageSquare,
} from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Mathematics Teacher",
    school: "Kigali International School",
    location: "Kigali, Rwanda",
    type: "Full-time",
    salary: "π120-180/month",
    category: "Teaching",
    level: "Secondary",
    subjects: ["Mathematics", "Physics"],
    posted: "2 days ago",
    applicants: 12,
    description: "Experienced mathematics teacher needed for O & A Level students",
  },
  {
    id: 2,
    title: "Headteacher",
    school: "Green Valley Primary School",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "π250-350/month",
    category: "Administration",
    level: "Primary",
    subjects: ["Leadership", "Management"],
    posted: "5 days ago",
    applicants: 8,
    description: "Lead our growing primary school with 400+ students",
  },
  {
    id: 3,
    title: "English & Literature Teacher",
    school: "Kampala Academy",
    location: "Kampala, Uganda",
    type: "Full-time",
    salary: "π100-150/month",
    category: "Teaching",
    level: "Secondary",
    subjects: ["English", "Literature"],
    posted: "1 week ago",
    applicants: 15,
    description: "Passionate English teacher for senior secondary students",
  },
  {
    id: 4,
    title: "ICT Coordinator",
    school: "Dar es Salaam Technical Institute",
    location: "Dar es Salaam, Tanzania",
    type: "Full-time",
    salary: "π150-200/month",
    category: "Administration",
    level: "TVET",
    subjects: ["Computer Science", "IT"],
    posted: "3 days ago",
    applicants: 20,
    description: "Manage computer labs and train students in digital skills",
  },
  {
    id: 5,
    title: "Science Teacher",
    school: "Bujumbura Secondary School",
    location: "Bujumbura, Burundi",
    type: "Full-time",
    salary: "π110-160/month",
    category: "Teaching",
    level: "Secondary",
    subjects: ["Biology", "Chemistry"],
    posted: "4 days ago",
    applicants: 10,
    description: "Biology and Chemistry teacher for O-Level students",
  },
  {
    id: 6,
    title: "Driving Instructor",
    school: "East Africa Driving Academy",
    location: "Kigali, Rwanda",
    type: "Part-time",
    salary: "π80-120/month",
    category: "Vocational Training",
    level: "Driving School",
    subjects: ["Driving", "Road Safety"],
    posted: "1 day ago",
    applicants: 6,
    description: "Certified driving instructor for Category B & C vehicles",
  },
]

const applications = [
  {
    id: 1,
    job: "Mathematics Teacher",
    school: "Kigali International School",
    status: "Under Review",
    appliedDate: "2024-01-10",
  },
  {
    id: 2,
    job: "ICT Coordinator",
    school: "Dar es Salaam Technical Institute",
    status: "Interview Scheduled",
    appliedDate: "2024-01-08",
    interviewDate: "2024-01-20",
  },
]

export function JobBoard() {
  const [activeTab, setActiveTab] = useState<"browse" | "applications" | "post" | "resume">("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.subjects.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory
    const matchesCountry =
      selectedCountry === "all" || job.location.toLowerCase().includes(selectedCountry.toLowerCase())
    return matchesSearch && matchesCategory && matchesCountry
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Job Board & Recruitment</h1>
          <p className="text-muted-foreground text-lg">Connect educators with schools across East Africa</p>
          <Badge variant="secondary" className="mt-2">
            Job postings paid in Pi on GCV
          </Badge>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Button
            variant={activeTab === "browse" ? "default" : "outline"}
            onClick={() => setActiveTab("browse")}
            className="whitespace-nowrap"
          >
            <Search className="w-4 h-4 mr-2" />
            Browse Jobs
          </Button>
          <Button
            variant={activeTab === "applications" ? "default" : "outline"}
            onClick={() => setActiveTab("applications")}
            className="whitespace-nowrap"
          >
            <FileText className="w-4 h-4 mr-2" />
            My Applications
          </Button>
          <Button
            variant={activeTab === "post" ? "default" : "outline"}
            onClick={() => setActiveTab("post")}
            className="whitespace-nowrap"
          >
            <Building className="w-4 h-4 mr-2" />
            Post a Job
          </Button>
          <Button
            variant={activeTab === "resume" ? "default" : "outline"}
            onClick={() => setActiveTab("resume")}
            className="whitespace-nowrap"
          >
            <Upload className="w-4 h-4 mr-2" />
            My Resume/CV
          </Button>
        </div>

        {/* Browse Jobs Tab */}
        {activeTab === "browse" && (
          <div className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Search & Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="search">Search Jobs</Label>
                  <Input
                    id="search"
                    placeholder="Job title, school, subject..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger id="category">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Teaching">Teaching</SelectItem>
                        <SelectItem value="Administration">Administration</SelectItem>
                        <SelectItem value="Vocational Training">Vocational Training</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger id="country">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Countries</SelectItem>
                        <SelectItem value="rwanda">Rwanda</SelectItem>
                        <SelectItem value="kenya">Kenya</SelectItem>
                        <SelectItem value="uganda">Uganda</SelectItem>
                        <SelectItem value="tanzania">Tanzania</SelectItem>
                        <SelectItem value="burundi">Burundi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Listings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{filteredJobs.length} Jobs Available</h3>
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{job.category}</Badge>
                          <Badge variant="outline">{job.level}</Badge>
                          <Badge className="bg-green-500/10 text-green-700 hover:bg-green-500/20">{job.type}</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            {job.school}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            {job.subjects.join(", ")}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Posted {job.posted} · {job.applicants} applicants
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {selectedJob === job.id ? (
                      <div className="space-y-4">
                        <p className="text-sm">{job.description}</p>
                        <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                          <h4 className="font-semibold text-sm">Quick Apply</h4>
                          <p className="text-xs text-muted-foreground">Upload your CV and cover letter</p>
                          <div className="space-y-3">
                            <Button variant="outline" size="sm" className="w-full bg-transparent">
                              <Upload className="w-4 h-4 mr-2" />
                              Upload CV
                            </Button>
                            <Textarea placeholder="Write a brief cover letter..." rows={3} />
                            <Button className="w-full" size="sm">
                              Submit Application (Pay π5 processing fee)
                            </Button>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setSelectedJob(null)}>
                          Close
                        </Button>
                      </div>
                    ) : (
                      <Button onClick={() => setSelectedJob(job.id)} className="w-full">
                        View Details & Apply
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* My Applications Tab */}
        {activeTab === "applications" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">My Job Applications</h3>
            {applications.map((app) => (
              <Card key={app.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{app.job}</CardTitle>
                  <p className="text-sm text-muted-foreground">{app.school}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <Badge variant={app.status === "Interview Scheduled" ? "default" : "secondary"}>{app.status}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    Applied: {app.appliedDate}
                  </div>
                  {app.interviewDate && (
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Interview scheduled: {app.interviewDate}
                      </div>
                    </div>
                  )}
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Employer
                  </Button>
                </CardContent>
              </Card>
            ))}
            {applications.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <Briefcase className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No applications yet</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 bg-transparent"
                    onClick={() => setActiveTab("browse")}
                  >
                    Browse Jobs
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Post a Job Tab */}
        {activeTab === "post" && (
          <Card>
            <CardHeader>
              <CardTitle>Post a New Job</CardTitle>
              <p className="text-sm text-muted-foreground">Reach thousands of qualified educators across East Africa</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="job-title">Job Title *</Label>
                <Input id="job-title" placeholder="e.g., Mathematics Teacher" />
              </div>
              <div>
                <Label htmlFor="school-name">School/Institution Name *</Label>
                <Input id="school-name" placeholder="Your school name" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="job-category">Category *</Label>
                  <Select>
                    <SelectTrigger id="job-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teaching">Teaching</SelectItem>
                      <SelectItem value="admin">Administration</SelectItem>
                      <SelectItem value="vocational">Vocational Training</SelectItem>
                      <SelectItem value="support">Support Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="job-level">Education Level *</Label>
                  <Select>
                    <SelectTrigger id="job-level">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primary">Primary School</SelectItem>
                      <SelectItem value="secondary">Secondary School</SelectItem>
                      <SelectItem value="tvet">TVET Institute</SelectItem>
                      <SelectItem value="university">University</SelectItem>
                      <SelectItem value="driving">Driving School</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input id="location" placeholder="City, Country" />
                </div>
                <div>
                  <Label htmlFor="salary">Salary Range (in Pi) *</Label>
                  <Input id="salary" placeholder="e.g., π100-150/month" />
                </div>
              </div>
              <div>
                <Label htmlFor="subjects">Subjects/Specializations</Label>
                <Input id="subjects" placeholder="e.g., Mathematics, Physics" />
              </div>
              <div>
                <Label htmlFor="job-description">Job Description *</Label>
                <Textarea
                  id="job-description"
                  placeholder="Describe the role, responsibilities, and requirements..."
                  rows={6}
                />
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Job Posting Fee</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Your job posting will be active for 30 days and reach qualified educators across East Africa
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm">30-day job posting</span>
                  <span className="font-bold">π20</span>
                </div>
                <Button className="w-full">Post Job & Pay π20 on GCV</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* My Resume Tab */}
        {activeTab === "resume" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Resume/CV</CardTitle>
                <p className="text-sm text-muted-foreground">Keep your profile updated to increase your chances</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="full-name">Full Name *</Label>
                  <Input id="full-name" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+250 XXX XXX XXX" />
                </div>
                <div>
                  <Label htmlFor="cv-location">Location *</Label>
                  <Input id="cv-location" placeholder="City, Country" />
                </div>
                <div>
                  <Label htmlFor="qualifications">Qualifications & Certifications</Label>
                  <Textarea
                    id="qualifications"
                    placeholder="Bachelor's in Education, Teaching License, etc."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Teaching Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="List your previous teaching positions and years of experience..."
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="subjects-taught">Subjects You Can Teach</Label>
                  <Input id="subjects-taught" placeholder="Mathematics, Physics, Chemistry..." />
                </div>
                <div>
                  <Label>Upload CV Document</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                    <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                      Choose File
                    </Button>
                  </div>
                </div>
                <Button className="w-full">Save Resume</Button>
              </CardContent>
            </Card>

            {/* Skills & Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills & Endorsements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Classroom Management</Badge>
                  <Badge variant="secondary">Curriculum Design</Badge>
                  <Badge variant="secondary">Student Assessment</Badge>
                  <Badge variant="secondary">Educational Technology</Badge>
                </div>
                <Button variant="outline" size="sm">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Add More Skills
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
