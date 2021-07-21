import React, {Fragment} from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './Component/Login';
import Dashboard from "./Component/Dashboard";
import './App.css';

function App() {
  return (
        <Fragment>
          <h1 className="header">Welcome to Appiness Interactive</h1>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Redirect from="*" to='/dashboard' />
          </Switch>
        </Fragment>  
  );
}


export default App;
