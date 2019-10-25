import React, { Component } from 'react';
import DataService from './../hoc/dataService'
import AboutContent from "./SupportingComponent/About/AboutContent";
import AboutContainer from './SupportingComponent/About/AboutContainer';

class About extends Component {
  render() {
    const { data } = this.props;
    let listAbout = [];

    if (data !== '') {
      listAbout = data.aboutList.map((data) =>
        <AboutContent key={data.key} data={data} />
      );
    }

    return (
      <AboutContainer sectionTitle={data.sectionTitle} listAbout={listAbout} />
    )
  }
};

export default DataService(About, './data/aboutData.json');