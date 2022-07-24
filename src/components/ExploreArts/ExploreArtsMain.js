import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../Common/PageTitle';
import Pagination from '../Common/Pagination';
import ThemeChanger from '../Common/ThemeChanger';
import ExploreCategorySlider from '../Elements/Slider/ExploreCategorySlider';
import ExploreArtsBar from './ExploreArtsBar';
import ExploreArtsSingle from './ExploreArtsSingle';

const ExploreArtsMain = () => {

    const products = useSelector(state => state.products.products);

    return (
        <main>

            <ThemeChanger />

            <Breadcrumbs breadcrumbTitle="Explore Artworks" breadcrumbSubTitle="Explore" />

            <section className="artworks-area pt-60 pb-90">
                <div className="container">
                    <ExploreCategorySlider />
                    {/* <ExploreArtsBar /> */}
                    <div className="row wow fadeInUp">
                        {
                            products.slice(0, 24).map(product => <ExploreArtsSingle key={product.id} product={product} />)
                        }
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

export default ExploreArtsMain;