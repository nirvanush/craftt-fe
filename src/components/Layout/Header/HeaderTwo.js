import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SidebarMenuSection from '../../HomeThree/SidebarMenuSection';
import CategoryFilter from '../../HomeThree/CategoryFilter';
import { useTheme } from 'next-themes'

const HeaderTwo = () => {

    const [isActive13, setActive13] = useState("false");
    const handleToggle13 = () => {
        setActive13(!isActive13);
    };

    const { setTheme } = useTheme()

    const [menuOpen1, setMenuOpen1] = useState(false)
    const [menuOpen2, setMenuOpen2] = useState(false)

    const router = useRouter()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(router.pathname)
    }, [router])

    return (
        <>
            <header className="header2">
                <div className="header-main header-main2">
                    <div className="container c-container-1">
                        <div className="header-main2-content">
                            <div className="row align-items-center">
                                <div className="col-xl-7 col-lg-7 col-md-7 col-7">
                                    <div className="header-main-left">
                                        <div className="menu-bar mr-20 d-xxl-none">
                                            <a className="side-toggle" href="#!" onClick={() => { setMenuOpen1(!menuOpen1) }}>
                                                <div className="bar-icon left-bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </a>
                                        </div>
                                        <form action="#" className="filter-search-input header-search d-none d-md-inline-block">
                                            <input type="text" placeholder="Search keyword" />
                                            <button><i className="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5 col-5">
                                    <div className="header-main-right">
                                        <div className="header-btn ml-20 d-none d-xxl-inline-block">
                                            <Link href="/wallet-connect"><a className="fill-btn">Connect Wallet</a></Link>
                                        </div>
                                        <div className="profile-item profile-item-header ml-20 d-none d-md-inline-block pos-rel">
                                            <div className={`profile-img pos-rel ${isActive13 ? "" : "show-element"}`} onClick={handleToggle13}>
                                                <div className="profile-action">
                                                    <ul>
                                                        <li>
                                                            <Link href="/creator-profile-info-personal"><a><i className="fal fa-user"></i>Profile</a></Link>
                                                        </li>
                                                        <li><Link href="/login"><a><i className="fal fa-sign-out"></i>Logout</a></Link></li>
                                                    </ul>
                                                </div>
                                                <img src="assets/img/profile/profile4.jpg" alt="profile-img" />
                                                <div className="profile-verification verified">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="product-filter-btn ml-20 d-xxl-none" onClick={() => { setMenuOpen2(!menuOpen2) }}>
                                            <i className="flaticon-filter"></i>
                                        </div>
                                        <div className="mode-switch-wrapper my_switcher setting-option home3-mode-switch ml-25">
                                            <input type="checkbox" className="checkbox" id="chk" />
                                            <label className="label" htmlFor="chk">
                                                <i className="fas fa-moon setColor dark theme__switcher-btn" onClick={() => setTheme('dark')}></i>
                                                <i className="fas fa-sun setColor light theme__switcher-btn" onClick={() => setTheme('light')}></i>
                                                <span className="ball"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <SidebarMenuSection menuOpen1={menuOpen1} setMenuOpen1={setMenuOpen1} />
            <div onClick={() => setMenuOpen1(false)} className={menuOpen1 ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}></div>

            <CategoryFilter menuOpen2={menuOpen2} setMenuOpen2={setMenuOpen2} />
            <div onClick={() => setMenuOpen2(false)} className={menuOpen2 ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}></div>
        </>
    );
};

export default HeaderTwo;