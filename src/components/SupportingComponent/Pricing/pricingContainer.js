import React from "react";

const PricingContainer = props => (
     <div id="pricing" className="section md-padding">

          <div className="container">

               <div className="row">
                    <div className="section-header text-center">
                         <h2 className="title">{props.sectionTitle}</h2>
                    </div>

                    {props.listPricing}
               </div>
          </div>
     </div>

)

export default PricingContainer;