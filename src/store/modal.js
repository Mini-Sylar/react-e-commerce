import { useReducer } from "react";

const initialState = {
  opened: false,
  isRegister: false,
  isCancelModal: false,
};

const actions = Object.freeze({
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_CANCEL_MODAL: "OPEN_CANCEL_MODAL",
  CLOSE_CANCEL_MODAL: "CLOSE_CANCEL_MODAL",
});

const reducer = (state, action) => {
  if (action.type == actions.OPEN_MODAL) {
    return { ...state, opened: true };
  }

  if (action.type == actions.CLOSE_MODAL) {
    return { ...state, opened: false };
  }

  if (action.type == actions.OPEN_CANCEL_MODAL) {
    return { ...state, isCancelModal: true };
  }

  if (action.type == actions.CLOSE_CANCEL_MODAL) {
    return { ...state, isCancelModal: false };
  }

  return state;
};

const useModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (isRegister = true) => {
    state.isRegister = isRegister;
    dispatch({ type: actions.OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: actions.CLOSE_MODAL });
  };

  const openCancelModal = () => {
    dispatch({ type: actions.OPEN_CANCEL_MODAL });
  };

  const closeCancelModal = () => {
    dispatch({ type: actions.CLOSE_CANCEL_MODAL });
  };

  return { ...state, openModal, closeModal, openCancelModal, closeCancelModal };
};

export default useModal;
