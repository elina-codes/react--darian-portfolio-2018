import React, { Component } from "react";
import Navigation from "Navigation/Navigation";
import SectionHome from "SectionHome/SectionHome";
import SectionWhatIDo from "SectionWhatIDo/SectionWhatIDo";
import SectionWork from "SectionWork/SectionWork";
import SectionExperience from "SectionExperience/SectionExperience";
import Footer from "Footer/Footer";
import homeSections from "common/data/home-sections";

export default class PageHome extends Component {
    state = {
        sections: homeSections
    };

    render() {
        return (
            <React.Fragment>
                <Navigation sections={this.state.sections} />
                <h1>Hello!</h1>
                <Footer
                    title={this.state.sections["contact"].title}
                    id={this.state.sections["contact"].id}
                />
            </React.Fragment>
        );
    }
}
