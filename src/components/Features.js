import React, { Component } from 'react'
import FeatureContainer from './SupportingComponent/Feature/FeatureContainer';
import DataService from './../hoc/dataService'

class Features extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageList: [
        {
          "key": 0,
          "image": "./img/about1.jpg"
        },
        {
          "key": 1,
          "image": "./img/about2.jpg"
        },
        {
          "key": 2,
          "image": "./img/about1.jpg"
        },
        {
          "key": 3,
          "image": "./img/about2.jpg"
        },
        {
          "key": 4,
          "image": "./img/about1.jpg"
        },
        {
          "key": 5,
          "image": "./img/about2.jpg"
        }
      ]
    }
  }

  render() {

    const { data } = this.props;
    let listItems = [];

    if (data !== '') {
      listItems = data.featureList.map((data) =>
        <div className="feature" key={data.key}>
          <i className={data.Icon}></i>
          <p>{data.item}</p>
        </div>
      );
    }

    const imagelist = this.state.imageList.map((data) =>
      <img className="img-responsive" src={data.image} alt="" key={data.key} />
    );

    return (
      <FeatureContainer
        sectionTitle={data.sectionTitle}
        sectionContect={data.sectionContect}
        listItems={listItems}
        imagelist={imagelist} />
    )
  }
}

export default DataService(Features, './data/featuresData.json');
