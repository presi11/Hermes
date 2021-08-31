import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const OrderCard = ({ pedent }) => {
  //const { orderId, created_at } = order;

  console.log(pedent);
  return (
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
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
        <MDBBtn href="#">Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default OrderCard;
