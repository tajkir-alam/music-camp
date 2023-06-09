import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

const useLoader = () => {
    return (
        <div className='z-50'>
            <div className='hidden lg:block absolute w-full mt-24'>
                <div className='flex justify-center items-center'>
                    <MagnifyingGlass
                        visible={true}
                        height="250"
                        width="250"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperClass="MagnifyingGlass-wrapper"
                        glassColor='#c0efff'
                        color='#e15b64'
                    />
                </div>
            </div>
            <div className='lg:hidden absolute w-full mt-24'>
                <div className='flex justify-center items-center'>
                    <MagnifyingGlass
                        visible={true}
                        height="150"
                        width="150"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperClass="MagnifyingGlass-wrapper"
                        glassColor='#c0efff'
                        color='#e15b64'
                    />
                </div>
            </div>
        </div>
    );
};

export default useLoader;