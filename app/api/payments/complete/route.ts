const PI_API_KEY = process.env.PI_API_KEY;

export async function POST(req: Request) {
  const { paymentId } = await req.json();

  const res = await fetch(
    `https://api.minepi.com/v2/payments/${paymentId}/complete`,
    {
      method: "POST",
      headers: {
        Authorization: `Key ${PI_API_KEY}`,
      },
    }
  );

  const data = await res.json();

  console.log("COMPLETED:", data);

  return Response.json(data);
}
