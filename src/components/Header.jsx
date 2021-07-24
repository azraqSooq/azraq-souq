import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown   } from 'react-bootstrap';
import styles from '../../styles/component/header.module.scss'
import Link from 'next/link'

export const Header = () => {
    return (
            <>
                    {/* <div style={{backgroundColor: "#1252A6"}}> تسجيل دخول </div> */}
            <Navbar className={styles.header}   expand="md" bg="primary" variant="light"  >
                <Container    > 
                    <Navbar.Brand href="#home"  >سوق الأزرق</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{width: "100%"}}>
                    <Nav className="navbar me-auto " style={{marginTop: "20px" ,backgroundColor:"#1252A6"}} >
                        <Nav.Link href="#home">الرئيسية</Nav.Link>
                        {/* <Nav.Link href="#link">فئات</Nav.Link> */}
                        <Nav.Link href="#link">اتصل بنا</Nav.Link>
                        <NavDropdown title="فئات" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    )
}

