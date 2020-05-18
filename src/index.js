import React from 'react';
import "./index.css"
import {render} from 'react-dom';
import {BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css"
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css"

render(
    <React.StrictMode>
        <Router>
            <Routes />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);