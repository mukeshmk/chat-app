import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Chat from './components/Chat';
import SignUp from './components/SignUp';

const App = () => (
    <Router>
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/chat' component={Chat} />
        </Switch>
    </Router>
);

export default App;
