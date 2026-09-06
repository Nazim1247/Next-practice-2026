"use client";
import ReviewCard from '@/components/card/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './ReviewLoading';
import { Anek_Bangla } from 'next/font/google';

const font = Anek_Bangla({
    weight: ["400"]
})

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
        .then((res)=> res.json())
        .then((data)=> {
        setReviews(data.reviews || []);
        setLoading(false);
        });
    }, []);

    if(loading){
        return <ReviewLoading></ReviewLoading>
    }

    return (
        <div className={font.className}>
            <h2 className='text-4xl font-bold bg-gray-500 p-2 rounded'>Total: {reviews.length} Reviews Found</h2>
            <div className='grid grid-cols-3 gap-5 my-5 mt-8'>
                {reviews.map((rev) =>(<ReviewCard key={rev.id} review={rev}></ReviewCard>))}
            </div>
        </div>
    );
};

export default ReviewsPage;