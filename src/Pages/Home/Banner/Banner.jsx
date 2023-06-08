import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

import slider1 from '../../../assets/slider1.jpg';
import slider2 from '../../../assets/slider2.jpg';
import slider3 from '../../../assets/slider3.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, } from "swiper";
import './banner.css';

const Banner = () => {

    const ref = useRef([])
    const [items, set] = useState([])

    const ref2 = useRef([])
    const [items2, set2] = useState([])

    const ref3 = useRef([])
    const [items3, set3] = useState([])

    const transitions = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#ffff' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#ffff' },
    })

    const reset = useCallback(() => {
        ref.current.forEach(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['Your Vacation', 'Partner']), 500))
        ref.current.push(setTimeout(() => set(['Music Camp']), 3000))
    }, [])

    useEffect(() => {
        reset()
        return () => ref.current.forEach(clearTimeout)
    }, [])

    const transitions2 = useTransition(items2, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#ffff' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#ffff' },
    })

    const reset2 = useCallback(() => {
        ref2.current.forEach(clearTimeout)
        ref2.current = []
        set2([])
        ref2.current.push(setTimeout(() => set2(['Enjoy Your', 'Vacation']), 8000))
        ref2.current.push(setTimeout(() => set2(['With Musicians']), 11000))
    }, [])

    useEffect(() => {
        reset2()
        return () => ref2.current.forEach(clearTimeout)
    }, [])

    const transitions3 = useTransition(items3, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#ffff' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#ffff' },
    })

    const reset3 = useCallback(() => {
        ref3.current.forEach(clearTimeout)
        ref3.current = []
        set3([])
        ref3.current.push(setTimeout(() => set3(['Learn Music', 'With']), 15000))
        ref3.current.push(setTimeout(() => set3(['Music', 'Camp']), 17000))
    }, [])

    useEffect(() => {
        reset3()
        return () => ref3.current.forEach(clearTimeout)
    }, [])

    return (
        <section className='md:h-[calc(100vh-100px)]'>
            <Swiper
                grabCursor={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper lg:h-full"
            >
                <SwiperSlide>
                    <span className='absolute bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.2)] w-full h-full'></span>
                    <img src={slider1} loading="lazy" />
                    {/* <span className='text-[#ffffffe3] dark:text-white absolute top-1/3 left-12 w-3/4 md:top-2/4 md:left-52 text-center text-3xl lg:text-7xl z-20 font-Courgette drop-shadow-md'>Your Vacation Partner <br /> Music Camp </span> */}
                    <div className={'container absolute top-0 left-12'}>
                        <div className={'main'}>
                            {transitions(({ innerHeight, ...rest }, item) => (
                                <animated.div className={'transitionsItem'} style={rest} onClick={reset}>
                                    <animated.div style={{ overflow: 'hidden', height: innerHeight }} className='px-5'>{item}</animated.div>
                                </animated.div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <span className='absolute bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.2)] w-full h-full'></span>
                    <img src={slider2} loading="lazy" />
                    {/* <span className='text-[#ffffffe3] dark:text-white absolute top-1/3 left-12 w-3/4 md:top-2/4 md:left-52 text-center text-3xl lg:text-7xl z-20 font-Courgette drop-shadow-md'>Enjoy Your Vacation <br /> with musicians</span> */}
                    <div className={'container absolute top-0 left-12'}>
                        <div className={'main'}>
                            {transitions2(({ innerHeight, ...rest }, item) => (
                                <animated.div className={'transitionsItem'} style={rest} onClick={reset2}>
                                    <animated.div style={{ overflow: 'hidden', height: innerHeight }} className='px-5'>{item}</animated.div>
                                </animated.div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <span className='absolute bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.2)] w-full h-full'></span>
                    <img src={slider3} loading="lazy" />
                    {/* <span className='text-[#ffffffe3] dark:text-white absolute top-1/3 left-12 w-3/4 md:top-2/4 md:left-52 text-center text-3xl lg:text-7xl z-20 font-Courgette drop-shadow-md'>Learn Music <br /> with Music Camp</span> */}
                    <div className={'container absolute top-0 left-12'}>
                        <div className={'main'}>
                            {transitions3(({ innerHeight, ...rest }, item) => (
                                <animated.div className={'transitionsItem'} style={rest} onClick={reset3}>
                                    <animated.div style={{ overflow: 'hidden', height: innerHeight }} className='px-5'>{item}</animated.div>
                                </animated.div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* <div className={'container'}>
                <div className={'main'}>
                    {transitions(({ innerHeight, ...rest }, item) => (
                        <animated.div className={'transitionsItem'} style={rest} onClick={reset}>
                            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                        </animated.div>
                    ))}
                </div>
            </div> */}
        </section>
    );
};

export default Banner;