import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import 'swiper/css/bundle';
import ExploreArtsSingle from "../../ExploreArts/ExploreArtsSingle";

const LiveOctionSlider = () => {

    const products = useSelector(state => state.products.products);

    return (
        <div className="auction-wrapper pos-rel">
            <div className="swiper-container auction-active">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1
                            },
                            500: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            },
                            1200: {
                                slidesPerView: 3
                            }
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        navigation={{
                            clickable: true,
                            nextEl: '.auction-button-next',
                            prevEl: '.auction-button-prev',
                        }}
                    >
                        <SwiperSlide>
                            {
                                products.slice(49, 50).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                            }
                        </SwiperSlide>
                        <SwiperSlide>
                            {
                                products.slice(50, 51).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                            }
                        </SwiperSlide>
                        <SwiperSlide>
                            {
                                products.slice(51, 52).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                            }
                        </SwiperSlide>
                        <SwiperSlide>
                            {
                                products.slice(52, 53).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                            }
                        </SwiperSlide>
                        <SwiperSlide>
                            {
                                products.slice(48, 49).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                            }
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="auction-nav">
                <div className="auction-button-prev square-nav-btn"><i className="fal fa-long-arrow-left"></i></div>
                <div className="auction-button-next square-nav-btn"><i className="fal fa-long-arrow-right"></i></div>
            </div>
        </div>
    );
};

export default LiveOctionSlider;