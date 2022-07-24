import React from 'react';
import Link from 'next/link';

const FooterTwo = () => {
    return (
        <footer className="footer2-bg">
            <div className="copyright-area copyright2-area">
                <div className="container c-container-1">
                    <div className="copyright2-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 order-md-2">
                                {/* <div className="copyright-text copyright2-text text-center text-md-start">
                                    © Copyrighted & Designed by <a href="https://themeforest.net/user/bdevs">BDevs</a>
                                </div> */}

                            </div>
                            <div className="col-lg-4 col-md-4 order-md-1">
                                <div className="footer-logo text-left">
                                    <Link href="/"><a className="logo-bb"><img src="assets/img/logo/craftt-logo-2.svg" alt="logo-img" width="35%"/></a></Link>
                                    <Link href="/"><a className="logo-bw"><img src="assets/img/logo/craftt-logo-1.svg" alt="logo-img" width="35%"/></a></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 order-md-3">
                                <div className="social__links footer__social text-md-end text-center">
                                    <ul>
                                        <li><a href="https://twitter.com/sigmagigs" target={'_blank'} rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-discord"></i></a></li>
                                        <li><a href="#"><i className="fab fa-telegram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterTwo;