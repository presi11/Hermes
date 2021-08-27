import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBListGroupItem,
    MDBCardHeader,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBListGroup,
  } from "mdb-react-ui-kit";
 
// function isactive() {

// }  

const OrderCard = () => {
    return (
        <>
        <MDBCard className="text-center">
          <MDBCardHeader>
            <MDBTabs pills className="card-header-tabs">
              <MDBTabsItem>
                <MDBTabsLink active>Pendientes</MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink> Historial </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Estos son sus pedidos pendientes</MDBCardTitle>
            <MDBListGroup flush>
              <MDBListGroupItem></MDBListGroupItem>
            </MDBListGroup>
          </MDBCardBody>
        </MDBCard>
      </>
    )
}

export default OrderCard;