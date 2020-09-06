import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Chat from './components/Chat';

const App = () => (
    <Router>
        <Route path='/' exact component={Login} />
        <Route path='/chat' component={Chat} />
    </Router>
);

export default App;
