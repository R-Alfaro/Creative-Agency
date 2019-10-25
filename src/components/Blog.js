import React, { Component } from 'react'
import DataService from './../hoc/dataService'
import BlogList from "./SupportingComponent/Blog/BlogList";
import BlogContent from "./SupportingComponent/Blog/BlogContent";

class Blog extends Component {
    render() {
        const { data } = this.props;
        let listItems = [];

        if (data !== '') {
            listItems = data.blogList.map((data) =>
                <BlogList key={data.key} data={data} />
            );
        }

        return (
            <BlogContent
                sectionTitle={data.sectionTitle}
                listItems={listItems} />
        )
    }
}

export default DataService(Blog, './data/blogData.json');