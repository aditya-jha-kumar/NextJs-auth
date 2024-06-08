import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    // Update user with token and expiry time
    await updateUserWithToken(userId, hashedToken, emailType);

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.USER_AUTH,
        pass: process.env.PASS_AUTH,
      },
    });

    // Construct email options
    const mailOptions = {
      from: "hitesh@gmail.com",
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: getEmailHtml(emailType, hashedToken),
    };

    // Send email
    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(`Error sending email: ${error.message}`);
  }
};

// Update user document with token and expiry
const updateUserWithToken = async (userId: string, token: string, emailType: string) => {
  const updateFields: any = {};
  if (emailType === "VERIFY") {
    updateFields.verifyToken = token;
    updateFields.verifyTokenExpiry = Date.now() + 3600000;
  } else if (emailType === "RESET") {
    updateFields.forgotPasswordToken = token;
    updateFields.forgotPasswordTokenExpiry = Date.now() + 3600000;
  }
  await User.findByIdAndUpdate(userId, updateFields);
};

// Construct email HTML based on email type
const getEmailHtml = (emailType: string, hashedToken: string) => {
  return `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${
    emailType === "VERIFY" ? "verify your email" : "reset your password"
  }
  or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
  </p>`;
};
