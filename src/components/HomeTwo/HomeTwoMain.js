import React from 'react';
import ThemeChanger from '../Common/ThemeChanger';
import OctionTwoSlider from '../Elements/Slider/OctionTwoSlider';
import ArtWorksSection from '../HomeOne/ArtWorksSection';
import PopularSection from '../HomeOne/PopularSection';
import WalletSection from '../HomeOne/WalletSection';
import WorkProcessSection from '../HomeOne/WorkProcessSection';
import HeroSectionTwo from './HeroSectionTwo';
import TopCreatorTwo from './TopCreatorTwo';

const HomeTwoMain = () => {
    return (
        <main>
            <ThemeChanger />
            <HeroSectionTwo />
            <OctionTwoSlider />
            <TopCreatorTwo />
            <WalletSection walletSpacing="pt-80 pb-100 z-index-1" />
            <ArtWorksSection />
            <WorkProcessSection />
            <PopularSection />
        </main>
    );
};

export default HomeTwoMain;