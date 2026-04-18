"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bus,
  MapPin,
  Clock,
  DollarSign,
  Users,
  CheckCircle2,
  Calendar,
  Phone,
  Star,
  Navigation,
  AlertCircle,
} from "lucide-react"

const routes = [
  {
    id: "route-1",
    name: "City Center - University Route",
    school: "University of Kigali",
    stops: ["City Center", "Nyabugogo", "Kimironko", "University Campus"],
    schedule: "6:30 AM, 7:30 AM, 5:00 PM, 6:00 PM",
    price: "π15/month",
    capacity: 45,
    driver: "Jean Claude",
    phone: "+250 788 123 456",
    rating: 4.8,
    country: "Rwanda",
  },
  {
    id: "route-2",
    name: "Nairobi CBD - Westlands School",
    school: "Westlands International School",
    stops: ["CBD", "Upper Hill", "Museum Hill", "Westlands"],
    schedule: "7:00 AM, 8:00 AM, 4:30 PM, 5:30 PM",
    price: "π18/month",
    capacity: 50,
    driver: "James Mwangi",
    phone: "+254 722 456 789",
    rating: 4.9,
    country: "Kenya",
  },
  {
    id: "route-3",
    name: "Kampala - Makerere University",
    school: "Makerere University",
    stops: ["Kampala Road", "Wandegeya", "Mulago", "University Gate"],
    schedule: "6:45 AM, 7:45 AM, 5:15 PM, 6:15 PM",
    price: "π16/month",
    capacity: 40,
    driver: "Samuel Okello",
    phone: "+256 700 345 678",
    rating: 4.7,
    country: "Uganda",
  },
  {
    id: "route-4",
    name: "Dar es Salaam - UDSM Route",
    school: "University of Dar es Salaam",
    stops: ["City Center", "Kariakoo", "Msasani", "UDSM Campus"],
    schedule: "6:30 AM, 7:30 AM, 5:00 PM, 6:00 PM",
    price: "π14/month",
    capacity: 48,
    driver: "Hassan Juma",
    phone: "+255 713 234 567",
    rating: 4.6,
    country: "Tanzania",
  },
]

const myBookings = [
  {
    id: "booking-1",
    route: "City Center - University Route",
    status: "Active",
    validUntil: "March 31, 2025",
    monthlyPass: true,
  },
]

const schoolBuses = [
  {
    id: "bus-1",
    school: "Green Valley High School",
    routes: 3,
    buses: 5,
    coverage: "Kigali Area",
    contact: "+250 788 999 888",
    rating: 4.7,
    price: "π12/month",
    country: "Rwanda",
  },
  {
    id: "bus-2",
    school: "St. Mary's Secondary School",
    routes: 2,
    buses: 3,
    coverage: "Nairobi Suburbs",
    contact: "+254 722 888 777",
    rating: 4.8,
    price: "π15/month",
    country: "Kenya",
  },
  {
    id: "bus-3",
    school: "Kampala International School",
    routes: 4,
    buses: 6,
    coverage: "Greater Kampala",
    contact: "+256 700 777 666",
    rating: 4.9,
    price: "π13/month",
    country: "Uganda",
  },
]

export function StudentTransport() {
  const [selectedRoute, setSelectedRoute] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")

  const filteredRoutes = routes.filter((route) => {
    const matchesSearch =
      route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.school.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry = selectedCountry === "all" || route.country === selectedCountry
    return matchesSearch && matchesCountry
  })

  const filteredSchoolBuses = schoolBuses.filter((bus) => {
    const matchesSearch = bus.school.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry = selectedCountry === "all" || bus.country === selectedCountry
    return matchesSearch && matchesCountry
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance">Student Transport Services</h1>
        <p className="text-muted-foreground text-lg text-pretty">
          Safe, reliable, and affordable transportation for students across East Africa
        </p>
        <Badge variant="secondary" className="mt-2">
          All transport paid in Pi on GCV
        </Badge>
      </div>

      <Tabs defaultValue="routes" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl">
          <TabsTrigger value="routes">
            <Bus className="w-4 h-4 mr-2" />
            Routes
          </TabsTrigger>
          <TabsTrigger value="school-buses">
            <MapPin className="w-4 h-4 mr-2" />
            School Buses
          </TabsTrigger>
          <TabsTrigger value="tracking">
            <Navigation className="w-4 h-4 mr-2" />
            Live Tracking
          </TabsTrigger>
          <TabsTrigger value="my-passes">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            My Passes
          </TabsTrigger>
        </TabsList>

        {/* Routes Tab */}
        <TabsContent value="routes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Find Transport Routes</CardTitle>
              <CardDescription>Search for available routes to your school or university</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="search">Search Route or School</Label>
                  <Input
                    id="search"
                    placeholder="e.g., University of Kigali"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
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
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-4">
            {filteredRoutes.map((route) => (
              <Card key={route.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{route.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 flex-wrap">
                        <span>{route.school}</span>
                        <Badge variant="outline" className="text-xs">
                          {route.country}
                        </Badge>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{route.price}</div>
                      <div className="text-xs text-muted-foreground">Monthly Pass</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">Route Stops</div>
                        <div className="text-sm text-muted-foreground">{route.stops.join(" → ")}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">Schedule</div>
                        <div className="text-sm text-muted-foreground">{route.schedule}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm">{route.capacity} seats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">{route.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-sm">{route.driver}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Book Monthly Pass with Pi
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRoutes.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No routes found. Try adjusting your search.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* School Buses Tab */}
        <TabsContent value="school-buses" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>School Bus Services</CardTitle>
              <CardDescription>Schools with dedicated bus services for their students</CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSchoolBuses.map((bus) => (
              <Card key={bus.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{bus.school}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {bus.coverage}
                    <Badge variant="outline" className="text-xs ml-2">
                      {bus.country}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Bus className="w-4 h-4 text-primary" />
                      <span className="text-sm">{bus.buses} buses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">{bus.routes} routes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">{bus.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{bus.price}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    {bus.contact}
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    View Routes & Schedule
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Live Tracking Tab */}
        <TabsContent value="tracking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Bus Tracking</CardTitle>
              <CardDescription>Track your school bus in real-time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-8 text-center space-y-4">
                <Navigation className="w-16 h-16 text-primary mx-auto" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Real-time GPS Tracking</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Track your bus location, estimated arrival time, and get notifications when the bus is nearby
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="bg-background rounded-lg p-4">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Live Location</div>
                    <div className="text-xs text-muted-foreground">See bus on map</div>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">ETA Updates</div>
                    <div className="text-xs text-muted-foreground">Arrival time alerts</div>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <AlertCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Notifications</div>
                    <div className="text-xs text-muted-foreground">Bus is nearby</div>
                  </div>
                </div>
              </div>
              <Button className="w-full">
                <Navigation className="w-4 h-4 mr-2" />
                Enable Live Tracking
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Passes Tab */}
        <TabsContent value="my-passes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Transport Passes</CardTitle>
              <CardDescription>Manage your active and past transport passes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {myBookings.map((booking) => (
                <Card key={booking.id} className="border-2 border-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{booking.route}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Badge variant="default" className="bg-green-600">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            {booking.status}
                          </Badge>
                          {booking.monthlyPass && <Badge variant="outline">Monthly Pass</Badge>}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Valid until: {booking.validUntil}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-transparent" variant="outline">
                        <Navigation className="w-4 h-4 mr-2" />
                        Track Bus
                      </Button>
                      <Button className="flex-1 bg-transparent" variant="outline">
                        View Receipt
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-muted/30">
                <CardContent className="py-8 text-center">
                  <Bus className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-4">No additional passes yet</p>
                  <Button variant="default">Browse Routes</Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
