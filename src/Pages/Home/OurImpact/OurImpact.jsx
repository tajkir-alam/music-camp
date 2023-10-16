import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import CountUp from 'react-countup';

const OurImpact = () => {
    return (
        <section className='custom-container'>
            <SectionTitle
                heading={'Our Impact'}
                subHeading={'We are happy for our Assets'}
            />
            <div className='grid lg:grid-cols-3 justify-center items-center gap-4'>
                <div className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg py-8 text-center space-y-1'>
                    <h2 className='text-2xl font-bold text-slate-600'>Total Students</h2>
                    <p className='text-lg text-blue-600/80 font-semibold tracking-widest'>
                        <CountUp
                            end={1200}
                            duration={3}
                            enableScrollSpy
                        />
                        +
                    </p>
                </div>
                <div className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg py-8 text-center space-y-1'>
                    <h2 className='text-2xl font-bold text-slate-600'>Total Course</h2>
                    <p className='text-lg text-blue-600/80 font-semibold tracking-widest'>
                        <CountUp
                            end={45}
                            duration={5}
                            enableScrollSpy
                        />
                        +
                    </p>
                </div>
                <div className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg py-8 text-center space-y-1'>
                    <h2 className='text-2xl font-bold text-slate-600'>Total Instructors</h2>
                    <p className='text-lg text-blue-600/80 font-semibold tracking-widest'>
                        <CountUp
                            end={23}
                            duration={5}
                            enableScrollSpy
                        />
                        +
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurImpact;