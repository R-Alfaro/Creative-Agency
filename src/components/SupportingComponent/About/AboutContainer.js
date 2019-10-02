import React from 'react';

const AboutContainer = props => (
     <div id="about" className="section md-padding">
          <div className="container">
               <div className="row">

                    <div className="section-header text-center">
                         <h2 className="title">{props.sectionTitle}</h2>
                    </div>

                    {props.listAbout}

               </div>
          </div>
     </div>
);

export default AboutContainer;