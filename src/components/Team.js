import React, { Component } from 'react'
import axios from 'axios';
import TeamList from "./SupportingComponent/Team/TeamList";
import TeamContent from './SupportingComponent/Team/TeamContent';



class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionTitle: '',
            TeamList: []
        };
    }

    componentDidMount() {
        axios.get('./data/teamData.json')
            .then(res => {
                this.setState({
                    sectionTitle: JSON.parse(JSON.stringify(res.data.sectionTitle)),
                    TeamList: JSON.parse(JSON.stringify(res.data.TeamList)),
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const listItems = this.state.TeamList.map((data) =>
            <TeamList key={data.key} data={data} />
        );

        return (
            <TeamContent listItems={listItems} sectionTitle={this.state.sectionTitle} />
        )
    }
};

export default Team;