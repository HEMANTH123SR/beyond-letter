import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/db/connect";
import { BeyondLettersModel } from "@/db/schema/beyondLetters";
export async function POST(request: NextRequest) {
  try {
    await connectDb();
    const data = await request.json();
    const beyondLetter = await BeyondLettersModel.create(data);
    return NextResponse.json(beyondLetter, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

