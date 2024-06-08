// import { connect } from "@/dbConfig/dbConfig";
// import { NextRequest, NextResponse } from "next/server";
// import User from "@/models/userModel";
// import bcryptjs from "bcryptjs";
// import crypto from "crypto";

// connect();

// export async function POST(request: NextRequest) {
//   try {
//     const reqBody = await request.json();
//     const { email } = reqBody;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 400 });
//     }

//     // Generating reset token
//     const resetToken = crypto.randomBytes(20).toString("hex");
//     const resetTokenExpiry = Date.now() + 3600000;

//     // Update user with reset token and expiry
//     user.forgotPasswordToken = await bcryptjs.hash(resetToken, 10);
//     user.forgotPasswordTokenExpiry = resetTokenExpiry;
//     await user.save();

//     return NextResponse.json({
//       message: "Reset password link has been sent to your email",
//     });
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         error: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, password } = reqBody;

    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    user.password = await bcryptjs.hash(password, 10);
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "Password has been reset successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
