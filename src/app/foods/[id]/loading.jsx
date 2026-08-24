import React from 'react';

const loading = () => {
     return (
        <div className="container mx-auto px-4 py-10">
            <div className="overflow-hidden rounded-3xl shadow-xl">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Image Skeleton */}
                    <div className="h-[450px] animate-pulse bg-gray-300"></div>

                    {/* Content Skeleton */}
                    <div className="p-8">
                        <div className="mb-4 h-8 w-24 animate-pulse rounded bg-gray-300"></div>

                        <div className="mb-6 h-12 w-72 animate-pulse rounded bg-gray-300"></div>

                        <div className="space-y-4">
                            <div className="h-6 w-40 animate-pulse rounded bg-gray-300"></div>

                            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>

                            <div className="h-6 w-36 animate-pulse rounded bg-gray-300"></div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <div className="h-12 w-36 animate-pulse rounded-lg bg-gray-300"></div>

                            <div className="h-12 w-36 animate-pulse rounded-lg bg-gray-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default loading;