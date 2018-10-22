import React, { Component } from "react";
import HomeSection from "../HomeSection/HomeSection";
import WorkItem from "../WorkItem/WorkItem";
import "./section-work.css";

export default class SectionWork extends Component {
    render() {
        return (
            <HomeSection id={this.props.id} title={this.props.title}>
                <div class="work__grid grid">
                    {Object.keys(this.props.workItems).map(key => (
                        <WorkItem
                            key={key}
                            title={this.props.workItems[key].title}
                            duties={this.props.workItems[key].duties}
                            mainImage={this.props.workItems[key].mainImage}
                        />
                    ))}
                </div>
            </HomeSection>
        );
    }
}
