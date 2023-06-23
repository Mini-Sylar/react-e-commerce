import { useReducer } from "react";

const initialState = {
  orders: [],
  order_to_be_canceled: null,
};

const actions = Object.freeze({
  GET_ORDERS: "GET_ORDERS",
  GET_ORDER_TO_BE_CANCELED: "GET_ORDER_TO_BE_CANCELED",
});

const reducer = (state, action) => {
  if (action.type == actions.GET_ORDERS) {
    return { ...state, orders: action.orders };
  }

  if (action.type == actions.GET_ORDER_TO_BE_CANCELED) {
    return { ...state, order_to_be_canceled: action.order_id };
  }
  return state;
};

const useOrders = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getOrders = async (user_id) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/get-orders/${user_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
      }
    );

    const data = await response.json();
    if (data.error) {
      return data.error;
    }
    dispatch({ type: actions.GET_ORDERS, orders: data.orders });
    return data.orders;
  };

  const setOrderToBeCanceled = (order_id) => {
    dispatch({ type: actions.GET_ORDER_TO_BE_CANCELED, order_id });
  };

  const cancelOrder = async (order_id) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/cancel-order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({ order_id }),
      }
    );

    const data = await response.json();

    if (data.error) {
      return data.error;
    }

    dispatch({ type: actions.GET_ORDER_TO_BE_CANCELED, order_id: null });
    getOrders(data.user_id);

    return data;
  };

  return { state, getOrders, setOrderToBeCanceled, cancelOrder };
};

export default useOrders;
