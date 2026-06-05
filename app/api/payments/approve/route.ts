import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const paymentId = body.paymentId;

    if (!paymentId) {
      return NextResponse.json(
        { error: "Missing paymentId" },
        { status: 400 }
      );
    }

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

    if (!response.ok) {
      console.error("PI APPROVE ERROR:", data);

      return NextResponse.json(
        { error: data },
        { status: response.status }
      );
    }

    console.log("Approve success:", data);

    return NextResponse.json({
      success: true,
      data,
    });

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
