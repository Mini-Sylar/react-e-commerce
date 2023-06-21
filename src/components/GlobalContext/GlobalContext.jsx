import { createContext, useContext } from "react";
import useStore from "../../store/products";
import useAuth from "../../store/auth";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

const GlobalContext = ({ children }) => {
  const store = useStore();
  const auth = useAuth();

  return (
    <globalContext.Provider value={{ store, auth }}>
      {children}
    </globalContext.Provider>
  );
};
export default GlobalContext;
