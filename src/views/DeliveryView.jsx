import React from "react";
import { useGlobalContext } from "../components/GlobalContext/GlobalContext";
import { useEffect, useState } from "react";
import DeliveryEmpty from "../components/Delivery/DeliveryEmpty/DeliveryEmpty";
import DeliveryItem from "../components/Delivery/DeliveryItem/DeliveryItem";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

const DeliveryView = () => {
  const { orders, auth, modal } = useGlobalContext();
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (auth.state.user) {
      setLoadingOrders(true);
      if (orders.state.orders.length <= 0) {
        orders.getOrders(auth.state.user.id);
      }
      if (orders.state.orders.length > 0) {
        setLoadingOrders(false);
      }
    } else {
      modal.openModal(false);
    }
  }, [auth.state.user]);

  const reloadOrders = async () => {
    setDisabled(true);
    toast.info("Reloading orders...");
    await orders.getOrders(auth.state.user.id);
    setDisabled(false);
    toast.success("Orders reloaded!");
  };

  return (
    <div>
      {auth.state.user == null ? (
        <DeliveryEmpty></DeliveryEmpty>
      ) : (
        <div>
          <div className="reload-orders">
            <button
              className="btn-rounded"
              onClick={reloadOrders}
              disabled={disabled}
            >
              Reload Orders
            </button>
          </div>
          {(orders.state.orders.length > 0 &&
            orders.state.orders.map((order) => {
              return (
                <DeliveryItem key={order._id} order={order}></DeliveryItem>
              );
            })) || <Skeleton height={500}></Skeleton>}
        </div>
      )}
    </div>
  );
};

export default DeliveryView;
