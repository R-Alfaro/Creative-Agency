import React from 'react';

const ProtfolioImages = props => (
     <div id="portfolio" className="section md-padding bg-grey">
          <div className="container">
               <div className="row">
                    <div className="section-header text-center">
                         <h2 className="title">{props.state.sectionTitle}</h2>
                    </div>

                    {props.listPortfolio}

               </div>
          </div>
     </div>
)

export default ProtfolioImages;