import React, {useState} from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBListGroup,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple,
  MDBCardFooter,
  MDBTableHead,
  MDBTable,
  MDBTableBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import InformationModal from "../Information/InformationModal";

const OrderCard = ({ order }) => {
  const [gridModal, setGridModal] = useState(false);
  const { orderId, menus, user, status } = order;
  return (
    <>
      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          {menus.map((menuObj, index) => {
            const {
              menu: { picture },
            } = menuObj;
            return <MDBCardImage key={index} src={picture} fluid alt="..." />;
          })}
        </MDBRipple>

        <MDBCardBody>
          <div className="row">
            <div className="col-md-5 col-example">
              {orderId ? (
                <MDBCardTitle>{`Pedido #${orderId}`} </MDBCardTitle>
              ) : (
                "Numero del pedido"
              )}
            </div>
            <div className="col-md-5 ms-auto col-example">
              <h6>{user}</h6>
            </div>
          </div>

          <MDBListGroup flush>
            <div className="container-fluid bd-example-row">
              <div className="row">
                <div className="col-md-12 ms-auto col-example">
                  Estado: {status}
                </div>
                {status === "CONFIRMADO" ? (
                  <div className="col-md-12 ms-auto col-example">
                    Estimado: {orderId}
                  </div>
                ) : null}
              </div>
            </div>
          </MDBListGroup>
          <MDBCardFooter>
            <MDBTable bordered borderColor="black">
              <MDBTableHead dark>
                <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {menus.map((menuObj, index) => {
                  const {
                    menu: { name },
                  } = menuObj;

                  return (
                    <tr key={index}>
                      <th scope="row">{name}</th>
                      <td>{menus[index].quantity}</td>
                    </tr>
                  );
                })}
              </MDBTableBody>
            </MDBTable>
          </MDBCardFooter>
          <MDBBtn onClick={()=>setGridModal(!gridModal)}>Orden</MDBBtn>
          <InformationModal order={order} gridModal ={gridModal} setGridModal={setGridModal} > </InformationModal>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default OrderCard;
