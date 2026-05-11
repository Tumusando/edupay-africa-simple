"use client";

import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(false);

  // 🔥 INIT PI SDK
  useEffect(() => {
    const wait = setInterval(() => {
      if (window.Pi) {
        window.Pi.init({
          version: "2.0",
          sandbox: true,
        });

        console.log("Pi SDK initialized");

        clearInterval(wait);
      }
    }, 500);

    const saved = localStorage.getItem("pi_user");

    if (saved) {
      setUsername(saved);
    }

    return () => clearInterval(wait);
  }, []);

  // 🔐 LOGIN
  const handleLogin = async () => {
    try {
      setLoading(true);

      setUsername(null);

      localStorage.removeItem("pi_user");

      if (!window.Pi) {
        alert("Pi SDK not loaded");
        return;
      }

      const auth = await window.Pi.authenticate(
        ["username", "payments"],
        () => {}
      );

      const user = auth?.user?.username;

      if (user) {
        setUsername(user);

        localStorage.setItem("pi_user", user);

        console.log("Logged in:", user);
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.error("AUTH ERROR:", err);

      alert("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔓 LOGOUT
  const handleLogout = () => {
    setUsername(null);

    localStorage.removeItem("pi_user");

    alert("Logged out");
  };

  // 💰 PAYMENT
  const handlePayment = async () => {
    try {
      if (!window.Pi) {
        alert("Pi SDK not ready");
        return;
      }

      const paymentData = {
        amount: 0.01,
        memo: "EduPay Test Payment",
        metadata: {
          type: "test-payment",
        },
      };

      await window.Pi.createPayment(paymentData, {
        // ✅ APPROVE PAYMENT
        onReadyForServerApproval: async (paymentId: string) => {
          console.log("Approving payment:", paymentId);

          const res = await fetch("/api/payments/approve", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ paymentId }),
          });

          const data = await res.json();

          console.log("Approve response:", data);
        },

        // ✅ COMPLETE PAYMENT
        onReadyForServerCompletion: async (
          paymentId: string,
          txid: string
        ) => {
          console.log("Completing payment:", paymentId, txid);

          const res = await fetch("/api/payments/complete", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentId,
              txid,
            }),
          });

          const data = await res.json();

          console.log("Complete response:", data);

          alert("Payment successful 🎉");
        },

        // ❌ CANCEL
        onCancel: (paymentId: string) => {
          console.log("Payment cancelled:", paymentId);

          alert("Payment cancelled");
        },

        // ❌ ERROR
        onError: (error: any) => {
          console.error("Payment error:", error);

          alert("Payment failed");
        },
      });
    } catch (error) {
      console.error("Create payment failed:", error);

      alert("Payment failed");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileNav />

      {/* AUTH AREA */}
      <div style={{ textAlign: "center", padding: 20 }}>
        {username ? (
          <>
            <h2>Welcome to EduPay Africa, {username} 👋</h2>

            <button
              onClick={handlePayment}
              style={{
                marginTop: 10,
                padding: "12px 20px",
                background: "#00b894",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Pay with Pi 💰
            </button>

            <br />

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
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              padding: "12px 20px",
              background: "#6c5ce7",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            {loading ? "Loading..." : "Login with Pi"}
          </button>
        )}
      </div>

      {/* APP CONTENT */}
      <main>
        <HeroSection />
        <StudentRegistration />
        <OnlineCoursesPreview />
        <ServicesManager />
        <StatsSection />
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
      <QuickActionsBar />
      <LiveChatWidget />
    </div>
  );
}
