export async function POST(req: Request) {
  const { paymentId } = await req.json();

  const res = await fetch(
    `https://api.minepi.com/v2/payments/${paymentId}/approve`,
    {
      method: "POST",
      headers: {
        Authorization: `Key ${process.env.PI_API_KEY}`,
      },
    }
  );

  const data = await res.json();

  return Response.json(data);
}