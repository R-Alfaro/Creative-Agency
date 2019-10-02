import React from "react";

const PortfolioList = props => (

    <div className="col-md-4 col-xs-6 work">
        <img className="img-responsive" src={props.data.image} alt="" />

        <div className="overlay"></div>

        <div className="work-content">
            <span>{props.data.category}</span>
            <h3>{props.data.title}</h3>
            <div className="work-link">
                <a href="/#"><i className={props.data.externalLinkIcon}></i></a>
                <a className="lightbox" href={props.data.image}><i className={props.data.searchIcon}></i></a>
            </div>
        </div>
    </div>
)

export default PortfolioList;