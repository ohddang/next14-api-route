import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();
  } catch (e) {
    console.log("dbconnect error " + e);
  }

  const shortLinks = await ShortLink.find();

  return NextResponse.json(shortLinks, { status: 200 });
}

export async function POST(request: Request) {
  try {
    await dbConnect();
  } catch (e) {
    console.log("dbconnect error " + e);
  }

  const body = await request.json();
  const newShortLink = await ShortLink.create(body);

  return NextResponse.json(newShortLink, { status: 201 });
}
