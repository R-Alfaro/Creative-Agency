import React from "react";

const ServicesContent = props => (

    <div className="col-md-4 col-sm-6">
        <div className="service">
            <i className={props.data.serviceIcon}></i>
            <h3>{props.data.title}</h3>
            <p>{props.data.content}</p>
        </div>
    </div>
)

export default ServicesContent;