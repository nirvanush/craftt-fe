import React from 'react';
import Link from 'next/link';
import ThemeChanger from '../Common/ThemeChanger';
import Breadcrumbs from '../Common/PageTitle';

const UploadCategoryMain = () => {
    return (
        <main>
            <ThemeChanger />
            <Breadcrumbs breadcrumbTitle="Upload Artwork" breadcrumbSubTitle="Upload" />

            <section className="art-upload-area pt-130 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="art-upload-wrapper">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="box-card-single mb-40 wow fadeInUp">
                                            <div className="box-card-inner text-center">
                                                <div className="box-card-icon">
                                                    <img src="assets/img/svg-icon/031-open.svg" alt="img" />
                                                </div>
                                                <h4 className="box-card-title">Upload Single Item</h4>
                                                <p>Sale your single item to increase your currencies that generated by crypto currency.
                                                </p>
                                                <div className="box-card-btn">
                                                    <Link href="/upload"><a className="fill-btn">Upload Single</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="box-card-single mb-40 wow fadeInUp">
                                            <div className="box-card-inner text-center">
                                                <div className="box-card-icon">
                                                    <img src="assets/img/svg-icon/031-open.svg" alt="img" />
                                                </div>
                                                <h4 className="box-card-title">Upload Multiple Items</h4>
                                                <p>Sale your single item to increase your currencies that generated by crypto currency.
                                                </p>
                                                <div className="box-card-btn">
                                                    <Link href="/upload"><a className="fill-btn-orange">Upload Multiple</a></Link>
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

export default UploadCategoryMain;