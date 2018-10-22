import React, { Component } from "react";
import HomeSection from "../HomeSection/HomeSection";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import "./section-experience.css";

export default class SectionExperience extends Component {
    render() {
        return (
            <HomeSection id={this.props.id} title={this.props.title}>
                <div class="experience-container">
                    {Object.keys(this.props.experienceItems).map(key => (
                        <ExperienceItem
                            key={key}
                            startDate={
                                this.props.experienceItems[key].startDate
                            }
                            endDate={this.props.experienceItems[key].endDate}
                            company={this.props.experienceItems[key].company}
                            position={this.props.experienceItems[key].position}
                            description={
                                this.props.experienceItems[key].description
                            }
                        />
                    ))}
                </div>
            </HomeSection>
        );
    }
}
