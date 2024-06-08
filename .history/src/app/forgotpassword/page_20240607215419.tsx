"use Client";
import axios from "axios";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, Setmessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/users/forgotpassword", { email });
      set
    } catch (error: any) {
      setError(true);
      console.log(error.reponse.data);
    }
  };
}
