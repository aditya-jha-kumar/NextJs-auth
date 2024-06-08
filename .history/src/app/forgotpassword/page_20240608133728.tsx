"use client";

import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [user, setUser] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgotpassword", user);
      console.log("Forgot Password Response", response.data);
      toast.success("Email Sent!");
    } catch (error: any) {
      console.log("Error Sending Email", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Forgot Password"}</h1>
      <hr />
      <label htmlFor="email">Email</label>
      <input
        className="p-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <br />
      <button
        onClick={onSubmit}
        className="p-2 border border-gray-300 mb-4 bg-blue-500 text-white rounded-lg"
      >
        Submit
      </button>
    </div>
  );
}
