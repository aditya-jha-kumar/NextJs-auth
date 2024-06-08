import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    await User.findByIdAndUpdate(
      userId,
      {
        verifyToken: hashedToken,
        resetPasswordExpires: Date.now() + 3600000,
      },
      { new: true, runValidators: true }
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
};
