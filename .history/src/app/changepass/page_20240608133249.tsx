"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ChangePassword() {
  const [user, setUser] = useState({
    token: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [changed, setChanged] = useState(false);
  const [error, setError] = useState("");

  const Changefunc = async () => {
    if (user.newpassword !== user.confirmpassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await axios.post("/api/users/changepass", { 
        token: user.token, 
        newpassword: user.newpassword 
      });
      setChanged(true);
      setError("");
    } catch (error: any) {
      const errorMessage = error?.response?.data?.error || "An error occurred.";
      setError(errorMessage);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    if (urlToken) {
      setUser((prevUser) => ({ ...prevUser, token: urlToken }));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Update Password</h1>
      <label htmlFor="newpassword">New Password</label>
      <input
        className="p-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
        id="newpassword"
        type="password"
        value={user.newpassword}
        onChange={(e) => setUser({ ...user, newpassword: e.target.value })}
        placeholder="New Password"
      />
      <br />
      <label htmlFor="confirmpassword">Confirm Password</label>
      <input
        className="p-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
        id="confirmpassword"
        type="password"
        value={user.confirmpassword}
        onChange={(e) => setUser({ ...user, confirmpassword: e.target.value })}
        placeholder="Confirm Password"
      />
      <br />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={Changefunc}
        className="p-2 border border-gray-300 mb-4 bg-blue-500 text-white rounded-lg"
      >
        Submit
      </button>
      {isChanged && <p className="text-green-500">Password changed successfully!</p>}
    </div>
  );
}
