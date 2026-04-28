"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Pi: any;
  }
}

// 👉 Import UI yawe
import { HeroSection } from "@/components/hero-section";
import { ServicesManager } from "@/components/services-manager";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { CTASection } from "@/components/cta-section";
import { MobileNav } from "@/components/mobile-nav";
import { QuickActionsBar } from "@/components/quick-actions-bar";
import { StudentRegistration } from "@/components/student-registration";
import { OnlineCoursesPreview } from "@/components/online-courses-preview";
import { Footer } from "@/components/footer";
import { LiveChatWidget } from "@/components/live-chat-widget";

export default function HomePage() {

  // ✅ Pi SDK init
  useEffect(() => {
    const waitForPi = setInterval(() => {
      if (window.Pi) {
        window.Pi.init({
          version: "2.0",
          sandbox: true,
        });
        console.log("Pi SDK initialized");
        clearInterval(waitForPi);
      }
    }, 500);

    return () => clearInterval(waitForPi);
  }, []);

  // 🔐 Login
  const handleLogin = async () => {
    try {
      if (!window.Pi) {
        alert("Pi SDK not ready");
        return;
      }

      const auth = await window.Pi.authenticate(
        ["username", "payments"],
        (payment: any) => {
          console.log("Incomplete payment:", payment);
        }
      );

      alert("Welcome " + auth.user.username);

    } catch (err) {
      console.error(err);
      alert("Authentication failed");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileNav />

      {/* 🔥 Login button */}
      <div style={{ textAlign: "center", padding: 20 }}>
        <button onClick={handleLogin}>
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
  );
}
