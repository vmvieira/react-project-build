import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./components/Homepage";
import Grid from "./components/Grid";
import Modal from "./components/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard" component={Grid} />
        <Route exact path="/dashboard/:id" component={Modal} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
