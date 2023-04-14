import { useReducer } from "react";
import localforage from "localforage";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  cart: [],
  cartTotal: 0,
  cartQuantity: 0,
  order: [],
};

const actions = Object.freeze({
  ADD_TO_CART: "ADD_TO_CART",
  GET_PRODUCTS: "GET_PRODUCTS",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  ADD_QUANTITY: "ADD_QUANTITY",
  REDUCE_QUANTITY: "REDUCE_QUANTITY",
  CONFIRM_ORDER: "CONFIRM_ORDER",
  PREFILL_CART: "PREFILL_CART",
});

const reducer = (state, action) => {
  // GET PRODUCTS
  if (action.type == actions.GET_PRODUCTS) {
    if (action.backed_up_cart == []) {
      return { ...state, products: action.products };
    }
    // prefil cart
    const cartTotal = action.backed_up_cart.reduce(
      (acc, item) => acc + item.price,
      0
    );
    const cartQuantity = action.backed_up_cart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const updatedProducts = action.products.map((product) => {
      const cartItem = action.backed_up_cart.find(
        (item) => item._id === product._id
      );
      if (cartItem) {
        return { ...cartItem, addedToCart: true };
      } else {
        return product;
      }
    });
    return {
      ...state,
      products: updatedProducts,
      cart: action.backed_up_cart,
      cartQuantity,
      cartTotal,
    };
  }
  // ADD TO CART
  if (action.type == actions.ADD_TO_CART) {
    const product = state.products.find(
      (product) => product._id == action.product
    );
    product.addedToCart = true;
    product.quantity = 1;

    // backup with local Forage here
    localforage.setItem("cartItems", [...state.cart, product]);

    return {
      ...state,
      cart: [...state.cart, product],
      cartQuantity: state.cartQuantity + 1,
      cartTotal: state.cartTotal + product.price,
    };
  }
  // Remove from cart
  if (action.type == actions.REMOVE_FROM_CART) {
    const product = state.products.find(
      (product) => product._id == action.product
    );
    const newCart = state.cart.filter(
      (product) => product._id != action.product
    );
    const updatedProduct = { ...product, addedToCart: false };
    localforage.setItem("cartItems", newCart);

    // recalculate cart total
    let newCartTotal = 0;
    newCart.forEach((item) => {
      newCartTotal += item.price * item.quantity;
    });
    return {
      ...state,
      products: state.products.map((p) =>
        p._id === product._id ? updatedProduct : p
      ),
      cart: newCart,
      cartQuantity: state.cartQuantity - 1,
      cartTotal: newCartTotal,
    };
  }

  // add quantity
  if (action.type == actions.ADD_QUANTITY) {
    const product = state.cart.find((product) => product._id == action.product);
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

  // confirm order
  if (action.type == actions.CONFIRM_ORDER) {
    let payload = {
      items: state.cart,
      totalItemCount: state.cartQuantity,
      delivery_type: action.order.DeliveryType,
      delivery_type_cost: action.order.DeliveryTypeCost,
      cost_before_delivery_rate: state.cartTotal,
      cost_after_delivery_rate: action.order.costAfterDelieveryRate,
      promo_code: action.order.promo_code || "",
      contact_number: action.order.phoneNumber,
    };

    // place order
    fetch(`${import.meta.env.VITE_API_URL}/place-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const data = await response.json();
        toast.success(data.message);
      })
      .catch((err) => {
        toast.error("There was a problem placing your order, try again");
      });

    // clear cart
    localforage.setItem("cartItems", []);
    return {
      ...state,
      cart: [],
      cartQuantity: 0,
      cartTotal: 0,
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
    fetch(`${import.meta.env.VITE_API_URL}/get-products`)
      .then(async (response) => {
        const data = await response.json();
        let modifiedData = data.map((product) => {
          return { ...product, addedToCart: false };
        });
        let cart = (await localforage.getItem("cartItems")) || [];
        dispatch({
          type: actions.GET_PRODUCTS,
          products: modifiedData,
          backed_up_cart: cart,
        });
      })
      .catch((err) => {
        toast.error("There was a problem fetching products, check your internet connection and try again");
        return [];
      });
  };

  const addQuantity = (product) => {
    dispatch({ type: actions.ADD_QUANTITY, product });
  };

  const reduceQuantity = (product) => {
    dispatch({ type: actions.REDUCE_QUANTITY, product });
  };

  const confirmOrder = (order) => {
    dispatch({ type: actions.CONFIRM_ORDER, order });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    getProducts,
    addQuantity,
    reduceQuantity,
    confirmOrder,
  };
};

export default useStore;
