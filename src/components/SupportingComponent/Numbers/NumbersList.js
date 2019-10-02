import React from "react";

const NumbersContent = props => (
     <div className="col-sm-3 col-xs-6">
          <div className="number">
               <i className={props.data.icon}></i>
               <h3 className="white-text"><span className="counter">{props.data.counter}</span></h3>
               <span className="white-text">{props.data.content}</span>
          </div>
     </div>
)

export default NumbersContent;