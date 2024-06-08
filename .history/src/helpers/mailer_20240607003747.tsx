import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    // Hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    // Update user model with the appropriate token and expiry based on the email type
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000, // 1 hour expiry
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordExpiry: Date.now() + 3600000, // 1 hour expiry
      });
    }

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "448d9d60064722",
        pass: "32ae25935de546",
      },
    });

    // Email options
    const mailOptions = {
      from: "aditya.jhab76@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `
        <p>Click 
          <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">
            here
          </a> 
          to ${
            emailType === "VERIFY" ? "verify your email" : "reset your password"
          }.
        </p>
      `,
    };

    // Send email
    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
