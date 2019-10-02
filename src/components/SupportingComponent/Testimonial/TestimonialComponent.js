import React from "react";

const TestimonialContent = props => (
    <div className="testimonial">
        <div className="testimonial-meta">
            <img src={props.data.image} alt="" />
            <h3 className="white-text">{props.data.name}</h3>
            <span>{props.data.title}</span>
        </div>
        <p className="white-text">{props.data.content}</p>
    </div>

)

export default TestimonialContent;