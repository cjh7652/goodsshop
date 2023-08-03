import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Mainslide = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        /* scrollbar={{ draggable: true }} */
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{
            "--swiper-pagination-color": "lavender",
            "--swiper-navigation-color": "turquoise",
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            }}
        loop={true}
        >
            <SwiperSlide className='mainImg'><img src="img/mainslide/slide1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className='mainImg'><img src="img/mainslide/slide2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className='mainImg'><img src="img/mainslide/slide3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className='mainImg'><img src="img/mainslide/slide4.jpg" alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Mainslide;