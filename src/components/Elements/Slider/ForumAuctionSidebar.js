import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/css/bundle';
import ExploreArtsSingle from "../../ExploreArts/ExploreArtsSingle";

const ForumAuctionSidebar = () => {
    const products = useSelector(state => state.products.products);

    return (
        <div className="sidebar-widget-single mb-30 wow fadeInUp">
            <h4 className="sidebar-widget-title">Live Auctions</h4>
            <div className="sidebar-auction-wrapper pos-rel">
                <div className="swiper-container sidebar-auction-active">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
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
                                    products.slice(45, 46).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                                }
                            </SwiperSlide>
                            <SwiperSlide>
                                {
                                    products.slice(46, 47).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                                }
                            </SwiperSlide>
                            <SwiperSlide>
                                {
                                    products.slice(47, 48).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                                }
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
                <div className="sidebar-auction-nav">
                    <div className="auction-button-prev sidebar-auction-prev"><i
                        className="fal fa-long-arrow-left"></i></div>
                    <div className="auction-button-next sidebar-auction-next"><i
                        className="fal fa-long-arrow-right"></i></div>
                </div>
            </div>
        </div>
    );
};

export default ForumAuctionSidebar;