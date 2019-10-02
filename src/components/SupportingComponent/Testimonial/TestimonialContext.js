import React from "react";

const TestimonialContext = props => (
     <div id="testimonial" className="section md-padding">
          <div className="container">
               <div className='bg-img' style={{ backgroundImage: `url(${props.sectionBackground})` }}>
                    <div className="overlay"></div>
               </div>

               <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                         <h1 style={props.colorStyles}>{props.sectionTitle}</h1>
                         <div id="testimonial-slider" className="owl-carousel owl-theme">
                              {props.listItems}
                         </div>
                    </div>
               </div>
          </div>
     </div>

)

export default TestimonialContext;