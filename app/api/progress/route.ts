import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/lib/session";
import { prisma } from "@/lib/db";

async function getSession() {
  return getIronSession<SessionData>(await cookies(), sessionOptions);
}

const EMPTY_BLOCKS = () => Array.from({ length: 90 }, () => Array(5).fill(false));
const EMPTY_QUESTIONS = (): Record<string, boolean[]> => ({});

// The `checks` JSON column stores: { blocks: boolean[][], questions: Record<string, boolean[]> }
// Old format (plain boolean[][]) is handled gracefully.
function parseStored(raw: unknown): { blocks: boolean[][]; questions: Record<string, boolean[]> } {
  if (!raw) return { blocks: EMPTY_BLOCKS(), questions: EMPTY_QUESTIONS() };
  if (Array.isArray(raw)) {
    // Legacy format — plain blocks array
    return { blocks: raw as boolean[][], questions: EMPTY_QUESTIONS() };
  }
  const obj = raw as Record<string, unknown>;
  return {
    blocks:    Array.isArray(obj.blocks)    ? (obj.blocks as boolean[][])                  : EMPTY_BLOCKS(),
    questions: obj.questions && typeof obj.questions === "object" ? (obj.questions as Record<string, boolean[]>) : EMPTY_QUESTIONS(),
  };
}

export async function GET() {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const row = await prisma.progress.findUnique({ where: { userId: session.userId } });
  const { blocks, questions } = parseStored(row?.checks);

  return NextResponse.json({ blocks, questions });
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { blocks, questions } = await req.json();
  const checks = { blocks, questions };

  await prisma.progress.upsert({
    where:  { userId: session.userId },
    update: { checks },
    create: { userId: session.userId, checks },
  });

  return NextResponse.json({ ok: true });
}
