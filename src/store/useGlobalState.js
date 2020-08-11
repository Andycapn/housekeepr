import { useState } from "react";

const useGlobalState = () => {
  const [state, setState] = useState({
    id: "",
    first_name: "",
    last_name: "",
    sidebarOpen: false,
  });

  return { state, setState };
};

export default useGlobalState;
