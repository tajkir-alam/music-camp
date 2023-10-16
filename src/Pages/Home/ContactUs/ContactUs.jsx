import React, { useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const [showPass, setShowPass] = useState(false);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        Toast.fire({
            icon: 'success',
            title: 'Message sent successfully'
        });
        reset();
    };

    return (
        <section className='custom-container'>
            <SectionTitle
                heading={'Contact Us'}
                subHeading={'Do not hesitate to contact us if you have any queries.'}
            />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="space-y-1">
                        <label htmlFor="name" className='block font-medium ml-1'>Enter Your Name</label>
                        <input {...register("name", { required: true })} id="Name" placeholder='Enter Your Name' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full text-black' />
                        {errors.name?.type === 'required' && <p className='ml-1 mt-2 text-red-400'>Name is required</p>}
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="email" className='block font-medium ml-1'>Enter your email</label>
                        <input {...register("email", { required: true })} id="email" type='email' placeholder='Enter your email address' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full text-black' />
                        {errors.email?.type === 'required' && <p className='ml-1 mt-2 text-red-400'>Email is required</p>}
                    </div>
                </div>
                <div className="space-y-1 mt-5">
                    <label htmlFor="message" className='block font-medium ml-1'>Enter Your Message</label>
                    <textarea rows={5} {...register("message", { required: true })} id="email" placeholder='Enter Your Message' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full text-black resize-none' />
                    {errors.message?.type === 'required' && <p className='ml-1 mt-2 text-red-400'>Message is required</p>}
                </div>
                <input type="submit" value="Send Message" className='btn btn-error w-full text-white font-semibold tracking-widest drop-shadow-xl mt-4' />
            </form>
        </section>
    );
};

export default ContactUs;