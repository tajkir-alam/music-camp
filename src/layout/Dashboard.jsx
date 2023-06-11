import React, { useEffect, useState } from 'react';
import { FaAlignJustify, FaBook, FaBookReader, FaCalendarAlt, FaCalendarCheck, FaGrinStars, FaListUl, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudent';
import logo from '../assets/logo.png';


const Dashboard = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
        else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }

    const menuBar = <>
        <li><NavLink className='uppercase font-medium' to='/'>Home</NavLink></li>
        <li><NavLink className='uppercase font-medium' to='/instructors'>Instructors</NavLink></li>
        <li><NavLink className='uppercase font-medium' to='/classes'>Classes</NavLink></li>
        {user && <li><NavLink className='uppercase font-medium' to={isAdmin && '/dashboard/admin' || isInstructor && '/dashboard/instructor' || isStudent && '/dashboard/student'}>Dashboard</NavLink></li>}
    </>

    return (
        <div>
            <section className="bg-[#000000e0] sticky top-0 z-30 w-full">
                <div className="custom-container navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-700 text-white rounded-box w-52">
                                {menuBar}
                            </ul>
                        </div>
                        <Link to='/' className='h-8 lg:h-14 flex items-center gap-2'>
                            <img src={logo} alt="" className='h-full' />
                            <p className='lg:text-4xl text-[#ffffffef] font-Courgette'>Music Camp</p>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-1 text-white">
                            {menuBar}
                        </ul>
                    </div>
                    <div className="navbar-end gap-2 items-center">


                        {user &&
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className='font-semibold'>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">{user?.displayName}</span>
                                        </a>
                                    </li>
                                    <li className='font-semibold'><a>Settings</a></li>
                                    <li className='font-semibold' onClick={logOut}><a>Logout</a></li>
                                </ul>
                            </div>
                        }

                        {!user &&
                            <Link to='/login' className='btn px-6'>Login</Link>
                        }


                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input
                                type="checkbox"
                                onChange={handleToggle}
                                checked={theme === 'dark' ? true : false}
                            />
                            {/* sun icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            {/* moon icon */}
                            <svg className="swap-off fill-[#f8f6f6ec] w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
            </section>

            <label htmlFor="my-drawer-2" className="btn btn-outline border-0 text-white text-lg drawer-button lg:hidden absolute inset-y-5 left-48 z-30"><FaAlignJustify></FaAlignJustify></label>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}


                    <Outlet></Outlet>
                </div>
                <div className="drawer-side mt-20 lg:mt-0">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="menu p-4 w-72 h-full bg-[#000000e0] text-white">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <ul className='space-y-8'>
                                    <li className='uppercase'><NavLink className='font-semibold' to={'add-items'}><FaUtensils />Add items</NavLink></li>
                                    <li className='uppercase'><NavLink className='font-semibold' to={'manage-items'}><FaListUl />manage items</NavLink></li>
                                    <li className='uppercase'><NavLink className='font-semibold' to={'bookings'}><FaBook />manage bookings</NavLink></li>
                                    <li className='uppercase'><NavLink className='font-semibold' to={'allusers'}><FaUsers />all users</NavLink></li>
                                </ul>
                                :
                                isInstructor ?
                                    <ul className='space-y-8'>
                                        <li className='uppercase'><NavLink className='font-semibold' to={'reservation'}><FaCalendarAlt />reservation</NavLink></li>
                                        <li className='uppercase'><NavLink className='font-semibold' to={'payment'}><FaWallet />payment history</NavLink></li>
                                        <li className='uppercase'><NavLink className='font-semibold' to={'cart'}><FaShoppingCart />my cart</NavLink></li>
                                        <li className='uppercase'><NavLink className='font-semibold' to={'review'}><FaGrinStars />add review</NavLink></li>
                                        <li className='uppercase'><NavLink className='font-semibold' to={'booking'}><FaCalendarCheck />my booking</NavLink></li>
                                    </ul>
                                    :
                                    isStudent ?
                                        <ul className='space-y-8'>
                                            <li className='uppercase'><NavLink className='font-semibold' to={'student/cart'}><FaShoppingCart />my cart</NavLink></li>
                                            <li className='uppercase'><NavLink className='font-semibold' to={'student/enrolled-classes'}><FaBookReader />My classes</NavLink></li>
                                            <li className='uppercase'><NavLink className='font-semibold' to={'student/payment'}><FaWallet />payment history</NavLink></li>
                                        </ul>
                                        : ""
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;