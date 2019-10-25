import React, { Component } from 'react';
import DataService from './../hoc/dataService'
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
            testimonialList: [{
                key: 0,
                image: './img/perso1.jpg',
                title: 'Java Designer',
                content: 'Uno Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.',
                name: 'John Doe'
            },
            {
                key: 1,
                image: './img/perso2.jpg',
                title: 'Web Developer',
                content: 'Dos Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.',
                name: 'Mike Smith'
            },
            {
                "key": 2,
                "image": "./img/perso1.jpg",
                "title": "Web Engineer",
                "content": "Tres Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.",
                "name": "Kyle Williams"
            }]
        };
    }

    render() {
        const { data } = this.props;
        let listItems = [];

        // if (data !== '') {
        //     console.log("testimonialList2  => ", data.testimonialList);

        //     listItems2 = this.state.testimonialList.map((data) =>
        //         <TestimonialComponent key={data.key} data={data} />
        //     );
        // }

        listItems = this.state.testimonialList.map((data) =>
            <TestimonialComponent key={data.key} data={data} />
        );

        return (
            <TestimonialContext
                colorStyles={colorStyles}
                sectionTitle={data.sectionTitle}
                sectionBackground={data.sectionBackground}
                listItems={listItems} />
        )
    }
}

export default DataService(Testimonial, './data/testimonalData.json');