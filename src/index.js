import React from "react";
import "./index.css";
import { render } from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import { CookiesProvider } from "react-cookie";

render(
  <CookiesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CookiesProvider>,

  document.getElementById("root")
);
