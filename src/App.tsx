import React from 'react';
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
import ProductItem from "./components/Products/ProductItem";
import Products from "./pages/Products";

const App = (props: { user: User }) => {

  return (
    <BrowserRouter>
      <Route path={"/"} exact component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/register"} component={Register} />
        <Route path={"/profile"} component={Profile} />
        <Route path={"/brands"} component={Brands} />
        <Route path={"/products"} exact component={Products}/>
        <Route path={"/products/:productId/:productTitle"} component={ProductItem} />
        <Route path={"/:id/:supercategory"} exact component={Supercategory} />
    </BrowserRouter>
  );
}

export default connect((state: {user: User}) => ({
  user: state.user
}))(App);
