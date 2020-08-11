import React, { useContext, useEffect } from "react";
import Routes from "./routes";
import Context from "./store/context";
import { Switch } from "react-router-dom";
import useGlobalState from "./store/useGlobalState";
import axios from "axios";

const App = () => {
  const store = useGlobalState();

  return (
    <Context.Provider value={store}>
      <div>
        <Routes />
      </div>
    </Context.Provider>
  );
};

export default App;
