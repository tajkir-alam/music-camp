import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Review from '../Review/Review';
import JoinUs from '../JoinUs/JoinUs';
import ClassSchedule from '../ClassSchedule/ClassSchedule';
import ContactUs from '../ContactUs/ContactUs';
import WhyUs from '../WhyUs/WhyUs';
import OurImpact from '../OurImpact/OurImpact';
import OurStory from '../OurStory/OurStory';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <OurStory></OurStory>
            <ClassSchedule></ClassSchedule>
            <WhyUs></WhyUs>
            <OurImpact></OurImpact>
            <Review></Review>
            <JoinUs></JoinUs>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;