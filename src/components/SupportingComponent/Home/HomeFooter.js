import React from 'react';

const HomeFooter = props => (
     <div className="home-wrapper" style={props.divStyle} >
          <div className="container">
               <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                         <div className="home-content">
                              <h6 className="white-text">{props.state.HomeCreater}</h6>
                         </div>
                    </div>
               </div>
          </div>
     </div>
);

export default HomeFooter;