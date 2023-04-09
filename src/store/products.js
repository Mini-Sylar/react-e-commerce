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
  ADD_QUANTITY: "ADD_QUANTITY",
  REDUCE_QUANTITY: "REDUCE_QUANTITY",
};

const reducer = (state, action) => {
  if (action.type == actions.GET_PRODUCTS) {
    return { ...state, products: action.products };
  }
  // ADD TO CART
  if (action.type == actions.ADD_TO_CART) {
    const product = state.products.find(
      (product) => product._id == action.product
    );
    product.addedToCart = true;
    product.quantity = 1;
    return {
      ...state,
      cart: [...state.cart, product],
      cartQuantity: state.cartQuantity + 1,
      cartTotal: state.cartTotal + product.price,
    };
  }
  // Remove from cart
  if (action.type == actions.REMOVE_FROM_CART) {
    const product = state.cart.find((product) => product._id == action.product);
    const newCart = state.cart.filter(
      (product) => product._id != action.product
    );

    product.addedToCart = false;
    return {
      ...state,
      cart: newCart,
      cartQuantity: state.cartQuantity - 1,
      cartTotal: state.cartTotal - product.price,
    };
  }
  // add quantity
  if (action.type == actions.ADD_QUANTITY) {
    const product = state.cart.find((product) => product._id == action.product);
    console.log(product)
    product.quantity = product.quantity + 1;
    return {
      ...state,
      cartTotal: state.cartTotal + product.price,
    };
  }

  // reduce quantity
  if (action.type == actions.REDUCE_QUANTITY) {
    const product = state.cart.find((product) => product._id == action.product);
    if (product.quantity == 1) {
      return state;
    }
    product.quantity = product.quantity - 1;
    return {
      ...state,
      cartTotal: state.cartTotal - product.price,
    };
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
    fetch("http://localhost:3000/api/get-products")
      .then(async (response) => {
        const data = await response.json();
        let modifiedData = data.map((product) => {
          return { ...product, addedToCart: false };
        });
        dispatch({ type: actions.GET_PRODUCTS, products: modifiedData });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addQuantity = (product) => {
    dispatch({ type: actions.ADD_QUANTITY, product });
  };

  const reduceQuantity = (product) => {
    dispatch({ type: actions.REDUCE_QUANTITY, product });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    getProducts,
    addQuantity,
    reduceQuantity,
  };
};

export default useStore;
