import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { globalStyles } from "styles";

globalStyles();

ReactDOM.render(<App />, document.getElementById("root"));
