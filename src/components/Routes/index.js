import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Tagged from "../../pages/Tagged";
import Post from "../../pages/Post";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/tagged/:tag" component={Tagged} />
    <Route path="/post/:id/:slug?" component={Post} />
  </BrowserRouter>
);

export default Routes;
