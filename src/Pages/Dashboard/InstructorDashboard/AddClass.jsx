import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.availableSeats = parseInt(data.availableSeats);
        data.price = parseInt(data.price);

        const course = {
            image: data.image,
            students: 0,
            name: data.name,
            instructorImg: user.photoURL,
            instructorName: user.displayName,
            instructorEmail: user.email,
            availableSeats: data.availableSeats,
            price: data.price,
            status: "Pending"
        }

        axiosSecure.post('/course', course)
            .then(data => {
                if (data.data.insertedId) {
                    console.log(data.data);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your item has been added',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    // navigate('/');
                }
            })
    };

    return (
        <div className="duration-500 bg-slate-200 dark:bg-gradient-to-r from-[#1d232a] to-[#383636ef] p-2 lg:p-12">
            <div className='custom-container duration-500 bg-slate-100 dark:bg-slate-800/50 rounded-xl shadow-md drop-shadow-md dark:shadow-white p-4 lg:p-10 tracking-wider'>
                <h1 className='text-2xl lg:text-5xl text-slate-600 dark:text-slate-300 text-center font-semibold mb-4'>Add A New Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-5">
                        <div className="grid lg:grid-cols-2 items-center gap-3">
                            <div className="space-y-1">
                                <label htmlFor="image" className='block font-medium dark:text-[#ffff] ml-1'>Enter Class Thumbnail image URL</label>
                                <input {...register("image", { required: true })} placeholder='Enter URL here @example: https://img.com' className='py-2 px-3 shadow-lg dark:bg-slate-700 border-2 outline-none rounded-md w-full' />
                                {errors.image && <span>This field is required</span>}
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="name" className='block font-medium ml-1 dark:text-[#ffff]'>Enter the Class name</label>
                                <input {...register("name", { required: true })} id="" placeholder='Enter the name here' className='py-2 px-3 shadow-lg dark:bg-slate-700 border-2 outline-none rounded-md w-full' />
                                {errors.name && <span>This field is required</span>}
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-3 items-center">
                            <div className='space-y-1'>
                                <label htmlFor="instructorName" className='block font-medium ml-1 dark:text-[#ffff]'>Your name</label>
                                <input type="text" {...register("instructorName")} id="" value={user && user.displayName} className='py-2 px-3 shadow-lg dark:bg-slate-700 border-2 outline-none rounded-md w-full' />
                                {errors.instructorName && <span>This field is required</span>}
                            </div>
                            <div className='space-y-1'>
                                <label htmlFor="instructorEmail" className='block font-medium ml-1 dark:text-[#ffff]'>Your email</label>
                                <input type="text" {...register("instructorEmail")} id="" value={user && user.email} className='py-2 px-3 shadow-lg dark:bg-slate-700 border-2 outline-none rounded-md w-full' />
                                {errors.instructorEmail && <span>This field is required</span>}
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-3 items-center'>
                            <div className="space-y-1">
                                <label htmlFor="availableSeats" className='block font-medium ml-1 dark:text-[#ffff]'>Available Seats</label>
                                <input type="text" {...register("availableSeats", { required: true })} id="" placeholder='Enter your class capacity' className='py-2 px-3 shadow-lg dark:bg-slate-700 border-2 outline-none rounded-md w-full' />
                                {errors.availableSeats && <span>This field is required</span>}
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="price" className='block font-medium ml-1 dark:text-[#ffff]'>Class Price</label>
                                <input type="text" {...register("price", { required: true })} id="" placeholder='Enter the fee for your class' className='py-2 px-3 shadow-lg dark:bg-slate-700 border-2 outline-none rounded-md w-full' />
                                {errors.price && <span>This field is required</span>}
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Add Class" className='btn btn-error w-full text-white font-semibold tracking-widest mt-8 drop-shadow-xl' />
                </form>
            </div>
        </div>
    );
};

export default AddClass;