"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Utensils, ShoppingCart, Package, Search, Star, MapPin, Clock, CheckCircle2, TrendingUp } from "lucide-react"

const suppliers = [
  {
    id: "1",
    name: "Rwanda Fresh Foods Ltd",
    category: "Meal Programs",
    rating: 4.8,
    reviews: 156,
    location: "Kigali, Rwanda",
    delivery: "Next day",
    products: ["Breakfast packages", "Lunch meals", "Snacks", "Fresh produce"],
    minOrder: "50 meals",
    verified: true,
  },
  {
    id: "2",
    name: "East Africa Catering Services",
    category: "Bulk Catering",
    rating: 4.9,
    reviews: 243,
    location: "Nairobi, Kenya",
    delivery: "Same day available",
    products: ["School meals", "Event catering", "Weekly meal plans", "Special diets"],
    minOrder: "100 meals",
    verified: true,
  },
  {
    id: "3",
    name: "School Supplies Hub",
    category: "Educational Supplies",
    rating: 4.7,
    reviews: 189,
    location: "Kampala, Uganda",
    delivery: "2-3 days",
    products: ["Stationery", "Cleaning supplies", "Sports equipment", "Lab materials"],
    minOrder: "1000 Pi",
    verified: true,
  },
  {
    id: "4",
    name: "Healthy Meals Initiative",
    category: "Nutritious Meals",
    rating: 4.9,
    reviews: 312,
    location: "Dar es Salaam, Tanzania",
    delivery: "Next day",
    products: ["Balanced meals", "Vegetarian options", "Protein-rich meals", "Fruit packages"],
    minOrder: "30 meals",
    verified: true,
  },
]

const popularProducts = [
  {
    id: "1",
    name: "Student Lunch Package",
    supplier: "Rwanda Fresh Foods Ltd",
    price: "2.5 Pi",
    unit: "per meal",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: "2",
    name: "Breakfast Set (30 meals)",
    supplier: "East Africa Catering",
    price: "65 Pi",
    unit: "per set",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: "3",
    name: "Stationery Bundle",
    supplier: "School Supplies Hub",
    price: "45 Pi",
    unit: "per bundle",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: "4",
    name: "Weekly Meal Plan (100 students)",
    supplier: "Healthy Meals Initiative",
    price: "1200 Pi",
    unit: "per week",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
]

export function FoodSupplies() {
  const [activeTab, setActiveTab] = useState("browse")
  const [cart, setCart] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const addToCart = (productId: string) => {
    setCart([...cart, productId])
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Utensils className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Food & Supplies</h1>
              <p className="text-muted-foreground">Suppliers delivering to schools across East Africa</p>
            </div>
          </div>
          <Badge variant="secondary" className="gap-1">
            <Package className="w-3 h-3" />
            Pay suppliers in Pi on GCV
          </Badge>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="browse">Browse</TabsTrigger>
            <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
            <TabsTrigger value="orders">
              My Orders
              {cart.length > 0 && (
                <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
                  {cart.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Browse Products */}
          <TabsContent value="browse" className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search for meals, supplies, or products..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Products */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {popularProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.supplier}</p>
                      <div className="flex items-baseline gap-1 mb-3">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        <span className="text-sm text-muted-foreground">{product.unit}</span>
                      </div>
                      {product.inStock ? (
                        <Button
                          className="w-full"
                          size="sm"
                          onClick={() => addToCart(product.id)}
                          disabled={cart.includes(product.id)}
                        >
                          {cart.includes(product.id) ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Added
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Add to Cart
                            </>
                          )}
                        </Button>
                      ) : (
                        <Button className="w-full" size="sm" disabled>
                          Out of Stock
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Meal Programs", "Snacks & Beverages", "School Supplies", "Cleaning Products"].map((category) => (
                  <Card key={category} className="hover:border-primary transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Package className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">{category}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Suppliers */}
          <TabsContent value="suppliers" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Verified Suppliers</h2>
              <div className="grid gap-4">
                {suppliers.map((supplier) => (
                  <Card key={supplier.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-xl">{supplier.name}</CardTitle>
                            {supplier.verified && (
                              <Badge variant="secondary" className="gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-primary text-primary" />
                              <span className="font-medium">{supplier.rating}</span>
                              <span>({supplier.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {supplier.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {supplier.delivery}
                            </div>
                          </div>
                        </div>
                        <Badge>{supplier.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium">Products</Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {supplier.products.map((product, idx) => (
                              <Badge key={idx} variant="outline">
                                {product}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Minimum order: {supplier.minOrder}</span>
                          <Button size="sm">View Products</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Orders */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shopping Cart</CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground mb-4">Your cart is empty</p>
                    <Button onClick={() => setActiveTab("browse")}>Browse Products</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((productId) => {
                      const product = popularProducts.find((p) => p.id === productId)
                      return product ? (
                        <div key={productId} className="flex items-center gap-4 p-4 border rounded-lg">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">{product.supplier}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">{product.price}</p>
                            <p className="text-sm text-muted-foreground">{product.unit}</p>
                          </div>
                        </div>
                      ) : null
                    })}
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="text-2xl font-bold text-primary">
                          {cart
                            .reduce((total, id) => {
                              const product = popularProducts.find((p) => p.id === id)
                              return total + (product ? Number.parseFloat(product.price) : 0)
                            }, 0)
                            .toFixed(1)}{" "}
                          Pi
                        </span>
                      </div>
                      <Button className="w-full" size="lg">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Checkout with Pi on GCV
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Order History */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-muted-foreground">
                    <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No previous orders</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
