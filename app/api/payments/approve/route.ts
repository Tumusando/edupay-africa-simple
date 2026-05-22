export async function POST(req: Request) {
  try {
    const body = await req.json();

    return Response.json({
      success: true,
      received: body,
      apiKeyExists: !!process.env.PI_API_KEY,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Failed",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  return Response.json({
    working: true,
  });
}
