import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen'>
            <div className='col-span-3 border-r-2'>
                <h2>Navigation</h2>
                <div className='flex flex-col gap-5 mt-8'>
                    <Link className='py-2 px-4 w-full rounded bg-gray-500' href={'/dashboard/add-story'}>Add Story</Link>
                    <Link className='py-2 px-4 w-full rounded bg-gray-500' href={'/dashboard/my-profile'}>My Profile</Link>
                    <Link className='py-2 px-4 w-full rounded bg-gray-500' href={'/dashboard/settings'}>Settings</Link>
                </div>
            </div>
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;