import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBListGroupItem,
  MDBListGroup,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import InformationModal from "../Information/InformationModal";

const OrderCard = ({ order }) => {
  const { orderId, created_at, menus, user } = order;

  return (
    <>
      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg"
            fluid
            alt="..."
          />
        </MDBRipple>
        <MDBCardBody>
          {orderId ? (
            <MDBCardTitle>{`Pedido #${orderId}`} </MDBCardTitle>
          ) : (
            "Numero del pedido"
          )}
          <MDBListGroup flush>
            <MDBListGroupItem>{created_at}</MDBListGroupItem>
            <MDBListGroupItem>
              <MDBCardText>{user}</MDBCardText>
            </MDBListGroupItem>
            <MDBListGroupItem>
              <MDBCardText>
                {menus.map((menuObj, index) => {
                  const {
                  
                      menu: { name, unit_price },
               
                  } = menuObj;
                  return <span key={index} >{name} {unit_price}</span>
                })}
              </MDBCardText>
            </MDBListGroupItem>
          </MDBListGroup>
          <InformationModal order={order}> </InformationModal>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default OrderCard;
