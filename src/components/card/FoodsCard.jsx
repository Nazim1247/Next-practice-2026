import Link from 'next/link';
import React from 'react';
import Add2CartBtn from '../buttons/Add2CartBtn';
import Image from 'next/image';

const FoodsCard = ({food}) => {
     return (
        <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg">
            {/* Food Image */}
            {/* <img
                src={food.foodImg}
                alt={food.title}
                className="h-56 w-full object-cover"
            /> */}

            <Image 
                width={300}
                height={150}
                src={food.foodImg}
                alt={food.title}
                className="h-56 w-full object-cover"
                />

            {/* Content */}
            <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {food.title}
                    </h2>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                        {food.category}
                    </span>
                </div>

                <p className="mb-4 text-xl font-semibold text-orange-500">
                    ৳{food.price}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    
                    <Add2CartBtn food={food}></Add2CartBtn>

                    <Link href={`/foods/${food.id}`} className="flex-1 rounded-lg border border-orange-500 px-4 py-2 font-semibold text-orange-500 transition hover:bg-orange-50">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodsCard;