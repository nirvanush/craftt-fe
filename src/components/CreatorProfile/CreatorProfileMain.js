import React from 'react';
import Link from 'next/link';
import Pagination from '../Common/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import ExploreArtsSingle from '../ExploreArts/ExploreArtsSingle';
import ThemeChanger from '../Common/ThemeChanger';

const CreatorProfileMain = () => {
    const products = useSelector(state => state.products.products);
    const creatorItem = useSelector(state => state.creators.specificItem);
    //  dispatch
    const dispatch = useDispatch();

    return (
        <main>

            <ThemeChanger />

            <section className="page-title-area">
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-lg-12">
                            <div className="page-title">
                                <h2 className="breadcrumb-title mb-10">{creatorItem.name}</h2>
                                <div className="breadcrumb-menu">
                                    <nav className="breadcrumb-trail breadcrumbs">
                                        <ul className="trail-items">
                                            <li className="trail-item trail-begin"><Link href="/"><a>Home</a></Link></li>
                                            <li className="trail-item trail-end"><span>{creatorItem.name}</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="creator-details-area pt-0 pb-90">
                <div className="creator-cover-img creator-details-cover-img pos-rel wow fadeInUp">
                    <img src={creatorItem.coverImage} alt="cover-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-8">
                            <div className="creator-about mb-40 wow fadeInUp">
                                <div className="profile-img pos-rel">
                                    <img src={creatorItem.profileImage} alt="img" />
                                </div>
                                <h4 className="artist-name pos-rel">
                                    {creatorItem.name}
                                    <span className="profile-verification verified">
                                        <i className="fas fa-check"></i>
                                    </span>
                                </h4>
                                <div className="artist-id">{creatorItem.artistId}</div>
                                <p>My name is Justin Baker & change my occupation after five years of working in sales. I still
                                    like drawing.</p>
                                <ul>
                                    <li><i className="fas fa-map-marker-alt"></i>Bran Street New York, USA</li>
                                    <li><i className="flaticon-link"></i><a href="#">bit.ly/yte89k6</a></li>
                                    <li><i className="flaticon-calendar"></i>Joined March 2010</li>
                                </ul>
                                <div className="message-creator-btn">
                                    <a href="#" className="fill-btn icon-left"><i className="fas fa-paper-plane"></i>Message to Creator</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="creator-info-bar mb-30 wow fadeInUp">
                                <div className="artist-meta-info creator-details-meta-info">
                                    <div className="artist-meta-item artist-meta-item-border">
                                        <div className="artist-meta-type">{creatorItem.create}</div>
                                        <div className="artist-created">{creatorItem.createNumber}</div>
                                    </div>
                                    <div className="artist-meta-item artist-meta-item-border">
                                        <div className="artist-meta-type">Like</div>
                                        <div className="artist-likes">879,502</div>
                                    </div>
                                    <div className="artist-meta-item artist-meta-item-border">
                                        <div className="artist-meta-type">{creatorItem.follower}</div>
                                        <div className="artist-follwers">{creatorItem.followerNumber}</div>
                                    </div>
                                    <div className="artist-meta-item">
                                        <div className="artist-meta-type">{creatorItem.followed}</div>
                                        <div className="artist-followed">{creatorItem.followedNumber}</div>
                                    </div>
                                </div>
                                <div className="creator-details-action">
                                    <div className="artist-follow-btn">
                                        <button className="follow-artist">{creatorItem.follow}</button>
                                    </div>
                                    <div className="social__links creator-share">
                                        <i className="flaticon-share"></i>
                                        <ul className="d-none">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="profile-link-text">13b9ebda0178...<button><i className="flaticon-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="creator-info-tab wow fadeInUp">
                                <div className="creator-info-tab-nav mb-30">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-created-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab-nav1" type="button" role="tab" aria-selected="true">
                                                <span className="profile-nav-button">
                                                    <span className="artist-meta-item  artist-meta-item-border">
                                                        <span className="artist-meta-type">Created</span>
                                                        <span className="artist-created">16</span>
                                                    </span>
                                                </span>
                                            </button>
                                            <button className="nav-link" id="nav-collection-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab-nav2" type="button" role="tab" aria-selected="false">
                                                <span className="profile-nav-button">
                                                    <span className="artist-meta-item  artist-meta-item-border">
                                                        <span className="artist-meta-type">Collection</span>
                                                        <span className="artist-art-collection">95</span>
                                                    </span>
                                                </span>
                                            </button>
                                            <button className="nav-link" id="nav-featured-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab-nav3" type="button" role="tab" aria-selected="false">
                                                <span className="profile-nav-button">
                                                    <span className="artist-meta-item  artist-meta-item-border">
                                                        <span className="artist-meta-type">Featured Items</span>
                                                        <span className="artist-art-featured">12</span>
                                                    </span>
                                                </span>
                                            </button>
                                            <button className="nav-link" id="nav-sold-tab" data-bs-toggle="tab" data-bs-target="#tab-nav4"
                                                type="button" role="tab" aria-selected="false">
                                                <span className="profile-nav-button">
                                                    <span className="artist-meta-item  artist-meta-item-border">
                                                        <span className="artist-meta-type">Total Sold</span>
                                                        <span className="artist-art-sold">24</span>
                                                    </span>
                                                </span>
                                            </button>
                                            <button className="nav-link" id="nav-bid-tab" data-bs-toggle="tab" data-bs-target="#tab-nav5"
                                                type="button" role="tab" aria-selected="false">
                                                <span className="profile-nav-button">
                                                    <span className="artist-meta-item">
                                                        <span className="artist-meta-type">Total Bids</span>
                                                        <span className="artist-art-bids">96</span>
                                                    </span>
                                                </span>
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                                <div className="creator-info-tab-contents mb-30">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade active show" id="tab-nav1" role="tabpanel"
                                            aria-labelledby="nav-created-tab">
                                            <div className="created-items-wrapper">
                                                <div className="row">
                                                    {
                                                        products.slice(35, 41).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                                                    }
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <Pagination />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-nav2" role="tabpanel"
                                            aria-labelledby="nav-collection-tab">
                                            <div className="collected-items-wrapper">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="category-collections-wrapper mb-30">
                                                            <div className="category-collections-inner">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art14.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art29.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="art-item-single">
                                                                            <div className="art-item-wraper">
                                                                                <div className="art-item-inner">
                                                                                    <div className="art-item-img pos-rel">
                                                                                        <Link href="/art-details"><a><img src="assets/img/art/art27.jpg" alt="art-img" /></a></Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="collection-content pos-rel">
                                                                    <div className="art-3dots-menu">
                                                                        <div className="art-3dots-action">
                                                                            <ul>
                                                                                <li><a href="#"><i className="fal fa-share-alt"></i>Share</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <button className="art-3dots-icon"><i
                                                                            className="fal fa-ellipsis-v"></i></button>
                                                                    </div>
                                                                    <div className="collection-category">
                                                                        <h4 className="category-name">
                                                                            <Link href="/explore-arts"><a>Flat landscapes</a></Link>
                                                                        </h4>
                                                                        <Link href="/explore-arts"><a className="resource-meta-item">
                                                                            <div className="resource-created">18</div>
                                                                            <div className="resource-meta-type">Items</div>
                                                                        </a></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="category-collections-wrapper mb-30">
                                                            <div className="category-collections-inner">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art26.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art10.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="art-item-single">
                                                                            <div className="art-item-wraper">
                                                                                <div className="art-item-inner">
                                                                                    <div className="art-item-img pos-rel">
                                                                                        <Link href="/art-details"><a><img src="assets/img/art/art20.jpg" alt="art-img" /></a></Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="collection-content pos-rel">
                                                                    <div className="art-3dots-menu">
                                                                        <div className="art-3dots-action">
                                                                            <ul>
                                                                                <li><a href="#"><i className="fal fa-share-alt"></i>Share</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <button className="art-3dots-icon"><i
                                                                            className="fal fa-ellipsis-v"></i></button>
                                                                    </div>
                                                                    <div className="collection-category">
                                                                        <h4 className="category-name">
                                                                            <Link href="/explore-arts"><a>Creative Artwork</a></Link>
                                                                        </h4>
                                                                        <Link href="/explore-arts"><a className="resource-meta-item">
                                                                            <div className="resource-created">12</div>
                                                                            <div className="resource-meta-type">Items</div>
                                                                        </a></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="category-collections-wrapper mb-30">
                                                            <div className="category-collections-inner">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art16.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art12.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="art-item-single">
                                                                            <div className="art-item-wraper">
                                                                                <div className="art-item-inner">
                                                                                    <div className="art-item-img pos-rel">
                                                                                        <Link href="/art-details"><a><img src="assets/img/art/art28.jpg" alt="art-img" /></a></Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="collection-content pos-rel">
                                                                    <div className="art-3dots-menu">
                                                                        <div className="art-3dots-action">
                                                                            <ul>
                                                                                <li><a href="#"><i className="fal fa-share-alt"></i>Share</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <button className="art-3dots-icon"><i
                                                                            className="fal fa-ellipsis-v"></i></button>
                                                                    </div>
                                                                    <div className="collection-category">
                                                                        <h4 className="category-name">
                                                                            <Link href="/explore-arts"><a>Digital Painting</a></Link>
                                                                        </h4>
                                                                        <Link href="/explore-arts"><a className="resource-meta-item">
                                                                            <div className="resource-created">17</div>
                                                                            <div className="resource-meta-type">Items</div>
                                                                        </a></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="category-collections-wrapper mb-30">
                                                            <div className="category-collections-inner">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art31.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art32.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="art-item-single">
                                                                            <div className="art-item-wraper">
                                                                                <div className="art-item-inner">
                                                                                    <div className="art-item-img pos-rel">
                                                                                        <Link href="/art-details"><a><img src="assets/img/art/art33.jpg" alt="art-img" /></a></Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="collection-content pos-rel">
                                                                    <div className="art-3dots-menu">
                                                                        <div className="art-3dots-action">
                                                                            <ul>
                                                                                <li><a href="#"><i className="fal fa-share-alt"></i>Share</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <button className="art-3dots-icon"><i
                                                                            className="fal fa-ellipsis-v"></i></button>
                                                                    </div>
                                                                    <div className="collection-category">
                                                                        <h4 className="category-name">
                                                                            <Link href="/explore-arts"><a>Abstract Art</a></Link>
                                                                        </h4>
                                                                        <Link href="/explore-arts"><a className="resource-meta-item">
                                                                            <div className="resource-created">13</div>
                                                                            <div className="resource-meta-type">Items</div>
                                                                        </a></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="category-collections-wrapper mb-30">
                                                            <div className="category-collections-inner">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art36.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art35.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="art-item-single">
                                                                            <div className="art-item-wraper">
                                                                                <div className="art-item-inner">
                                                                                    <div className="art-item-img pos-rel">
                                                                                        <Link href="/art-details"><a><img src="assets/img/art/art34.jpg" alt="art-img" /></a></Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="collection-content pos-rel">
                                                                    <div className="art-3dots-menu">
                                                                        <div className="art-3dots-action">
                                                                            <ul>
                                                                                <li><a href="#"><i className="fal fa-share-alt"></i>Share</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <button className="art-3dots-icon"><i
                                                                            className="fal fa-ellipsis-v"></i></button>
                                                                    </div>
                                                                    <div className="collection-category">
                                                                        <h4 className="category-name">
                                                                            <Link href="/explore-arts"><a>CDigital Product</a></Link>
                                                                        </h4>
                                                                        <Link href="/explore-arts"><a className="resource-meta-item">
                                                                            <div className="resource-created">21</div>
                                                                            <div className="resource-meta-type">Items</div>
                                                                        </a></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="category-collections-wrapper mb-30">
                                                            <div className="category-collections-inner">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art37.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="art-item-single">
                                                                                    <div className="art-item-wraper">
                                                                                        <div className="art-item-inner">
                                                                                            <div className="art-item-img pos-rel">
                                                                                                <Link href="/art-details"><a><img src="assets/img/art/art38.jpg" alt="art-img" /></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="art-item-single">
                                                                            <div className="art-item-wraper">
                                                                                <div className="art-item-inner">
                                                                                    <div className="art-item-img pos-rel">
                                                                                        <Link href="/art-details"><a><img src="assets/img/art/art39.jpg" alt="art-img" /></a></Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="collection-content pos-rel">
                                                                    <div className="art-3dots-menu">
                                                                        <div className="art-3dots-action">
                                                                            <ul>
                                                                                <li><a href="#"><i className="fal fa-share-alt"></i>Share</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <button className="art-3dots-icon"><i
                                                                            className="fal fa-ellipsis-v"></i></button>
                                                                    </div>
                                                                    <div className="collection-category">
                                                                        <h4 className="category-name">
                                                                            <Link href="/explore-arts"><a>Colorful Design</a></Link>
                                                                        </h4>
                                                                        <Link href="/explore-arts"><a className="resource-meta-item">
                                                                            <div className="resource-created">14</div>
                                                                            <div className="resource-meta-type">Items</div>
                                                                        </a></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <Pagination />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-nav3" role="tabpanel" aria-labelledby="nav-featured-tab">
                                            <div className="featured-items-wrapper">
                                                <div className="row">
                                                    {
                                                        products.slice(42, 45).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                                                    }
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <Pagination />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-nav4" role="tabpanel" aria-labelledby="nav-sold-tab">
                                            <div className="bids-items-wrapper mb-30">
                                                <div className="sold-items-wrapper">
                                                    <div className="row">
                                                        {
                                                            products.slice(37, 43).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                                                        }
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Pagination />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-nav5" role="tabpanel" aria-labelledby="nav-bid-tab">
                                            <div className="bids-items-wrapper mb-30">
                                                <div className="placed-bids-wrapper">
                                                    <div className="single-bid">
                                                        <div className="creator">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="creator-name-id">
                                                                <h4 className="artist-name"><Link href="/creator-profile"><a>Juliyan Asans</a></Link></h4>
                                                                <div className="artist-id">@asans</div>
                                                                <div className="bid-date-time">
                                                                    <div className="bid-date">06/20/2021</div>
                                                                    <div className="bid-time">9:58am</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bid-items-and-price">
                                                            <div className="bid-items">
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art25.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art12.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bid-pricing">
                                                                <div className="bid-status">Status : <span className="accepted">Accepted</span>
                                                                </div>
                                                                <div className="bid-price">3.58 ETH</div>
                                                                <div className="bid-price-dollar">352.342 USD</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-bid">
                                                        <div className="creator">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="creator-name-id">
                                                                <h4 className="artist-name"><Link href="/creator-profile"><a>Naresh Hasmia</a></Link></h4>
                                                                <div className="artist-id">@asans</div>
                                                                <div className="bid-date-time">
                                                                    <div className="bid-date">06/20/2021</div>
                                                                    <div className="bid-time">9:58am</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bid-items-and-price">
                                                            <div className="bid-items">
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art8.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art3.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art5.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art9.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bid-pricing">
                                                                <div className="bid-status">Status : <span className="accepted">Accepted</span>
                                                                </div>
                                                                <div className="bid-price">3.58 ETH</div>
                                                                <div className="bid-price-dollar">352.342 USD</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-bid">
                                                        <div className="creator">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile15.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="creator-name-id">
                                                                <h4 className="artist-name"><Link href="/creator-profile"><a>David Laver</a></Link></h4>
                                                                <div className="artist-id">@asans</div>
                                                                <div className="bid-date-time">
                                                                    <div className="bid-date">06/20/2021</div>
                                                                    <div className="bid-time">9:58am</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bid-items-and-price">
                                                            <div className="bid-items">
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art2.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art18.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art16.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bid-pricing">
                                                                <div className="bid-status">Status : <span className="pending">Pending</span></div>
                                                                <div className="bid-price">3.58 ETH</div>
                                                                <div className="bid-price-dollar">352.342 USD</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-bid">
                                                        <div className="creator">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="creator-name-id">
                                                                <h4 className="artist-name"><Link href="/creator-profile"><a>Juliyan Asans</a></Link></h4>
                                                                <div className="artist-id">@asans</div>
                                                                <div className="bid-date-time">
                                                                    <div className="bid-date">06/20/2021</div>
                                                                    <div className="bid-time">9:58am</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bid-items-and-price">
                                                            <div className="bid-items">
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art25.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bid-pricing">
                                                                <div className="bid-status">Status : <span className="accepted">Accepted</span>
                                                                </div>
                                                                <div className="bid-price">3.58 ETH</div>
                                                                <div className="bid-price-dollar">352.342 USD</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-bid">
                                                        <div className="creator">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="creator-name-id">
                                                                <h4 className="artist-name"><Link href="/creator-profile"><a>Naresh Hasmia</a></Link></h4>
                                                                <div className="artist-id">@asans</div>
                                                                <div className="bid-date-time">
                                                                    <div className="bid-date">06/20/2021</div>
                                                                    <div className="bid-time">9:58am</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bid-items-and-price">
                                                            <div className="bid-items">
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art14.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art17.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bid-pricing">
                                                                <div className="bid-status">Status : <span className="accepted">Accepted</span>
                                                                </div>
                                                                <div className="bid-price">3.58 ETH</div>
                                                                <div className="bid-price-dollar">352.342 USD</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-bid">
                                                        <div className="creator">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creator-profile"><a><img src="assets/img/profile/profile15.jpg" alt="profile-img" /></a></Link>
                                                            </div>
                                                            <div className="creator-name-id">
                                                                <h4 className="artist-name"><Link href="/creator-profile"><a>David Laver</a></Link></h4>
                                                                <div className="artist-id">@asans</div>
                                                                <div className="bid-date-time">
                                                                    <div className="bid-date">06/20/2021</div>
                                                                    <div className="bid-time">9:58am</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bid-items-and-price">
                                                            <div className="bid-items">
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art18.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art15.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="art-item-single">
                                                                    <div className="art-item-wraper">
                                                                        <div className="art-item-inner">
                                                                            <div className="art-item-img pos-rel">
                                                                                <Link href="/explore-arts"><a><img src="assets/img/art/art4.jpg"
                                                                                    alt="art-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bid-pricing">
                                                                <div className="bid-status">Status : <span className="pending">Pending</span></div>
                                                                <div className="bid-price">3.58 ETH</div>
                                                                <div className="bid-price-dollar">352.342 USD</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row pt-30">
                                                    <div className="col-12">
                                                        <Pagination />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CreatorProfileMain;