import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Pages */
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';


/* Application Routing */
const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
    </Switch>
);

export default Routes;