import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from '../Home';
import Photo from '../photogallery';

const NavComponent = () => {
    return (
        <Router>
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">🅵🆁🅴🅴 🅱🅸🆁🅳</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                           
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="./Home">Home</Nav.Link>
                                <Nav.Link href="./photogallery">Gallery</Nav.Link>
                                
                               
                            </Nav>
                           
                          
                           
                        </Offcanvas.Body>
                        
                    </Navbar.Offcanvas>
                    
                            
                </Container>
               
            </Navbar>
            <Routes>
                    
                            <Route path='/photogallery' element = {<Photo/>}></Route>
                            </Routes>
        </div>
        </Router>
    )
}

export default NavComponent;