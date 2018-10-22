import React, { Component } from "react";
import Navigation from "Navigation/Navigation";
import WorkSection from "WorkSection/WorkSection";
import Footer from "Footer/Footer";
import homeSections from "common/data/home-sections";
import "./page-work.css";

export default class PageHome extends Component {
    state = {
        sections: homeSections
    };

    toggleMobileNav = () => {
        document.body.classList.toggle("open-nav");
    };

    componentDidMount() {
        document.title = "Work Title | Darian Grant";
    }

    render() {
        return (
            <React.Fragment>
                <Navigation
                    sections={this.state.sections}
                    toggleMobileNav={this.toggleMobileNav}
                />
                <main>
                    <section className="work__header work__section">
                        <div className="wrapper wrapper--short">
                            <h1 className="work__header__title">Otherly</h1>
                            <span className="h4 work__header__subtitle">
                                Freelance
                            </span>
                        </div>
                    </section>

                    <WorkSection
                        imgSrc={"../images/otherly-01.jpg"}
                        imgAlt={"The final version of Otherly's mobile app"}
                    >
                        <div className="work__description">
                            <p>For people to selflessly help each other.</p>
                            <p>
                                This platform was designted to make it fun and
                                easy for friends and neighbors to give and get
                                help for anything, anywhere.
                            </p>
                        </div>

                        <h3>The problem</h3>
                        <p>
                            When I came on board, the devs had already built an
                            MVP but were{" "}
                            <strong>
                                not seeing any traction at all. There was no
                                clear vision from the CEO{" "}
                            </strong>
                            , and every dev in the company had an equal say in
                            how the site should be designed and built. This
                            resulted in a Frankenstein’s monster of an MVP, with{" "}
                            <strong>
                                no flow, no informational hierarchy or
                                prioritization, and an overwhelming amount of
                                poorly thought-out features{" "}
                            </strong>
                            that meant nothing to their users.
                        </p>

                        <h3>My role</h3>
                        <p>
                            I was hired on as the Lead UX Designer,{" "}
                            <strong>
                                to redo the MVP and to get this product back on
                                track.
                            </strong>
                        </p>
                    </WorkSection>

                    <WorkSection
                        imgSrc={"../images/otherly-02.jpg"}
                        imgAlt={"A screenshot of the original platform"}
                    >
                        <h3>Original designs</h3>
                        <p>
                            <strong>
                                This is what was built before I joined the
                                company.
                            </strong>{" "}
                            It was designed and built by the programmers, and
                            seemed to have no consistency, focus, or flow. They
                            knew it needed some work, but did not understand how
                            much, so{" "}
                            <strong>
                                I started doing quick Usability Tests to show
                                them the overwhelming, negative feedback
                            </strong>
                            , and that almost everything needed to change.
                        </p>
                        <p>
                            <a href="https://docs.google.com/document/d/1gFmh2xnEdWYQS0itI9TO8oxCf1OyO4CmmD_FpzmPP88/edit?usp=sharing">
                                Here are some raw notes from one of my quick
                                usability tests.
                            </a>
                        </p>
                        <p>
                            Once{" "}
                            <strong>
                                I proved to the team and CEO that there were
                                some serious issues
                            </strong>
                            , there was immediate buy-in for UX.
                        </p>
                    </WorkSection>

                    <WorkSection
                        imgSrc={"../images/otherly-03.jpg"}
                        imgAlt={
                            "The team at Otherly planning our MVP and roadmap"
                        }
                    >
                        <h4>Wrangling the CEO and team together</h4>
                        <h3>Defining business goals</h3>
                        <p>
                            After the results from the usability tests,{" "}
                            <strong>
                                I worked with the CEO to define the business
                                goals.
                            </strong>{" "}
                            This presented an even greater challenge because he
                            had not really defined them before, and he wanted to
                            target two completely opposite audiences with the
                            same features.
                        </p>
                        <p>
                            I worked with him and the team to I came up with
                            some targets to hit and some KPIs to start tracking.{" "}
                            <strong>
                                Then I had them create a new roadmap
                            </strong>{" "}
                            and we agreed on a deadline for the MVP of the new
                            version of Otherly.
                        </p>
                        <p>We were really starting to feel like a team here.</p>
                    </WorkSection>
                </main>
                <Footer
                    title={this.state.sections["contact"].title}
                    id={this.state.sections["contact"].id}
                />
                <div
                    className="mobile-nav-overlay"
                    onClick={this.toggleMobileNav}
                />
            </React.Fragment>
        );
    }
}
