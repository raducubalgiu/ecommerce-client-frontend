import React, {useReducer, useState} from 'react';
import './index.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {connect} from "react-redux";
import {User} from "./models/userModel";
import Profile from "./pages/Profile";
import Supercategory from "./pages/Supercategory";
import Brands from "./pages/Brands";

function App(props: { user: User }) {

  return (
    <BrowserRouter>
      <Route path={"/"} exact component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/register"} component={Register} />
        <Route path={"/profile"} component={Profile} />
        <Route path={"/brands"} component={Brands} />
        <Route path={"/:id/:supercategory"} component={Supercategory} />
    </BrowserRouter>
  );
}

export default connect((state: {user: User}) => ({
  user: state.user
}))(App);
