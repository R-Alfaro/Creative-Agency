import React, { Component } from 'react';
import axios from 'axios';
import HomeFooter from './SupportingComponent/Home/HomeFooter';
import HomeContent from './SupportingComponent/Home/HomeContent';
import HomeNav from './SupportingComponent/Home/HomeNav';

var divStyle = {
    top: '95%'
};

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            homeHeader: '',
            homeContext: '',
            homeBtnGS: '',
            homeBtnLM: '',
            HomeCreater: ''
        };
    }

    componentDidMount() {
        axios.get('./data/homeData.json')
            .then(res => {
                this.setState({
                    homeHeader: JSON.parse(JSON.stringify(res.data.homeHeader)),
                    homeContext: JSON.parse(JSON.stringify(res.data.homeContext)),
                    homeBtnGS: JSON.parse(JSON.stringify(res.data.homeBtnGS)),
                    homeBtnLM: JSON.parse(JSON.stringify(res.data.homeBtnLM)),
                    HomeCreater: JSON.parse(JSON.stringify(res.data.HomeCreater))
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <header id="home">
                <div className="bg-img" style={{ backgroundImage: "url('./img/background1.jpg')" }}>
                    <div className="overlay"></div>
                </div>

                <HomeNav />

                <HomeContent state={this.state} />

                <HomeFooter state={this.state} divStyle={divStyle} />

            </header>
        )
    }
};

export default Header;