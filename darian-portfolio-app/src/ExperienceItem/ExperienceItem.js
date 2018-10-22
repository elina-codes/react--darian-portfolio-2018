import React, { Component } from "react";

export default class ExperienceItem extends Component {
    render() {
        return (
            <div class="grid experience-item">
                <div class="grid__item experience-item__title">
                    <h3 class="h4 experience-item__date">
                        {this.props.startDate} - {this.props.endDate}
                    </h3>
                    <h3 class="experience-item__company">
                        {this.props.company}
                    </h3>
                </div>
                <div class="grid__item experience-item__details">
                    <h3 class="experience-item__position">
                        {this.props.position}
                    </h3>
                    <div class="experience-item__duties">
                        {this.props.description}
                    </div>
                </div>
            </div>
        );
    }
}
