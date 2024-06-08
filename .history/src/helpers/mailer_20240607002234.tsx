import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    await User.findByIdAnd
  } catch (error: any) {
    throw new Error(error.message);
  }
};
