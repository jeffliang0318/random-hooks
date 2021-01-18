import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Head from './header'
import RandomUser from './random-user'
import Home from './Home'

function App() {

  return (
    <Router>
      <Head></Head>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/random-user">
            <RandomUser />
          </Route>
          <Route path="/ref">
            {/* <Dashboard /> */}
          </Route>
        </Switch>
    </Router>
  );
}


export default App;
