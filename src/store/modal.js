import { useReducer } from "react";

const initialState = {
  opened: false,
};

const actions = Object.freeze({
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
});

const reducer = (state, action) => {
  if (action.type == actions.OPEN_MODAL) {
    return { ...state, opened: true };
  }

  if (action.type == actions.CLOSE_MODAL) {
    return { ...state, opened: false };
  }
  return state;
};

const useModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    dispatch({ type: actions.OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: actions.CLOSE_MODAL });
  };

  return { ...state, openModal, closeModal };
};

export default useModal;
