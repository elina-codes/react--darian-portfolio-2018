import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import PageHome from "PageHome/PageHome";
import PageWork from "PageWork/PageWork";
import SectionWork from "SectionWork/SectionWork";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PageHome} />
            <Route path="/work/:projectId" component={PageWork} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
