import React from 'react';
import HeaderTwo from '../Layout/Header/HeaderTwo';
import CategoryFilter from './CategoryFilter';
import ExploreArtsThree from './ExploreArtsThree';
import HeroSectionThree from './HeroSectionThree';
import SidebarMenuSection from './SidebarMenuSection';

const HomeThreeMain = () => {
    return (
        <main>
            <HeaderTwo />
            <SidebarMenuSection />
            <CategoryFilter />
            <HeroSectionThree />
            <ExploreArtsThree />
        </main>
    );
};

export default HomeThreeMain;