import React from "react";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTable,
  MDBTableHead,
  MDBTableBody

} from "mdb-react-ui-kit";

const InformationModal = ({ order, gridModal, setGridModal }) => {
  const { orderId, created_at, menus, user, status } = order;
 

  const toggleShow = () => setGridModal(!gridModal);
 
  let total = 0;

  for (let i = 0; i < menus.length; i++) {
    total = total + menus[i].quantity * menus[i].menu.unit_price;
  }

  return (
    <>
      
      

      <MDBModal
        tabIndex="-1"
        show={gridModal}
        getOpenState={(e) => setGridModal(e)}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Orden # {orderId}</MDBModalTitle>
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="container-fluid bd-example-row">
                <div className="row">
                  <div className="col-md-4 col-example">{user}</div>
                  <div className="col-md-4 ms-auto col-example">
                    Estimado: {orderId}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 ms-auto col-example">
                    Creado a las: {created_at}
                  </div>
                  <div className="col-md-1213 ms-auto col-example">
                    Estado: {status}
                  </div>
                </div>
                <MDBTable bordered borderColor="black">
                <MDBTableHead dark>
                    <tr>
                      <th>Estimado</th>
                      <th>Nombre</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {menus.map((menuObj, index) => {
                      const {
                        menu: { name, unit_price, estimated_time },
                      } = menuObj;

                      return (
                        <tr key={index}>
                          <th scope="row">{estimated_time}</th>
                          <td>{name}</td>
                          <td>{menus[index].quantity}</td>
                          <td>{unit_price}</td>
                        </tr>
                      );
                    })}
                  </MDBTableBody>
                </MDBTable>
                <hr />

                <div className="row">
                  <div className="col-md-8 ms-auto col-example">
                    <h1>Total:</h1>
                  </div>
                  <div className="col-md-4 ms-auto col-example">
                    <h1>{total}</h1>
                  </div>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Cerrar
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default InformationModal;
