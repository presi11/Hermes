import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { STATUSORDERS, METADATA} from "../../graphql/queries";
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
  const {
    data: DataMetadata,
    error: Metadataerror,
    loading: Metadataloading,
  } = useQuery(METADATA, {
    variables: { userUserId: user.sub},
  });
  console.log(DataMetadata);

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  
  //const meRestaurant = DataMetadata.user.user_metadata.restaurant;
  //console.log(meRestaurant);

  const {
    data: orders,
    error: orderserror,
    loading: ordersloading,
  } = useQuery(STATUSORDERS, {
    variables: { orderRestaurantName: "Burger King", orderStatus: ["CONFIRMADO", "EN_PREPARACION", "PREPARADO"] },
  });
  
  const {
    data: ordersE,
    error: ordersEserror,
    loading: ordersEloading,
  } = useQuery(STATUSORDERS, {
    variables: {
      orderRestaurantName:"Burger King", orderStatus:["ENTREGADO", "ANULADO"]
      
    },
  });

  if (ordersloading) return "Loading...";
  if (ordersEloading) return "Loading...";
  if (Metadataloading) return "Loading...";
  if (ordersEserror) return `Error! ${ordersEserror.message}`;
  if (orderserror) return `Error! ${orderserror.message}`;
  if (Metadataerror) return `Error! ${Metadataerror.message}`;


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
