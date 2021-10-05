import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { STATUSORDERS } from "../../graphql/queries";
import SpacingGrid from "../../Components/Grid/Grid";
import GridHOC from "../../HOC/Layout/GridHOC";

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

const Orders = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const { user } = useAuth0();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const userMetadata = user["https://graphql-api/user_metadata"];
  const {
    data: orders,
    error: orderserror,
    loading: ordersloading,
  } = useQuery(STATUSORDERS, {
    variables: {
      orderRestaurantName: userMetadata.restaurant,
      orderStatus: "CONFIRMADO",
    },
  });

  const {
    data: ordersE,
    error: ordersEserror,
    loading: ordersEloading,
  } = useQuery(STATUSORDERS, {
    variables: {
      orderRestaurantName: userMetadata.restaurant,
      orderStatus: "ENTREGADO",
    },
  });

  if (ordersloading) return "Loading...";
  if (ordersEloading) return "Loading...";

  if (ordersEserror) return `Error! ${ordersEserror.message}`;
  if (orderserror) return `Error! ${orderserror.message}`;

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
          <GridHOC>
            {orders.order.map((order, index) => (
              <SpacingGrid key={index} order={order} />
            ))}
          </GridHOC>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <GridHOC>
            {ordersE.order.map((order, index) => (
              <SpacingGrid key={index} order={order} />
            ))}
          </GridHOC>
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
};

export default Orders;
