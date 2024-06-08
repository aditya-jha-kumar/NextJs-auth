"use client";
import axios from "axios";
import Link from "next/link";

export default function ProfilePage() {
  const logout = () => {
    try {
      
    } catch (error: any) {
      console.log()
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-hscreen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4"
      >
        Logout
      </button>
    </div>
  );
}
