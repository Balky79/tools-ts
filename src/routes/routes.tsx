import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WheelContainer from '../components/wheel';
// import TopNavContainer from '../components/topnav';

export default (
    <Switch>
        <Route exact path="/">
            <Redirect to="/tools" />{' '}
        </Route>
        <Route exact path="/tools/wheel/:names" component={WheelContainer} />
        {/*<Route path="/alternativecv" component={AlternativeCVContainer} />*/}
    </Switch>
);
