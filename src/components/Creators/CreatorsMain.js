import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../Common/PageTitle';
import ThemeChanger from '../Common/ThemeChanger';
import CreatorSingle from './CreatorSingle';

const CreatorsMain = () => {
    const creators = useSelector(state => state.creators.creators);

    return (
        <main>

            <ThemeChanger />

            <Breadcrumbs breadcrumbTitle="Creators" breadcrumbSubTitle="Creators" />

            <section className="creator-area pt-130 pb-100">
                <div className="container">
                    <div className="row wow fadeInUp">
                        {
                            creators.slice(0, 24).map(creator => <CreatorSingle key={creator.id} creator={creator} />)
                        }
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CreatorsMain;