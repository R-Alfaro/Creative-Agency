import React, { Component } from 'react';
import axios from 'axios';
import PortfolioList from "./SupportingComponent/Portfolio/PortfolioList";
import ProtfolioImages from './SupportingComponent/Portfolio/ProtfolioImages';

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionTitle: '',
            portfolioList: []
        };
    }

    componentDidMount() {
        axios.get('./data/portfolioData.json')
            .then(res => {
                this.setState({
                    portfolioList: JSON.parse(JSON.stringify(res.data.portfolioList)),
                    sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const listPortfolio = this.state.portfolioList.map((data) =>
            <PortfolioList key={data.key} data={data} />
        );

        return (
            <ProtfolioImages state={this.state} listPortfolio={listPortfolio} />
        )
    }
}

export default Portfolio;