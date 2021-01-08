import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
      if(user){
          db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("created")
            .onSnapshot((snapshot) =>
              setOrders(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
                }))
              )
            );
      }else{
          setOrders([])
      }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
      {orders?.map(order =>(
          {/* <Order order={order}/> */}
      ))}
      </div>
    </div>
  );
}

export default Orders;
