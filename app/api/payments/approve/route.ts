export async function GET() {
  return Response.json({
    message: "approve route works",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const paymentId = body.paymentId;

    console.log("PAYMENT ID:", paymentId);

    return Response.json({
      success: true,
      paymentId,
    });

  } catch (error: any) {
    return Response.json({
      error: error.message,
    });
  }
}
