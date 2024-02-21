import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const qrcodeId = params.slug;
  return NextResponse.json(qrcodeId, { status: 200 });
}

export async function PATCH(request: Request, { params }: { params: { slug: string } }) {
  const body = await request.json();
  body.id = params.slug;
  return NextResponse.json(body, { status: 200 });
}

export async function DELETE(request: Request, response: Response) {
  // response code 204 not supported by next14
  return new Response(null, { status: 204 });
}
