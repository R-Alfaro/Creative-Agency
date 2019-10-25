import React, { Component } from 'react';
import DataService from './../hoc/dataService'
import PricingList from "./SupportingComponent/Pricing/PricingList"
import PricingContainer from './SupportingComponent/Pricing/pricingContainer';

class Pricing extends Component {

  render() {
    const { data } = this.props;
    let listPricing = [];

    if (data !== '') {
      listPricing = data.pricingList.map((data) =>
        <PricingList key={data.key} data={data} />
      );
    }

    return (
      <PricingContainer
        sectionTitle={data.sectionTitle}
        listPricing={listPricing} />
    )
  }
}

export default DataService(Pricing, './../data/pricingData.json');