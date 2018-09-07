import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Shelters from "./components/Shelters/Shelters";
import Donate from "./components/Donate/Donate";
import Volunteer from "./components/Volunteer/Volunteer";
import HowItWorks from "./components/HowItWorks/HowItWorks";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shelters" component={Shelters} />
    <Route path="/donate" component={Donate} />
    <Route path="/volunteer" component={Volunteer} />
    <Route path="/howitworks" component={HowItWorks} />
  </Switch>
);
