import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { FaCloudMoon, FaCloudSun, FaSun } from 'react-icons/fa';

const ClassSchedule = () => {
    return (
        <section>
            <SectionTitle
                heading={'Our Class Schedule'}
                subHeading={'You can select any time from below for you classes.'}
            />

            <div className='custom-container grid lg:grid-cols-3 gap-4'>
                <div className="card bg-black/5 hover:shadow-lg py-5 space-y-5 duration-300">
                    <div className='flex justify-center items-center'>
                        <FaCloudSun className='text-2xl' />
                    </div>
                    <div className='space-y-1'>
                        <h2 className='text-center text-lg md:text-xl text-slate-700 dark:text-white font-semibold'>Morning</h2>
                        <p className='text-center text-sm text-slate-500 dark:text-slate-300 font-semibold'>
                            Time: 10AM ~ 12Pm
                        </p>
                    </div>
                </div>
                <div className="card bg-black/5 hover:shadow-lg py-5 space-y-5 duration-300">
                    <div className='flex justify-center items-center'>
                        <FaSun className='text-2xl' />
                    </div>
                    <div className='space-y-1'>
                        <h2 className='text-center text-lg md:text-xl text-slate-700 dark:text-white font-semibold'>Afternoon</h2>
                        <p className='text-center text-sm text-slate-500 dark:text-slate-300 font-semibold'>
                            Time: 12PM ~ 2Pm
                        </p>
                    </div>
                </div>
                <div className="card bg-black/5 hover:shadow-lg py-5 space-y-5 duration-300">
                    <div className='flex justify-center items-center'>
                        <FaCloudMoon className='text-2xl' />
                    </div>
                    <div className='space-y-1'>
                        <h2 className='text-center text-lg md:text-xl text-slate-700 dark:text-white font-semibold'>Evening</h2>
                        <p className='text-center text-sm text-slate-500 dark:text-slate-300 font-semibold'>
                            Time: 2PM ~ 4PM
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassSchedule;   