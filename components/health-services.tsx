"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  HeartPulse,
  Calendar,
  MapPin,
  Phone,
  Clock,
  Star,
  Video,
  FileText,
  AlertCircle,
  CheckCircle,
  Stethoscope,
  Activity,
  Users,
} from "lucide-react"

const clinics = [
  {
    id: 1,
    name: "Kigali University Medical Center",
    location: "Kigali, Rwanda",
    distance: "2.3 km from campus",
    rating: 4.8,
    reviews: 234,
    services: ["General Consultation", "Emergency", "Lab Tests", "Pharmacy"],
    availability: "24/7",
    phone: "+250 788 123 456",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Nairobi Health Clinic",
    location: "Nairobi, Kenya",
    distance: "1.8 km from campus",
    rating: 4.6,
    reviews: 189,
    services: ["General Consultation", "Dental", "Physiotherapy"],
    availability: "Mon-Sat, 8AM-8PM",
    phone: "+254 712 345 678",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Kampala Student Health Center",
    location: "Kampala, Uganda",
    distance: "3.1 km from campus",
    rating: 4.7,
    reviews: 156,
    services: ["Mental Health", "General Consultation", "Vaccination"],
    availability: "Mon-Fri, 9AM-6PM",
    phone: "+256 700 123 456",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const appointments = [
  {
    id: 1,
    clinic: "Kigali University Medical Center",
    doctor: "Dr. Uwase Marie",
    specialty: "General Physician",
    date: "2026-01-15",
    time: "10:00 AM",
    status: "upcoming",
    type: "in-person",
  },
  {
    id: 2,
    clinic: "Nairobi Health Clinic",
    doctor: "Dr. Omondi James",
    specialty: "Dentist",
    date: "2026-01-10",
    time: "2:00 PM",
    status: "completed",
    type: "in-person",
  },
]

const doctors = [
  {
    id: 1,
    name: "Dr. Uwase Marie",
    specialty: "General Physician",
    experience: "12 years",
    rating: 4.9,
    availability: "Mon-Fri",
    consultationFee: "0.5 Pi",
  },
  {
    id: 2,
    name: "Dr. Omondi James",
    specialty: "Dentist",
    experience: "8 years",
    rating: 4.7,
    availability: "Tue-Sat",
    consultationFee: "0.7 Pi",
  },
  {
    id: 3,
    name: "Dr. Amina Hassan",
    specialty: "Mental Health Counselor",
    experience: "10 years",
    rating: 4.8,
    availability: "Mon-Sat",
    consultationFee: "0.6 Pi",
  },
]

export function HealthServices() {
  const [selectedClinic, setSelectedClinic] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [appointmentType, setAppointmentType] = useState("in-person")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Health Services</h1>
          </div>
          <p className="text-primary-foreground/90 text-lg">Medical care for students and staff across East Africa</p>
          <Badge variant="secondary" className="mt-3">
            Pay with Pi on GCV
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="clinics" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="clinics">Clinics</TabsTrigger>
            <TabsTrigger value="book">Book Appointment</TabsTrigger>
            <TabsTrigger value="appointments">My Appointments</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
          </TabsList>

          {/* Clinics Directory */}
          <TabsContent value="clinics" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input placeholder="Search clinics..." className="md:max-w-md" />
              <Select>
                <SelectTrigger className="md:w-[200px]">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rwanda">Rwanda</SelectItem>
                  <SelectItem value="kenya">Kenya</SelectItem>
                  <SelectItem value="uganda">Uganda</SelectItem>
                  <SelectItem value="tanzania">Tanzania</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {clinics.map((clinic) => (
                <Card key={clinic.id}>
                  <CardHeader>
                    <img
                      src={clinic.image || "/placeholder.svg"}
                      alt={clinic.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-xl">{clinic.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{clinic.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Activity className="w-4 h-4" />
                      <span>{clinic.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{clinic.rating}</span>
                      <span className="text-sm text-muted-foreground">({clinic.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{clinic.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4" />
                      <span>{clinic.phone}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {clinic.services.map((service) => (
                        <Badge key={service} variant="outline">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1" onClick={() => setSelectedClinic(clinic.name)}>
                        Book Appointment
                      </Button>
                      <Button variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Book Appointment */}
          <TabsContent value="book" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Book Medical Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Appointment Type</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={appointmentType === "in-person" ? "default" : "outline"}
                      className="w-full"
                      onClick={() => setAppointmentType("in-person")}
                    >
                      <Stethoscope className="w-4 h-4 mr-2" />
                      In-Person
                    </Button>
                    <Button
                      variant={appointmentType === "telemedicine" ? "default" : "outline"}
                      className="w-full"
                      onClick={() => setAppointmentType("telemedicine")}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Telemedicine
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clinic">Select Clinic</Label>
                  <Select value={selectedClinic} onValueChange={setSelectedClinic}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a clinic" />
                    </SelectTrigger>
                    <SelectContent>
                      {clinics.map((clinic) => (
                        <SelectItem key={clinic.id} value={clinic.name}>
                          {clinic.name} - {clinic.location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="doctor">Select Doctor</Label>
                  <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.name}>
                          {doctor.name} - {doctor.specialty} ({doctor.consultationFee})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input type="date" id="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input type="time" id="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Textarea id="reason" placeholder="Describe your symptoms or reason for consultation..." rows={4} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="patient-name">Patient Name</Label>
                  <Input id="patient-name" placeholder="Full name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input id="phone" type="tel" placeholder="+250 788 123 456" />
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Payment Information</p>
                      <p className="text-sm text-muted-foreground">
                        Consultation fee will be paid in Pi on GCV. You'll receive payment instructions after booking.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirm Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Available Doctors */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Available Doctors</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {doctors.map((doctor) => (
                  <Card key={doctor.id}>
                    <CardContent className="pt-6 space-y-3">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">{doctor.name}</p>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{doctor.rating}</span>
                      </div>
                      <div className="text-center space-y-1">
                        <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                        <p className="text-sm font-semibold text-primary">{doctor.consultationFee}</p>
                        <p className="text-xs text-muted-foreground">{doctor.availability}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* My Appointments */}
          <TabsContent value="appointments" className="space-y-6">
            <div className="space-y-4">
              {appointments.map((apt) => (
                <Card key={apt.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{apt.clinic}</h3>
                          <Badge variant={apt.status === "upcoming" ? "default" : "secondary"}>
                            {apt.status === "upcoming" ? "Upcoming" : "Completed"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {apt.doctor} • {apt.specialty}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{apt.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{apt.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {apt.type === "in-person" ? (
                              <Stethoscope className="w-4 h-4" />
                            ) : (
                              <Video className="w-4 h-4" />
                            )}
                            <span className="capitalize">{apt.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {apt.status === "upcoming" && (
                          <>
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                            <Button variant="outline" size="sm">
                              Cancel
                            </Button>
                          </>
                        )}
                        {apt.status === "completed" && (
                          <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            View Report
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {appointments.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No appointments scheduled</p>
                  <Button className="mt-4">Book Your First Appointment</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Emergency Services */}
          <TabsContent value="emergency" className="space-y-6">
            <Card className="border-red-500 border-2">
              <CardHeader>
                <CardTitle className="text-red-500 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  Emergency Medical Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg">
                  <p className="text-lg font-semibold mb-4">24/7 Emergency Hotlines</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <span className="font-medium">Rwanda Emergency</span>
                      <Button variant="destructive" size="sm">
                        <Phone className="w-4 h-4 mr-2" />
                        912
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <span className="font-medium">Kenya Emergency</span>
                      <Button variant="destructive" size="sm">
                        <Phone className="w-4 h-4 mr-2" />
                        999
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <span className="font-medium">Uganda Emergency</span>
                      <Button variant="destructive" size="sm">
                        <Phone className="w-4 h-4 mr-2" />
                        911
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <span className="font-medium">Tanzania Emergency</span>
                      <Button variant="destructive" size="sm">
                        <Phone className="w-4 h-4 mr-2" />
                        112
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-4">Nearest Emergency Clinics (24/7)</p>
                  <div className="space-y-3">
                    {clinics
                      .filter((c) => c.availability === "24/7")
                      .map((clinic) => (
                        <Card key={clinic.id}>
                          <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-semibold">{clinic.name}</p>
                                <p className="text-sm text-muted-foreground">{clinic.location}</p>
                                <p className="text-sm text-muted-foreground">{clinic.distance}</p>
                              </div>
                              <div className="space-y-2">
                                <Button size="sm" variant="destructive">
                                  <Phone className="w-4 h-4 mr-2" />
                                  Call Now
                                </Button>
                                <Button size="sm" variant="outline">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  Directions
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">First Aid Tips</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Stay calm and assess the situation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Call emergency services immediately for serious injuries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Apply pressure to bleeding wounds with clean cloth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Do not move someone with suspected spine injury</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
