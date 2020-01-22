import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Login />

      {/* <Route exact path="/login" component={Login} /> */}
    </div>
  );
}



export default App;
