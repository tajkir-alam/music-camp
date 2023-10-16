import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';

const OurImpact = () => {
    return (
        <section className='custom-container'>
            <SectionTitle
                heading={'Our Students Review'}
                subHeading={'We are happy to get the valuable thoughts from our customers. Thanks for being with us. Keep shopping action figures and play.'}
            />
            <div className='grid lg:grid-cols-3 justify-center items-center gap-4'>
                <div className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg px-4 py-8 h-64 grid grid-cols-3 items-center gap-4'>
                    <div>
                        {/* <img src={img2} alt="" className='h-full w-full opacity-75' /> */}
                    </div>
                    <div className='col-span-2 space-y-2'>
                        <h2 className='text-2xl font-bold text-slate-600'>Hokwana Bakum</h2>
                        <p className='text-lg font-light'>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fugiat."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurImpact;