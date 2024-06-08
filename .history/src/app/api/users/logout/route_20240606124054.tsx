import { NextResponse } from "next/server";

export async function GET() {
  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, );
  }
}

//we won't make any post request as we can simply clear out the login token
