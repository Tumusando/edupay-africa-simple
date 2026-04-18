"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, MessageSquare, ShoppingBag, Users } from "lucide-react"
import { useState } from "react"
import { LanguageSelector } from "./language-selector"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-lg">EduPay Africa</span>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={() => scrollToSection("services")}>
              All Services
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("features")}>
              Features
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => scrollToSection("services")}>
              <GraduationCap className="w-4 h-4" />
              All Services
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => scrollToSection("services")}>
              <MessageSquare className="w-4 h-4" />
              Student Chat
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => scrollToSection("services")}>
              <ShoppingBag className="w-4 h-4" />
              Marketplace
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => scrollToSection("features")}>
              <Users className="w-4 h-4" />
              For Schools
            </Button>
            <Button className="w-full">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
