"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    const pathname = usePathname();
    if(pathname.startsWith('/dashboard')) return <></>

    return (
        <div>
         <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center">
          <Link href={"/"} className="text-lg font-semibold">Dev-story</Link>
          <nav className='space-x-5'>
            <NavLink href={"/stores"}>Stores</NavLink>
            <NavLink href={"/about"}>About</NavLink>
            <NavLink href={"/login"}>Login</NavLink>
            <NavLink href={"/register"}>Register</NavLink>
        </nav>
        </header>
           
        </div>
    );
};

export default Header;