// "use client";

// import axios from "axios";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post("/api/users/forgotpassword", { email });
//       setMessage("Password reset link sent to your email.");
//     } catch (error: any) {
//       setError(true);
//       console.error("Error:", error);
//       if (error.response) {
//         console.log("Error Response Data:", error.response.data);
//       } else {
//         console.log("Error Message:", error.message);
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1 className="text-4xl">Forgot Password</h1>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="p-2 border border-gray-300 rounded mt-4 text-black"
//       />
//       <button
//         onClick={handleSubmit}
//         className="p-2 bg-blue-500 text-white rounded mt-4"
//       >
//         Submit
//       </button>
//       {message && <p className="mt-4 text-green-500">{message}</p>}
//       {error && (
//         <p className="mt-4 text-red-500">
//           An error occurred. Please try again.
//         </p>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import axios from "axios";

const ResetPassword = ({ token: }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post("/api/reset-password", {
        token: token,
        password: password,
      });

      setMessage(data.message);
      setTimeout(() => {
        // Redirect after successful password reset
        window.location.href = "/login";
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Confirm New Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
