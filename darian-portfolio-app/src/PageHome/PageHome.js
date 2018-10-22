import React, { Component } from "react";
import Navigation from "Navigation/Navigation";
import SectionHome from "SectionHome/SectionHome";
import SectionWhatIDo from "SectionWhatIDo/SectionWhatIDo";
import SectionWork from "SectionWork/SectionWork";
import SectionExperience from "SectionExperience/SectionExperience";
import Footer from "Footer/Footer";
import homeSections from "common/data/home-sections";
import workItems from "common/data/work-items";
import experienceItems from "common/data/experience-items";

export default class PageHome extends Component {
    state = {
        sections: homeSections,
        workItems: workItems,
        experienceItems: experienceItems
    };

    goToProject = e => {
        debugger;
        e.preventDefault();
        const workUrl = e.currentTarget.getAttribute("href");
        this.props.history.push(`/work/${workUrl}`);
    };

    toggleMobileNav = () => {
        document.body.classList.toggle("open-nav");
    };

    render() {
        return (
            <React.Fragment>
                <Navigation
                    sections={this.state.sections}
                    toggleMobileNav={this.toggleMobileNav}
                />
                <main>
                    <SectionHome
                        title={this.state.sections["home"].title}
                        id={this.state.sections["home"].id}
                    />
                    <SectionWhatIDo
                        title={this.state.sections["whatido"].title}
                        id={this.state.sections["whatido"].id}
                    />
                    <SectionWork
                        title={this.state.sections["work"].title}
                        id={this.state.sections["work"].id}
                        workItems={this.state.workItems}
                        goToProject={this.goToProject}
                    />
                    <SectionExperience
                        title={this.state.sections["experience"].title}
                        id={this.state.sections["experience"].id}
                        experienceItems={this.state.experienceItems}
                    />
                    <Footer
                        title={this.state.sections["contact"].title}
                        id={this.state.sections["contact"].id}
                    />
                </main>
                <div
                    className="mobile-nav-overlay"
                    onClick={this.toggleMobileNav}
                />
            </React.Fragment>
        );
    }
}
