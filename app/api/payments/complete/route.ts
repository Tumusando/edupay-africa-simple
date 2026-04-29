export async function POST(req: Request) {
  const body = await req.json();
  console.log("COMPLETE:", body);

  return new Response(
    JSON.stringify({ completed: true }),
    { status: 200 }
  );
}
