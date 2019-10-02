import React from "react";

const FeatureContentImages = props => (
    <div className="col-md-6">
        <div id="about-slider" className="owl-carousel owl-theme">
            {props.imagelist}
        </div>
    </div>

)

export default FeatureContentImages;