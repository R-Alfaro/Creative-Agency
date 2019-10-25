import React, { Component } from 'react';
import axios from 'axios';
import ContactContaier from "./SupportingComponent/Contact/ContactContaier";

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sectionTitle: '',
            placeholders: '',
            contactList: []
        };
    }

    componentDidMount() {
        axios.get('./data/contactData.json')
            .then(res => {
                this.setState({
                    sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
                    placeholders: JSON.parse(JSON.stringify(res.data.placeholders)),
                    contactList: JSON.parse(JSON.stringify(res.data.contactList)),
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        return (
            <ContactContaier state={this.state} />
        )
    }

}

export default Contact;