import React, { Component } from "react";
import "./navigation.css";

export default class Navigation extends Component {
    render() {
        return (
            <header className="App">
                <nav>
                    {Object.keys(this.props.sections).map(key => (
                        <a href={`#${this.props.sections[key].id}`} key={key}>
                            {this.props.sections[key].title}
                        </a>
                    ))}
                </nav>
            </header>
        );
    }
}
