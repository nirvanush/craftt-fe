import React from 'react';
import Link from 'next/link';
import ThemeChanger from '../Common/ThemeChanger';
import Breadcrumbs from '../Common/PageTitle';

const ActivityMain = () => {

    return (
        <main>
            <ThemeChanger />

            <Breadcrumbs breadcrumbTitle="Activity" breadcrumbSubTitle="Activity" />

            <div className="activity-area pt-130 pb-90">
                <div className="container">
                    <div className="activity-wrapper mb-40">
                        <div className="activity-tab">
                            <div className="activity-tab-nav wow fadeInUp">
                                <nav>
                                    <div className="nav nav-tabs mb-30" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-all-tab" data-bs-toggle="tab"
                                            data-bs-target="#tab-nav1" type="button" role="tab" aria-selected="true">
                                            <span className="activity-nav-button">
                                                All Activities
                                            </span>
                                        </button>
                                        <button className="nav-link" id="nav-like-tab" data-bs-toggle="tab" data-bs-target="#tab-nav2"
                                            type="button" role="tab" aria-selected="false">
                                            <span className="activity-nav-button">
                                                Likes
                                            </span>
                                        </button>
                                        <button className="nav-link" id="nav-follow-tab" data-bs-toggle="tab" data-bs-target="#tab-nav3"
                                            type="button" role="tab" aria-selected="false">
                                            <span className="activity-nav-button">
                                                Follows
                                            </span>
                                        </button>
                                        <button className="nav-link" id="nav-bid-tab" data-bs-toggle="tab" data-bs-target="#tab-nav4"
                                            type="button" role="tab" aria-selected="false">
                                            <span className="activity-nav-button">
                                                Bids
                                            </span>
                                        </button>
                                        <button className="nav-link" id="nav-collection-tab" data-bs-toggle="tab"
                                            data-bs-target="#tab-nav5" type="button" role="tab" aria-selected="false">
                                            <span className="activity-nav-button">
                                                Collection
                                            </span>
                                        </button>
                                        <button className="nav-link" id="nav-purchase-tab" data-bs-toggle="tab"
                                            data-bs-target="#tab-nav6" type="button" role="tab" aria-selected="false">
                                            <span className="activity-nav-button">
                                                Purchase
                                            </span>
                                        </button>
                                        <button className="nav-link" id="nav-sale-tab" data-bs-toggle="tab" data-bs-target="#tab-nav7"
                                            type="button" role="tab" aria-selected="false">
                                            <span className="activity-nav-button">
                                                Sale
                                            </span>
                                        </button>
                                        <button className="nav-link" id="nav-comment-tab" data-bs-toggle="tab" data-bs-target="#tab-nav8"
                                            type="button" role="tab" aria-selected="false">
                                            <span className="activity-nav-button">
                                                Comment
                                            </span>
                                        </button>
                                    </div>
                                    <div className="filter-by-sale d-flex mb-30">
                                        <div className="select-category-title"><i className="flaticon-filter"></i> Filters by</div>
                                        <div className="common-select-arrow common-select-arrow-50">
                                            <select className="sale-category-select">
                                                <option value="1">Date</option>
                                                <option value="2">Time</option>
                                            </select>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="activity-tab-contents mb-30 wow fadeInUp">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="tab-nav1" role="tabpanel" aria-labelledby="nav-all-tab">
                                        <div className="activity-wrapper-actions activity-wrapper-all mb-30">
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link>
                                                        posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">5 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kenny Chess</a></Link> placed bid <Link href="/art-details"><a> Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">12 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> followed to <Link href="/art-details"><a>Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">15 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>FMargaret Krom</a></Link> listed <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">18 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> purchased <Link href="/art-details"><a>Alien Rocsktar</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">20 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile6.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> placed bid <Link href="/art-details"><a>Modern Isometric</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">23 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Patricia Stephens</a></Link> listed <Link href="/art-details"><a>Startup Concept</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">36 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-comment">
                                                        <i className="flaticon-chat"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> commented <Link href="/art-details"><a>Scenery Artwork</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">42 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile9.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kallaban Joy</a></Link> followed to <Link href="/art-details"><a>Kenny Chess</a></Link></div>
                                                    <div className="activity-time">54 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile10.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Carol G. Johnson</a></Link> purchased <Link href="/art-details"><a>Abstract Illustrated</a></Link> posted by <Link href="/creator-profile"><a>Wesley Sickler</a></Link></div>
                                                    <div className="activity-time">57 minutes ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-activity-btn mb-30 text-center">
                                            <button className="fill-btn">Load More</button>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-nav2" role="tabpanel" aria-labelledby="nav-like-tab">
                                        <div className="activity-wrapper-actions activity-wrapper-likes mb-30">
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link>
                                                        posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">5 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>FMargaret Krom</a></Link> listed <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">18 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>uliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link> posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">25 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Margaret Krom</a></Link> liked <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">27 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link> posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">35 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile6.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Margaret Krom</a></Link> liked <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">37 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link> posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">35 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Margaret Krom</a></Link> liked <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">47 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile9.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link> posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">48 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile10.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Margaret Krom</a></Link> liked <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">57 minutes ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-activity-btn mb-30 text-center">
                                            <button className="fill-btn">Load More</button>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-nav3" role="tabpanel" aria-labelledby="nav-follow-tab">
                                        <div className="activity-wrapper-actions activity-wrapper-all mb-30">
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>FMargaret Krom</a></Link> listed <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">18 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> purchased <Link href="/art-details"><a>Alien Rocsktar</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">20 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile6.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> placed bid <Link href="/art-details"><a>Modern Isometric</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">23 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link>
                                                        posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">5 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kenny Chess</a></Link> placed bid <Link href="/art-details"><a> Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">12 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> followed to <Link href="/art-details"><a>Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">15 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Patricia Stephens</a></Link> listed <Link href="/art-details"><a>Startup Concept</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">36 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-comment">
                                                        <i className="flaticon-chat"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> commented <Link href="/art-details"><a>Scenery Artwork</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">42 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile9.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kallaban Joy</a></Link> followed to <Link href="/art-details"><a>Kenny Chess</a></Link></div>
                                                    <div className="activity-time">54 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile10.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Carol G. Johnson</a></Link> purchased <Link href="/art-details"><a>Abstract Illustrated</a></Link> posted by <Link href="/creator-profile"><a>Wesley Sickler</a></Link></div>
                                                    <div className="activity-time">57 minutes ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-activity-btn mb-30 text-center">
                                            <button className="fill-btn">Load More</button>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-nav4" role="tabpanel" aria-labelledby="nav-bid-tab">
                                        <div className="activity-wrapper-actions activity-wrapper-all mb-30">
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile6.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> placed bid <Link href="/art-details"><a>Modern Isometric</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">23 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Patricia Stephens</a></Link> listed <Link href="/art-details"><a>Startup Concept</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">36 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-comment">
                                                        <i className="flaticon-chat"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> commented <Link href="/art-details"><a>Scenery Artwork</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">42 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile9.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kallaban Joy</a></Link> followed to <Link href="/art-details"><a>Kenny Chess</a></Link></div>
                                                    <div className="activity-time">54 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile10.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Carol G. Johnson</a></Link> purchased <Link href="/art-details"><a>Abstract Illustrated</a></Link> posted by <Link href="/creator-profile"><a>Wesley Sickler</a></Link></div>
                                                    <div className="activity-time">57 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link>
                                                        posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">5 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kenny Chess</a></Link> placed bid <Link href="/art-details"><a> Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">12 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> followed to <Link href="/art-details"><a>Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">15 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>FMargaret Krom</a></Link> listed <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">18 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> purchased <Link href="/art-details"><a>Alien Rocsktar</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">20 minutes ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-activity-btn mb-30 text-center">
                                            <button className="fill-btn">Load More</button>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-nav5" role="tabpanel" aria-labelledby="nav-collection-tab">
                                        <div className="activity-wrapper-actions activity-wrapper-all mb-30">
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>FMargaret Krom</a></Link> listed <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">18 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link>
                                                        posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">5 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kenny Chess</a></Link> placed bid <Link href="/art-details"><a> Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">12 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> followed to <Link href="/art-details"><a>Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">15 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> purchased <Link href="/art-details"><a>Alien Rocsktar</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">20 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile6.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> placed bid <Link href="/art-details"><a>Modern Isometric</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">23 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Patricia Stephens</a></Link> listed <Link href="/art-details"><a>Startup Concept</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">36 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-comment">
                                                        <i className="flaticon-chat"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> commented <Link href="/art-details"><a>Scenery Artwork</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">42 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile9.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kallaban Joy</a></Link> followed to <Link href="/art-details"><a>Kenny Chess</a></Link></div>
                                                    <div className="activity-time">54 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile10.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Carol G. Johnson</a></Link> purchased <Link href="/art-details"><a>Abstract Illustrated</a></Link> posted by <Link href="/creator-profile"><a>Wesley Sickler</a></Link></div>
                                                    <div className="activity-time">57 minutes ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-activity-btn mb-30 text-center">
                                            <button className="fill-btn">Load More</button>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-nav6" role="tabpanel" aria-labelledby="nav-purchase-tab">
                                        <div className="activity-wrapper-actions activity-wrapper-all mb-30">
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile6.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> placed bid <Link href="/art-details"><a>Modern Isometric</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">23 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Patricia Stephens</a></Link> listed <Link href="/art-details"><a>Startup Concept</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">36 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-comment">
                                                        <i className="flaticon-chat"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> commented <Link href="/art-details"><a>Scenery Artwork</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">42 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile9.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kallaban Joy</a></Link> followed to <Link href="/art-details"><a>Kenny Chess</a></Link></div>
                                                    <div className="activity-time">54 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile10.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Carol G. Johnson</a></Link> purchased <Link href="/art-details"><a>Abstract Illustrated</a></Link> posted by <Link href="/creator-profile"><a>Wesley Sickler</a></Link></div>
                                                    <div className="activity-time">57 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link>
                                                        posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">5 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kenny Chess</a></Link> placed bid <Link href="/art-details"><a> Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">12 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> followed to <Link href="/art-details"><a>Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">15 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>FMargaret Krom</a></Link> listed <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">18 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> purchased <Link href="/art-details"><a>Alien Rocsktar</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">20 minutes ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-activity-btn mb-30 text-center">
                                            <button className="fill-btn">Load More</button>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-nav7" role="tabpanel" aria-labelledby="nav-sale-tab">
                                        <div className="activity-wrapper-actions activity-wrapper-all mb-30">
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile9.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kallaban Joy</a></Link> followed to <Link href="/art-details"><a>Kenny Chess</a></Link></div>
                                                    <div className="activity-time">54 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile10.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Carol G. Johnson</a></Link> purchased <Link href="/art-details"><a>Abstract Illustrated</a></Link> posted by <Link href="/creator-profile"><a>Wesley Sickler</a></Link></div>
                                                    <div className="activity-time">57 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link>
                                                        posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">5 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kenny Chess</a></Link> placed bid <Link href="/art-details"><a> Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">12 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile6.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> placed bid <Link href="/art-details"><a>Modern Isometric</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">23 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Patricia Stephens</a></Link> listed <Link href="/art-details"><a>Startup Concept</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">36 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-comment">
                                                        <i className="flaticon-chat"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> commented <Link href="/art-details"><a>Scenery Artwork</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">42 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> followed to <Link href="/art-details"><a>Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">15 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>FMargaret Krom</a></Link> listed <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">18 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> purchased <Link href="/art-details"><a>Alien Rocsktar</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">20 minutes ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-activity-btn mb-30 text-center">
                                            <button className="fill-btn">Load More</button>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-nav8" role="tabpanel" aria-labelledby="nav-comment-tab">
                                        <div className="activity-wrapper-actions activity-wrapper-all mb-30">
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile6.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> placed bid <Link href="/art-details"><a>Modern Isometric</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">23 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Patricia Stephens</a></Link> listed <Link href="/art-details"><a>Startup Concept</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">36 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-comment">
                                                        <i className="flaticon-chat"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> commented <Link href="/art-details"><a>Scenery Artwork</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">42 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile9.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kallaban Joy</a></Link> followed to <Link href="/art-details"><a>Kenny Chess</a></Link></div>
                                                    <div className="activity-time">54 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile10.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Carol G. Johnson</a></Link> purchased <Link href="/art-details"><a>Abstract Illustrated</a></Link> posted by <Link href="/creator-profile"><a>Wesley Sickler</a></Link></div>
                                                    <div className="activity-time">57 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-like">
                                                        <i className="flaticon-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Juliyan Asans</a></Link> liked <Link href="/art-details"><a>Beared Man</a></Link>
                                                        posted by <Link href="/creator-profile"><a>Mary Callahan</a></Link></div>
                                                    <div className="activity-time">5 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-bid">
                                                        <i className="flaticon-information"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Kenny Chess</a></Link> placed bid <Link href="/art-details"><a> Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">12 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-follow">
                                                        <i className="flaticon-add-user"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Frederick Esposito</a></Link> followed to <Link href="/art-details"><a>Imoji Artwork</a></Link> posted by <Link href="/creator-profile"><a>Carol G. Johnson</a></Link></div>
                                                    <div className="activity-time">15 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-collection">
                                                        <i className="flaticon-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>FMargaret Krom</a></Link> listed <Link href="/art-details"><a>Ornament Illustration</a></Link> posted by <Link href="/creator-profile"><a>Patricia Stephens</a></Link></div>
                                                    <div className="activity-time">18 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="activity-wrapper-action-single pos-rel">
                                                <div className="activity-3dots-menu">
                                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                                                </div>
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                    <div className="activity-icon activity-purchase">
                                                        <i className="flaticon-shopping-bag"></i>
                                                    </div>
                                                </div>
                                                <div className="activity-meta-text">
                                                    <div className="actvity-text"><Link href="/creator-profile"><a>Candance Harden</a></Link> purchased <Link href="/art-details"><a>Alien Rocsktar</a></Link> posted by <Link href="/creator-profile"><a>Stive Machman</a></Link></div>
                                                    <div className="activity-time">20 minutes ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-activity-btn mb-30 text-center">
                                            <button className="fill-btn">Load More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ActivityMain;