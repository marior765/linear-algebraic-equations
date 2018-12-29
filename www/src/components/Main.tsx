import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router';
import { ArrayContainer } from './LinearAE/ArrayContainer';

export const Main = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/linearAE/LU' component={ArrayContainer} />
                <Route path='/linearAE/QR' component={ArrayContainer} />
                <Route path='/linearAE/LDL' component={ArrayContainer} />
            </Switch>
        </div>
    )
}