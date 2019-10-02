import React from 'react';

const AboutContent = props => (
    <div className="col-md-4">
        <div className="about">
            <i className={props.data.image}></i>
            <h3>{props.data.title}</h3>
            <p>{props.data.content}</p>
            <a href="/#">{props.data.href}</a>
        </div>
    </div>
);

export default AboutContent;