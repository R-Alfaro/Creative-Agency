import React, { Component } from 'react'
import DataService from './../hoc/dataService'
import NumbersContent from "./SupportingComponent/Numbers/NumbersContent";
import NumbersList from "./SupportingComponent/Numbers/NumbersList";

class Numbers extends Component {
  render() {
    const { data } = this.props;
    let listItems = [];

    if (data !== '') {
      listItems = data.NumbersList.map((data) =>
        <NumbersList key={data.key} data={data} />
      );
    }

    return (
      <NumbersContent listItems={listItems} />
    )
  }
}

export default DataService(Numbers, './data/numberData.json');