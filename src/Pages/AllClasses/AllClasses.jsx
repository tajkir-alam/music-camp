import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLoader from '../../hooks/useLoader';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useStudent from '../../hooks/useStudent';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllClasses = () => {
    const navigate = useNavigate();
    const { user, loader, setLoader } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            setLoader(true);
            const res = await axiosSecure.get('/classes');
            setLoader(false);
            return res.data;
        }
    })

    const { data: cartAdded = [], refetch } = useQuery({
        queryKey: ['cartAdded'],
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get('/added-to-cart');
                return res.data;
            }
        }
    })

    // Card Btn will be disabled if anyone added any class to his cart or if any class found in his class.
    const classIds = classes.map(singClass => singClass._id);
    const filteredCartAdded = cartAdded.filter(item => classIds.includes(item.classId));

    const addToCartBtn = (id) => {
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
        else if (user && isStudent) {
            const addClass = classes.find(classIs => classIs._id === id);
            const { image, name, instructorEmail, instructorName, price, availableSeats, _id } = addClass;
            const cartClass = { userEmail: user.email, image, name, instructorEmail, instructorName, price, availableSeats, classId: _id };
            axiosSecure.post('/cart', cartClass)
                .then(data => {
                    if (data.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your item has been added',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                })
        }
    }

    return (
        <div className='custom-container grid lg:grid-cols-3 gap-4 my-12'>
            {loader && useLoader()}
            {
                classes.map(singClass => {
                    const isAddedToCart = filteredCartAdded.some(item => item.classId === singClass._id);
                    return (
                        <div className={singClass.availableSeats === 0 ? 'bg-[#FF0000] card card-compact duration-500 shadow-xl dark:hover:shadow-white dark:hover:shadow-md scale-100 hover:scale-105' :
                            `card card-compact bg-base-100 duration-500 shadow-xl dark:hover:shadow-white dark:hover:shadow-md scale-100 hover:scale-105`}
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
                                    <button onClick={() => addToCartBtn(singClass._id)}
                                        className="btn text-white tracking-wider btn-error dark:bg-slate-700 dark:hover:bg-slate-900"
                                        disabled={singClass.availableSeats === 0 || isAdmin || isInstructor || isAddedToCart}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllClasses;