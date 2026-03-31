import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/lib/session";

export async function GET() {
  try {
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
    if (!session.isLoggedIn) {
      return NextResponse.json({ isLoggedIn: false });
    }
    return NextResponse.json({ isLoggedIn: true, userId: session.userId });
  } catch (e) {
    console.error("Session error:", e);
    return NextResponse.json({ isLoggedIn: false });
  }
}
