
"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const FeedbackForm = () => {
    const router = useRouter();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const message = e.target.message.value;
        const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/api/feedback/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({message}),
        });

        const data = await res.json();
        if(data.insertedId){
            alert("success");
            router.push('/feedback');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='space-y-5 text-center'>
                <textarea 
                required
                className='w-xl border' name="message" id=""></textarea>
                <hr />
                <button className='py-2 px-4 bg-amber-500 rounded'>Add Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;