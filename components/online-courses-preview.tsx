"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Video, Clock, Users, Code, Calculator, Beaker, Globe, Cpu, Brain } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Blockchain & Web3 Fundamentals",
    instructor: "Dr. Patrick Nsengimana",
    students: 589,
    duration: "10 weeks",
    icon: Cpu,
    level: "Beginner",
    category: "Web3",
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
  },
]

export function OnlineCoursesPreview() {
  return (
    <section id="courses" className="container mx-auto px-4 py-12 md:py-16 bg-muted/30">
      <div className="text-center mb-8">
        <Badge className="mb-4">Start Learning Today</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Online Courses</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Access high-quality courses from expert instructors across East Africa - including Blockchain, Web3, and AI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {courses.map((course) => (
          <Card key={course.id} className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <course.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {course.level}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{course.instructor}</p>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <Button className="w-full" size="sm">
                <Video className="w-4 h-4 mr-2" />
                Start Course
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="outline">
          Browse All Courses
        </Button>
      </div>
    </section>
  )
}
