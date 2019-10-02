import React, { Component } from 'react'
import axios from 'axios';
import NumbersContent from "./SupportingComponent/Numbers/NumbersContent";
import NumbersList from "./SupportingComponent/Numbers/NumbersList";

class Numbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionTitle: '',
      NumbersList: []
    };
  }

  componentDidMount() {
    axios.get('./data/numberData.json')
      .then(res => {
        this.setState({
          sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
          NumbersList: JSON.parse(JSON.stringify(res.data.NumbersList)),
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {
    const listItems = this.state.NumbersList.map((data) =>
      <NumbersList key={data.key} data={data} />
    );

    return (
      <NumbersContent listItems={listItems} />
    )
  }
}

export default Numbers;