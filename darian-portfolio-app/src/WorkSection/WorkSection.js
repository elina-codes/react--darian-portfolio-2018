import React, { Component } from "react";

export default class WorkSection extends Component {
    render() {
        return (
            <section className="work__section">
                <div className="grid wrapper">
                    <div className="grid__item work__section__text">
                        {this.props.children}
                    </div>
                    <div className="grid__item work__section__image">
                        <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                    </div>
                </div>
            </section>
        );
    }
}
