import React from "react";

const BlogList = props => (
    <div className="col-md-4">
        <div className="blog">
            <div className="blog-img">
                <img className="img-responsive" src={props.data.image} alt="" />
            </div>
            <div className="blog-content">
                <ul className="blog-meta">
                    <li><i className="fa fa-user"></i>{props.data.user}</li>
                    <li><i className="fa fa-clock-o"></i>{props.data.clock}</li>
                    <li><i className="fa fa-comments"></i>{props.data.comments}</li>
                </ul>
                <h3>{props.data.title}</h3>
                <p>{props.data.content}</p>
                <a href="blog-single.html">{props.data.href}</a>
            </div>
        </div>
    </div>
)

export default BlogList;