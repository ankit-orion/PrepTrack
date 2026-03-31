import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/lib/session";
import crypto from "crypto";

// Parse USERS env var: "alice:pass1,bob:pass2"
function getUsers(): Record<string, string> {
  const raw = process.env.USERS ?? "";
  const users: Record<string, string> = {};
  for (const entry of raw.split(",")) {
    const colon = entry.indexOf(":");
    if (colon === -1) continue;
    const u = entry.slice(0, colon).trim();
    const p = entry.slice(colon + 1).trim();
    if (u && p) users[u] = p;
  }
  return users;
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const users = getUsers();
  const validPass = users[username];

  const valid = validPass !== undefined && safeEqual(password, validPass);

  if (!valid) {
    await new Promise(r => setTimeout(r, 500)); // slow down brute force
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  session.userId = username;
  session.isLoggedIn = true;
  await session.save();

  return NextResponse.json({ ok: true });
}
