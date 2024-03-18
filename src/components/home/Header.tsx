import React from 'react';
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";
import logoEmpresa from '../../assets/img/waikiki_min.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export interface IAppProps {
    type_header: number;
}

const Header: React.FC<IAppProps> = ({type_header}) => {
  return (
    <>
    <Navbar  expand={'sm'} bg="light" variant="light" fixed="top" className="border-5 border-waikiki-header border-bottom">
        <Container fluid>
        <Navbar.Brand href="#">
            <img src={logoEmpresa} alt="Logo" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                    Offcanvas
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {type_header === 1 ? (
                    <Nav className="justify-content-end flex-grow-1 pe-3  navbar-waikiki">
                        <NavLink to="/" className='nav-item nav-link fs-6 me-4'>Volver al inicio</NavLink>
                    </Nav>
                ) : (
                    <Nav className="justify-content-center flex-grow-1 pe-3  navbar-waikiki">
                        <Link className="nav-item nav-link fs-6 me-4" style={{cursor: 'pointer'}} to="servicioEstampados" spy={true} smooth={true} offset={-86} duration={500}>Estampados</Link>
                        <Link className="nav-item nav-link fs-6 me-4" style={{cursor: 'pointer'}} to="servicioTenido" spy={true} smooth={true} offset={-86} duration={500}>Teñidos personalizados</Link>
                        <Link className="nav-item nav-link fs-6 me-4" style={{cursor: 'pointer'}} to="ServicioAdhesivo" spy={true} smooth={true} offset={-86} duration={500}>Adhesivos en vinil</Link>
                        <Link className="nav-item nav-link fs-6 me-4" style={{cursor: 'pointer'}} to="ServicioCuponera" spy={true} smooth={true} offset={-86} duration={500}>Cuponera</Link>
                    </Nav>
                )}
            </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
    </Navbar>
    </>
  );
}

export default Header;