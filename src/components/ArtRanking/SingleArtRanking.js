import React from 'react';
import { useDispatch } from 'react-redux';
import { specificProduct } from '../../redux/features/productSlice';
import Link from 'next/link';

const SingleArtRanking = ({ product }) => {
    // distructure items
    const { id, img, title, volume, hours, days, bids, price, name, count } = product;
    // dispatch
    const dispatch = useDispatch();
    // handleProductDetails
    const handleProductDetails = () => {
        dispatch(specificProduct(id))
    }

    return (
        <div className="rank-list-row">
            <div className="rank-list-cell rank-list-cell-sl"><span></span></div>
            <div className="rank-list-cell rank-list-cell-artwotrks">
                <div className="art-item-single art-item-single-rank">
                    <div className="art-item-wraper">
                        <div className="art-item-inner">
                            <div className="art-item-img pos-rel">
                                <Link href="/art-details"><a onClick={handleProductDetails}><img src={img} alt="art-img"></img></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rank-list-cell rank-list-cell-market">{title}</div>
            <div className="rank-list-cell rank-list-cell-volume">{volume}</div>
            <div className="rank-list-cell rank-list-cell-hours">{hours}</div>
            <div className="rank-list-cell rank-list-cell-days">{days}</div>
            <div className="rank-list-cell rank-list-cell-bids">{bids}</div>
            <div className="rank-list-cell rank-list-cell-price">{price}</div>
            <div className="rank-list-cell rank-list-cell-owner">{name}</div>
            <div className="rank-list-cell rank-list-cell-assets">{count}</div>
        </div>
    );
};

export default SingleArtRanking;