import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import loginImg from '../../../assets/login.png';

const Registration = () => {
    const [Error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);

    const { emailSignup, googleLogin, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const delayNavigate = () => {
        navigate('/login')
    }

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

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError('');
        emailSignup(data.email, data.password, data.name, data.img)
            .then(result => {
                const user = result.user;
                console.log(user);
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                });
                navigate('/login');
                logOut();
                setLoader(false);
            })
            .catch(error => {
                {
                    error.message && setError(error.message.split('(')[1].split(')')[0].split('/')[1])
                }
                console.log(error.message);
                setLoader(false);
            })
    };

    const googleSignup = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                if (user) {
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    });
                    setTimeout(delayNavigate, 2000);
                    logOut();
                    reset();
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='bg-gradient-to-r from-[#1d232a] to-[#383636ef]'>
            <div className='custom-container text-white py-12 relative'>
                <div>
                    <LazyLoad once className='flex justify-center'>
                        <img src={loginImg} alt="" className='w-20 h-20 duration-300 bg-slate-100 dark:bg-slate-300 rounded-full absolute top-2 z-30' />
                    </LazyLoad>
                </div>
                <div className='bg-slate-800/50 lg:w-2/4 mx-auto rounded-xl shadow-md duration-700 shadow-white hover:shadow-lg hover:shadow-white drop-shadow-md p-4 lg:px-10 lg:pt-6 lg:pb-10 tracking-wider'>
                    <h1 className='text-2xl lg:text-5xl text-[#fffffff3] text-center font-semibold uppercase mt-8'>Sign Up</h1>
                    <div className='grid justify-center mt-6'>
                        <button onClick={googleSignup} className='btn text-slate-500 dark:text-white flex justify-center items-center border-2 rounded-full w-12 h-12 mx-auto my-1'>
                            <span className='text-3xl'><FaGoogle></FaGoogle></span>
                        </button>
                        <p>You can also signup with your Email</p>
                        <div className="divider mt-0"></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-5">
                            <div className="space-y-1">
                                <label htmlFor="name" className='block font-medium ml-1'>Enter your name</label>
                                <input {...register("name", { required: true })} id="name" placeholder='Enter the name here' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full text-black' />
                                {errors.name?.type === 'required' && <p className='ml-1 mt-2 text-red-400'>Your name is required</p>}
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="email" className='block font-medium ml-1'>Enter your email</label>
                                <input {...register("email", { required: true })} id="email" placeholder='Enter your email address' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full text-black' />
                                {errors.email?.type === 'required' && <p className='ml-1 mt-2 text-red-400'>Email is required</p>}
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="password" className='block font-medium ml-1'>Enter your password</label>
                                <div className='relative'>
                                    <input {...register("password", {
                                        required: true,
                                        minLength: { value: 6, message: 'Password should contain 6 characters' },
                                        maxLength: { value: 34, message: 'Password can not be more than 34 characters' },
                                        validate: {
                                            uppercase: (value) =>
                                                /[A-Z]/.test(value) ||
                                                'Password must contain at least one uppercase letter',
                                            specialChar: (value) =>
                                                /[!@#$%^&*]/.test(value) ||
                                                'Password must contain at least one special character',
                                        },
                                    })} type={!showPass ? 'password' : 'text'} id="password" placeholder='Enter your password' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full text-black' />
                                    <div onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <FaRegEye className='absolute right-5 top-1/3 text-slate-700 text-xl'></FaRegEye>
                                                :
                                                <FaRegEyeSlash className='absolute right-5 top-1/3 text-slate-700 text-xl'></FaRegEyeSlash>
                                        }
                                    </div>
                                </div>
                                {errors.password && <p role="alert" className='ml-1 mt-2 text-red-400'>{errors.password.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="img" className='block font-medium ml-1'>Enter a valid image URL</label>
                                <input {...register("img", { required: true })} placeholder='Enter URL here @example: https://img.com' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full text-black' />
                                {errors.img?.type === 'required' && <p className='ml-1 mt-2 text-red-400'>Image URL is required</p>}
                            </div>
                        </div>

                        {
                            <p className='my-8 text-error font-bold tracking-widest'>{Error}</p>
                        }

                        <div className="divider my-8 font-semibold text-yellow-600">
                            Already have an account?<Link to={'/login'} className='text-blue-500'>Login here</Link>
                        </div>

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" value="Sign in" className='btn btn-error w-full text-white font-semibold tracking-widest drop-shadow-xl' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;