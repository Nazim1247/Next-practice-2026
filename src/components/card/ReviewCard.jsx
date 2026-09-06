import Image from 'next/image';
import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
            {/* User Info */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* <img
                        src={review.photo}
                        alt={review.user}
                        className="h-14 w-14 rounded-full object-cover"
                    /> */}

                    <Image 
                        src={review.photo}
                        alt={review.user}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover"/>

                    <div>
                        <h3 className="text-lg font-bold text-gray-800">
                            {review.user}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold text-gray-700">
                        {review.rating}
                    </span>
                </div>
            </div>

            {/* Review */}
            <p className="mt-5 leading-7 text-gray-600">
                {review.review}
            </p>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between border-t pt-4">
                <p className="text-sm text-gray-500">
                    {review.likes.length} people liked this review
                </p>

                {/* Like Button */}
                <button
                    className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-600 transition hover:border-red-400 hover:bg-red-50 hover:text-red-500"
                >
                    <span>❤️</span>
                    <span>Like</span>
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;