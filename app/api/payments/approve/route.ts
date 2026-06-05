onReadyForServerApproval: async (paymentId: string) => {
  console.log("STEP 1 - paymentId:", paymentId);

  try {
    const res = await fetch("/api/payments/approve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentId }),
    });

    console.log("STEP 2 - status:", res.status);

    const data = await res.json();

    console.log("STEP 3 - data:", data);

    alert("Approve status: " + res.status);
  } catch (err) {
    console.error("STEP 4 - approve error:", err);
    alert("Approve fetch failed");
  }
},
