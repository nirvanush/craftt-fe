import React from 'react';
import dynamic from 'next/dynamic';
const LiveOctionSlider = dynamic(() => import('../Elements/Slider/LiveOctionSlider'), {
    ssr: false
  })

const LiveOctionSection = () => {
    return (
        <section className="live-auction-area pt-80 pb-100">
         <div className="container">
            <div className="row wow fadeInUp">
               <div className="col-lg-8">
                  <div className="section-title1 pos-rel">
                     <div className="live-blink"></div>
                     <h2 className="section-main-title1 mb-40 pl-35">Featured Gigs</h2>
                  </div>
               </div>
            </div>
            <div className="row wow fadeInUp">
               <div className="col-lg-12">
                  <div className="auction-wrapper pos-rel">
                     <LiveOctionSlider />
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default LiveOctionSection;