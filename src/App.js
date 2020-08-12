import React from "react";
import Routes from "./routes";
import Context from "./store/context";
import useGlobalState from "./store/useGlobalState";

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
