import React from 'react';
import Link from 'next/link';
import ThemeChanger from '../Common/ThemeChanger';
import Breadcrumbs from '../Common/PageTitle';

const CreatorProfileInfoMain = () => {

    return (
        <main>

            <ThemeChanger />

            <Breadcrumbs breadcrumbTitle="Profile Information" breadcrumbSubTitle="Profile Information" />

            <section className="creator-info-area pt-130 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className="creator-info-details mb-40 wow fadeInUp">
                                <div className="creator-cover-img pos-rel">
                                    <div className="change-photo"><i className="flaticon-photo-camera"></i></div>
                                    <img src="assets/img/profile/profile-cover/profile-cover4.jpg" alt="cover-img" />
                                </div>
                                <div className="creator-img-name">
                                    <div className="profile-img pos-rel">
                                        <div className="change-photo"><i className="flaticon-photo-camera"></i></div>
                                        <img src="assets/img/profile/profile1.jpg" alt="profile-img" />
                                    </div>
                                    <div className="creator-name-id">
                                        <h4 className="artist-name pos-rel">
                                            Kallaban Joy
                                            <span className="profile-verification verified">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </h4>
                                        <div className="artist-id">@Kalla.ban</div>
                                    </div>
                                </div>
                                <div className="profile-setting-list">
                                    <ul>
                                        <li className="active"><Link href="/creator-profile-info-personal"><a><i className="flaticon-account"></i>Personal Info</a></Link></li>
                                        <li><a href="#"><i className="flaticon-settings"></i>Account Settings</a></li>
                                        <li><a href="#"><i className="flaticon-notification"></i>Notification Settings</a></li>
                                        <li><a href="#"><i className="flaticon-wallet-1"></i>Wallet Info</a></li>
                                        <li><a href="#"><i className="flaticon-check-mark"></i>Verify Account</a></li>
                                        <li><a href="#"><i className="flaticon-add-2"></i>Manage Artwork</a></li>
                                        <li><a href="#"><i className="flaticon-newspaper"></i>Report</a></li>
                                        <li><a href="#"><i className="flaticon-logout"></i>Log Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="creator-info-personal mb-40 wow fadeInUp">
                                <form className="personal-info-form" action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>First Name</label>
                                                <input type="text" defaultValue="Steve" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>Last Name</label>
                                                <input type="text" defaultValue="Long" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>Gender</label>
                                                <div className="common-select-arrow common-select-arrow-60 w-full">
                                                    <select name="g-select" className="gender-category-select w-full mb-30" defaultValue="Male">
                                                        <option value="1">Male</option>
                                                        <option value="2">Female</option>
                                                        <option value="3">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>Location</label>
                                                <input type="text" defaultValue="Cupertino, California" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>Date of Bith</label>
                                                <input type="date" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>Email</label>
                                                <input type="email" defaultValue="admin@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>Username</label>
                                                <input type="text" defaultValue="Steve" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>Password</label>
                                                <input type="password" defaultValue="********" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="personal-info-text">
                                        <textarea defaultValue="Hello, I am Kallaban a web development Extensive documentation plus great video guides on how to setup and customize Trucking will make your customizations super easy and fast!"></textarea>
                                    </div>
                                    <div className="personal-info-btn">
                                        <button id="update-btn" className="fill-btn">Update Now</button>
                                        <button id="reset-btn" className="fill-btn-orange">Reset All</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CreatorProfileInfoMain;