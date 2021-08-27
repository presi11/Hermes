import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { ORDERS } from "../../graphql/queries";
import OrderCard from "../../Components/OrderCard/OrderCard";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

const Orders = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  const { loading, error, data } = useQuery(ORDERS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <MDBTabs justify className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Pendientes
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Historial
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          {data.orders.map((order, index) => (
            <OrderCard key={index} order={order} pedent="Pediente"></OrderCard>
          ))}
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          Historial de todos los Pedidos
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
};

export default Orders;
