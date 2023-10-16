import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';

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
                        1,200 +
                    </p>
                </div>
                <div className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg py-8 text-center space-y-1'>
                    <h2 className='text-2xl font-bold text-slate-600'>Total Course</h2>
                    <p className='text-lg text-blue-600/80 font-semibold tracking-widest'>
                        45+
                    </p>
                </div>
                <div className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg py-8 text-center space-y-1'>
                    <h2 className='text-2xl font-bold text-slate-600'>Total Instructors</h2>
                    <p className='text-lg text-blue-600/80 font-semibold tracking-widest'>
                        23+
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurImpact;