import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    c
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
