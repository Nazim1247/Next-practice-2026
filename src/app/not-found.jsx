import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col gap-5'>
            <h2>404 | Your Page NOt Found</h2>
            <Link className='underline' href={'/'}>Go to Home</Link>
            
        </div>
    );
};

export default NotFound404;