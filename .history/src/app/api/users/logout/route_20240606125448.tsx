import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout Successful",
      success: true,
    });

    // Setting the cookie with maxAge 0 to delete it
    response.cookies.set("token", "", { httpOnly: true, maxAge: 0 });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


//we won't make any post request as we can simply clear out the login token
