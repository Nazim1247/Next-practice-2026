"use client";
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const Add2CartBtn = ({food}) => {
    const [inCart, setInCart]= useState(false);
    const {addToCart} = use(CartContext);
    const handleAdd2Cart =()=>{
        addToCart(food);
        setInCart(true)
    }

    return (
        <div>
            <button 
            onClick={handleAdd2Cart}
            disabled={inCart} className="flex-1 rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-600 disabled:bg-gray-400">
            {inCart? "Added":"Add to Cart"}
            </button>
        </div>
    );
};

export default Add2CartBtn;