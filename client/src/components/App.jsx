import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../styles/App.css';
import Login from './Login';
import Signup from './SignUp';

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/login'} component={Login} />
                <Route path='/signup' component={Signup}/>
            </Switch>
        </Router>
    )
}

export default App;