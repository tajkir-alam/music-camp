import React from 'react';

const OurStory = () => {
    return (
        <section className='bg-cover bg-fixed bg-no-repeat relative py-10' style={{ backgroundImage: 'url(/storyBanner.jpg)' }}>
            <div className='mt-14 mb-5 mx-8 lg:w-1/2 lg:mx-auto text-center space-y-2 p-4 rounded-lg font-Courgette z-50'>
                <h1 className='text-4xl uppercase text-black/70'>Our Story</h1>
                <h2 className='text-blue-700 text-xl italic tracking-wider'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quae?
                </h2>
            </div>
            <div className="absolute top-0 h-full w-full bg-black/30 z-10"></div>
        </section>
    );
};

export default OurStory;