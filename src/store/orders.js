import { useReducer } from "react";

const initialState = {
  orders: [],
};

const actions = Object.freeze({
  GET_ORDERS: "GET_ORDERS",
});

const reducer = (state, action) => {
  if (action.type == actions.GET_ORDERS) {
    return { ...state, orders: action.orders };
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
    console.log(data);
    if (data.error) {
      return data.error;
    }

    dispatch({ type: actions.GET_ORDERS, orders: data.orders });

    return data.orders;
  };
  return { state, getOrders };
};

export default useOrders;
