import React from 'react';

const HomeContent = props => (
     <div className="home-wrapper">
          <div className="container">
               <div className="row">

                    <div className="col-md-10 col-md-offset-1">
                         <div className="home-content">
                              <h1 className="white-text">{props.state.homeHeader}</h1>
                              <p className="white-text">{props.state.homeContext}</p>
                              <button className="white-btn">{props.state.homeBtnGS}</button>
                              <button className="main-btn">{props.state.homeBtnLM}</button>
                         </div>
                    </div>
               </div>
          </div>
     </div>
);

export default HomeContent;