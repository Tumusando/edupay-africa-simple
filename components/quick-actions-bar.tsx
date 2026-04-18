"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, ShoppingBag, GraduationCap, Briefcase, HeartPulse, Bus, Search, Home } from "lucide-react"

export function QuickActionsBar() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg md:hidden">
      <div className="container mx-auto px-1">
        <div className="grid grid-cols-8 gap-0.5 py-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 h-auto py-2 px-1"
            onClick={scrollToServices}
          >
            <GraduationCap className="w-4 h-4" />
            <span className="text-[10px]">Learn</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 h-auto py-2 px-1"
            onClick={scrollToServices}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px]">Chat</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 h-auto py-2 px-1"
            onClick={scrollToServices}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[10px]">Shop</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 h-auto py-2 px-1"
            onClick={scrollToServices}
          >
            <Search className="w-4 h-4" />
            <span className="text-[10px]">Schools</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 h-auto py-2 px-1"
            onClick={scrollToServices}
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-[10px]">Jobs</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 h-auto py-2 px-1"
            onClick={scrollToServices}
          >
            <Home className="w-4 h-4" />
            <span className="text-[10px]">Housing</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 h-auto py-2 px-1"
            onClick={scrollToServices}
          >
            <HeartPulse className="w-4 h-4" />
            <span className="text-[10px]">Health</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 h-auto py-2 px-1"
            onClick={scrollToServices}
          >
            <Bus className="w-4 h-4" />
            <span className="text-[10px]">Transport</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
