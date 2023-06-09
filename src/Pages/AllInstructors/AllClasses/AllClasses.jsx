import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useLoader from '../../../hooks/useLoader';

const AllClasses = () => {
    const { loader, setLoader } = useAuth();
    const { data: classes = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            setLoader(true)
            const res = await fetch('http://localhost:5000/classes');
            setLoader(false)
            return res.json();
        }
    })
    
    return (
        <div className='custom-container grid lg:grid-cols-3 gap-4 my-12'>
            { loader && useLoader()}
            {
                classes.map(singClass =>
                    <div className="card card-compact bg-base-100 duration-500 shadow-xl dark:hover:shadow-white dark:hover:shadow-md scale-100 hover:scale-105" key={singClass._id}>
                        <figure><img src={singClass.image} alt="" className='h-44 w-full' /></figure>
                        <div className="card-body">
                            <div className="flex items-center ite">
                                <h2 className="card-title text-2xl dark:text-slate-300">{singClass.name}</h2>
                                <p className='text-right font-medium text-xl text-slate-700 dark:text-slate-400 mr-2'>${singClass.price}</p>
                            </div>
                            <p className='font-semibold text-slate-600 dark:text-slate-500'>Class will be Taken by <span className='font-bold dark:text-slate-400'>{singClass.instructorName}</span></p>
                            <div className="card-actions justify-end items mt-4">
                                <p className='text-lg mt-2 font-medium'>Available Seats: {singClass.availableSeats}</p>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllClasses;