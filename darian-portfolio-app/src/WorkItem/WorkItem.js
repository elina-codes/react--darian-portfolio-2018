import React, { Component } from "react";

export default class WorkItem extends Component {
    DutiesList = () => {
        const duties = this.props.duties;
        const listItems = duties.map(duty => (
            <li className="work__duties__list__item" key={duty}>
                {duty}
            </li>
        ));
        return <ul className="work__duties__list">{listItems}</ul>;
    };

    goToProject = event => {
        event.preventDefault();
        const projectName = this.props.url;
        this.props.history.push(`/work/${projectName}`);
    };

    render() {
        console.log(this);
        return (
            <a
                className="work__grid__item grid__item"
                href={this.props.url}
                onClick={this.goToProject}
            >
                <div
                    style={{ backgroundImage: `url(${this.props.mainImage})` }}
                    className="work__image"
                />
                <div className="work__grid__item__details">
                    <h3>{this.props.title}</h3>
                    {<this.DutiesList />}
                </div>
            </a>
        );
    }
}
