"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = Re

  const onLogin = async () => {
    try {
      // Implement login functionality here
      // Example: await axios.post('/api/login', user)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="username" className="block font-bold mb-2">
            Username
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 text-white"
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 text-white"
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-bold mb-2">
            Password
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 text-white"
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={onLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <Link href="/signup" className="text-blue-500 hover:text-blue-400">
            Visit Signup Page
          </Link>
        </div>
      </div>
    </div>
  );
}
