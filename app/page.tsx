"use client";

declare global {
  interface Window {
    Pi: any;
  }
}

export default function Page() {

  const login = async () => {
    window.Pi.init({
      version: "2.0",
      sandbox: true,
    });

    const scopes = ["username", "payments"];

    const auth = await window.Pi.authenticate(scopes, () => {});

    alert(auth.user.username);
  };

  const pay = async () => {
    await window.Pi.createPayment(
      {
        amount: 0.01,
        memo: "Test Payment",
        metadata: { test: true },
      },
      {
        onReadyForServerApproval: async (paymentId: string) => {
          await fetch("/api/payments/approve", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ paymentId }),
          });
        },

        onReadyForServerCompletion: async (
          paymentId: string,
          txid: string
        ) => {
          await fetch("/api/payments/complete", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ paymentId, txid }),
          });

          alert("SUCCESS");
        },

        onCancel: () => {
          alert("CANCELLED");
        },

        onError: (err: any) => {
          console.error(err);
          alert("ERROR");
        },
      }
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>EduPay Test</h1>

      <button onClick={login}>
        Login
      </button>

      <br /><br />

      <button onClick={pay}>
        Pay
      </button>
    </div>
  );
}
