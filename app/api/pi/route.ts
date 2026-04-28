export async function GET() {
  return new Response("Pi backend working", {
    status: 200,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Pi request:", body);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
