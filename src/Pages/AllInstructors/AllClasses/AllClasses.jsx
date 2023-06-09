import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useLoader from '../../../hooks/useLoader';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AllClasses = () => {
    const navigate = useNavigate();
    const { user, loader, setLoader } = useAuth();

    const { data: classes = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            setLoader(true)
            const res = await fetch('http://localhost:5000/classes');
            setLoader(false)
            return res.json();
        }
    })

    const enrollClass = (id) => {
        if (!user) {
            Swal.fire({
                title: 'You have to login',
                text: "Please login to enroll your class",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    return (
        <div className='custom-container grid lg:grid-cols-3 gap-4 my-12'>
            {loader && useLoader()}
            {
                classes.map(singClass =>
                    <div className={singClass.availableSeats === 0 ? 'bg-[#FF0000] card card-compact duration-500 shadow-xl dark:hover:shadow-white dark:hover:shadow-md scale-100 hover:scale-105' :
                        `card card-compact bg-base-200 duration-500 shadow-xl dark:hover:shadow-white dark:hover:shadow-md scale-100 hover:scale-105`}
                        key={singClass._id}>
                        <figure><img src={singClass.image} alt="" className='h-52 w-full' /></figure>
                        <div className="card-body">
                            <div className="flex items-center ite">
                                <h2 className="card-title text-2xl dark:text-slate-300">{singClass.name}</h2>
                                <p className='text-right font-medium text-xl text-slate-700 dark:text-slate-400 mr-2'>${singClass.price}</p>
                            </div>
                            <p className='font-semibold text-slate-600 dark:text-slate-500'>Class will be Taken by <span className='font-bold dark:text-slate-400'>{singClass.instructorName}</span></p>
                            <div className="card-actions justify-end items mt-4">
                                <p className='text-lg mt-2 font-medium'>Available Seats: {singClass.availableSeats}</p>
                                <button onClick={() => enrollClass(singClass._id)}
                                    className="btn text-white tracking-wider bg-slate-900 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-900"
                                    disabled={singClass.availableSeats === 0 ? true : false}
                                >
                                    Enroll Class
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllClasses;