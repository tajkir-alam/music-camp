import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/error.png'
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    const { error, status, statusText } = useRouteError();

    return (
        <div className='bg-slate-900 h-screen'>

            <div className="custom-container mt-0 py-5">
                <Link to={'/'} className='btn gap-4 tracking-widest font-semibold text-lg glass bg-[#e4132bd2]'>
                    <FaArrowLeft className='text-lg'></FaArrowLeft>
                    Go Back
                </Link>
            </div>
            <div className='text-5xl text-white text-center'>
                {statusText}
            </div>
            <div className="divider mt-0"></div>
            <div className='h-[calc(100vh-300px)] grid grid-cols-3 justify-center items-center text-center'>
                <h2 className='text-9xl text-white drop-shadow-lg flex justify-end'>4</h2>
                <span className="animate-spin-slow">
                    <img src={errorImg} alt="" className='h-full m-0 p-0' />
                </span>
                <h2 className='text-9xl text-white drop-shadow-lg flex justify-start'>4</h2>
            </div>
            <h4 className="text-3xl text-white text-center mt-16 space-y-8">
                {error.message}
                <br />
                {status} error
            </h4>
        </div>
    );
};

export default ErrorPage;