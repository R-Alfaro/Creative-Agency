import React, { Component } from 'react';
import DataService from './../hoc/dataService'
import PortfolioList from "./SupportingComponent/Portfolio/PortfolioList";
import ProtfolioImages from './SupportingComponent/Portfolio/ProtfolioImages';

class Portfolio extends Component {
    render() {
        const { data } = this.props;
        let listPortfolio = [];

        if (data !== '') {
            listPortfolio = data.portfolioList.map((data) =>
                <PortfolioList key={data.key} data={data} />
            );
        }

        return (
            <ProtfolioImages state={data} listPortfolio={listPortfolio} />
        )
    }
}

export default DataService(Portfolio, './data/portfolioData.json');