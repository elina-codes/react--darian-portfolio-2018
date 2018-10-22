import React, { Component } from "react";

export default class HomeSection extends Component {
    render() {
        return (
            <section id={this.props.id}>
                <div className="wrapper">
                    <h2 className="section__title">{this.props.title}</h2>

                    {this.props.children}
                </div>
            </section>
        );
    }
}
