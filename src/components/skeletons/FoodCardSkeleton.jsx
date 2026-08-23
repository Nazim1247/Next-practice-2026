import React from 'react';

const FoodCardSkeleton = () => {
     return (
        <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg">
            {/* Image Skeleton */}
            <div className="h-56 w-full animate-pulse bg-gray-300"></div>

            <div className="p-5">
                {/* Title + Category */}
                <div className="mb-4 flex items-center justify-between">
                    <div className="h-7 w-36 animate-pulse rounded bg-gray-300"></div>

                    <div className="h-7 w-20 animate-pulse rounded-full bg-gray-300"></div>
                </div>

                {/* Price */}
                <div className="mb-5 h-6 w-20 animate-pulse rounded bg-gray-300"></div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-300"></div>

                    <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-300"></div>
                </div>
            </div>
        </div>
    );
};

export default FoodCardSkeleton;