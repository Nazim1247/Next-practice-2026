import FoodsCard from '@/components/card/FoodsCard';
import React from 'react';


const getFoods = async ()=>{
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
     
    const data = await res.json();
    await new Promise((resolve)=> setTimeout(resolve, 3000));
    return data.foods || [];
}

const FoodsPage = async () => {
    const foods = await getFoods();

    return (
        <div>
            <h2 className='text-4xl font-bold bg-gray-500 p-2 rounded'>Total: {foods.length} Foods Found</h2>
            <div className='grid grid-cols-3 gap-5 my-5 mt-8'>
                {foods.map((food) =>(<FoodsCard key={food.id} food={food}></FoodsCard>))}
            </div>
        </div>
    );
};

export default FoodsPage;