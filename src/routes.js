import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Shelters from "./components/Shelters/Shelters";
import Donate from "./components/Donate/Donate";
import Volunteer from "./components/Volunteer/Volunteer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Registration from "./components/Registration/Registration";
import WizardTwo from "./components/WizardTwo/WizardTwo";
import WizardThree from "./components/WizardThree/WizardThree";
import WizardFour from "./components/WizardFour/WizardFour";
import UserProfile from "./components/UserProfile/UserProfile";
import WizardTwoShelter from "./components/wizardTwoShelter/WizardTwoShelter";
import WizardThreeShelter from "./components/WizardThreeShelter/WizardThreeShelter";
import ShelterProfile from "./components/ShelterProfile/ShelterProfile";
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shelters" component={Shelters} />
    <Route path="/donate" component={Donate} />
    <Route path="/volunteer" component={Volunteer} />
    <Route path="/howitworks" component={HowItWorks} />
    <Route path="/wizardOneRegistration" component={Registration} />
    <Route path="/wizardTwo" component={WizardTwo} />
    <Route path="/wizardThree" component={WizardThree} />
    <Route path="/wizardFour" component={WizardFour} />
    <Route path="/userProfile" component={UserProfile} />
    <Route path="/wizardTwoShelter" component={WizardTwoShelter} />
    <Route path="/wizardThreeShelter" component={WizardThreeShelter} />
    <Route path="/shelterProfile" component={ShelterProfile} />
  </Switch>
);
