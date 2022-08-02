import React from 'react';
import Link from 'next/link';
import Pagination from '../Common/Pagination';
import ForumAuctionSidebar from '../Elements/Slider/ForumAuctionSidebar';
import PopularTagsSidebar from './PopularTagsSidebar';
import ThemeChanger from '../Common/ThemeChanger';
import Breadcrumbs from '../Common/PageTitle';

const ForumMain = () => {
    return (
        <main>

            <ThemeChanger />

            <Breadcrumbs breadcrumbTitle="Job Offers" breadcrumbSubTitle="Job Offers" />

            <section className="about-info-area pt-130 pb-90">
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-lg-12">
                            <div className="forum-search-bar">
                                <div className="filter-by-search mb-30">
                                    <div className="common-select-arrow common-select-arrow-60">
                                        <select className="question-category-select">
                                            <option value="1">General</option>
                                            <option value="2">Account</option>
                                            <option value="3">Upload Artwork</option>
                                            <option value="4">Wallet</option>
                                            <option value="5">Transaction</option>
                                            <option value="6">Purchase & Sale</option>
                                            <option value="7">Contact & Support</option>
                                        </select>
                                    </div>
                                    <form action="#" className="filter-search-input">
                                        <input type="text" placeholder="Search keyword" />
                                        <button><i className="fal fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 order-2 order-lg-1">
                            <div className="forum-tab-contents mb-0 wow fadeInUp">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="tab-nav1" role="tabpanel" aria-labelledby="nav-tab1">
                                        <div className="forum-post-wrapper mb-30">
                                            <div className="q-single-wrapper mb-30">
                                                <div className="q-single-content">
                                                    <div className="author-name-time">
                                                        <div className="profile-img pos-rel">
                                                            <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                        </div>
                                                        <div className="name-post-time">
                                                            <h4 className="artist-name">
                                                                <Link href="/creator-profile"><a>John Schreffler</a></Link>
                                                            </h4>
                                                            <div className="post-date-time">
                                                                <div className="post-date">06/20/2021</div>
                                                                <div className="post-time item-border-before">9:58am</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4 className="post-question">Change may hurt, but after the wounds have been licked
                                                    </h4>
                                                    <p>Entrepreneurship is more all-in compared to a corporate setting. Corporate
                                                        culture tends
                                                        to make people objective, sort
                                                        of neutral parts of the machine in a lot of places. That’s pretty much the
                                                        opposite of
                                                        what is needed in a startup,</p>
                                                    <div className="tags-list post-inner-tags">
                                                        <a href="#" className="tag">#nft</a>
                                                        <a href="#" className="tag">#online</a>
                                                        <a href="#" className="tag">#trend</a>
                                                        <a href="#" className="tag">#bitcoins</a>
                                                        <a href="#" className="tag">#Transcation</a>
                                                    </div>
                                                </div>
                                                <div className="q-meta-content">
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-icon"><i className="flaticon-heart"></i></div>
                                                        <div className="q-meta-likes">875</div>
                                                        <div className="q-meta-type">Likes</div>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <a href="#">
                                                            <div className="q-meta-icon"><i className="flaticon-chatting"></i></div>
                                                            <div className="q-meta-comments">859</div>
                                                            <div className="q-meta-type">Comments</div>
                                                        </a>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-icon"><i className="flaticon-share-1"></i></div>
                                                        <div className="q-meta-shares">54</div>
                                                        <div className="q-meta-type">Shares</div>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-viewed-member">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                        </div>
                                                        <div className="q-meta-views">+55</div>
                                                        <div className="q-meta-type">Views</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="q-single-wrapper mb-30">
                                                <div className="q-single-content">
                                                    <div className="author-name-time">
                                                        <div className="profile-img pos-rel">
                                                            <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                        </div>
                                                        <div className="name-post-time">
                                                            <h4 className="artist-name">
                                                                <Link href="/creator-profile"><a>Kenny Chess</a></Link>
                                                            </h4>
                                                            <div className="post-date-time">
                                                                <div className="post-date">06/20/2021</div>
                                                                <div className="post-time item-border-before">9:58am</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4 className="post-question">Top learning trends and workplace predictions in 2020</h4>
                                                    <p>The key factor seems to be experience. It is much harder to execute great ideas
                                                        when you
                                                        have limited experience. It is
                                                        more challenging to develop an enduring strategy when you have limited
                                                        experience.</p>
                                                    <div className="tags-list post-inner-tags">
                                                        <a href="#" className="tag">#nft</a>
                                                        <a href="#" className="tag">#online</a>
                                                        <a href="#" className="tag">#trend</a>
                                                        <a href="#" className="tag">#bitcoins</a>
                                                        <a href="#" className="tag">#Transcation</a>
                                                    </div>
                                                </div>
                                                <div className="q-meta-content">
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-icon"><i className="flaticon-heart"></i></div>
                                                        <div className="q-meta-likes">875</div>
                                                        <div className="q-meta-type">Likes</div>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <a href="#">
                                                            <div className="q-meta-icon"><i className="flaticon-chatting"></i></div>
                                                            <div className="q-meta-comments">859</div>
                                                            <div className="q-meta-type">Comments</div>
                                                        </a>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-icon"><i className="flaticon-share-1"></i></div>
                                                        <div className="q-meta-shares">54</div>
                                                        <div className="q-meta-type">Shares</div>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-viewed-member">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                        </div>
                                                        <div className="q-meta-views">+55</div>
                                                        <div className="q-meta-type">Views</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="q-single-wrapper mb-30">
                                                <div className="q-single-content">
                                                    <div className="author-name-time">
                                                        <div className="profile-img pos-rel">
                                                            <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                        </div>
                                                        <div className="name-post-time">
                                                            <h4 className="artist-name">
                                                                <Link href="/creator-profile"><a>Carol G. Johnson</a></Link>
                                                            </h4>
                                                            <div className="post-date-time">
                                                                <div className="post-date">06/20/2021</div>
                                                                <div className="post-time item-border-before">9:58am</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4 className="post-question">Can you see the future of bionic body?</h4>
                                                    <p>Entrepreneurship is more all-in compared to a corporate setting. Corporate
                                                        culture tends
                                                        to make people objective, sort
                                                        of neutral parts of the machine in a lot of places. That’s pretty much the
                                                        opposite of
                                                        what is needed in a startup,......</p>
                                                    <div className="tags-list post-inner-tags">
                                                        <a href="#" className="tag">#nft</a>
                                                        <a href="#" className="tag">#online</a>
                                                        <a href="#" className="tag">#trend</a>
                                                        <a href="#" className="tag">#bitcoins</a>
                                                        <a href="#" className="tag">#Transcation</a>
                                                    </div>
                                                </div>
                                                <div className="q-meta-content">
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-icon"><i className="flaticon-heart"></i></div>
                                                        <div className="q-meta-likes">875</div>
                                                        <div className="q-meta-type">Likes</div>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <a href="#">
                                                            <div className="q-meta-icon"><i className="flaticon-chatting"></i></div>
                                                            <div className="q-meta-comments">859</div>
                                                            <div className="q-meta-type">Comments</div>
                                                        </a>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-icon"><i className="flaticon-share-1"></i></div>
                                                        <div className="q-meta-shares">54</div>
                                                        <div className="q-meta-type">Shares</div>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-viewed-member">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                        </div>
                                                        <div className="q-meta-views">+55</div>
                                                        <div className="q-meta-type">Views</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="q-single-wrapper mb-30">
                                                <div className="q-single-content">
                                                    <div className="author-name-time">
                                                        <div className="profile-img pos-rel">
                                                            <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                        </div>
                                                        <div className="name-post-time">
                                                            <h4 className="artist-name">
                                                                <Link href="/creator-profile"><a>Stive Machman</a></Link>
                                                            </h4>
                                                            <div className="post-date-time">
                                                                <div className="post-date">06/20/2021</div>
                                                                <div className="post-time item-border-before">9:58am</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4 className="post-question">How startups and corporations can work together?</h4>
                                                    <p>The Company may suspend or cancel the User’s account if it considers that the
                                                        User has
                                                        breached these terms. accuracy or
                                                        whether they are fit for a specific purpose or activity......</p>
                                                    <div className="tags-list post-inner-tags">
                                                        <a href="#" className="tag">#nft</a>
                                                        <a href="#" className="tag">#online</a>
                                                        <a href="#" className="tag">#trend</a>
                                                        <a href="#" className="tag">#bitcoins</a>
                                                        <a href="#" className="tag">#Transcation</a>
                                                    </div>
                                                </div>
                                                <div className="q-meta-content">
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-icon"><i className="flaticon-heart"></i></div>
                                                        <div className="q-meta-likes">875</div>
                                                        <div className="q-meta-type">Likes</div>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <a href="#">
                                                            <div className="q-meta-icon"><i className="flaticon-chatting"></i></div>
                                                            <div className="q-meta-comments">859</div>
                                                            <div className="q-meta-type">Comments</div>
                                                        </a>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-icon"><i className="flaticon-share-1"></i></div>
                                                        <div className="q-meta-shares">54</div>
                                                        <div className="q-meta-type">Shares</div>
                                                    </div>
                                                    <div className="q-meta-item">
                                                        <div className="q-meta-viewed-member">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                        </div>
                                                        <div className="q-meta-views">+55</div>
                                                        <div className="q-meta-type">Views</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2">
                            <div className="page-sidebar">
                                <div className="crate-question-wrapper mb-30">
                                    <a className="create-question-btn" role="button" aria-expanded="false" aria-controls="collapseExample">Post a job</a>
                                    {/* <div className="collapse mt-30" id="collapseExample">
                                        <div className="card card-body">
                                            <form className="contact-form" action="#">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="single-input-unit">
                                                            <label htmlFor="name">Name</label>
                                                            <input type="text" name="name" id="name" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="single-input-unit">
                                                            <label htmlFor="m-id">Email</label>
                                                            <input type="email" name="m-id" id="m-id" placeholder="Your email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="single-input-unit">
                                                            <label htmlFor="message">Question</label>
                                                            <textarea name="message" id="message" placeholder="Your question..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contact-btn">
                                                    <button className="fill-btn">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="sidebar-tab-nav sidebar-widget-single mb-30 wow fadeInUp">
                                            <h4 className="sidebar-widget-title">Category</h4>
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="nav-tab1" data-bs-toggle="tab"
                                                        data-bs-target="#tab-nav1" type="button" role="tab" aria-selected="true">
                                                        <span className="sidebar-nav-link">
                                                            <i className="flaticon-home"></i>General
                                                            <span className="inner-item-number">05</span>
                                                        </span>
                                                    </button>
                                                    <button className="nav-link" id="nav-tab2" data-bs-toggle="tab"
                                                        data-bs-target="#tab-nav2" type="button" role="tab" aria-selected="false">
                                                        <span className="sidebar-nav-link">
                                                            <i className="flaticon-account"></i>Account
                                                            <span className="inner-item-number">03</span>
                                                        </span>
                                                    </button>
                                                    <button className="nav-link" id="nav-tab3" data-bs-toggle="tab"
                                                        data-bs-target="#tab-nav3" type="button" role="tab" aria-selected="false">
                                                        <span className="sidebar-nav-link">
                                                            <i className="flaticon-image"></i>Upload Artwork
                                                            <span className="inner-item-number">10</span>
                                                        </span>
                                                    </button>
                                                    <button className="nav-link" id="nav-tab4" data-bs-toggle="tab"
                                                        data-bs-target="#tab-nav4" type="button" role="tab" aria-selected="false">
                                                        <span className="sidebar-nav-link">
                                                            <i className="flaticon-wallet-2"></i>Wallet
                                                            <span className="inner-item-number">20</span>
                                                        </span>
                                                    </button>
                                                    <button className="nav-link" id="nav-tab5" data-bs-toggle="tab"
                                                        data-bs-target="#tab-nav5" type="button" role="tab" aria-selected="false">
                                                        <span className="sidebar-nav-link">
                                                            <i className="flaticon-transaction"></i>Transaction
                                                            <span className="inner-item-number">15</span>
                                                        </span>
                                                    </button>
                                                    <button className="nav-link" id="nav-tab6" data-bs-toggle="tab"
                                                        data-bs-target="#tab-nav6" type="button" role="tab" aria-selected="false">
                                                        <span className="sidebar-nav-link">
                                                            <i className="flaticon-shopping-cart"></i>Purchase & Sale
                                                            <span className="inner-item-number">45</span>
                                                        </span>
                                                    </button>
                                                    <button className="nav-link" id="nav-tab7" data-bs-toggle="tab"
                                                        data-bs-target="#tab-nav7" type="button" role="tab" aria-selected="false">
                                                        <span className="sidebar-nav-link">
                                                            <i className="flaticon-support"></i>Contact & Support
                                                            <span className="inner-item-number">22</span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12 col-md-6">
                                        <PopularTagsSidebar />
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <ForumAuctionSidebar />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInUp">
                        <div className="col-12">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ForumMain;