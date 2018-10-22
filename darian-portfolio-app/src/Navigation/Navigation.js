import React, { Component } from "react";
import "./navigation.css";

export default class Navigation extends Component {
    render() {
        return (
            <header>
                <nav>
                    {Object.keys(this.props.sections).map(key => (
                        <a
                            href={`/#${this.props.sections[key].id}`}
                            key={key}
                            onClick={this.props.toggleMobileNav}
                        >
                            {this.props.sections[key].title}
                        </a>
                    ))}
                </nav>
                <button
                    id="js--mobile-nav-toggle"
                    className="mobile-nav-toggle"
                    onClick={this.props.toggleMobileNav}
                >
                    MENU
                </button>
            </header>
        );
    }
}
