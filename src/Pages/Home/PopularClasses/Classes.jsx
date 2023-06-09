import React from 'react';
import LazyLoad from 'react-lazyload';

const Classes = ({ classes }) => {
    const { image, name, students } = classes;

    return (
        <div className="card hover:shadow-2xl duration-500 image-full scale-100 hover:scale-[1.016]">
            <LazyLoad>
                <figure className='h-56'><img src={image} alt="" className='w-full' /></figure>
            </LazyLoad>
            <div className="card-body text-center grid justify-center tracking-wider">
                <h2 className="card-title justify-center text-white text-2xl font-bold">{name}</h2>
                <p className='font-Courgette text-xl'>Student Enrolled: {students}</p>
            </div>
        </div>
    );
};

export default Classes;