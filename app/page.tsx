"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Pi) {
      window.Pi.init({ version: "2.0" });
      console.log("Pi initialized");
    }
  }, []);

  const login = async () => {
    const scopes = ["username", "payments"];

    const auth = await window.Pi.authenticate(scopes, () => {});
    alert(auth.user.username);
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
