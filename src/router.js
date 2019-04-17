
import React from "react";
import {Route} from "react-router-dom";
import SignUp from "./containers/SignUp";
import WelcomePage from "./containers/WelcomePage";
import LogIn from "./containers/LogIn";


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/signup/' component={SignUp} />
        <Route exact path='/login/' component={LogIn} />
    </div>
);

export default BaseRouter;