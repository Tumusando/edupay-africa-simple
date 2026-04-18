"use client"

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
  return (
    <div className="min-h-screen bg-background">
      <MobileNav />
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
