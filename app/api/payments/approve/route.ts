export async function POST(req: Request) {
  const body = await req.json();
  console.log("APPROVE:", body);

  return new Response(
    JSON.stringify({ approved: true }),
    { status: 200 }
  );
}
