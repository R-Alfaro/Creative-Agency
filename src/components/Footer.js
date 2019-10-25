import React, { Component } from 'react'
import axios from 'axios';
import FooterContainer from "./SupportingComponent/Footer/FooterContainer";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            footerLogo: '',
            footerCopyright: '',
            footerHref: '',
            footerLink: '',
            footerFollowList: []
        };
    }

    componentDidMount() {
        axios.get('./data/footerData.json')
            .then(res => {
                this.setState({
                    footerLogo: JSON.parse(JSON.stringify(res.data.footerLogo)),
                    footerCopyright: JSON.parse(JSON.stringify(res.data.footerCopyright)),
                    footerHref: JSON.parse(JSON.stringify(res.data.footerHref)),
                    footerLink: JSON.parse(JSON.stringify(res.data.footerLink)),
                    footerFollowList: JSON.parse(JSON.stringify(res.data.footerFollowList)),
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        return (
            <footer id="footer" className="sm-padding bg-dark">

                <FooterContainer state={this.state} />

            </footer>
        )
    }
}

export default Footer;