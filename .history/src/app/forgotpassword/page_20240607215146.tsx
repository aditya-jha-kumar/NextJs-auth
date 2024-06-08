"use Client"
import axios from "axios";
import React, { useState } from "react";

export default function ForgotPassword(){
    const[email, setEmail] = useState("");
    const[message, Setmessage] = useState("");
    const[error, setError] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            
        } catch (error: any) {
            setError(error.response)
        }
    }
}