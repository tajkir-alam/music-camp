import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import loginImg from '../../../assets/login.png'

const Login = () => {
    const [Error, setError] = useState('');

    const navigate = useNavigate();

    // const { emailLogin, googleLogin, loader, setLoader } = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

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
        // setLoader(true);
        setError('');
        console.log(data);
        // emailLogin(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         Toast.fire({
        //             icon: 'success',
        //             title: 'Signed in successfully'
        //         });
        //         navigate(from, { replace: true });
        //         setLoader(false);
        //         reset();
        //     })
        //     .catch(error => {
        //         // console.log(error.message)
        //         setError(error.message.split('(')[1].split(')')[0].split('/')[1]);
        //         setLoader(false);
        //     })
    };

    const googleSignup = () => {
        // setLoader(true);
        // googleLogin()
        //     .then(result => {
        //         const user = result.user;
        //         navigate(from, { replace: true });
        //         setLoader(false);
        //     })
        //     .catch((error) => {
        //         console.log(error.message);
        //         setError(error.message.split('(')[1].split(')')[0].split('/')[1]);
        //         setLoader(false);
        //     })
    }

    return (
        <div className='bg-gradient-to-r from-[#1d232a] to-[#383636ef]'>
            <div className='custom-container text-white py-12 relative'>
                <div className='flex justify-center'>
                    <img src={loginImg} alt="" className='w-20 h-20 bg-slate-100 rounded-full absolute top-2 z-30' />
                </div>
                <div className='bg-slate-800/50 lg:w-2/4 mx-auto rounded-xl shadow-md duration-700 shadow-white hover:shadow-lg hover:shadow-white drop-shadow-md p-4 lg:px-10 lg:pt-6 lg:pb-10 tracking-wider'>
                    <h1 className='text-2xl lg:text-5xl text-[#fffffff3] text-center font-semibold uppercase mt-8'>Sign In</h1>
                    <div className='grid justify-center mt-6'>
                        <button onClick={googleSignup} className='btn text-slate-500 dark:text-white flex justify-center items-center border-2 rounded-full w-12 h-12 mx-auto my-1'>
                            <span className='text-3xl'><FaGoogle></FaGoogle></span>
                        </button>
                        <p>You can also signin with your Email</p>
                        <div className="divider mt-0"></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-5">
                            <div className="space-y-1">
                                <label htmlFor="email" className='block font-medium ml-1'>Enter your email</label>
                                <input {...register("email")} required id="" placeholder='Enter your email address' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="password" className='block font-medium ml-1'>Enter your password</label>
                                <input {...register("password")} type='password' required id="" placeholder='Enter password' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                        </div>

                        {
                            <p className='my-8 text-error font-bold tracking-widest'>{Error}</p>
                        }

                        <div className="divider font-semibold text-yellow-600">
                            Don't have an account?<Link to={'/registration'} className='text-blue-500'>Signup here</Link>
                        </div>

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" value="Log in" className='btn btn-error w-full text-white font-semibold tracking-widest drop-shadow-xl' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;