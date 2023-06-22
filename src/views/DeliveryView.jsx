import React from "react";
import { useGlobalContext } from "../components/GlobalContext/GlobalContext";
import { useEffect } from "react";
import DeliveryEmpty from "../components/Delivery/DeliveryEmpty";
const DeliveryView = () => {
  const { orders, auth, modal } = useGlobalContext();

  useEffect(() => {
    if (auth.state.user) {
      orders.getOrders(auth.state.user.id);
    } else {
      modal.openModal(false);
    }
  }, [auth.state.user]);

  return (
    <div>
      {orders.state.orders.length === 0 ? (
        <DeliveryEmpty></DeliveryEmpty>
      ) : (
        <div>DeliveryView</div>
      )}
    </div>
  );
};

export default DeliveryView;
