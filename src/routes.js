import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Pages */
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthenticationPage from './pages/authentication/AuthenticationPage';

/* Application Routing */
const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={AuthenticationPage} />
    </Switch>
);

export default Routes;