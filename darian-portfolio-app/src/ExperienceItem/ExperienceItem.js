import React, { Component } from "react";

export default class ExperienceItem extends Component {
    render() {
        return (
            <div className="grid experience-item">
                <div className="grid__item experience-item__title">
                    <h3 className="h4 experience-item__date">
                        {this.props.startDate} - {this.props.endDate}
                    </h3>
                    <h3 className="experience-item__company">
                        {this.props.company}
                    </h3>
                </div>
                <div className="grid__item experience-item__details">
                    <h3 className="experience-item__position">
                        {this.props.position}
                    </h3>
                    <div className="experience-item__duties">
                        {this.props.description}
                    </div>
                </div>
            </div>
        );
    }
}
