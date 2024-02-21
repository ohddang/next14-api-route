import { NextResponse } from "next/server";
import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    await dbConnect();
  } catch (e) {
    console.log("dbconnect error " + e);
  }

  const qrcodeId = params.slug;

  const shortLink = await ShortLink.findById(qrcodeId);

  return NextResponse.json(shortLink, { status: 200 });
}

export async function PATCH(request: Request, { params }: { params: { slug: string } }) {
  try {
    await dbConnect();
  } catch (e) {
    console.log("dbconnect error " + e);
  }

  const body = await request.json();
  const newShortLink = await ShortLink.findByIdAndUpdate(params.slug, body, { update: true });

  return NextResponse.json(newShortLink, { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  // 204 response code not supported by next14
  await ShortLink.findByIdAndDelete(params.slug);
  return new NextResponse(null, { status: 204 });
}
