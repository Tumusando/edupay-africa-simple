"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, MapPin, Users, Star, Building, Search } from "lucide-react"

const accommodations = [
  {
    id: "1",
    name: "University Hostel - Kigali Campus",
    type: "Student Dormitory",
    location: "Kigali, Rwanda",
    country: "Rwanda",
    price: "150 Pi/month",
    capacity: "4 students per room",
    rating: 4.5,
    available: true,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Study Room", "Kitchen", "Security"],
    distance: "0.5 km from campus",
  },
  {
    id: "2",
    name: "Teachers' Residence - Nyamirambo",
    type: "Teacher Housing",
    location: "Nyamirambo, Kigali",
    country: "Rwanda",
    price: "300 Pi/month",
    capacity: "1-2 bedrooms",
    rating: 4.8,
    available: true,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Parking", "Utilities Included", "Quiet Area"],
    distance: "2 km from school",
  },
  {
    id: "3",
    name: "Student Hostel - Nairobi University",
    type: "Student Dormitory",
    location: "Nairobi, Kenya",
    country: "Kenya",
    price: "180 Pi/month",
    capacity: "2-3 students per room",
    rating: 4.3,
    available: true,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Cafeteria", "Laundry", "24/7 Security"],
    distance: "Walking distance",
  },
  {
    id: "4",
    name: "Faculty Apartments - Kampala",
    type: "Teacher Housing",
    location: "Kampala, Uganda",
    country: "Uganda",
    price: "280 Pi/month",
    capacity: "2 bedrooms",
    rating: 4.6,
    available: false,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Furnished", "Gym Access", "Transport Nearby"],
    distance: "1.5 km from university",
  },
  {
    id: "5",
    name: "TVET Student Housing - Dar es Salaam",
    type: "Student Dormitory",
    location: "Dar es Salaam, Tanzania",
    country: "Tanzania",
    price: "140 Pi/month",
    capacity: "4 students per room",
    rating: 4.2,
    available: true,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Study Area", "Kitchen", "Lockers"],
    distance: "On-campus",
  },
  {
    id: "6",
    name: "Teacher Complex - Butare",
    type: "Teacher Housing",
    location: "Butare, Rwanda",
    country: "Rwanda",
    price: "250 Pi/month",
    capacity: "1-3 bedrooms",
    rating: 4.7,
    available: true,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Parking", "Garden", "Community Center"],
    distance: "1 km from schools",
  },
]

export function Accommodation() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [activeTab, setActiveTab] = useState("browse")

  const filteredAccommodations = accommodations.filter((acc) => {
    const matchesSearch =
      acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = selectedCountry === "all" || acc.country === selectedCountry
    const matchesType = selectedType === "all" || acc.type === selectedType
    return matchesSearch && matchesCountry && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Home className="w-8 h-8 text-primary" />
            Accommodation Services
          </h1>
          <p className="text-muted-foreground text-pretty">Find housing for students and teachers across East Africa</p>
          <Badge variant="secondary" className="mt-2">
            Pay with Pi on GCV
          </Badge>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="browse">Browse</TabsTrigger>
            <TabsTrigger value="my-bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="post-listing">Post Listing</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search Accommodation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="search">Location or Name</Label>
                    <Input
                      id="search"
                      placeholder="Search by location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <select
                      id="country"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                      <option value="all">All Countries</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Burundi">Burundi</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <select
                      id="type"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="Student Dormitory">Student Dormitory</option>
                      <option value="Teacher Housing">Teacher Housing</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accommodation Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAccommodations.map((acc) => (
                <Card key={acc.id} className="overflow-hidden">
                  <img src={acc.image || "/placeholder.svg"} alt={acc.name} className="w-full h-48 object-cover" />
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight mb-1">{acc.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {acc.location}
                        </div>
                      </div>
                      <Badge variant={acc.available ? "default" : "secondary"}>
                        {acc.available ? "Available" : "Full"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{acc.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {acc.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{acc.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <span>{acc.distance}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {acc.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div>
                        <div className="text-2xl font-bold text-primary">{acc.price}</div>
                        <div className="text-xs text-muted-foreground">via Pi on GCV</div>
                      </div>
                      <Button disabled={!acc.available}>{acc.available ? "Book Now" : "Not Available"}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-bookings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Bookings</CardTitle>
                <CardDescription>View and manage your accommodation bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Home className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>You have no active bookings</p>
                  <Button className="mt-4" onClick={() => setActiveTab("browse")}>
                    Browse Accommodation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="post-listing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Post Accommodation Listing</CardTitle>
                <CardDescription>List your property for students or teachers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="property-name">Property Name</Label>
                    <Input id="property-name" placeholder="Enter property name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="property-type">Property Type</Label>
                    <select
                      id="property-type"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option>Student Dormitory</option>
                      <option>Teacher Housing</option>
                      <option>Shared Apartment</option>
                      <option>Private Room</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, Country" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Monthly Rent (Pi)</Label>
                    <Input id="price" type="number" placeholder="150" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Capacity</Label>
                    <Input id="capacity" placeholder="e.g. 2-4 students" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="distance">Distance to Campus</Label>
                    <Input id="distance" placeholder="e.g. 0.5 km" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amenities">Amenities (comma separated)</Label>
                  <Input id="amenities" placeholder="WiFi, Kitchen, Study Room, Security" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    className="w-full min-h-24 rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Describe your property..."
                  />
                </div>
                <Button className="w-full">Submit Listing</Button>
                <p className="text-xs text-center text-muted-foreground">
                  Listings are reviewed within 24 hours. Rental payments accepted in Pi on GCV.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
