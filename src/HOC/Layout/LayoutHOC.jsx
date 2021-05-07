import React, { useState } from "react";
import {
    MDBDropdownToggle,
    MDBNavbarToggler,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBNavbarNav,
    MDBCollapse,
    MDBDropdown,
    MDBNavbar,
    MDBFooter,
    MDBIcon,
} from "mdb-react-ui-kit";
import LayoutStyles from './LayoutHOC.module.sass';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const LayoutHOC = ({ children }) => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const [showNav, setShowNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const redirect = (route) => history.push(`/${ route }`);

    const toggle = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <div className={ LayoutStyles.wrapper }>
            <MDBNavbar expand="lg" dark bgColor="dark">
                <MDBContainer fluid>
                    <MDBNavbarBrand
                        className={ LayoutStyles.cursorPointer }
                        onClick={ () => redirect("home") }
                    >
                        Hermes
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type="button"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={ () => setShowNav(!showNav) }
                    >
                        <MDBIcon icon="bars" fas/>
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={ showNav }>
                        <MDBNavbarNav>
                            <MDBNavbarItem>
                                <MDBNavbarLink
                                    className={ LayoutStyles.cursorPointer }
                                    onClick={ () => redirect("about") }
                                >
                                    Acerca de
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            {
                                isAuthenticated && <MDBNavbarItem>
                                    <MDBNavbarLink
                                        className={ LayoutStyles.cursorPointer }
                                        onClick={ () => redirect("profile") }
                                    >
                                        Perfil
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            }
                            {
                                isAuthenticated && <MDBNavbarItem>
                                    <MDBNavbarLink
                                        className={ LayoutStyles.cursorPointer }
                                        onClick={ () => redirect("orders") }
                                    >
                                        Pedidos
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            }
                            {
                                !isAuthenticated ?
                                    <MDBNavbarItem>
                                        <MDBNavbarLink
                                            className={ LayoutStyles.cursorPointer }
                                            onClick={ () => loginWithRedirect() }
                                        >
                                            Iniciar sesión
                                        </MDBNavbarLink>
                                    </MDBNavbarItem> :
                                    <MDBNavbarItem>
                                        <MDBNavbarLink
                                            className={ LayoutStyles.cursorPointer }
                                            onClick={ () => logout({ returnTo: window.location.origin }) }
                                        >
                                            Cerrar Sesión
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                            }
                        </MDBNavbarNav>
                        <MDBNavbarNav right fullWidth={ false } className="mb-2 mb-lg-0">
                            <MDBNavbarItem>
                                <MDBNavbarLink href="https://github.com/presi11/Hermes/">
                                    <MDBIcon fab icon="github"/>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className={ LayoutStyles.cursorPointer }>
                                <MDBDropdown isOpen={ isOpen }>
                                    <MDBDropdownToggle
                                        tag="span"
                                        className="nav-link"
                                        onClick={ toggle }
                                    >
                                        <MDBIcon icon="user"/>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink>Lorem ipsum dolor et'</MDBDropdownLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink>Lorem ipsum dolor et'</MDBDropdownLink>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <MDBContainer className={ LayoutStyles.mainContent } fluid>
                { children }
            </MDBContainer>
            <MDBFooter backgroundcolor='dark' className='text-center text-lg-left'>
                <div className='text-center p-3 bg-dark'>
                    <section>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/presi11"
                           role="button">
                            <MDBIcon fab icon="github"/>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/MikeStyles"
                           role="button">
                            <MDBIcon fab icon="github"/>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1"
                           href="https://github.com/Jonathans0ramirez"
                           role="button">
                            <MDBIcon fab icon="github"/>
                        </a>
                        <a className={ `btn btn-outline-light btn-floating m-1 ${ LayoutStyles.instagramColor }` }
                           href="https://www.instagram.com/andres_arcila97" role="button">
                            <MDBIcon fab icon="instagram"/>
                        </a>
                    </section>
                </div>
            </MDBFooter>
        </div>
    );
}

export default LayoutHOC;