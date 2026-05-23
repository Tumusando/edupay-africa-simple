import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const paymentId = body.paymentId;
    const txid = body.txid;

    if (!paymentId || !txid) {
      return NextResponse.json(
        { error: "Missing data" },
        { status: 400 }
      );
    }

    console.log("Completing payment:", paymentId);

    const response = await fetch(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      {
        method: "POST",
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          txid,
        }),
      }
    );

    const data = await response.json();

    console.log("Complete response:", data);

    if (!response.ok) {
      return NextResponse.json(
        { error: data },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error: any) {
    console.error("COMPLETE ERROR:", error);

    return NextResponse.json(
      {
        error: error.message || "Complete failed",
      },
      { status: 500 }
    );
  }
}
