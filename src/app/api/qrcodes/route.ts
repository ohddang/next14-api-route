import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json(
    [
      {
        id: "abc",
        title: "위키피디아 Next.js",
        url: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: "def",
        title: "코드잇 자유게시판",
        url: "https://codeit.kr/community/general",
      },
      {
        id: "ghi",
        title: "코드잇 질문답변",
        url: "https://www.codeit.kr/community/questions",
      },
    ],
    { status: 200 }
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json(body, { status: 201 });
}
