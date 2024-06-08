"use client";
import axios from "axios";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/users/forgotpassword", { email });
      setMessage("Password reset email sent. Please check your inbox.");
      setEmail("");
    } catch (error: any) {
      setError(true);
      console.log(error.reponse.data);
    }
  };
  return (
    <div>
      <h1>Forgot Password</h1>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
        className="text-black"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}
