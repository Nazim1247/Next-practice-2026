import FeedbackCardPage from '@/components/card/FeedbackCard';
import Link from 'next/link';
import React from 'react';

const getFeedback = async()=>{
    const res = await fetch("http://localhost:3000/api/feedback/", {
        cache: "force-cache",
        next: {revalidate: 60},
    });
    return await res.json();
}

const FeedbackPage = async() => {
    const feedback = await getFeedback();
    
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>{feedback.length} :Feedbacks</h2>
            <div className='my-4'>
                <Link href={"/feedback/add"} className='py-2 px-4 bg-amber-500 rounded'>Add Feedback</Link>
            </div>
            <div className='space-y-4'>
                {
                    feedback.map((fb)=> <FeedbackCardPage key={fb._id} feedback={fb}></FeedbackCardPage>)
                }
            </div>
        </div>
    );
};

export default FeedbackPage;