import React from "react";

const ContactForm = props => (
     <div>
          <div className="col-md-8 col-md-offset-2">
               <form className="contact-form">
                    <input type="text" className="input" placeholder="Name" />
                    <input type="email" className="input" placeholder="Email" />
                    <input type="text" className="input" placeholder="Subject" />
                    <textarea className="input" placeholder="Message"></textarea>
                    <button className="main-btn">Send message</button>
               </form>
          </div>
     </div>
)

export default ContactForm;