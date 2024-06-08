import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    bcrypt
  } catch (error: any) {
    throw new Error(error.message);
  }
};
