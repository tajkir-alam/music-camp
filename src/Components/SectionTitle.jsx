import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='mt-14 mb-5 mx-8 lg:w-1/3 lg:mx-auto text-center space-y-2 p-4 rounded-lg font-Courgette'>
            <h1 className='text-4xl uppercase'>{heading}</h1>
            <h2 className='text-[#d79c62] text-xl italic tracking-wider'>{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;