"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { sendEmail } from '@/utils/mailer';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendEmail({
        email,
        emailType: 'RESET',
        userId: '',
      });
      setMessage('Reset password link has been sent to your email');
      setEmail('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}