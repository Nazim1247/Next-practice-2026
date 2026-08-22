import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
         <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center">
          <Link href={"/"} className="text-lg font-semibold">Dev-story</Link>
          <nav className='space-x-5'>
            <Link href={"/stores"}>Stores</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
        </nav>
        </header>
           
        </div>
    );
};

export default Header;