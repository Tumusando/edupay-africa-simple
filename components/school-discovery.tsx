"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MapPin,
  Star,
  Users,
  Phone,
  Mail,
  Globe,
  Building,
  CheckCircle,
  Heart,
  MessageSquare,
} from "lucide-react"

const schools = [
  {
    id: 1,
    name: "Kigali International School",
    country: "Rwanda",
    city: "Kigali",
    type: "International",
    level: "Primary, Secondary, A-Level",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "French", "ICT", "Business Studies"],
    rating: 4.8,
    students: 850,
    fees: "π150/term",
    description: "Premier international school offering Cambridge curriculum with state-of-the-art facilities",
    phone: "+250 788 123 456",
    email: "info@kis.rw",
    website: "www.kis.rw",
    verified: true,
    scholarships: true,
    boarding: true,
    online: true,
  },
  {
    id: 2,
    name: "Nairobi Technical Institute",
    country: "Kenya",
    city: "Nairobi",
    type: "TVET",
    level: "Certificate, Diploma",
    subjects: ["Web Development", "Blockchain", "Mobile Apps", "Networking", "Cybersecurity", "Database Management"],
    rating: 4.6,
    students: 1200,
    fees: "π120/term",
    description: "Leading technical institute specializing in coding and technology training",
    phone: "+254 712 345 678",
    email: "admissions@nti.ke",
    website: "www.nti.ke",
    verified: true,
    scholarships: true,
    boarding: false,
    online: true,
  },
  {
    id: 3,
    name: "Kampala Science Academy",
    country: "Uganda",
    city: "Kampala",
    type: "Secondary",
    level: "O-Level, A-Level",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Geography"],
    rating: 4.7,
    students: 600,
    fees: "π100/term",
    description: "Excellence in science education with fully equipped laboratories and experienced teachers",
    phone: "+256 772 123 456",
    email: "info@ksa.ug",
    website: "www.ksa.ug",
    verified: true,
    scholarships: true,
    boarding: true,
    online: false,
  },
  {
    id: 4,
    name: "Dar es Salaam Driving School",
    country: "Tanzania",
    city: "Dar es Salaam",
    type: "Driving School",
    level: "Certificate",
    subjects: [
      "Class C (Cars)",
      "Class D (Trucks)",
      "Class E (Motorcycles)",
      "Defensive Driving",
      "Theory",
      "Practical",
    ],
    rating: 4.5,
    students: 300,
    fees: "π80/course",
    description: "Professional driving instruction with modern vehicles and experienced instructors",
    phone: "+255 754 123 456",
    email: "info@dsds.tz",
    website: "www.dsds.tz",
    verified: true,
    scholarships: false,
    boarding: false,
    online: false,
  },
  {
    id: 5,
    name: "University of Rwanda - CST",
    country: "Rwanda",
    city: "Kigali",
    type: "University",
    level: "Bachelor, Masters, PhD",
    subjects: [
      "Computer Science",
      "Software Engineering",
      "AI & Machine Learning",
      "Data Science",
      "Information Systems",
      "Blockchain",
    ],
    rating: 4.9,
    students: 2500,
    fees: "π200/semester",
    description: "College of Science and Technology offering cutting-edge technology programs",
    phone: "+250 788 987 654",
    email: "cst@ur.ac.rw",
    website: "www.ur.ac.rw/cst",
    verified: true,
    scholarships: true,
    boarding: true,
    online: true,
  },
  {
    id: 6,
    name: "Butare Business School",
    country: "Rwanda",
    city: "Butare",
    type: "University",
    level: "Diploma, Bachelor, Masters",
    subjects: ["Business Administration", "Accounting", "Finance", "Marketing", "Entrepreneurship", "Economics"],
    rating: 4.4,
    students: 1800,
    fees: "π180/semester",
    description: "Leading business school in Southern Province with strong industry partnerships",
    phone: "+250 788 456 789",
    email: "admissions@bbs.rw",
    website: "www.bbs.rw",
    verified: true,
    scholarships: true,
    boarding: true,
    online: false,
  },
]

const countries = [
  "All Countries",
  "Rwanda",
  "Kenya",
  "Uganda",
  "Tanzania",
  "Burundi",
  "South Sudan",
  "Ethiopia",
  "Somalia",
  "DRC",
]
const schoolTypes = [
  "All Types",
  "Primary",
  "Secondary",
  "International",
  "TVET",
  "University",
  "Driving School",
  "Online",
]
const levels = ["All Levels", "Primary", "O-Level", "A-Level", "Certificate", "Diploma", "Bachelor", "Masters", "PhD"]

export function SchoolDiscovery() {
  const [activeTab, setActiveTab] = useState<"browse" | "compare" | "favorites" | "applications">("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")
  const [expandedSchool, setExpandedSchool] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])
  const [compareList, setCompareList] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const toggleCompare = (id: number) => {
    if (compareList.includes(id)) {
      setCompareList((prev) => prev.filter((item) => item !== id))
    } else if (compareList.length < 3) {
      setCompareList((prev) => [...prev, id])
    }
  }

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      searchQuery === "" ||
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.subjects.some((subject) => subject.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCountry = selectedCountry === "All Countries" || school.country === selectedCountry
    const matchesType = selectedType === "All Types" || school.type === selectedType
    const matchesLevel = selectedLevel === "All Levels" || school.level.includes(selectedLevel)
    return matchesSearch && matchesCountry && matchesType && matchesLevel
  })

  const favoriteSchools = schools.filter((school) => favorites.includes(school.id))
  const compareSchools = schools.filter((school) => compareList.includes(school.id))

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance">School Discovery</h1>
          <p className="text-muted-foreground text-lg text-pretty">
            Find the perfect school for your education goals across East Africa
          </p>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Button
            variant={activeTab === "browse" ? "default" : "outline"}
            onClick={() => setActiveTab("browse")}
            className="shrink-0"
          >
            <Search className="w-4 h-4 mr-2" />
            Browse Schools
          </Button>
          <Button
            variant={activeTab === "compare" ? "default" : "outline"}
            onClick={() => setActiveTab("compare")}
            className="shrink-0"
          >
            <Building className="w-4 h-4 mr-2" />
            Compare ({compareList.length}/3)
          </Button>
          <Button
            variant={activeTab === "favorites" ? "default" : "outline"}
            onClick={() => setActiveTab("favorites")}
            className="shrink-0"
          >
            <Heart className="w-4 h-4 mr-2" />
            Favorites ({favorites.length})
          </Button>
          <Button
            variant={activeTab === "applications" ? "default" : "outline"}
            onClick={() => setActiveTab("applications")}
            className="shrink-0"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            My Applications
          </Button>
        </div>

        {activeTab === "browse" && (
          <>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="search">Search by school name or subject</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="e.g. Blockchain, Physics, Driving..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Country</Label>
                      <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>School Type</Label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {schoolTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Level</Label>
                      <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {levels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Found {filteredSchools.length} schools</p>

              {filteredSchools.map((school) => (
                <Card key={school.id} className="border-2 hover:border-primary transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <CardTitle className="text-xl">{school.name}</CardTitle>
                          {school.verified && (
                            <Badge variant="default" className="text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {school.city}, {school.country}
                          </div>
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {school.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {school.students} students
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            {school.rating}
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-2">{school.description}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {school.scholarships && <Badge variant="secondary">Scholarships Available</Badge>}
                          {school.boarding && <Badge variant="secondary">Boarding</Badge>}
                          {school.online && <Badge variant="secondary">Online Classes</Badge>}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-2xl font-bold text-primary">{school.fees}</div>
                        <div className="text-xs text-muted-foreground">Pay in Pi on GCV</div>
                      </div>
                    </div>
                  </CardHeader>

                  {expandedSchool === school.id && (
                    <CardContent className="pt-0 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Offered Subjects / Programs</h4>
                        <div className="flex flex-wrap gap-2">
                          {school.subjects.map((subject, idx) => (
                            <Badge key={idx} variant="outline">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Levels Offered</h4>
                        <p className="text-sm">{school.level}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span>{school.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span>{school.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary" />
                          <span>{school.website}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        <Button className="flex-1" size="sm">
                          Apply Now (Pay with Pi)
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Contact School
                        </Button>
                      </div>
                    </CardContent>
                  )}

                  <CardContent className="pt-0">
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setExpandedSchool(expandedSchool === school.id ? null : school.id)}
                        className="flex-1"
                      >
                        {expandedSchool === school.id ? "Show Less" : "View Details"}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => toggleFavorite(school.id)}>
                        <Heart
                          className={`w-4 h-4 ${favorites.includes(school.id) ? "fill-red-500 text-red-500" : ""}`}
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCompare(school.id)}
                        disabled={compareList.length >= 3 && !compareList.includes(school.id)}
                      >
                        <Building
                          className={`w-4 h-4 ${compareList.includes(school.id) ? "fill-primary text-primary" : ""}`}
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab === "compare" && (
          <div>
            {compareSchools.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Building className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No schools to compare</h3>
                  <p className="text-muted-foreground mb-4">Add schools from the Browse tab to compare them</p>
                  <Button onClick={() => setActiveTab("browse")}>Browse Schools</Button>
                </CardContent>
              </Card>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left font-semibold">Criteria</th>
                      {compareSchools.map((school) => (
                        <th key={school.id} className="p-4 text-left">
                          <div>
                            <div className="font-semibold">{school.name}</div>
                            <div className="text-xs text-muted-foreground font-normal">
                              {school.city}, {school.country}
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Type</td>
                      {compareSchools.map((school) => (
                        <td key={school.id} className="p-4">
                          {school.type}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Level</td>
                      {compareSchools.map((school) => (
                        <td key={school.id} className="p-4">
                          {school.level}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Fees</td>
                      {compareSchools.map((school) => (
                        <td key={school.id} className="p-4 font-semibold text-primary">
                          {school.fees}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Rating</td>
                      {compareSchools.map((school) => (
                        <td key={school.id} className="p-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            {school.rating}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Students</td>
                      {compareSchools.map((school) => (
                        <td key={school.id} className="p-4">
                          {school.students}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Scholarships</td>
                      {compareSchools.map((school) => (
                        <td key={school.id} className="p-4">
                          {school.scholarships ? "Yes" : "No"}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Boarding</td>
                      {compareSchools.map((school) => (
                        <td key={school.id} className="p-4">
                          {school.boarding ? "Yes" : "No"}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Online Classes</td>
                      {compareSchools.map((school) => (
                        <td key={school.id} className="p-4">
                          {school.online ? "Yes" : "No"}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Actions</td>
                      {compareSchools.map((school) => (
                        <td key={school.id} className="p-4">
                          <Button size="sm" className="w-full">
                            Apply Now
                          </Button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === "favorites" && (
          <div>
            {favoriteSchools.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No favorite schools yet</h3>
                  <p className="text-muted-foreground mb-4">Save schools you like to easily find them later</p>
                  <Button onClick={() => setActiveTab("browse")}>Browse Schools</Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {favoriteSchools.map((school) => (
                  <Card key={school.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{school.name}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {school.city}, {school.country}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-primary text-primary" />
                              {school.rating}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{school.fees}</div>
                          <Button variant="ghost" size="sm" onClick={() => toggleFavorite(school.id)}>
                            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button className="flex-1" onClick={() => setActiveTab("browse")}>
                          View Details
                        </Button>
                        <Button variant="outline">Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "applications" && (
          <Card>
            <CardContent className="py-12 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
              <p className="text-muted-foreground mb-4">Apply to schools and track your application status here</p>
              <Button onClick={() => setActiveTab("browse")}>Browse Schools</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
