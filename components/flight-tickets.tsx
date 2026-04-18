"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plane,
  Search,
  Calendar,
  MapPin,
  Users,
  Clock,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Shield,
  FileText,
  Globe,
} from "lucide-react"

const popularRoutes = [
  {
    id: 1,
    from: "Kigali, Rwanda",
    to: "Nairobi, Kenya",
    airline: "RwandAir",
    price: 25,
    duration: "1h 15m",
    stops: "Direct",
    studentDiscount: true,
  },
  {
    id: 2,
    from: "Kampala, Uganda",
    to: "Dar es Salaam, Tanzania",
    airline: "Kenya Airways",
    price: 35,
    duration: "2h 30m",
    stops: "Direct",
    studentDiscount: true,
  },
  {
    id: 3,
    from: "Kigali, Rwanda",
    to: "Dubai, UAE",
    airline: "Ethiopian Airlines",
    price: 120,
    duration: "5h 45m",
    stops: "1 stop",
    studentDiscount: true,
  },
  {
    id: 4,
    from: "Nairobi, Kenya",
    to: "London, UK",
    airline: "Kenya Airways",
    price: 180,
    duration: "9h 15m",
    stops: "Direct",
    studentDiscount: true,
  },
  {
    id: 5,
    from: "Addis Ababa, Ethiopia",
    to: "New York, USA",
    airline: "Ethiopian Airlines",
    price: 220,
    duration: "14h 30m",
    stops: "Direct",
    studentDiscount: true,
  },
  {
    id: 6,
    from: "Dar es Salaam, Tanzania",
    to: "Paris, France",
    airline: "Air France",
    price: 195,
    duration: "11h 20m",
    stops: "1 stop",
    studentDiscount: true,
  },
]

const myBookings = [
  {
    id: "BK2024001",
    from: "Kigali",
    to: "Nairobi",
    date: "2024-02-15",
    status: "Confirmed",
    price: 25,
  },
  {
    id: "BK2024002",
    from: "Kampala",
    to: "London",
    date: "2024-03-20",
    status: "Pending",
    price: 180,
  },
]

const additionalServices = [
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Expert help with visa applications for all countries",
    price: 5,
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage for medical & trip cancellation",
    price: 8,
  },
  {
    icon: Briefcase,
    title: "Baggage Tracking",
    description: "Real-time tracking of your checked luggage",
    price: 2,
  },
  {
    icon: Globe,
    title: "Airport Transfers",
    description: "Pre-book pickup and drop-off services",
    price: 10,
  },
]

export function FlightTickets() {
  const [activeTab, setActiveTab] = useState("search")

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-primary/10 to-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Plane className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Flight Tickets</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Book international and domestic flights for students studying abroad
          </p>
          <Badge variant="secondary" className="mt-3">
            All payments in Pi on GCV
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="search">Search Flights</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="services">Travel Services</TabsTrigger>
            <TabsTrigger value="student">Student Discounts</TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search Flights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">From</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="from" placeholder="Kigali, Rwanda" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">To</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="to" placeholder="Nairobi, Kenya" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="departure">Departure Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="departure" type="date" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="return">Return Date (Optional)</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="return" type="date" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passengers">Passengers</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="passengers" type="number" placeholder="1" min="1" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class">Travel Class</Label>
                    <select id="class" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First Class</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg">
                  <Search className="w-4 h-4 mr-2" />
                  Search Flights
                </Button>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4">Popular Routes for Students</h3>
              <div className="grid gap-4">
                {popularRoutes.map((route) => (
                  <Card key={route.id} className="hover:border-primary transition-colors">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="font-semibold">{route.from}</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            <span className="font-semibold">{route.to}</span>
                            {route.studentDiscount && (
                              <Badge variant="secondary" className="text-xs">
                                Student Discount
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                            <span className="flex items-center gap-1">
                              <Plane className="w-3 h-3" />
                              {route.airline}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {route.duration}
                            </span>
                            <span>{route.stops}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">π {route.price}</div>
                            <div className="text-xs text-muted-foreground">per person</div>
                          </div>
                          <Button size="sm">
                            <CreditCard className="w-4 h-4 mr-2" />
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <h3 className="text-xl font-semibold">My Bookings</h3>
            {myBookings.length > 0 ? (
              <div className="grid gap-4">
                {myBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{booking.id}</Badge>
                            <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"}>
                              {booking.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{booking.from}</span>
                            <ArrowRight className="w-4 h-4" />
                            <span className="font-semibold">{booking.to}</span>
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(booking.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">π {booking.price}</div>
                          <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Plane className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">No bookings yet. Start searching for flights!</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <h3 className="text-xl font-semibold">Additional Travel Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalServices.map((service, idx) => (
                <Card key={idx} className="hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">π {service.price}</span>
                          <Button size="sm" variant="outline">
                            Add Service
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="student" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Discount Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Verified Student Discounts</h4>
                      <p className="text-sm text-muted-foreground">
                        Save 10-20% on all international flights with valid student ID or enrollment letter
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                    <Plane className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Flexible Booking</h4>
                      <p className="text-sm text-muted-foreground">
                        Free date changes for students up to 48 hours before departure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                    <Briefcase className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Extra Baggage</h4>
                      <p className="text-sm text-muted-foreground">
                        Additional 10kg free baggage allowance for students
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                    <Globe className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Multi-City Routes</h4>
                      <p className="text-sm text-muted-foreground">
                        Special rates for students traveling to multiple destinations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                    <Shield className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Travel Insurance</h4>
                      <p className="text-sm text-muted-foreground">
                        Discounted travel insurance rates for enrolled students
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="border-2 border-primary">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">How to Get Student Discounts</h4>
                    <ol className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="font-semibold text-primary">1.</span>
                        <span>Register on EduPay Africa with your student details</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-primary">2.</span>
                        <span>Upload valid student ID or enrollment letter</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-primary">3.</span>
                        <span>Get verified within 24 hours</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-primary">4.</span>
                        <span>Automatically receive discounts on all eligible flights</span>
                      </li>
                    </ol>
                    <Button className="w-full mt-4">Verify Student Status</Button>
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
