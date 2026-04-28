"use client"

import { useEffect } from "react"

// 👉 Pi type (to avoid TypeScript errors)
declare global {
  interface Window {
    Pi: any
  }
}

import { HeroSection } from "@/components/hero-section"
import { ServicesManager } from "@/components/services-manager"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { MobileNav } from "@/components/mobile-nav"
import { QuickActionsBar } from "@/components/quick-actions-bar"
import { StudentRegistration } from "@/components/student-registration"
import { OnlineCoursesPreview } from "@/components/online-courses-preview"
import { Footer } from "@/components/footer"
import { LiveChatWidget } from "@/components/live-chat-widget"

export default function HomePage() {

  // ✅ Initialize Pi SDK safely
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.Pi) {
        window.Pi.init({
          version: "2.0",
          sandbox: true,
        })
        console.log("Pi SDK initialized")
        clearInterval(interval)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // ✅ Login function
  const handleLogin = async () => {
    try {
      if (!window.Pi) {
        alert("Pi SDK not loaded yet")
        return
      }

      const scopes = ["username", "payments"]

      const auth = await window.Pi.authenticate(
        scopes,
        (payment: any) => {
          console.log("Incomplete payment found:", payment)
        }
      )

      alert("Welcome " + auth.user.username)

    } catch (error) {
      console.error("Pi login error:", error)
      alert("Authentication failed")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <MobileNav />

      {/* 🔥 IMPORTANT: Pi Login Button */}
      <div style={{ padding: 20, textAlign: "center" }}>
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Login with Pi
        </button>
      </div>

      <main className="pb-24 md:pb-20">
        <HeroSection />
        <StudentRegistration />
        <OnlineCoursesPreview />

        <div id="services">
          <ServicesManager />
        </div>

        <StatsSection />

        <div id="features">
          <FeaturesSection />
        </div>

        <CTASection />
      </main>

      <Footer />
      <QuickActionsBar />
      <LiveChatWidget />
    </div>
  )
}
