// import nodemailer from "nodemailer";
// import User from "@/models/userModel";
// import bcryptjs from "bcryptjs";

// export const sendEmail = async ({ email, emailType, userId }: any) => {
//   try {
//     // create a hased token
//     const hashedToken = await bcryptjs.hash(userId.toString(), 10);

//     if (emailType === "VERIFY") {
//       await User.findByIdAndUpdate(userId, {
//         verifyToken: hashedToken,
//         verifyTokenExpiry: Date.now() + 3600000,
//       });
//     } else if (emailType === "RESET") {
//       await User.findByIdAndUpdate(userId, {
//         forgotPasswordToken: hashedToken,
//         forgotPasswordTokenExpiry: Date.now() + 3600000,
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       host: "sandbox.smtp.mailtrap.io",
//       port: 2525,
//       auth: {
//         user: "448d9d60064722",
//         pass: "32ae25935de546",
//       },
//     });

//     const mailOptions = {
//       from: "aditya@gmail.com",
//       to: email,
//       subject:
//         emailType === "VERIFY" ? "Verify your email" : "Reset your password",
//       html: `<p>Click <a href="${
//         process.env.DOMAIN
//       }/verifyemail?token=${hashedToken}">here</a> to ${
//         emailType === "VERIFY" ? "verify your email" : "reset your password"
//       }
//             or copy and paste the link below in your browser. <br> ${
//               process.env.DOMAIN
//             }/verifyemail?token=${hashedToken}
//             </p>`,
//     };

//     const mailresponse = await transporter.sendMail(mailOptions);
//     return mailresponse;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };
// // import nodemailer from "nodemailer";
// // import User from "@/models/userModel";
// // import bcryptjs from "bcryptjs";

// // // Define the SendEmailParams interface
// // interface SendEmailParams {
// //   email: string;
// //   emailType: "VERIFY" | "RESET";
// //   userId: string;
// // }

// // // Function definition using the SendEmailParams interface
// // export const sendEmail = async ({
// //   email,
// //   emailType,
// //   userId,
// // }: SendEmailParams) => {
// //   try {
// //     console.log("Starting sendEmail function");
// //     // Hashed token
// //     const hashedToken = await bcryptjs.hash(userId.toString(), 10);
// //     console.log("Hashed token:", hashedToken);

// //     // Update user model with the appropriate token and expiry based on the email type
// //     if (emailType === "VERIFY") {
// //       console.log("Updating user for verification");
// //       await User.findByIdAndUpdate(userId, {
// //         verifyToken: hashedToken,
// //         verifyTokenExpiry: Date.now() + 3600000, // 1 hour expiry
// //       });
// //     } else if (emailType === "RESET") {
// //       console.log("Updating user for password reset");
// //       await User.findByIdAndUpdate(userId, {
// //         forgotPasswordToken: hashedToken,
// //         forgotPasswordExpiry: Date.now() + 3600000, // 1 hour expiry
// //       });
// //     }

// //     // Create a transporter object using the default SMTP transport
// //     const transporter = nodemailer.createTransport({
// //       host: "sandbox.smtp.mailtrap.io",
// //       port: 2525,
// //       auth: {
// //         user: "448d9d60064722",
// //         pass: "32ae25935de546",
// //       },
// //     });

// //     // Email options
// //     const mailOptions = {
// //       from: "aditya.jhab76@gmail.com",
// //       to: email,
// //       subject:
// //         emailType === "VERIFY" ? "Verify your email" : "Reset your password",
// //       html: `
// //         <p>Click
// //           <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">
// //             here
// //           </a>
// //           to ${
// //             emailType === "VERIFY" ? "verify your email" : "reset your password"
// //           }
// //           or copy and paste the link below in your browser. <br>
// //           ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
// //         </p>
// //       `,
// //     };

// //     // Send email
// //     console.log("Sending email with options:", mailOptions);
// //     const mailResponse = await transporter.sendMail(mailOptions);
// //     console.log("Email sent successfully:", mailResponse);
// //     return mailResponse;
// //   } catch (error: any) {
// //     console.error("Error sending email:", error);
// //     throw new Error(error.message);
// //   }
// // };
