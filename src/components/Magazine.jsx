import React from 'react';
import {  Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide} from "swiper/react"; // basic
import "swiper/css"; //basic

const Magazine = () => {
    return (
        <div className='magazine'>
            <div className="container">
                <div className='titleWrap'><h2>Magazine</h2></div>
                <div className="magazineList">
                    <div className="magazine-box">
                            <span className='m'>M</span>
                            <span className='a1'>A</span>
                            <span className='g'>G</span>
                            <span className='a2'>A</span>
                            <span className='z'>Z</span>
                            <span className='i'>I</span>
                            <span className='n'>N</span>
                            <span className='e'>E</span>
                    </div>
                    <Swiper className='swiper-wrap'
                    modules={[ Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                        }}
                    loop={true}
                    breakpoints={{
                        768: {
                        slidesPerView: 3,
                        },
                    }}
                    >
                        <SwiperSlide className='mg-img'><img src="img/magazine/magazine1.png" alt="" /></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src="img/magazine/magazine2.png" alt="" /></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src="img/magazine/magazine3.png" alt="" /></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src="img/magazine/magazine1.png" alt="" /></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src="img/magazine/magazine2.png" alt="" /></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src="img/magazine/magazine3.png" alt="" /></SwiperSlide>
                    </Swiper>
                </div>

                
            </div>
        </div>
    );
};

export default Magazine;