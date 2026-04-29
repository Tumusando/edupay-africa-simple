export async function POST(req: Request) {
  const { paymentId, txid } = await req.json();

  console.log("Completing payment:", paymentId, txid);

  return new Response(
    JSON.stringify({
      completed: true
    }),
    { status: 200 }
  );
}
