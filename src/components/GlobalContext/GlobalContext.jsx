import { createContext, useContext } from "react";
import useStore from "../../store/products";
import useAuth from "../../store/auth";
import useModal from "../../store/modal";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

const GlobalContext = ({ children }) => {
  const store = useStore();
  const auth = useAuth();
  const modal = useModal();
  return (
    <globalContext.Provider value={{ store, auth, modal }}>
      {children}
    </globalContext.Provider>
  );
};
export default GlobalContext;
