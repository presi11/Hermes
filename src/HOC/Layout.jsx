import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import {useHistory} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";



export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { loginWithRedirect, logout,isAuthenticated } = useAuth0();
  const history = useHistory();
  const redirect =(route) =>{
    console.log(route)
    history.push(`/${route}`)
  }
  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand  href= "#" onClick={() =>redirect("home")}>Hermes</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink href= "#" onClick={() =>redirect("about")}>Acerca de</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href= "#" onClick={() =>redirect("profile")}>Perfil</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink  href= "#" onClick={() =>redirect("ordes")}>Pedidos</MDBNavbarLink>
              </MDBNavbarItem>
              { !isAuthenticated?
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => loginWithRedirect()}>Iniciar sesión</MDBNavbarLink>
              </MDBNavbarItem>:
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión</MDBNavbarLink>
              </MDBNavbarItem>
             }
            </MDBNavbarNav>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <MDBIcon fab icon="github" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle color="dark">
                    <i className="fas fa-user"></i>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#">Action</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#">Another action</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#">
                        Something else here
                      </MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {children}
    </>
  );
}
