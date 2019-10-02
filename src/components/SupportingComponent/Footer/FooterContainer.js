import React from "react";

const FooterContainer = props => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="footer-logo">
                    <a href="index.html"><img src="img/logo-alt.png" alt="logo" /></a>
                </div>
                <ul className="footer-follow">
                    <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="/#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="/#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="/#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="/#"><i className="fa fa-youtube"></i></a></li>
                </ul>
                <div className="footer-copyright">
                    <p>Copyright © 2017. All Rights Reserved. Designed by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a></p>
                </div>
            </div>
        </div>
    </div>
)

export default FooterContainer;