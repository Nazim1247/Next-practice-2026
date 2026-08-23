
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();

    return (
        <Link className={`${pathname.startsWith(href) && "bg-amber-500 py-2 px-4"}`} href={href}>{children}</Link>
    );
};

export default NavLink;