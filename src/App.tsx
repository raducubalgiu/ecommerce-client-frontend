import React from 'react';
import './index.css';
import {BrowserRouter, Route} from "react-router-dom";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Boys from "./pages/Boys";
import Girls from "./pages/Girls";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/"} exact component={Home} />
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
        <Route path={"/mens"} component={Mens} />
        <Route path={"/womens"} component={Womens} />
        <Route path={"/boys"} component={Boys} />
        <Route path={"/girls"} component={Girls} />
    </BrowserRouter>
  );
}

export default App;
