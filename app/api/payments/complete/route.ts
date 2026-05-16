import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { paymentId, txid } = await req.json();

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
  } catch (error) {
    console.error("Complete error:", error);

    return NextResponse.json(
      { error: "Complete failed" },
      { status: 500 }
    );
  }
}
