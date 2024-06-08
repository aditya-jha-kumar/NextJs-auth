import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { generateToken } from "@/helpers/toke"; // Import a function to generate tokens

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, newpassword } = reqBody;

    // Verify if token is valid and not expired
    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() }, // Check if token is not expired
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
    }

    // Hash the new password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(newpassword, salt);

    // Update user's password
    user.password = hashedPassword;
    user.forgotPasswordToken = null; // Clear token after password change
    user.forgotPasswordTokenExpiry = null;
    await user.save();

    return NextResponse.json({ message: "Password updated successfully" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
