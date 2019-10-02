import React, { Component } from 'react'
import axios from 'axios';
import FeatureContent from "./SupportingComponent/Feature/FeatureContent";
import FeatureContentImages from "./SupportingComponent/Feature/FeatureContentImages";

class Features extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionTitle: '',
      sectionContect: '',
      featureList: [],
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

  componentDidMount() {
    axios.get('./data/featuresData.json')
      .then(res => {
        this.setState({
          sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
          sectionContect: JSON.parse(JSON.stringify(res.data.sectionContect)),
          featureList: JSON.parse(JSON.stringify(res.data.featureList)),
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const listItems = this.state.featureList.map((data) =>
      <div className="feature" key={data.key}>
        <i className={data.Icon}></i>
        <p>{data.item}</p>
      </div>
    );

    const imagelist = this.state.imageList.map((data) =>
      <img className="img-responsive" src={data.image} alt="" key={data.key} />
    );

    return (
      <div id="features" className="section md-padding bg-grey">
        <div className="container">
          <div className="row">
            <FeatureContent sectionTitle={this.state.sectionTitle} sectionContect={this.state.sectionContect} listItems={listItems} />
            {/* <featurecontentimages imagelist={imagelist} /> */}
            <div className="col-md-6">
              <div id="about-slider" className="owl-carousel owl-theme">
                {imagelist}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Features;
