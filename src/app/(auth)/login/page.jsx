import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AuthBtns from '@/components/buttons/AuthBtns';
// import LoginButton from '@/components/buttons/LoginButton';
import UserCard from '@/components/card/UserCard';
import Title from '@/components/Title';
import { getServerSession } from 'next-auth';
import React from 'react';

const LoginPage = async() => {
    const session = await getServerSession(authOptions);
    return (
        <div className='text-center space-y-5'>
            <Title>Welcome to login page</Title>
            <UserCard></UserCard>
            {/* <LoginButton></LoginButton> */}
            <AuthBtns></AuthBtns>
            <h2 className='font-bold'>User-server site</h2>
            <div className='border rounded p-4'>{JSON.stringify(session)}</div>
        </div>
    );
};

export default LoginPage;