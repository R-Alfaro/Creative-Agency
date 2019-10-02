import React, { Component } from 'react';
import axios from 'axios';
import AboutContent from "./SupportingComponent/About/AboutContent";
import AboutContainer from './SupportingComponent/About/AboutContainer';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionTitle: '',
      aboutList: []
    };
  }

  componentDidMount() {
    axios.get('./data/aboutData.json')
      .then(res => {
        this.setState({
          aboutList: JSON.parse(JSON.stringify(res.data.aboutList)),
          sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const listAbout = this.state.aboutList.map((data) =>
      <AboutContent key={data.key} data={data} />
    );

    return (
      <AboutContainer sectionTitle={this.state.sectionTitle} listAbout={listAbout} />
    )
  }
};

export default About;