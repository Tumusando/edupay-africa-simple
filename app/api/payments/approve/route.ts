import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { paymentId } = await req.json();

    const res = await fetch(
      `https://api.testnet.minepi.com/v2/payments/${paymentId}/approve`,
      {
        method: "POST",
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("PI APPROVE ERROR:", data);
      return NextResponse.json(
        { error: "Approve failed", details: data },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
