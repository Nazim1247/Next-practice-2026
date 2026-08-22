"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();
    const handleBtn =()=>{
        const password = prompt("Enter your password");
        if(password == "1234"){
            router.push("/dashboard");
        }
        console.log("clicked");
    }
    return (
        <div className='text-center bg-gray-500 p-8'>
            <h2 className='text-5xl font-bold'>Welcome to Dev-story</h2>
            <button onClick={handleBtn} className='py-4 px-8 rounded bg-amber-500 mt-4'>Button</button>
        </div>
    );
};

export default Banner;