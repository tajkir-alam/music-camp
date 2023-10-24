import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { FaAngleRight } from 'react-icons/fa'

const HomeBlogs = () => {
    return (
        <section className='custom-container'>
            <SectionTitle
                heading={'Our Blogs'}
                subHeading={'Our music blogs which will encourage your music passion.'}
            />

            <div className="grid lg:grid-cols-3 gap-5">
                <div className="card shadow-lg">
                    <figure className="card-top">
                        <img src="./blog1.jpg" alt="" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <p className='text-sm text-slate-500'>January, 10, 2022</p>
                        <h5 className='font-medium text-lg capitalize'>Music is a magic for refreshment</h5>
                        <p className='text-slate-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, adipisci...</p>
                        <button className='group flex items-center gap-1 w-fit mt-4 opacity-60 hover:opacity-90 hover:gap-3 duration-300'>
                            <span className='scale-100 group-hover:scale-110 duration-300'>
                                Read More
                            </span>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
                <div className="card shadow-lg">
                    <figure className="card-top">
                        <img src="./blog2.jpg" alt="" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <p className='text-sm text-slate-500'>March, 24, 2022</p>
                        <h5 className='font-medium text-lg capitalize'>Listen Music every time.</h5>
                        <p className='text-slate-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, adipisci...</p>
                        <button className='group flex items-center gap-1 w-fit mt-4 opacity-60 hover:opacity-90 hover:gap-3 duration-300'>
                            <span className='scale-100 group-hover:scale-110 duration-300'>
                                Read More
                            </span>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
                <div className="card shadow-lg">
                    <figure className="card-top">
                        <img src="./blog3.jpg" alt="" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <p className='text-sm text-slate-500'>February, 24, 2023</p>
                        <h5 className='font-medium text-lg capitalize'>Play Music For Calm.</h5>
                        <p className='text-slate-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, adipisci...</p>
                        <button className='group flex items-center gap-1 w-fit mt-4 opacity-60 hover:opacity-90 hover:gap-3 duration-300'>
                            <span className='scale-100 group-hover:scale-110 duration-300'>
                                Read More
                            </span>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HomeBlogs;