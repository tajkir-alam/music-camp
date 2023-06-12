import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
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
            <div className='stack w-full animate-pulse'>
                <h2 className='text-[12em] text-white shadow-white shadow-md w-1/2 mx-auto rounded-xl text-center'>404</h2>
                <h2 className='text-[12em] text-white shadow-white shadow-md w-1/2 mx-auto rounded-xl text-center'>404</h2>
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