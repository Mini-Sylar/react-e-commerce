import { createContext, useContext } from "react";
import useStore from "../../store/products";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

const GlobalContext = ({ children }) => {
  const store = useStore();

  return (
    <globalContext.Provider value={store}>{children}</globalContext.Provider>
  );
};
export default GlobalContext;
