import React from "react";
import { useQuery } from "@apollo/client";
import { ORDERS } from "../../graphql/queries";
import OrderCard from "../../Components/OrderCard/OrderCard"

const Orders = () => {
  const { loading, error, data } = useQuery(ORDERS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  data.orders.map((order, index) => {
    return <p key={index}>{JSON.stringify(order)}</p>;
  });


  return (
    <OrderCard></OrderCard>
  );
};

export default Orders;
