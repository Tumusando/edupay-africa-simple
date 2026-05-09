import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { paymentId, txid } = body;

    console.log("Completing payment:", paymentId);

    const response = await fetch(
      `https://api.testnet.minepi.com/v2/payments/${paymentId}/complete`,
      {
        method: "POST",
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ txid }),
      }
    );

    const data = await response.json();

    console.log("Pi complete response:", data);

    return NextResponse.json(data);

  } catch (error) {
    console.error("Complete error:", error);

    return NextResponse.json(
      { error: "Complete failed" },
      { status: 500 }
    );
  }
}
