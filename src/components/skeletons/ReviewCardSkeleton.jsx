import React from 'react';

const ReviewCardSkeleton = () => {
    return (
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
            {/* User Info Skeleton */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Profile Image */}
                    <div className="h-14 w-14 animate-pulse rounded-full bg-gray-300"></div>

                    <div>
                        {/* Name */}
                        <div className="mb-2 h-5 w-32 animate-pulse rounded bg-gray-300"></div>

                        {/* Date */}
                        <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
                    </div>
                </div>

                {/* Rating */}
                <div className="h-5 w-12 animate-pulse rounded bg-gray-300"></div>
            </div>

            {/* Review Skeleton */}
            <div className="mt-5 space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-gray-300"></div>

                <div className="h-4 w-full animate-pulse rounded bg-gray-300"></div>

                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300"></div>
            </div>

            {/* Footer Skeleton */}
            <div className="mt-5 flex items-center justify-between border-t pt-4">
                <div className="h-4 w-36 animate-pulse rounded bg-gray-300"></div>

                <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-300"></div>
            </div>
        </div>
    );
};

export default ReviewCardSkeleton;