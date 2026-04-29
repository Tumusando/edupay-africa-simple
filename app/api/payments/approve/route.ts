export async function POST(req: Request) {
  const { paymentId } = await req.json();

  console.log("Approving payment:", paymentId);

  // 🔥 VERY IMPORTANT: respond FAST
  return new Response(
    JSON.stringify({
      approved: true
    }),
    { status: 200 }
  );
}
