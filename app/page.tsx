"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Pi: any;
  }
}

// UI Components (usanzwe ukoresha)
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
  const [loading, setLoading] = useState(false);

  // 🔥 Init Pi SDK + restore session
  useEffect(() => {
    const waitForPi = setInterval(() => {
      if (window.Pi) {
        window.Pi.init({
          version: "2.0",
          sandbox: true, // ugumane true muri sandbox
        });
        console.log("Pi SDK initialized");
        clearInterval(waitForPi);
      }
    }, 500);

    // restore saved user (if any)
    const saved = localStorage.getItem("pi_user");
    if (saved) setUsername(saved);

    return () => clearInterval(waitForPi);
  }, []);

  // 🔐 Login (RESET mbere yo authenticate)
  const handleLogin = async () => {
    try {
      setLoading(true);

      // 🔥 important: clear previous session
      setUsername(null);
      localStorage.removeItem("pi_user");

      if (!window.Pi) {
        alert("Pi SDK not ready");
        setLoading(false);
        return;
      }

      const auth = await window.Pi.authenticate(
        ["username", "payments"],
        (payment: any) => {
          console.log("Incomplete payment:", payment);
        }
      );

      const user = auth?.user?.username;

      if (user) {
        setUsername(user);
        localStorage.setItem("pi_user", user);
        console.log("Logged in as:", user);
      } else {
        alert("Login failed: no user");
      }
    } catch (err) {
      console.error("Auth error:", err);
      alert("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔓 Logout (for next user)
  const handleLogout = () => {
    setUsername(null);
    localStorage.removeItem("pi_user");
    alert("Logged out");
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileNav />

      {/* 🔥 AUTH AREA */}
      <div style={{ textAlign: "center", padding: 20 }}>
        {username ? (
          <>
            <h2>Welcome to EduPay Africa, {username} 👋</h2>
            <button
              onClick={handleLogout}
              style={{
                marginTop: 10,
                padding: "10px 16px",
                background: "#d63031",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2>Login to continue</h2>
            <button
              onClick={handleLogin}
              disabled={loading}
              style={{
                marginTop: 10,
                padding: "12px 20px",
                background: "#6c5ce7",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              {loading ? "Logging in..." : "Login with Pi"}
            </button>
          </>
        )}
      </div>

      {/* 🔽 APP CONTENT */}
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
