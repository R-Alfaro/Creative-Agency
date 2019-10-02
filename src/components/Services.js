import React, { Component } from 'react'
import axios from 'axios';
import ServicesContent from './SupportingComponent/Service/ServicesContent'
import ServicesContainer from './SupportingComponent/Service/ServiceContainer';

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionTitle: 'What we offer',
            serviceList: []
        };
    }

    componentDidMount() {
        axios.get('./data/serviceData.json')
            .then(res => {
                this.setState({
                    serviceList: JSON.parse(JSON.stringify(res.data.serviceList)),
                    sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const listItems = this.state.serviceList.map((data) =>
            <ServicesContent key={data.key} data={data} />
        );

        return (
            <ServicesContainer sectionTitle={this.state.sectionTitle} listItems={listItems} />
        )
    }
};

export default Services;