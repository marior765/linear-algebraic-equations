import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router';
import { ArrayContainer } from './LinearAE/ArrayContainer';
import { Navigation } from './Navigation';
import SnakeRoot from './Snake/SnakeRoot';

export const Main = () => {
    return (
        <div>
            <Header />
                <Switch>
                    <Route path='/' component={Navigation} exact />
                    <Route path='/linearAE/LU' component={ArrayContainer} />
                    <Route path='/linearAE/QR' component={ArrayContainer} />
                    <Route path='/linearAE/LDL' component={ArrayContainer} />
                    <Route path='/snake' component={SnakeRoot} />
                </Switch>
        </div>
    )
}