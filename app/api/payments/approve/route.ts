import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    const paymentId = body.paymentId;

    if (!paymentId) {
      return NextResponse.json(
        { error: "Missing paymentId" },
        { status: 400 }
      );
    }

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

    console.log("PI RESPONSE:", data);

    return NextResponse.json(data);

  } catch (error: any) {
    console.error("APPROVE ERROR:", error);

    return NextResponse.json(
      {
        error: error.message || "Approve failed",
      },
      { status: 500 }
    );
  }
}
