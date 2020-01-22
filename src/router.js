import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './components/login-component/login';


function RouterApp() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <Login />
                    </Route>
                    {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
                </Switch>
            </Router>
        </>
    );
}

export default RouterApp;
