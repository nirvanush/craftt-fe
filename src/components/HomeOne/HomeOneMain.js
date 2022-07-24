import React from 'react';
import ThemeChanger from '../Common/ThemeChanger';
import ArtWorksSection from './ArtWorksSection';
import BrowseCategorySection from './BrowseCategorySection';
import HeroSection from './HeroSection';
import LiveOctionSection from './LiveOctionSection';
import PopularSection from './PopularSection';
import TopSellerSection from './TopSellerSection';
import WalletSection from './WalletSection';
import WorkProcessSection from './WorkProcessSection';

const HomeOneMain = () => {
    return (
        <main>
            <ThemeChanger />
            <HeroSection />
            {/* <WalletSection /> */}
            <LiveOctionSection />
            <BrowseCategorySection />
            {/* <TopSellerSection /> */}
            {/* <PopularSection /> */}
            {/* <ArtWorksSection /> */}
            <WorkProcessSection />
        </main>
    );
};

export default HomeOneMain;