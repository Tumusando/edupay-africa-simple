import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { paymentId, txid } = body;

    console.log("COMPLETE payment:", paymentId, txid);

    // 👉 confirm payment logic
    return NextResponse.json({ completed: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Complete failed" },
      { status: 500 }
    );
  }
}
