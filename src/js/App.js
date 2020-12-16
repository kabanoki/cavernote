import React from 'react';
import HomeView from './views/Home';

import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomeView></HomeView>
                </Route>
            </Switch>
        </Router>
    )
}