import { useReducer } from "react";

const initialState = {
  opened: false,
};

const actions = Object.freeze({
  OPEN_MODAL: "OPEN_MODAL",
});


const reducer = (state, action) => {
    if (action.type == actions.OPEN_MODAL) {
        return { ...state, opened: true };
    }
    return state;
    }

const useModal = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const openModal = () => {
        dispatch({ type: actions.OPEN_MODAL });
    };
    
    return { ...state, openModal };
    }

export default useModal;

