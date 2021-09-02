import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBListGroupItem,
  MDBListGroup,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

// function isactive() {

// }

const OrderCard = ({ order }) => {
  const { orderId, created_at, user, } = order;


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
            <MDBCardText>{order.menus.menu_detail}</MDBCardText>
          </MDBListGroup>

          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default OrderCard;
