import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { FaSun } from 'react-icons/fa';

const ClassSchedule = () => {
    return (
        <section>
            <SectionTitle
                heading={'Our Class Schedule'}
                subHeading={'You can select any time from below for you classes.'}
            />

            <div className='custom-container grid lg:grid-cols-3 gap-4'>
                <div className="card shadow-xl">
                    <div className=''>
                        <FaSun />
                    </div>
                    <div className='mt-4 mb-8'>
                        <h2 className='text-center text-lg md:text-xl text-slate-700 dark:text-white font-semibold'>Hello</h2>
                        <p className='text-center text-sm text-slate-600 dark:text-slate-300 font-semibold -mt-1'>Teaches 29 students</p>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <div className='flex justify-center items-center'>
                        <FaSun />
                    </div>
                    <div className='mt-4 mb-8'>
                        <h2 className='text-center text-lg md:text-xl text-slate-700 dark:text-white font-semibold'>Hello</h2>
                        <p className='text-center text-sm text-slate-600 dark:text-slate-300 font-semibold -mt-1'>Teaches 29 students</p>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <div className='flex justify-center items-center'>
                        <FaSun />
                    </div>
                    <div className='mt-4 mb-8'>
                        <h2 className='text-center text-lg md:text-xl text-slate-700 dark:text-white font-semibold'>Hello</h2>
                        <p className='text-center text-sm text-slate-600 dark:text-slate-300 font-semibold -mt-1'>Teaches 29 students</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassSchedule;   