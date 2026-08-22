import React from 'react';

const Title = ({children}) => {
    return (
        <div className='bg-gray-500 p-4 text-black rounded'>
            <h2 className='text-5xl font-bold'>{children}</h2>
        </div>
    );
};

export default Title;