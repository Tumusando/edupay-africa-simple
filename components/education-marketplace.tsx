"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart, Search, Star, Plus, Minus, X, Package, Store, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  vendor: string
  country: string
  rating: number
  inStock: boolean
  image: string
}

interface CartItem extends Product {
  quantity: number
}

const products: Product[] = [
  {
    id: "1",
    name: "Mathematics Textbook Grade 10",
    category: "Textbooks",
    price: 25,
    description: "Complete curriculum-aligned mathematics textbook for secondary students",
    vendor: "East African Publishers",
    country: "Rwanda",
    rating: 4.8,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Physics Lab Equipment Set",
    category: "Lab Equipment",
    price: 120,
    description: "Complete physics lab equipment set for practical experiments",
    vendor: "Scientific Supplies Ltd",
    country: "Kenya",
    rating: 4.9,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "School Uniform Set",
    category: "Uniforms",
    price: 35,
    description: "Complete school uniform including shirt, trousers/skirt, and tie",
    vendor: "Uniform World",
    country: "Uganda",
    rating: 4.6,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Student Laptop - Intel i5",
    category: "Electronics",
    price: 450,
    description: "Affordable student laptop with pre-installed educational software",
    vendor: "Tech for Education",
    country: "Tanzania",
    rating: 4.7,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Art Supplies Bundle",
    category: "Art Supplies",
    price: 18,
    description: "Complete art supplies including paints, brushes, paper, and canvas",
    vendor: "Creative Arts Store",
    country: "Rwanda",
    rating: 4.5,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    name: "Scientific Calculator",
    category: "Electronics",
    price: 22,
    description: "Advanced scientific calculator for mathematics and physics",
    vendor: "Math Tools Inc",
    country: "Kenya",
    rating: 4.9,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "7",
    name: "English Literature Collection",
    category: "Textbooks",
    price: 30,
    description: "Comprehensive English literature books for advanced studies",
    vendor: "East African Publishers",
    country: "Uganda",
    rating: 4.7,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "8",
    name: "Student Backpack",
    category: "Bags",
    price: 28,
    description: "Durable student backpack with laptop compartment",
    vendor: "Quality Bags Co",
    country: "Tanzania",
    rating: 4.6,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "9",
    name: "Chemistry Lab Coat",
    category: "Lab Equipment",
    price: 15,
    description: "Professional chemistry lab coat for student safety",
    vendor: "Safety First Supplies",
    country: "Rwanda",
    rating: 4.5,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "10",
    name: "Digital Learning Tablet",
    category: "Electronics",
    price: 180,
    description: "Educational tablet with pre-loaded learning apps and e-books",
    vendor: "Tech for Education",
    country: "Kenya",
    rating: 4.8,
    inStock: true,
    image: "/placeholder.svg?height=200&width=200",
  },
]

const vendors = [
  {
    name: "East African Publishers",
    country: "Rwanda",
    rating: 4.8,
    products: 45,
    specialties: ["Textbooks", "Study Materials"],
  },
  {
    name: "Tech for Education",
    country: "Tanzania",
    rating: 4.9,
    products: 28,
    specialties: ["Electronics", "Digital Learning"],
  },
  {
    name: "Scientific Supplies Ltd",
    country: "Kenya",
    rating: 4.7,
    products: 67,
    specialties: ["Lab Equipment", "Science Tools"],
  },
  {
    name: "Uniform World",
    country: "Uganda",
    rating: 4.6,
    products: 34,
    specialties: ["Uniforms", "Sports Gear"],
  },
  {
    name: "Quality Bags Co",
    country: "Tanzania",
    rating: 4.7,
    products: 21,
    specialties: ["Bags", "Accessories"],
  },
  {
    name: "Creative Arts Store",
    country: "Rwanda",
    rating: 4.5,
    products: 52,
    specialties: ["Art Supplies", "Craft Materials"],
  },
]

export function EducationMarketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)

  const categories = ["All", "Textbooks", "Uniforms", "Electronics", "Lab Equipment", "Art Supplies", "Bags"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.id === product.id)
    if (existing) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: string, change: number) => {
    setCart(
      cart
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity + change } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Education Marketplace</h1>
            <p className="text-muted-foreground">Everything students and schools need</p>
            <Badge variant="secondary" className="mt-2">
              All payments in Pi on GCV
            </Badge>
          </div>
          <Button variant="default" size="lg" className="relative" onClick={() => setShowCart(!showCart)}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Cart
            {cartItemCount > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2">
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">
              <Package className="w-4 h-4 mr-2" />
              Products
            </TabsTrigger>
            <TabsTrigger value="vendors">
              <Store className="w-4 h-4 mr-2" />
              Vendors
            </TabsTrigger>
            <TabsTrigger value="cart">
              <ShoppingCart className="w-4 h-4 mr-2" />
              My Cart ({cartItemCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Search Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for textbooks, supplies, equipment..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:border-primary transition-colors">
                  <div className="aspect-square bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight mb-1">{product.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-2xl font-bold text-primary">π{product.price}</div>
                        <div className="flex items-center gap-1 text-xs">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Vendor:</span>
                      <span className="font-medium">{product.vendor}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Location:</span>
                      <Badge variant="outline">{product.country}</Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Availability:</span>
                      <Badge variant={product.inStock ? "default" : "destructive"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>

                    <Button className="w-full" onClick={() => addToCart(product)} disabled={!product.inStock}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No products found matching your search</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="vendors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Verified Vendors</CardTitle>
                <p className="text-sm text-muted-foreground">Trusted suppliers across East Africa</p>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vendors.map((vendor, idx) => (
                <Card key={idx} className="hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{vendor.name}</CardTitle>
                        <Badge variant="outline" className="mb-2">
                          {vendor.country}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{vendor.rating}</span>
                          <span className="text-muted-foreground">• {vendor.products} products</span>
                        </div>
                      </div>
                      <Store className="w-8 h-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Specialties:</Label>
                      <div className="flex gap-2 flex-wrap mt-1">
                        {vendor.specialties.map((specialty, i) => (
                          <Badge key={i} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full bg-transparent">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      View Products
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cart" className="space-y-4">
            {cart.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <ShoppingCart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground">Add products to get started</p>
                </CardContent>
              </Card>
            ) : (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Shopping Cart ({cartItemCount} items)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0">
                        <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium mb-1 leading-tight">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.vendor}</p>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <span className="text-lg font-bold text-primary">π{item.price * item.quantity}</span>
                          </div>
                        </div>

                        <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)} className="shrink-0">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span className="font-medium">π{cartTotal}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery:</span>
                        <span className="font-medium">π5</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between">
                        <span className="font-bold">Total:</span>
                        <span className="text-2xl font-bold text-primary">π{cartTotal + 5}</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                      <p className="text-sm font-medium">Payment Method:</p>
                      <Badge variant="default">Pi on GCV Network</Badge>
                      <p className="text-xs text-muted-foreground mt-2">
                        Secure blockchain payment • Instant confirmation
                      </p>
                    </div>

                    <Button className="w-full" size="lg">
                      Checkout with Pi
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
