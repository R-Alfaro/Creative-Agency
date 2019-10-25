import React from 'react'
import axios from 'axios';

const dataService = (WrappedComponent, inputfile) => {
     class DataService extends React.Component {
          constructor(props) {
               super(props);

               this.state = {
                    data: ''
               };

               axios.get(inputfile)
                    .then(res => {
                         this.setState({
                              data: JSON.parse(JSON.stringify(res.data)),
                         })
                         console.log("...... getData", this.state.data);
                    })
                    .catch(function (error) {
                         console.log(error);
                    })

          }

          getData = () => {
               console.log("########################################### inputfile");
               axios.get(inputfile)
                    .then(res => {
                         this.setState({
                              data: JSON.parse(JSON.stringify(res.data)),
                         })
                         console.log("...... getData", this.state.data);
                    })
                    .catch(function (error) {
                         console.log(error);
                    })

               console.log("########################################### ", this.state.data);
               return this.state.data;
          }

          render() {
               return <WrappedComponent
                    data={this.state.data}
                    getData={this.gatData}
                    {... this.props} />
          }
     }

     return DataService
}

export default dataService;