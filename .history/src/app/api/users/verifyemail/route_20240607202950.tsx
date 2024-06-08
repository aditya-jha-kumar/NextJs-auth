// server-side (/api/users/verifyemail)
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    const user = await User.findOneAndUpdate(
      {
        verifyToken: token,
        verifyTokenExpiry: { $gt: Date.now() },
      },
      {
        $set: {
          isVerified: true,
          verifyToken: undefined,
          verifyTokenExpiry: undefined,
        },
      },
      { new: true } // Return the updated document
    );

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    console.log("User updated:", user); // Log the updated user

    return NextResponse.json({ message: "Email Verified", success: true });
  } catch (error: any) {
    console.error("Error verifying email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
