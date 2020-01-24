import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './components/login-component/login';
import SingUp from './components/singup-compnent/singup';
import Home from './components/home-component/home'


function RouterApp() {
    return (< >
        <Router>
            <Switch >
                <Route exact path="/" component={Login} />
                <Route path="/Login" component={Login} />
                <Route path="/SingUp" component={SingUp} />
                <Route path="/Home" component={Home} />
            </Switch>
        </Router> </>
    );
}

export default RouterApp;