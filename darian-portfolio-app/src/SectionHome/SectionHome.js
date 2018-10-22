import React, { Component } from "react";
import "./section-home.css";

export default class SectionHome extends Component {
    render() {
        return (
            <section id={this.props.id}>
                <div className="wrapper">
                    <h1 className="home__title">Darian Grant</h1>
                    <h2 className="home__subtitle">UX Strategist</h2>
                </div>
            </section>
        );
    }
}
