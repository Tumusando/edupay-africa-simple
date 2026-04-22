"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Pi) {
      window.Pi.init({ version: "2.0" });
    }
  }, []);

  const loginWithPi = async () => {
    try {
      const scopes = ["username", "payments"];

      const auth = await window.Pi.authenticate(scopes, (payment: any) => {
        console.log("Payment callback:", payment);
      });

      setUser(auth.user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>EduPay Africa 🚀</h1>

      {!user ? (
        <button
          onClick={loginWithPi}
          style={{
            padding: "12px 20px",
            background: "#6f42c1",
            color: "white",
            borderRadius: "8px",
            marginTop: "20px"
          }}
        >
          Login with Pi
        </button>
      ) : (
        <div>
          <h2>Welcome {user.username} 👋</h2>

          <button
            onClick={() => alert("Payment flow test ready")}
            style={{
              padding: "12px 20px",
              background: "green",
              color: "white",
              borderRadius: "8px",
              marginTop: "20px"
            }}
          >
            Test Payment
          </button>
        </div>
      )}
    </div>
  );
}
