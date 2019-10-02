import React from "react";

const PricingList = props => (
    <div className="col-sm-4">
        <div className="pricing">
            <div className="price-head">
                <span className="price-title">{props.data.plan}</span>
                <div className="price">
                    <h3>{props.data.amount}<span className="duration">{props.data.duration}</span></h3>
                </div>
            </div>
            <ul className="price-content">
                <li>
                    <p>{props.data.diskSpace}</p>
                </li>
                <li>
                    <p>{props.data.emailLimit}</p>
                </li>
                <li>
                    <p>{props.data.support}</p>
                </li>
            </ul>
            <div className="price-btn">
                <button className="outline-btn">{props.data.purchaseBtn}</button>
            </div>
        </div>
    </div>
)

export default PricingList;