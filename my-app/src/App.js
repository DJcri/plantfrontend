import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PlantList from './components/PlantList';
// import CreateNewUser from './components/CreateNewUser'

import './App.css';

import "./css/Login.css";
import "./css/PlantCard.css";
import "./css/PlantList.css";

const App = () => {
  return (

    <Router>
       <div className="App">
           <Route exact path="/" component={Login} /> 
           {/* <Route exact path="/" component={CreateNewUser} />  */}
           <PrivateRoute path="/plantlist" component={PlantList} /> 
           <h1>This is the App</h1>      
      </div>
    </Router>
  );
}

export default App;
