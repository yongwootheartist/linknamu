import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number };

export async function GET() {
  const client = await clientPromise;
  const docs = await client
    .db()
    .collection<ClickDoc>("clicks")
    .find()
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }
  return NextResponse.json(counts);
}

export async function POST(request: Request) {
  const { id } = await request.json();

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "invalid id" }, { status: 400 });
  }

  const client = await clientPromise;
  const result = await client
    .db()
    .collection<ClickDoc>("clicks")
    .findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

  return NextResponse.json({ count: result?.count ?? 1 });
}
