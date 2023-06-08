import React from 'react';

const Classes = ({ classes }) => {
    const { image, name, students } = classes;
    console.log(classes);
    return (
        <div className="card hover:shadow-2xl duration-500 image-full scale-100 hover:scale-[1.016]">
            <figure className='h-56'><img src={image} alt="" className='w-full' /></figure>
            <div className="card-body text-center grid justify-center tracking-wider">
                <h2 className="card-title justify-center text-white text-2xl font-bold">{name}</h2>
                <p className='font-Courgette'>Student Enrolled: {students}</p>
            </div>
        </div>
    );
};

export default Classes;