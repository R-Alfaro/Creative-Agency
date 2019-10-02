import React, { Component } from 'react';
import axios from 'axios';
import TestimonialComponent from "./SupportingComponent/Testimonial/TestimonialComponent";
import TestimonialContext from "./SupportingComponent/Testimonial/TestimonialContext"

const colorStyles = {
    color: 'white',
    textAlign: 'center'
};

class Testimonial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionOverlay: '',
            sectionTitle: '',
            sectionBackground: '',
            testimonialList: [{
                key: 0,
                image: './img/perso1.jpg',
                title: 'Web Designer',
                content: 'Uno Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.',
                name: 'John Doe'
            },
            {
                key: 1,
                image: './img/perso2.jpg',
                title: 'Web Developer',
                content: 'Dos Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.',
                name: 'Mike Smith'
            }]
        };
    }

    componentDidMount() {
        axios.get('./data/testimonalData.json')
            .then(res => {
                this.setState({
                    sectionOverlay: JSON.parse(JSON.stringify(res.data.sectionOverlay)),
                    sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
                    sectionBackground: JSON.parse(JSON.stringify(res.data.sectionBackground)),
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const listItems = this.state.testimonialList.map((data) =>
            <TestimonialComponent key={data.key} data={data} />
        );

        return (
            <TestimonialContext
                colorStyles={colorStyles}
                sectionTitle={this.state.sectionTitle}
                sectionBackground={this.state.sectionBackground}
                listItems={listItems} />
        )
    }
}

export default Testimonial;