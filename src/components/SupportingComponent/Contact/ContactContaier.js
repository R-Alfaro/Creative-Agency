import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactContaier = props => (
    <div id="contact" className="section md-padding">

        <div className="container">

            <div className="row">

                <div className="section-header text-center">
                    <h2 className="title">Get in touch</h2>
                </div>

                <ContactInfo />

                <ContactForm />

            </div>
        </div>
    </div>
)

export default ContactContaier;