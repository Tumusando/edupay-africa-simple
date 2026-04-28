"use client";

import { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    if (window.Pi) {
      window.Pi.init({
        version: "2.0",
        sandbox: true
      });
      console.log("Pi SDK initialized");
    } else {
      console.log("Pi SDK not loaded");
    }
  }, []);

  const login = async () => {
    try {
      const scopes = ["username", "payments"];

      const auth = await window.Pi.authenticate(scopes, function(payment) {
        console.log("Payment", payment);
      });

      alert("Welcome " + auth.user.username);

    } catch (e) {
      console.error(e);
      alert("Authentication failed");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>EduPay Africa 🚀</h1>

      <button onClick={login}>
        Login with Pi
      </button>
    </div>
  );
}
