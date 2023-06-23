import React from "react";
import { useGlobalContext } from "../components/GlobalContext/GlobalContext";
import { useEffect } from "react";
import DeliveryEmpty from "../components/Delivery/DeliveryEmpty/DeliveryEmpty";
import DeliveryItem from "../components/Delivery/DeliveryItem/DeliveryItem";
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
        <div>
         {orders.state.orders.map((order) => {
            return <DeliveryItem key={order._id} order={order}></DeliveryItem>;
         })}
        </div>
      )}
    </div>
  );
};

export default DeliveryView;
