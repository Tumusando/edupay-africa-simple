"use client"

import { Copy, Check, Mail, Phone, MapPin, Wallet, Globe, Users, BookOpen, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export function Footer() {
  const [copied, setCopied] = useState(false)
  const walletAddress = "GAU5S5ADLJG6EEA6PBTU4NNSMSIZMOGZ5YCOBVOJ54JVGATZ23LZY7FT"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Pi Wallet Section */}
        <div className="mb-12">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Wallet className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Official EduPay Africa Pi Wallet</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              All education payments are processed through our secure Pi Network wallet on GCV blockchain
            </p>
            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
              <div className="flex-1 bg-background p-3 rounded-lg border break-all font-mono text-xs sm:text-sm">
                {walletAddress}
              </div>
              <Button onClick={copyToClipboard} variant="outline" className="gap-2 shrink-0 bg-transparent">
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Support Center */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Support Center
            </h3>
            <Card className="p-4">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-base">TUMUKUNDE Sandrine</p>
                  <p className="text-sm text-muted-foreground">Founder, EduPay Africa Rwanda</p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+250780289347"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <span>+250 780 289 347</span>
                  </a>

                  <a
                    href="mailto:tumukundesandrine50@gmail.com"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors break-all"
                  >
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <span>tumukundesandrine50@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span>Kigali, Rwanda</span>
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <p className="text-xs text-muted-foreground">Available Monday - Saturday: 8:00 AM - 6:00 PM (CAT)</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/learning" className="text-sm hover:text-primary transition-colors">
                  Online Learning
                </a>
              </li>
              <li>
                <a href="/fees" className="text-sm hover:text-primary transition-colors">
                  Fee Management
                </a>
              </li>
              <li>
                <a href="/scholarships" className="text-sm hover:text-primary transition-colors">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="/jobs" className="text-sm hover:text-primary transition-colors">
                  Job Board
                </a>
              </li>
              <li>
                <a href="/school-discovery" className="text-sm hover:text-primary transition-colors">
                  School Discovery
                </a>
              </li>
              <li>
                <a href="/marketplace" className="text-sm hover:text-primary transition-colors">
                  Marketplace
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              About
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-sm">
                  EduPay Africa is revolutionizing education payments across Africa through Web3 technology.
                </p>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="font-medium">Secure Pi Network</span>
                </div>
              </li>
              <li>
                <p className="text-xs text-muted-foreground">
                  Serving: Rwanda, Kenya, Uganda, Tanzania, Nigeria, Ghana, South Africa, Egypt, and all African countries
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} EduPay Africa. All rights reserved. Powered by Pi Network GCV.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
