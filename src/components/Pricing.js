import React, { Component } from 'react';
import axios from 'axios';
import PricingList from "./SupportingComponent/Pricing/PricingList"
import PricingContainer from './SupportingComponent/Pricing/pricingContainer';

class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionTitle: '',
      pricingList: []
    };
  }

  componentDidMount() {
    axios.get('./data/pricingData.json')
      .then(res => {
        this.setState({
          pricingList: JSON.parse(JSON.stringify(res.data.pricingList)),
          sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const listPricing = this.state.pricingList.map((data) =>
      <PricingList key={data.key} data={data} />
    );

    return (
      <PricingContainer
        sectionTitle={this.state.sectionTitle}
        listPricing={listPricing} />
    )
  }
}

export default Pricing;