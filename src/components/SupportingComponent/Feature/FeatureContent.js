import React from "react";

const FeatureContent = props => (

    <div className="col-md-6">
        <div className="section-header text-center">
            <h2 className="title">{props.sectionTitle}</h2>
        </div>

        <p>{props.sectionContect}</p>
        <hr />

        {props.listItems}
    </div>

)

export default FeatureContent;