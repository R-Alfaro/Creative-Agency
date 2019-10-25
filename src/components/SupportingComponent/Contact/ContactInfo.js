import React from "react";

const ContactInformation = props => (
     <div>
          {props.contactList.map((value, index) => {
               return (
                    <div className="col-sm-4" key={value.key}>
                         <div className="contact">
                              <i className={value.icon}></i>
                              <h3>{value.contactType}</h3>
                              <p>{value.contactInfo}</p>
                         </div>
                    </div>
               )
          })}
     </div>
)

export default ContactInformation;