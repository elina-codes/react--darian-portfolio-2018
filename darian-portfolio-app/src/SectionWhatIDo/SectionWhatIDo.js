import React, { Component } from "react";
import HomeSection from "../HomeSection/HomeSection";
import "./section-whatido.css";

export default class SectionWhatIDo extends Component {
    render() {
        return (
            <HomeSection id={this.props.id} title={this.props.title}>
                <div className="grid">
                    <div className="grid__item">
                        <img
                            src="images/set-goals.svg"
                            alt=""
                            className="what-i-do__img"
                        />
                        <h3>Set Goals</h3>
                        <p>
                            I work with you to define and solidify your business
                            goals so everyone understands why we’re doing what
                            we’re doing, and the overall direction of the
                            company and project.
                        </p>
                    </div>
                    <div className="grid__item">
                        <img
                            src="images/adapt-the-process.svg"
                            alt=""
                            className="what-i-do__img"
                        />
                        <h3>Adapt the Process</h3>
                        <p>
                            I then adapt the UX process to best fit your goals,
                            timeframe, budget, and project, then define a
                            roadmap.
                        </p>
                    </div>
                    <div className="grid__item">
                        <img
                            src="images/ux-it-all.svg"
                            alt=""
                            className="what-i-do__img"
                        />
                        <h3>UX it All!</h3>
                        <p>
                            I then work where I'm needed to make sure your
                            project is researched, wireframed, prototyped,
                            tested, documented, released, reiterated, and
                            hitting your KPIs.
                        </p>
                    </div>
                </div>
            </HomeSection>
        );
    }
}
