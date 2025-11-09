// app/api/ping/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Minimal response for keep-alive pings
  const payload = {
    ok: true,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(payload);
}
