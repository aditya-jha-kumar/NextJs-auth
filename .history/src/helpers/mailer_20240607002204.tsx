import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //hashed to
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    //create
  } catch (error: any) {
    throw new Error(error.message);
  }
};
