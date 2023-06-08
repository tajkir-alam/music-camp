import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import Instructors from './Instructors';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors?limit=6')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <>
            <SectionTitle
                heading={'Our Top Instructors'}
                subHeading={'Meet the top classes you can choose. Start your summer vacation with us.'}
            />

            <section className='custom-container grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    instructors.map(instructor => <Instructors key={instructor._id} instructor={instructor}></Instructors>)
                }
            </section>
        </>
    );
};

export default PopularInstructors;