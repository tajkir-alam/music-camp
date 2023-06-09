import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="bg-bg-footer bg-cover bg-center relative">
            <div className='bg-[#0c0b0bc4] absolute w-full h-full mix-blend-hard-light'></div>
            <div className='footer custom-container pt-16 pb-12'>
                <div className='z-50'>
                    <h3 className="z-50 uppercase text-2xl text-[#fcfbfbe3] font-bold">Contact us</h3>
                    <div className='text-white text-lg'>
                        <a className='link link-hover flex items-center gap-2'><FaMapMarkerAlt></FaMapMarkerAlt> PO BOX: Hatirpool Street</a>
                        <a className='link link-hover flex items-center gap-2'><FaPhone></FaPhone>+880 162 463 2302</a>
                    </div>
                    <div className='text-white text-xl flex gap-5 items-center mt-5'>
                        <a className='link link-hover p-2 duration-700 hover:bg-slate-300 hover:text-slate-800'><FaTwitter></FaTwitter></a>
                        <a className='link link-hover p-2 duration-700 hover:bg-slate-300 hover:text-slate-800'><FaLinkedinIn></FaLinkedinIn></a>
                        <a className='link link-hover p-2 duration-700 hover:bg-slate-300 hover:text-slate-800'><FaFacebookF></FaFacebookF></a>
                    </div>
                </div>
                <div className='z-50'>
                    <h3 className="z-50 uppercase text-2xl text-[#fcfbfbe3] font-bold">Quick Links</h3>
                    <div className='text-xl text-white grid'>
                        <Link className='link link-hover' to='/'>Home</Link>
                        <Link className='link link-hover' to='/instructors'>Instructors</Link>
                        <Link className='link link-hover' to='/classes'>Classes</Link>
                        <Link className='link link-hover' to='/dashboard'>Dashboard</Link>
                    </div>
                </div>
                <div className='z-50'>
                    <h3 className="z-50 uppercase text-2xl text-[#fcfbfbe3] font-bold">About</h3>
                    <div className='text-xl text-white grid'>
                        <Link className='link link-hover'>About Us</Link>
                        <Link className='link link-hover'>Our instructors</Link>
                        <Link className='link link-hover'>Our Classes</Link>
                    </div>
                </div>
                <div className="z-50">
                    <h3 className="z-50 uppercase text-2xl text-[#fcfbfbe3] font-bold">Newsletter</h3>

                    <input type="text" placeholder="Your email" className="input border-white rounded-3xl bg-transparent text-white w-full pr-16" />
                </div>
            </div>
            <div className='footer footer-center pb-4'>
                <p className='text-white text-lg z-40'>Copyright © 2023 - All right reserved by Tajkir Alam</p>
            </div>
        </section>
    );
};

export default Footer;