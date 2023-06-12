import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='mb-14'>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Review></Review>
        </div>
    );
};

export default Home;