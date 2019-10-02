import React, { Component } from 'react'
import axios from 'axios';
import BlogList from "./SupportingComponent/Blog/BlogList";
import BlogContent from "./SupportingComponent/Blog/BlogContent";

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionTitle: '',
            blogList: []
        };
    }

    componentDidMount() {
        axios.get('./data/blogData.json')
            .then(res => {
                this.setState({
                    sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
                    blogList: JSON.parse(JSON.stringify(res.data.blogList)),
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const listItems = this.state.blogList.map((data) =>
            <BlogList key={data.key} data={data} />
        );

        return (
            <BlogContent
                sectionTitle={this.state.sectionTitle}
                listItems={listItems} />
        )
    }
}

export default Blog;