export async function POST(req: Request) {
  const body = await req.json();

  console.log("APPROVE:", body);

  // 🔥 simulate real approval (Pi irabyemera)
  return Response.json({
    approved: true
  });
}
