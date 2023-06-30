import React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer } from "./AppContainer";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
