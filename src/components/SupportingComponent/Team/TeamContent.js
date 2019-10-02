import React from "react";

const TeamContent = props => (

     <div id="team" className="section md-padding">
          <div className="container">
               <div className="row">
                    <div className="section-header text-center">
                         <h2 className="title">{props.sectionTitle}</h2>
                    </div>
                    {props.listItems}

               </div>
          </div>
     </div>
)

export default TeamContent;