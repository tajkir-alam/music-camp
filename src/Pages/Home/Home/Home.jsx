import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Review from '../Review/Review';
import JoinUs from '../JoinUs/JoinUs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Review></Review>
            <JoinUs></JoinUs>
        </>
    );
};

export default Home;