"use client";

import { useEffect } from "react";

// 👉 avoid TypeScript error
declare global {
  interface Window {
    Pi: any;
  }
}

export default function HomePage() {

  // 🔥 Initialize Pi SDK
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

      const scopes = ["username", "payments"];

      const auth = await window.Pi.authenticate(
        scopes,
        function onIncompletePaymentFound(payment: any) {
          console.log("Incomplete payment:", payment);
        }
      );

      console.log("Auth result:", auth);

      if (auth?.user?.username) {
        alert("Welcome " + auth.user.username);
      } else {
        alert("No user returned");
      }

    } catch (err) {
      console.error("Auth error:", err);
      alert("Authentication failed");
    }
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>EduPay Africa 🚀</h1>
      <p>Pi Login Test</p>

      <button
        onClick={handleLogin}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          backgroundColor: "#6c5ce7",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Login with Pi
      </button>
    </div>
  );
}
