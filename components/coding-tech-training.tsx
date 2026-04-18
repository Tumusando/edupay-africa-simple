"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Code,
  Book,
  Clock,
  Users,
  Award,
  Star,
  Laptop,
  Target,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  PlayCircle,
  FileCode,
  Zap,
  Globe,
} from "lucide-react"

const codingCourses = [
  {
    id: "web-fundamentals",
    title: "Web Development Fundamentals",
    instructor: "Jean Claude Niyomwungeri",
    country: "Rwanda",
    level: "Beginner",
    duration: "8 weeks",
    price: "π15",
    rating: 4.8,
    students: 1420,
    language: "HTML, CSS, JavaScript",
    description: "Learn to build responsive websites from scratch",
    topics: ["HTML5 & CSS3", "Responsive Design", "JavaScript Basics", "Web APIs", "Git & GitHub"],
    projects: 6,
  },
  {
    id: "python-programming",
    title: "Python Programming Mastery",
    instructor: "Grace Wanjiru",
    country: "Kenya",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    price: "π18",
    rating: 4.9,
    students: 2150,
    language: "Python",
    description: "Complete Python course from basics to data science",
    topics: ["Python Syntax", "OOP", "Data Structures", "Pandas & NumPy", "Web Scraping"],
    projects: 8,
  },
  {
    id: "blockchain-dev",
    title: "Blockchain & Smart Contracts",
    instructor: "Emmanuel Mukasa",
    country: "Uganda",
    level: "Advanced",
    duration: "10 weeks",
    price: "π25",
    rating: 4.7,
    students: 890,
    language: "Solidity, Web3.js",
    description: "Build decentralized apps on blockchain",
    topics: ["Blockchain Basics", "Smart Contracts", "Solidity", "DApp Development", "Web3 Integration"],
    projects: 5,
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    instructor: "Amina Hassan",
    country: "Tanzania",
    level: "Intermediate",
    duration: "10 weeks",
    price: "π20",
    rating: 4.8,
    students: 1680,
    language: "React Native",
    description: "Build cross-platform mobile apps",
    topics: ["React Native", "Mobile UI/UX", "APIs", "Navigation", "App Deployment"],
    projects: 7,
  },
  {
    id: "java-programming",
    title: "Java Programming Complete",
    instructor: "Pierre Habimana",
    country: "Rwanda",
    level: "Beginner to Advanced",
    duration: "14 weeks",
    price: "π22",
    rating: 4.6,
    students: 1320,
    language: "Java",
    description: "Master Java for enterprise applications",
    topics: ["Java Fundamentals", "OOP", "Spring Framework", "Database Integration", "Testing"],
    projects: 9,
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    instructor: "Dr. Sarah Kamau",
    country: "Kenya",
    level: "Advanced",
    duration: "12 weeks",
    price: "π28",
    rating: 4.9,
    students: 1050,
    language: "Python, TensorFlow",
    description: "Build intelligent systems with AI",
    topics: ["Machine Learning", "Neural Networks", "TensorFlow", "AI Ethics", "Real Projects"],
    projects: 6,
  },
]

const bootcamps = [
  {
    id: "fullstack-bootcamp",
    title: "Full-Stack Web Developer Bootcamp",
    duration: "16 weeks intensive",
    price: "π45",
    schedule: "Mon-Fri, 2-6pm EAT",
    startDate: "March 1, 2026",
    students: 25,
    maxStudents: 30,
    description: "Intensive training to become a professional full-stack developer",
    outcomes: ["Junior Developer Ready", "Portfolio Projects", "Job Placement Support", "Certificate"],
  },
  {
    id: "data-science-bootcamp",
    title: "Data Science & Analytics Bootcamp",
    duration: "14 weeks intensive",
    price: "π50",
    schedule: "Tue-Sat, 3-7pm EAT",
    startDate: "March 15, 2026",
    students: 18,
    maxStudents: 25,
    description: "Transform into a data scientist with real-world projects",
    outcomes: ["Industry Projects", "Data Analyst Skills", "Python & R Mastery", "Certificate"],
  },
  {
    id: "mobile-bootcamp",
    title: "Mobile App Development Bootcamp",
    duration: "12 weeks intensive",
    price: "π40",
    schedule: "Sat-Sun, 9am-5pm EAT",
    startDate: "April 1, 2026",
    students: 22,
    maxStudents: 30,
    description: "Build professional mobile apps for iOS and Android",
    outcomes: ["Cross-Platform Apps", "App Store Deployment", "Freelance Ready", "Certificate"],
  },
]

const techPaths = [
  {
    title: "Frontend Developer",
    courses: ["Web Development Fundamentals", "JavaScript Advanced", "React & Next.js"],
    duration: "6 months",
    jobs: "Web Developer, UI Developer, Frontend Engineer",
  },
  {
    title: "Backend Developer",
    courses: ["Python Programming", "Database Design", "API Development"],
    duration: "7 months",
    jobs: "Backend Developer, API Engineer, Database Developer",
  },
  {
    title: "Mobile Developer",
    courses: ["JavaScript Fundamentals", "Mobile App Development", "App Design"],
    duration: "5 months",
    jobs: "Mobile Developer, App Developer, React Native Developer",
  },
  {
    title: "Blockchain Developer",
    courses: ["Web Development", "Blockchain & Smart Contracts", "DApp Development"],
    duration: "8 months",
    jobs: "Blockchain Developer, Smart Contract Developer, Web3 Engineer",
  },
]

export function CodingTechTraining() {
  const [activeTab, setActiveTab] = useState("courses")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCourses = codingCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
              <Code className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-balance">Coding & Tech Training</h1>
              <p className="text-muted-foreground mt-1">Learn programming from expert East African instructors</p>
            </div>
          </div>
          <Badge variant="secondary">All courses paid in Pi on GCV</Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="courses" className="gap-2">
              <Book className="w-4 h-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="bootcamps" className="gap-2">
              <Zap className="w-4 h-4" />
              Bootcamps
            </TabsTrigger>
            <TabsTrigger value="career" className="gap-2">
              <Briefcase className="w-4 h-4" />
              Career Paths
            </TabsTrigger>
            <TabsTrigger value="practice" className="gap-2">
              <Laptop className="w-4 h-4" />
              Practice
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Browse Coding Courses</CardTitle>
                <CardDescription>Learn programming languages and frameworks from experts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Label htmlFor="search">Search Courses</Label>
                  <Input
                    id="search"
                    placeholder="Search by course, language, or instructor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div className="grid gap-4">
                  {filteredCourses.map((course) => (
                    <Card key={course.id} className="border-2 hover:border-primary transition-colors">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2 flex items-center gap-2 flex-wrap">
                              {course.title}
                              <Badge variant="outline">{course.level}</Badge>
                              {course.rating >= 4.8 && <Badge variant="secondary">Top Rated</Badge>}
                            </CardTitle>
                            <CardDescription className="space-y-1">
                              <div className="flex items-center gap-2 flex-wrap text-sm">
                                <span className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  {course.instructor}
                                </span>
                                <span className="text-muted-foreground">•</span>
                                <span className="flex items-center gap-1">
                                  <Globe className="w-3 h-3" />
                                  {course.country}
                                </span>
                                <span className="text-muted-foreground">•</span>
                                <span className="flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  {course.rating} ({course.students} students)
                                </span>
                              </div>
                              <p className="mt-2">{course.description}</p>
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{course.price}</div>
                            <p className="text-xs text-muted-foreground">Pay with Pi on GCV</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">Course Details</h4>
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Code className="w-4 h-4 text-muted-foreground" />
                              <span>{course.language}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <FileCode className="w-4 h-4 text-muted-foreground" />
                              <span>{course.projects} Projects</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">What You'll Learn</h4>
                            <ul className="space-y-1">
                              {course.topics.slice(0, 3).map((topic, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm">
                                  <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                              {course.topics.length > 3 && (
                                <li className="text-xs text-muted-foreground ml-5">
                                  +{course.topics.length - 3} more topics
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <Button className="flex-1">
                            <PlayCircle className="w-4 h-4 mr-2" />
                            Enroll Now
                          </Button>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bootcamps" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Intensive Coding Bootcamps</CardTitle>
                <CardDescription>Full-time programs to fast-track your tech career</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {bootcamps.map((bootcamp) => (
                    <Card key={bootcamp.id} className="border-2 hover:border-primary transition-colors">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2 flex items-center gap-2 flex-wrap">
                              {bootcamp.title}
                              <Badge variant="secondary">
                                {bootcamp.students}/{bootcamp.maxStudents} enrolled
                              </Badge>
                            </CardTitle>
                            <CardDescription>{bootcamp.description}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{bootcamp.price}</div>
                            <p className="text-xs text-muted-foreground">Full program</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">Program Details</h4>
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>{bootcamp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Target className="w-4 h-4 text-muted-foreground" />
                              <span>{bootcamp.schedule}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Award className="w-4 h-4 text-muted-foreground" />
                              <span>Starts {bootcamp.startDate}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">Outcomes</h4>
                            <ul className="space-y-1">
                              {bootcamp.outcomes.map((outcome, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm">
                                  <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <Button className="w-full">Apply for Bootcamp</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="career" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tech Career Paths</CardTitle>
                <CardDescription>Follow a structured path to your dream tech job</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {techPaths.map((path, idx) => (
                    <Card key={idx} className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          {path.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Recommended Learning Path</h4>
                          <ol className="space-y-1 list-decimal list-inside">
                            {path.courses.map((course, cidx) => (
                              <li key={cidx} className="text-sm">
                                {course}
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>Estimated time: {path.duration}</span>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Career Opportunities</h4>
                          <p className="text-sm text-muted-foreground">{path.jobs}</p>
                        </div>
                        <Button className="w-full">Start Career Path</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Practice Coding</CardTitle>
                <CardDescription>Submit your code for review and feedback</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-title">Project Title</Label>
                  <Input id="project-title" placeholder="E.g., My Portfolio Website" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="programming-language">Programming Language</Label>
                  <select
                    id="programming-language"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option>HTML/CSS/JavaScript</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C++</option>
                    <option>JavaScript/React</option>
                    <option>Solidity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="code-description">Project Description</Label>
                  <Textarea
                    id="code-description"
                    placeholder="Describe what your project does and what you're trying to achieve..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="code-snippet">Your Code</Label>
                  <Textarea
                    id="code-snippet"
                    placeholder="Paste your code here..."
                    rows={10}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github-link">GitHub Repository Link (Optional)</Label>
                  <Input id="github-link" placeholder="https://github.com/yourusername/project" />
                </div>

                <Button className="w-full">Submit for Review (π3)</Button>

                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Coding Challenges</h3>
                  <div className="grid gap-3">
                    {[
                      { title: "Build a Calculator", difficulty: "Beginner", points: "π1" },
                      { title: "Create a Todo App", difficulty: "Intermediate", points: "π2" },
                      { title: "Develop an API", difficulty: "Advanced", points: "π5" },
                    ].map((challenge, idx) => (
                      <Card key={idx}>
                        <CardContent className="p-4 flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">{challenge.title}</h4>
                            <Badge variant="outline" className="mt-1">
                              {challenge.difficulty}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-primary">{challenge.points}</p>
                            <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                              Start
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
