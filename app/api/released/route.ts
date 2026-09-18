import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const refId = request.nextUrl.searchParams.get("refId");
  if (!refId) {
    return NextResponse.json({ error: "refId is required" }, { status: 400 });
  }

  try {
    await fetch(
      `${process.env.API_URL}/m/uninstall?${new URLSearchParams({ uuid: refId }).toString()}`,
      { method: "POST" }
    );
  } catch {
    // the visitor still gets their goodbye page
  }

  return NextResponse.json({ success: true });
}
