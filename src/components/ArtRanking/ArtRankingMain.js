import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../Common/PageTitle';
import Pagination from '../Common/Pagination';
import ThemeChanger from '../Common/ThemeChanger';
import ExploreCategorySlider from '../Elements/Slider/ExploreCategorySlider';
import RankingTableTitle from './RankingTableTitle';
import SingleArtRanking from './SingleArtRanking';

const ArtRankingMain = () => {

    const products = useSelector(state => state.products.products);

    return (
        <main>
            <ThemeChanger />

            <Breadcrumbs breadcrumbTitle="Item Ranking" breadcrumbSubTitle="Item Ranking" />

            <div className="art-ranking-area pt-130 pb-90">
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-lg-12">
                            <ExploreCategorySlider />
                        </div>
                    </div>
                    <div className="rank-list-container wow fadeInUp">
                        <div className="rank-list-wrapper mb-30">
                            <RankingTableTitle />

                            <div className="rank-list-items">
                                {
                                    products.slice(25, 34).map(product => <SingleArtRanking key={product.id} product={product} />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInUp">
                        <div className="col-12">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ArtRankingMain;