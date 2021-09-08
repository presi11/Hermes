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

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  const { user } = useAuth0();
  const userMetadata = user["https://graphql-api/user_metadata"];

  const {
    data: Sorders,
    error: Sorderserror,
    loading: Sordersloading,
  } = useQuery(STATUSORDERS, {
    variables: {
      orderRestaurantName: userMetadata.restaurant,
      orderStatus: "Confirmado",
    },
  });

  const {
    data: Eorders,
    error: Eorderserror,
    loading: Eordersloading,
  } = useQuery(STATUSORDERS, {
    variables: { orderRestaurantName: "Pizzas Joty", orderStatus: "Entregado" },
  });

  if (Eordersloading) return "Loading...";
  if (Sordersloading) return "Loading...";
  if (Sorderserror) return `Error! ${Sorderserror.message}`;
  if (Eorderserror) return `Error! ${Eorderserror.message}`;

  
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
            {Sorders.order.map((order, index) => (
              <SpacingGrid key={index} order={order} />
            ))}
          </GridHOC>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <GridHOC>
            {Eorders.order.map((order, index) => (
              <SpacingGrid key={index} order={order} />
            ))}
          </GridHOC>
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
};

export default Orders;
