import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Home from "./pages/Home/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./pages/List/List";
import View from "./pages/View/View";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/cars/:id">
          <View />
        </Route>
        <Route path="/cars">
          <List />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
