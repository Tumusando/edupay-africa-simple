export async function POST(req: Request) {
  const { paymentId, txid } = await req.json();

  console.log("Complete:", paymentId, txid);

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
