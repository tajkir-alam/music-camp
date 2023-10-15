import React from 'react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
    return (
        <section className='bg-[#0c0b0bdc] text-white tracking-widest py-12 space-y-4'>
            <h3 className='text-center text-3xl'>Join Our Class Now and Get a Chance To win Free Extra Class</h3>
            <div className='text-center'>
                <Link to='/registration' className='btn btn-error text-white tracking-wider hover:bg-error/90'>Join Now</Link>
            </div>
        </section>

    );
};

export default JoinUs;