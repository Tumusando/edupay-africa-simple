import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { paymentId } = body;

    console.log("Approving payment:", paymentId);

    const response = await fetch(
      `https://api.testnet.minepi.com/v2/payments/${paymentId}/approve`,
      {
        method: "POST",
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    console.log("Pi approve response:", data);

    return NextResponse.json(data);

  } catch (error) {
    console.error("Approve error:", error);

    return NextResponse.json(
      { error: "Approve failed" },
      { status: 500 }
    );
  }
}
