"use client";

import { useEffect, useState } from "react";

// Pi global type fix
declare global {
  interface Window {
    Pi: any;
  }
}

// UI Components
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
  const [username, setUsername] = useState<string | null>(null);

  // 🔥 Init Pi SDK
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

  // 🔐 Login function
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

      console.log("Auth:", auth);

      setUsername(auth.user.username);

    } catch (err) {
      console.error(err);
      alert("Authentication failed");
    }
  };

  return (
    <div className="min-h-screen bg-background">

      <MobileNav />

      {/* 🔥 Welcome message */}
      <div style={{ textAlign: "center", padding: 20 }}>
        <h2>
          {username
            ? `Welcome to EduPay Africa, ${username} 👋`
            : "Login to continue"}
        </h2>

        <button
          onClick={handleLogin}
          style={{
            padding: "12px 20px",
            marginTop: 10,
            background: "#6c5ce7",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
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
  );
}
