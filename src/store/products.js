import { useReducer } from "react";

const initialState = {
  products: [],
  cart: [],
  cartTotal: 0,
  cartQuantity: 0,
};

const actions = {
  ADD_TO_CART: "ADD_TO_CART",
  GET_PRODUCTS: "GET_PRODUCTS",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

const reducer = (state, action) => {
  if (action.type == actions.GET_PRODUCTS) {
    console.log({ ...state, products: action.products });
    return { ...state, products: action.products };
  }
  return state;
};

const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: actions.ADD_TO_CART, product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: actions.REMOVE_FROM_CART, product });
  };

  const clearCart = () => {
    dispatch({ type: actions.CLEAR_CART });
  };
  const getProducts = () => {
    fetch("http://localhost:3000/api/get-products").then(async (response) => {
      const data = await response.json();
      dispatch({ type: actions.GET_PRODUCTS, products: data });
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    getProducts,
  };
};

export default useStore;
