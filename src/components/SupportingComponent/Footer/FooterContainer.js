import React from "react";

const ContactInfo = props => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="footer-logo">
                    <a href="index.html"><img src={props.state.footerLogo} alt="logo" /></a>
                </div>
                <ul className="footer-follow">
                    {props.state.footerFollowList.map((value, index) => {
                        return (
                            <li key={value.key}><a href="/#"><i className={value.icon}></i></a></li>
                        )
                    })}
                </ul>

                <div className="footer-copyright">
                    <p>{props.state.footerCopyright}<a href={props.state.footerHref} target="_blank" rel="noopener noreferrer">{props.state.footerLink}</a></p>
                </div>
            </div>
        </div>
    </div>
)

export default ContactInfo;