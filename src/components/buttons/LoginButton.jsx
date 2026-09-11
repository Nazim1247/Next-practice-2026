"use client";
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const LoginButton = () => {
    return (
        <button onClick={()=> signIn()} className="rounded bg-orange-500 px-4 py-2">Login</button>
    );
};

export default LoginButton;