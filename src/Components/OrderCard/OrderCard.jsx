import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBListGroupItem,
  MDBListGroup,
} from "mdb-react-ui-kit";

// function isactive() {

// }

const OrderCard = ({ pedent, order }) => {
  const { orderId, created_at } = order;

  console.log(pedent);
  return (
    <>
      <MDBCard className="text-center">
        <MDBCardBody>
          <MDBListGroup flush>
            { !orderId ? 
              <MDBListGroupItem>{orderId}</MDBListGroupItem> :"numero"}
              <MDBListGroupItem>{created_at}</MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default OrderCard;
