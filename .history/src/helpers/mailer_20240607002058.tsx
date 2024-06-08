import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    bcryptjs.js(userId, )
  } catch (error: any) {
    throw new Error(error.message);
  }
};
