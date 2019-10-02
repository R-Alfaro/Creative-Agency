import React from "react";

const BlogContent = props => (
     <div id="blog" className="section md-padding bg-grey">
          <div className="container">
               <div className="row">
                    <div className="section-header text-center">
                         <h2 className="title">{props.sectionTitle}</h2>
                    </div>
                    {props.listItems}
               </div>
          </div>
     </div>
)

export default BlogContent;