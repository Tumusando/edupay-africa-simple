import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { paymentId } = body;

    console.log("APPROVE payment:", paymentId);

    // 👉 Hano ni ho washyiramo Pi Server SDK (production)
    // ubu ni test simple
    return NextResponse.json({ approved: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Approve failed" },
      { status: 500 }
    );
  }
}
