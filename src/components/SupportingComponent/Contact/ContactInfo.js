import React from "react";

const ContactInfo = props => (
     <div>
          <div className="col-sm-4">
               <div className="contact">
                    <i className="fa fa-phone"></i>
                    <h3>Phone</h3>
                    <p>512-421-3940</p>
               </div>
          </div>

          <div className="col-sm-4">
               <div className="contact">
                    <i className="fa fa-envelope"></i>
                    <h3>Email</h3>
                    <p>email@support.com</p>
               </div>
          </div>

          <div className="col-sm-4">
               <div className="contact">
                    <i className="fa fa-map-marker"></i>
                    <h3>Address</h3>
                    <p>1739 Bubby Drive</p>
               </div>
          </div>
     </div>
)

export default ContactInfo;