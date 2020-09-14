import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/login/login";
import Register from "./components/register/register";

import Property from "./components/property/property";
import propertyDetail from './components/property_detail/propertyDetail';
import Search from './components/partials/Search'
import Submit from './components/post/Post'
import Profile from './components/profile/Profile'
import myProperties from './components/my-properties/myProperties';

function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/property" component={Property} />
        <Route exact path="/property-detail" component={propertyDetail} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/my-properties" component={myProperties} />
      </div>
    </Router>

  );
}

export default App;
