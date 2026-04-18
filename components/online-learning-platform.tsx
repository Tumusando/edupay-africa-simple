"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Video,
  Clock,
  Users,
  Code,
  Calculator,
  Beaker,
  Globe,
  Cpu,
  Brain,
  CheckCircle2,
  PlayCircle,
  FileText,
  Award,
  Search,
  Star,
  Download,
  MessageSquare,
  Calendar,
  Camera,
  Mic,
  StopCircle,
  Car,
  Languages,
} from "lucide-react"

const allCourses = [
  {
    id: 1,
    title: "Blockchain & Web3 Fundamentals",
    instructor: "Dr. Patrick Nsengimana",
    students: 589,
    duration: "10 weeks",
    icon: Cpu,
    level: "Beginner",
    category: "Web3",
    rating: 4.8,
    price: "π15",
    lessons: 45,
    description: "Learn blockchain technology, cryptocurrencies, and Web3 concepts from scratch.",
  },
  {
    id: 2,
    title: "Smart Contracts Development",
    instructor: "Marie Uwase",
    students: 342,
    duration: "12 weeks",
    icon: Code,
    level: "Advanced",
    category: "Web3",
    rating: 4.9,
    price: "π25",
    lessons: 60,
    description: "Master Solidity programming and build decentralized applications on Ethereum.",
  },
  {
    id: 3,
    title: "Artificial Intelligence Basics",
    instructor: "Dr. Jean Mugabo",
    students: 678,
    duration: "14 weeks",
    icon: Brain,
    level: "Intermediate",
    category: "AI",
    rating: 4.7,
    price: "π20",
    lessons: 56,
    description: "Introduction to AI concepts, neural networks, and practical applications.",
  },
  {
    id: 4,
    title: "Machine Learning for Beginners",
    instructor: "Prof. Aline Kayitesi",
    students: 523,
    duration: "16 weeks",
    icon: Brain,
    level: "Beginner",
    category: "AI",
    rating: 4.6,
    price: "π18",
    lessons: 48,
    description: "Learn machine learning algorithms, data science, and predictive modeling.",
  },
  {
    id: 5,
    title: "Web Development Fundamentals",
    instructor: "Yves Habimana",
    students: 456,
    duration: "8 weeks",
    icon: Code,
    level: "Beginner",
    category: "Tech",
    rating: 4.8,
    price: "π12",
    lessons: 40,
    description: "Master HTML, CSS, JavaScript, and build modern responsive websites.",
  },
  {
    id: 6,
    title: "Mathematics - Advanced Level",
    instructor: "Dr. David Nkusi",
    students: 324,
    duration: "12 weeks",
    icon: Calculator,
    level: "Advanced",
    category: "STEM",
    rating: 4.9,
    price: "π15",
    lessons: 50,
    description: "Advanced calculus, linear algebra, and mathematical problem solving.",
  },
  {
    id: 7,
    title: "Python Programming",
    instructor: "Patrick Muhire",
    students: 567,
    duration: "10 weeks",
    icon: Code,
    level: "Beginner",
    category: "Tech",
    rating: 4.7,
    price: "π14",
    lessons: 42,
    description: "Learn Python from basics to advanced concepts including data structures.",
  },
  {
    id: 8,
    title: "Physics for Secondary School",
    instructor: "Dr. Grace Mutesi",
    students: 189,
    duration: "14 weeks",
    icon: Beaker,
    level: "Intermediate",
    category: "STEM",
    rating: 4.5,
    price: "π12",
    lessons: 52,
    description: "Complete physics curriculum covering mechanics, electricity, and thermodynamics.",
  },
  {
    id: 9,
    title: "English Literature & Writing",
    instructor: "Prof. James Habimana",
    students: 278,
    duration: "10 weeks",
    icon: BookOpen,
    level: "Intermediate",
    category: "Language",
    rating: 4.6,
    price: "π10",
    lessons: 38,
    description: "Improve reading comprehension, essay writing, and literary analysis skills.",
  },
  {
    id: 10,
    title: "French Language Course",
    instructor: "Claire Mukamana",
    students: 412,
    duration: "16 weeks",
    icon: Globe,
    level: "Beginner",
    category: "Language",
    rating: 4.7,
    price: "π16",
    lessons: 64,
    description: "Complete French course from A1 to B1 level with conversational practice.",
  },
  {
    id: 11,
    title: "Cryptocurrency & DeFi",
    instructor: "Emmanuel Nshuti",
    students: 445,
    duration: "8 weeks",
    icon: Cpu,
    level: "Intermediate",
    category: "Web3",
    rating: 4.8,
    price: "π18",
    lessons: 36,
    description: "Understanding cryptocurrencies, trading, DeFi protocols, and blockchain economics.",
  },
  {
    id: 12,
    title: "AI Ethics & Applications",
    instructor: "Dr. Sarah Uwera",
    students: 298,
    duration: "6 weeks",
    icon: Brain,
    level: "Beginner",
    category: "AI",
    rating: 4.5,
    price: "π8",
    lessons: 24,
    description: "Explore ethical considerations in AI development and real-world applications.",
  },
  {
    id: 13,
    title: "English Language - Complete Course",
    instructor: "Sarah Johnson",
    students: 892,
    duration: "20 weeks",
    icon: Languages,
    level: "Beginner",
    category: "Language",
    rating: 4.9,
    price: "π12",
    lessons: 80,
    description:
      "Complete English language course covering speaking, writing, reading, and listening skills from A1 to C1 level.",
  },
  {
    id: 14,
    title: "Driving Rules & Road Safety",
    instructor: "Jean Baptiste Ndayisenga",
    students: 654,
    duration: "4 weeks",
    icon: Car,
    level: "Beginner",
    category: "Driving",
    rating: 4.8,
    price: "π8",
    lessons: 20,
    description:
      "Learn traffic rules, road signs, safe driving practices, and prepare for your driving test across East Africa.",
  },
]

const myEnrolledCourses = [
  {
    id: 1,
    title: "Blockchain & Web3 Fundamentals",
    instructor: "Dr. Patrick Nsengimana",
    progress: 65,
    nextLesson: "Lesson 30: Consensus Mechanisms",
    icon: Cpu,
    totalLessons: 45,
    completedLessons: 29,
  },
  {
    id: 5,
    title: "Web Development Fundamentals",
    instructor: "Yves Habimana",
    progress: 40,
    nextLesson: "Lesson 17: JavaScript Functions",
    icon: Code,
    totalLessons: 40,
    completedLessons: 16,
  },
]

const upcomingLiveClasses = [
  {
    id: 1,
    title: "Blockchain & Web3 Q&A Session",
    instructor: "Dr. Patrick Nsengimana",
    date: "Jan 15, 2026",
    time: "3:00 PM EAT",
    attendees: 45,
  },
  {
    id: 2,
    title: "AI Project Showcase",
    instructor: "Dr. Jean Mugabo",
    date: "Jan 16, 2026",
    time: "5:00 PM EAT",
    attendees: 67,
  },
  {
    id: 3,
    title: "Web Dev Workshop: React Basics",
    instructor: "Yves Habimana",
    date: "Jan 17, 2026",
    time: "2:00 PM EAT",
    attendees: 89,
  },
]

export function OnlineLearningPlatform() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")
  const [showCamera, setShowCamera] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const categories = ["All", "Web3", "AI", "Tech", "STEM", "Language", "Driving"]
  const levels = ["All", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setShowCamera(true)
    } catch (error) {
      alert("Camera access denied. Please allow camera permissions to start the course.")
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setShowCamera(false)
    setIsRecording(false)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    alert(!isRecording ? "Recording started!" : "Recording stopped!")
  }

  const enrollCourse = (courseId: number) => {
    const course = allCourses.find((c) => c.id === courseId)
    if (course) {
      alert(`Enrolling in: ${course.title}\n\nStarting interactive video learning...`)
      startCamera()
    }
  }

  const continueCourse = (courseId: number) => {
    const course = myEnrolledCourses.find((c) => c.id === courseId)
    if (course) {
      alert(`Continuing: ${course.title}\n\nNext: ${course.nextLesson}`)
      startCamera()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Online Learning Platform</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Learn Anything, Anywhere with EduPay Africa
            </h1>
            <p className="text-muted-foreground text-lg text-pretty">
              Access quality education from expert East African instructors. All courses include video lessons,
              assignments, certificates, and live classes.
            </p>
          </div>
        </div>
      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-6 h-6 text-primary" />
                Interactive Video Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                {isRecording && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Recording
                  </div>
                )}
              </div>

              <div className="flex gap-3 justify-center flex-wrap">
                <Button
                  variant={isRecording ? "destructive" : "default"}
                  size="lg"
                  onClick={toggleRecording}
                  className="gap-2"
                >
                  {isRecording ? (
                    <>
                      <StopCircle className="w-5 h-5" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Video className="w-5 h-5" />
                      Start Recording
                    </>
                  )}
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Mic className="w-5 h-5" />
                  Microphone
                </Button>
                <Button variant="outline" size="lg" onClick={stopCamera} className="gap-2 bg-transparent">
                  Close Camera
                </Button>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Interactive Learning Features:</strong> Record yourself practicing, take notes during lessons,
                  and participate in live video discussions with instructors and peers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="browse">Browse Courses</TabsTrigger>
            <TabsTrigger value="my-courses">My Courses</TabsTrigger>
            <TabsTrigger value="live-classes">Live Classes</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          {/* Browse Courses Tab */}
          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search courses or instructors..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <div className="flex gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
                <div className="border-l pl-2 flex gap-2">
                  {levels.map((level) => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <course.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs ml-auto">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>

                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">{course.instructor}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <span className="text-xs text-muted-foreground">on GCV</span>
                    </div>

                    <Button className="w-full" size="sm" onClick={() => enrollCourse(course.id)}>
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Start Course
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No courses found matching your criteria.</p>
              </div>
            )}
          </TabsContent>

          {/* My Courses Tab */}
          <TabsContent value="my-courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myEnrolledCourses.map((course) => (
                <Card key={course.id} className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <course.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight mb-1">{course.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                          {course.completedLessons} / {course.totalLessons} lessons
                        </span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <p className="text-sm font-medium text-primary">{course.progress}% Complete</p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Next Lesson</p>
                      <p className="text-sm font-medium">{course.nextLesson}</p>
                    </div>

                    <Button className="w-full" size="sm" onClick={() => continueCourse(course.id)}>
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Continue Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {myEnrolledCourses.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">You haven't enrolled in any courses yet.</p>
                <Button>Browse Courses</Button>
              </div>
            )}
          </TabsContent>

          {/* Live Classes Tab */}
          <TabsContent value="live-classes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Live Classes</CardTitle>
                <p className="text-sm text-muted-foreground">Join live sessions with instructors and fellow students</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingLiveClasses.map((liveClass) => (
                  <Card key={liveClass.id} className="border">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{liveClass.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{liveClass.instructor}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{liveClass.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{liveClass.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{liveClass.attendees} attending</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm">
                          <Video className="w-4 h-4 mr-2" />
                          Join
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features of Live Classes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Interactive Video Sessions</p>
                    <p className="text-sm text-muted-foreground">Real-time interaction with instructors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Live Q&A Chat</p>
                    <p className="text-sm text-muted-foreground">Ask questions during the session</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Session Recordings</p>
                    <p className="text-sm text-muted-foreground">Access recordings after the live class</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Peer Learning</p>
                    <p className="text-sm text-muted-foreground">Connect with fellow students</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Certificates</CardTitle>
                <p className="text-sm text-muted-foreground">Download and share your achievements</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-primary" />
                          <Badge>Completed</Badge>
                        </div>
                        <h3 className="font-semibold mb-1">Web Development Fundamentals</h3>
                        <p className="text-sm text-muted-foreground mb-2">Completed on Dec 28, 2025</p>
                        <p className="text-sm text-muted-foreground">Instructor: Yves Habimana</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center py-8 bg-muted/30 rounded-lg">
                  <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Complete courses to earn more certificates</p>
                  <p className="text-sm text-muted-foreground">Certificates are blockchain-verified on GCV</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certificate Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Blockchain Verified</p>
                    <p className="text-sm text-muted-foreground">All certificates verified on GCV blockchain</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">PDF Download</p>
                    <p className="text-sm text-muted-foreground">High-quality printable certificates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Shareable Links</p>
                    <p className="text-sm text-muted-foreground">Share achievements on social media</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Recognized Credentials</p>
                    <p className="text-sm text-muted-foreground">Accepted by institutions across East Africa</p>
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
