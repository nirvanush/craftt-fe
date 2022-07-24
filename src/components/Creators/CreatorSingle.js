import React from 'react';
import { useDispatch } from 'react-redux';
import { specificCreator } from '../../redux/features/creatorSlice';
import Link from 'next/link';

const CreatorSingle = ({ creator }) => {
    // distructure items
    const { id, coverImage, profileImage, name, artistId, create, createNumber, follower, followerNumber, followed, followedNumber, follow } = creator;
    // dispatch
    const dispatch = useDispatch();
    // handleCreatorDetails
    const handleCreatorDetails = () => {
        dispatch(specificCreator(id))
    }

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="creator-single mb-30">
                <div className="creator-wraper">
                    <div className="creator-inner">
                        <div className="creator-cover-img pos-rel">
                            <img src={coverImage} alt="cover-img" />
                        </div>
                        <div className="creator-content pos-rel">
                            <div className="creator-info">
                                <div className="profile-img pos-rel">
                                    <Link href="/creator-profile"><a onClick={handleCreatorDetails}><img src={profileImage} alt="cover-img" /></a></Link>
                                    <div className="profile-verification verified">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <h4 className="artist-name"><Link href="/creator-profile"><a onClick={handleCreatorDetails}>{name}</a></Link></h4>
                                <div className="artist-id">{artistId}</div>
                            </div>
                            <div className="artist-meta-info">
                                <div className="artist-meta-item artist-meta-item-border">
                                    <div className="artist-meta-type">{create}</div>
                                    <div className="artist-created">{createNumber}</div>
                                </div>
                                <div className="artist-meta-item artist-meta-item-border">
                                    <div className="artist-meta-type">{follower}</div>
                                    <div className="artist-follwers">{followerNumber}</div>
                                </div>
                                <div className="artist-meta-item">
                                    <div className="artist-meta-type">{followed}</div>
                                    <div className="artist-followed">{followedNumber}</div>
                                </div>
                            </div>
                            <div className="artist-follow-btn">
                                <button className="follow-artist">{follow}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatorSingle;