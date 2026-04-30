export async function POST(req: Request) {
  try {
    const { paymentId } = await req.json();

    const PI_API_KEY = process.env.PI_API_KEY;

    if (!PI_API_KEY) {
      return new Response("Missing API Key", { status: 500 });
    }

    const response = await fetch(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      {
        method: "POST",
        headers: {
          Authorization: `Key ${PI_API_KEY}`,
        },
      }
    );

    const data = await response.json();

    console.log("COMPLETED:", data);

    return Response.json(data);
  } catch (error) {
    console.error("Complete error:", error);
    return new Response("Error completing payment", { status: 500 });
  }
}
