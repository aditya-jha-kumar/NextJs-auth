import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = request.json();
    const {email, password} = req.Bo
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
