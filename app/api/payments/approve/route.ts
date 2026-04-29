export async function POST(req: Request) {
  const { paymentId } = await req.json();

  console.log("Approve:", paymentId);

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
