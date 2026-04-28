"use client";

import { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    if (typeof window !== "undefined" && window.Pi) {
      window.Pi.init({
        version: "2.0",
        sandbox: true   // VERY IMPORTANT for testnet
      });
      console.log("Pi initialized");
    }
  }, []);

  const login = async () => {
    try {
      const scopes = ["username", "payments"];

      const auth = await window.Pi.authenticate(scopes, function(payment) {
        console.log("Payment callback", payment);
      });

      alert("Welcome " + auth.user.username);

    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>EduPay Test 🚀</h1>

      <button onClick={login}>
        Login with Pi
      </button>
    </div>
  );
}
