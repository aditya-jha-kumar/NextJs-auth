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

