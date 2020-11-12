//@flow

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "../Users";

const Tool = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Users} />
    </Switch>
  </BrowserRouter>
);

export default Tool;
