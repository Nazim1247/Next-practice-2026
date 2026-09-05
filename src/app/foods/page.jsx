import FoodsCard from '@/components/card/FoodsCard';
import React from 'react';
import CartItems from './CartItems';
import InputSearch from '@/components/InputSearch';


const getFoods = async (search)=>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
     
    const data = await res.json();
    await new Promise((resolve)=> setTimeout(resolve, 3000));
    return data.foods || [];
}

export const metadata = {
  title: "All Foods",
  description: "This is dev story",
};

const FoodsPage = async ({searchParams}) => {
    const {search = ""} = await searchParams;
    
    const foods = await getFoods(search);

    return (
        <div>
            <h2 className='text-4xl font-bold bg-gray-500 p-2 rounded'>Total: {foods.length} Foods Found</h2>
            <InputSearch></InputSearch>

            <div className='flex gap-5'>
                <div className='flex-1 grid grid-cols-3 gap-5 my-5 mt-8'>
                {foods.map((food) =>(<FoodsCard key={food.id} food={food}></FoodsCard>))}
            </div>
            <div className='w-[250px] border-2 rounded my-8 p-4'>
                <h2 className='text-2xl font-bolds'>Cart Items</h2>
                <hr></hr>
                <CartItems></CartItems>
            </div>
            </div>
        
        </div>
    );
};

export default FoodsPage;