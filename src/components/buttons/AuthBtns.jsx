"use client";
import React from 'react';
import LoginButton from './LoginButton';
import { signOut, useSession } from 'next-auth/react';

const AuthBtns = () => {
    const session = useSession();
    return (
        <div>
            {
                session.status=="authenticated" ? (<button className="rounded bg-orange-500 px-4 py-2" onClick={()=> signOut()}>Logout</button>) : 
                (<LoginButton></LoginButton>)
            }
            
        </div>
    );
};

export default AuthBtns;