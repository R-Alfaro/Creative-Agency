import React from "react";

const NumbersContent = props => (
    <div id="numbers" className="section sm-padding">
        <div className="bg-img" style={{ backgroundImage: "url('./img/background2.jpg')" }}>
            <div className="overlay"></div>
        </div>
        <div className="container">
            <div className="row">
                {props.listItems}
            </div>
        </div>
    </div>
)

export default NumbersContent;