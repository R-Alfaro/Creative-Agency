import React, { Component } from 'react'
import DataService from './../hoc/dataService'
import TeamList from "./SupportingComponent/Team/TeamList";
import TeamContent from './SupportingComponent/Team/TeamContent';

class Team extends Component {
    render() {
        const { data } = this.props;
        let listItems = [];

        if (data !== '') {
            listItems = data.TeamList.map((data) =>
                <TeamList key={data.key} data={data} />
            );
        }

        return (
            <TeamContent listItems={listItems} sectionTitle={data.sectionTitle} />
        )
    }
};

export default DataService(Team, './../data/teamData.json');