import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root")); //1st argument is what do you want to render and second argument is where do you want to render

serviceWorker.unregister();
