import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BasicApp from "./basic/BasicApp";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <BasicApp />
  </Router>,
  document.getElementById("root")
);
