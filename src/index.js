import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

render(
    <React.StrictMode>
        <Router>
            <Routes />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);