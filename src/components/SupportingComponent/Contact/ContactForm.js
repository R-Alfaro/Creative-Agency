import React from "react";

const ContactForm = props => (
     <div>
          <div className="col-md-8 col-md-offset-2">
               <form className="contact-form">
                    <input type="text" className="input" placeholder={props.placeholders.formPlaceholderName} />
                    <input type="email" className="input" placeholder={props.placeholders.formPlaceholderEmail} />
                    <input type="text" className="input" placeholder={props.placeholders.formPlaceholderSubject} />
                    <textarea className="input" placeholder={props.placeholders.formPlaceholderMessage}></textarea>
                    <button className="main-btn">{props.placeholders.formPlaceholderButton}</button>
               </form>
          </div>
     </div>
)

export default ContactForm;