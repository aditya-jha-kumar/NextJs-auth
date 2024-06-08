import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);
    const user = await U
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
