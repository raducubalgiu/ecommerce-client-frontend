import React from 'react';
import './index.css';
import {BrowserRouter, Route} from "react-router-dom";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Boys from "./pages/Boys";
import Girls from "./pages/Girls";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/"} exact component={Home}></Route>
      <Route path={"/mens"} component={Mens} />
      <Route path={"/womens"} component={Womens} />
      <Route path={"/boys"} component={Boys} />
      <Route path={"/girls"} component={Girls} />
    </BrowserRouter>
  );
}

export default App;
