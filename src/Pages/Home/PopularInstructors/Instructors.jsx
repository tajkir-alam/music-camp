import React from 'react';
import LazyLoad from 'react-lazyload';

const Instructors = ({ instructor }) => {
    const { instructorImg, instructorName, totalStudents } = instructor

    return (
        <section className='duration-500 group hover:shadow-md dark:shadow-white rounded-lg py-2'>
            <div className='flex justify-center items-center'>
                <LazyLoad>
                    <img src={instructorImg} alt="" className='h-32 md:h-48 w-32 md:w-48 rounded-full border-4 border-yellow-400 p-2 duration-500 group-hover:border-8 group-hover:p-0' />
                </LazyLoad>
            </div>
            <div className='mt-4 mb-8'>
                <h2 className='text-center text-lg md:text-xl text-slate-700 dark:text-white font-semibold'>{instructorName}</h2>
                <p className='text-center text-sm text-slate-600 dark:text-slate-300 font-semibold -mt-1'>Teaches {totalStudents} students</p>
            </div>
        </section>
    );
};

export default Instructors;