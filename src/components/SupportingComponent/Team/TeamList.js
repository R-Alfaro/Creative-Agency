import React from "react";

const TeamList = props => (

    <div className="col-sm-4">
        <div className="team">
            <div className="team-img">
                <img className="img-responsive" src={props.data.image} alt="" />
                <div className="overlay">
                    <div className="team-social">
                        <a href="/#"><i className="fa fa-facebook"></i></a>
                        <a href="/#"><i className="fa fa-google-plus"></i></a>
                        <a href="/#"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="team-content">
                <h3>{props.data.user}</h3>
                <span>{props.data.title}</span>
            </div>
        </div>
    </div>
)

export default TeamList;