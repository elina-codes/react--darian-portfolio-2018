import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer id={this.props.id}>
                <div className="wrapper">
                    <h2 className="section__title">{this.props.title}</h2>
                    <div className="footer__icons">
                        {/* <a href="#" className="footer__link">
                            <img
                                src="/images/resume-icon.svg"
                                alt=""
                                className="footer__icon"
                            />
                        </a> */}
                        <a
                            href="https://www.linkedin.com/in/dariangrant/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="footer__link"
                        >
                            <img
                                src="/images/linkedin-circle.svg"
                                alt=""
                                className="footer__icon"
                            />
                        </a>
                        <a
                            href="mailto:darian@uxitall.com"
                            className="footer__link"
                        >
                            <img
                                src="/images/email.svg"
                                alt=""
                                className="footer__icon"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}
