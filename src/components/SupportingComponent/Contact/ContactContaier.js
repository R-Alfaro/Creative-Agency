import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactTitle from "./ContactTitle";

const ContactContaier = props => (
    <div id="contact" className="section md-padding">
        <div className="container">
            <div className="row">
                <ContactTitle sectionTitle={props.state.sectionTitle} />
                <ContactInfo contactList={props.state.contactList} />
                <ContactForm placeholders={props.state.placeholders} />
            </div>
        </div>
    </div>
)

export default ContactContaier;