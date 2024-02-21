import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ Msg: "hi api" }, { status: 200 });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
