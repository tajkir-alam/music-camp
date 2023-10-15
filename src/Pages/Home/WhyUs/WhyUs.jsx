import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { FaStopwatch, FaUsers, FaWindowRestore } from 'react-icons/fa';

const WhyUs = () => {
    return (
        <section className='custom-container'>
            <SectionTitle
                heading={'Why Us'}
                subHeading={'You should know why you will join our classes'}
            />

            <div className="grid lg:grid-cols-3 gap-5">
                <div className='card card-compact bg-base-100 duration-500 shadow-xl dark:hover:shadow-white dark:hover:shadow-md scale-100 hover:scale-105 py-5'>
                    <div className="card-body">
                        <div className="text-center space-y-2">
                            <div className="flex justify-center">
                                <FaUsers className='text-3xl' />
                            </div>
                            <h2 className="text-2xl dark:text-slate-300">Excellent Teachers</h2>
                            <p className='font-medium text-sm text-slate-500 dark:text-slate-400 mr-2'>
                                We have excellent teachers who will provide you awesome support
                            </p>
                        </div>
                        <div className="card-actions justify-end items mt-4">

                        </div>
                    </div>
                </div>
                <div className='card card-compact bg-base-100 duration-500 shadow-xl dark:hover:shadow-white dark:hover:shadow-md scale-100 hover:scale-105 py-5'>
                    <div className="card-body">
                        <div className="text-center space-y-2">
                            <div className="flex justify-center">
                                <FaStopwatch className='text-3xl' />
                            </div>
                            <h2 className="text-2xl dark:text-slate-300">Flexible Time</h2>
                            <p className='font-medium text-sm text-slate-500 dark:text-slate-400 mr-2'>
                                We have classes in different times, You can chose your best time from the schedule section.
                            </p>
                        </div>
                        <div className="card-actions justify-end items mt-4">

                        </div>
                    </div>
                </div>
                <div className='card card-compact bg-base-100 duration-500 shadow-xl dark:hover:shadow-white dark:hover:shadow-md scale-100 hover:scale-105 py-5'>
                    <div className="card-body">
                        <div className="text-center space-y-2">
                            <div className="flex justify-center">
                                <FaWindowRestore className='text-3xl' />
                            </div>
                            <h2 className="text-2xl dark:text-slate-300">Off Line Class</h2>
                            <p className='font-medium text-sm text-slate-500 dark:text-slate-400 mr-2'>
                                You will get your classes also in offline, So you can watch them at any time.
                            </p>
                        </div>
                        <div className="card-actions justify-end items mt-4">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;