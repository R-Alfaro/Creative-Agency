import React from "react";
import FeatureContent from "./FeatureContent";
import FeatureContentImages from "./FeatureContentImages";

const FeatureContainer = props => (
     <div id="features" className="section md-padding bg-grey">
          <div className="container">
               <div className="row">
                    <FeatureContent
                         sectionTitle={props.sectionTitle}
                         sectionContect={props.sectionContect}
                         listItems={props.listItems} />
                    <FeatureContentImages
                         imagelist={props.imagelist} />
               </div>
          </div>
     </div>

)

export default FeatureContainer;