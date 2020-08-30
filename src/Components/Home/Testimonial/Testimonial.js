import React from 'react'
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './testimonial.scss'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


import testimonialData from './testimonialData'





// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


class Testimonial extends React.Component {
    constructor() {
        super()
        this.state = {
            testimonialData: testimonialData
        }
    }



    render() {
        const MySlider = this.state.testimonialData.map((data) => {
            return (
                <SwiperSlide key={data.id} className='slider'>

                    <p className='message'>{data.message}</p>


                    <div className='user-rating-wrapper'>
                        <div className="ratings-wrapper">
                            <div className="ratings">
                                <div className="empty-stars"></div>
                                <div className="full-stars" style={{ width: `${data.rating}%` }}></div>
                            </div>

                            <p>{(5 * (data.rating / 100)).toFixed(1)}</p>
                        </div>

                        <div className='user'>
                            <div className="userImg" style={{
                                backgroundImage: `url(${data.image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }} />
                            <h3>{data.name}</h3>
                        </div>
                    </div>

                </SwiperSlide>
            )
        })

        return (
            <div className="container testimonial-wrapper">

                <h2>What Our Customers Say</h2>
                <Swiper className="testimonial"
                    slidesPerView={1}
                    breakpoints={
                        {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            992: {
                                spaceBetween: 25
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                        }
                    }
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false, }}

                    pagination={{ clickable: true }}
                    onSwiper={() => {}}
                    onSlideChange={() => {}}
                >
                    {MySlider}
                </Swiper>


            </div>
        )
    }

}
export default Testimonial