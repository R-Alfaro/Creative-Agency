import React, { Component } from 'react'
import DataService from './../hoc/dataService'
import ServicesContent from './SupportingComponent/Service/ServicesContent'
import ServicesContainer from './SupportingComponent/Service/ServiceContainer';

class Services extends Component {

    render() {
        const { data } = this.props;
        let listItems = [];

        if (data !== '') {
            listItems = data.serviceList.map((data) =>
                <ServicesContent key={data.key} data={data} />
            );
        }

        return (
            <ServicesContainer sectionTitle={data.sectionTitle} listItems={listItems} />
        )
    }
};

export default DataService(Services, './../data/serviceData.json');