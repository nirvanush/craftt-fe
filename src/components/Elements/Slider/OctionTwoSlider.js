import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css/bundle';
import OctionCountdown from '../../HomeOne/Clock';

const OctionTwoSlider = () => {

    const OctionItem = [
        {
            artImage: 'assets/img/bids/oc-bids2-1.jpg',
            profileImage: 'assets/img/profile/profile2.jpg',
            placeBid: 'Buy Token',
            name: 'Jobanico Mina',
            artistId: '@jobanico',
            astronut: 'The Astronaut',
            currentBid: 'Token Price',
            price: '25.2 ETH',
            type: 'Ends in',
        },
        {
            artImage: 'assets/img/bids/oc-bids2-2.jpg',
            profileImage: 'assets/img/profile/profile3.jpg',
            placeBid: 'Buy Token',
            name: 'David Deron',
            artistId: '@david',
            astronut: 'Superx Waterdrop',
            currentBid: 'Token Price',
            price: '76.87 ETH',
            type: 'Ends in',
        },
        {
            artImage: 'assets/img/bids/oc-bids2-3.jpg',
            profileImage: 'assets/img/profile/profile4.jpg',
            placeBid: 'Buy Token',
            name: 'Stive Machman',
            artistId: '@stive.lio',
            astronut: 'Valley Ambarella',
            currentBid: 'Token Price',
            price: '47.12 ETH',
            type: 'Ends in',
        },

    ];

    return (
        <div className="auction2-area">
            <div className="container auction2-container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="auction2-wrapper pos-rel">
                            <div className="swiper-container auction2-active">
                                {OctionItem &&
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                            spaceBetween={30}
                                            slidesPerView={"auto"}
                                            autoplaydisableoninteraction={"false"}
                                            loop={true}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: true
                                            }}
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
                                                    slidesPerView: 2
                                                },
                                                1200: {
                                                    slidesPerView: 3
                                                }
                                            }}
                                            navigation={{
                                                clickable: true,
                                                nextEl: '.auction2-button-next',
                                                prevEl: '.auction2-button-prev',
                                            }}
                                        >
                                            {OctionItem.map((OctionTwoSlider, num) => (
                                                <SwiperSlide key={num}>
                                                    <div className="art-item-single art-item2-single mb-0">
                                                        <div className="art-item-wraper">
                                                            <div className="art-item-inner">
                                                                <div className="art-item-img pos-rel">
                                                                    <Link href="/explore-arts"><a><img src={OctionTwoSlider.artImage} alt="art-img" /></a></Link>
                                                                    <a href="#" className="place-bid">{OctionTwoSlider.placeBid}</a>
                                                                </div>
                                                                <div className="art-item-content pos-rel">
                                                                    <div className="artist">
                                                                        <div className="profile-img pos-rel">
                                                                            <Link href="/creators"><a><img src={OctionTwoSlider.profileImage} alt="profile-img" /></a></Link>
                                                                            <div className="profile-verification verified">
                                                                                <i className="fas fa-check"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="creator-name-id">
                                                                            <h4 className="artist-name"><Link href="/creators"><a>{OctionTwoSlider.name}</a></Link></h4>
                                                                            <div className="artist-id">{OctionTwoSlider.artistId}</div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="art-name"><Link href="/explore-arts"><a>{OctionTwoSlider.astronut}</a></Link></h4>
                                                                    <div className="art-meta-info">
                                                                        <div className="art-meta-item">
                                                                            <div className="art-meta-type">{OctionTwoSlider.currentBid}</div>
                                                                            <div className="art-price">{OctionTwoSlider.price}</div>
                                                                        </div>
                                                                        <div className="art-meta-item">
                                                                            <div className="art-meta-type">{OctionTwoSlider.type}</div>
                                                                            <div className="art-auction-ends">
                                                                                <OctionCountdown />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                }
                            </div>
                            <div className="auction2-nav">
                                <div className="auction2-button-prev square-nav-btn"><i className="fal fa-long-arrow-left"></i></div>
                                <div className="auction2-button-next square-nav-btn"><i className="fal fa-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OctionTwoSlider;