import React from 'react';
import {Container,Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';
import styles from '../../styles/component/header.module.scss'
import Link from 'next/link'

const  Header = () => {
    return (
    <>
        <div className={styles.firstNav}>

            <Navbar className={styles.mainNav} collapseOnSelect expand="md" bg="dark" variant="dark">

                <div className={styles.signPhone}>
                        <Link href="/"><a>تسجيل دخول</a></Link>
                        <p>|</p>
                        <Link href="/"><a>انشاء حساب</a></Link>
                </div>
                <Container style={{width: "100% !important"}}>
                <Navbar.Brand href="#home" className={styles.logoTitle}>أزرق ستـــور</Navbar.Brand>
                <Navbar.Toggle className={styles.headerToggle} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav  className={`me-auto ${styles.navCollapse}`}>
                        <Link href="/"><a>الرئيســية</a></Link>
                        <Link href="/"><a>تواصل معــنا</a></Link>
                        <Link href="/"><a>فئـــات</a></Link>
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

        <Container fluid="true" className={styles.secondNav}>
            <Row className={styles.firstRow}>
                <Col className={styles.colOne}>
                    <h2>أزرق ستـــور </h2>
                </Col>
                <Col className={styles.colTwo}>

                    <Link href="/"><a className={styles.links}>تسجـيل دخــول</a></Link>
                    <p>|  </p>
                    <Link href="/"><a  className={styles.links}>انشــاء حسـاب</a></Link>
                </Col>
            </Row>

            <Row className={styles.secondRow}>
                <Col classNme={styles.colOne}>
                    <Link href="/"><a className={styles.links}>الرئيســية</a></Link>
                    <Link href="/"><a  className={styles.links}>تواصل معــنا</a></Link>
                    <Link href="/"><a  className={styles.links}>فئــــات</a></Link>
                    
                </Col>
               
            </Row>
        </Container>

    </>
   );
  }


export default Header


























// import React, {useState} from 'react'
// import { Container, Row, Col, Navbar, Nav, NavDropdown   } from 'react-bootstrap';
// import styles from '../../styles/component/header.module.scss'
// import Link from 'next/link'
// import MenuIcon from '@material-ui/icons/Menu';

// export const Header = () => {

//     const [toggleIcon, setToggleIcon] = useState(false)
//     function handleToggleIcon() {
//         toggleIcon ? setToggleIcon(false) : setToggleIcon(true) 
//         console.log(toggleIcon);
//     } 

//     return (
//             <>
            
//                 <Container fluid="true" className={styles.header}   > 
//                     <Row ml="auto" className={styles.signPhoneScreen} >
//                         <Col xs={3}>
//                     <Link  href="/"> 
//                             <a className={styles.links}>انشاء حساب</a>
//                            </Link>
                        
//                         </Col >
                        
//                         <Col xs={1}>
//                             |
//                         </Col>
//                         <Col xs={3}>
//                            <Link href="/"> 
//                             <a className={styles.links}>تسجيل دخول</a>
//                            </Link>
                        
//                         </Col>
                        
//                     </Row>
                      
//                     <Row className={styles.firstRow}>
//                         <Col className={styles.column}  xs={6} md={8} >
//                              سوق الأزرق
//                         </Col>
//                         <Col className={styles.column} xs={4}  md={3}>
//                            <Link  href="/"> 
//                             <a className={styles.links}>انشاء حساب</a>
//                            </Link>
//                            <div>|</div>
//                            <Link href="/"> 
//                             <a className={styles.links}>تسجيل دخول</a>
//                            </Link>
//                         </Col>
//                         <Col className={styles.toggle} xs={1}>
//                          <MenuIcon className={styles.toggleIcon} />
//                         </Col>
                        
//                     </Row>
//                     <Row className={styles.secondRow}>
//                         <Col className={styles.column}>
//                             <Link href="/">
//                                 <a className={styles.links} >الرئيســية </a>
//                             </Link >
//                             <Link href="/">
//                                 <a className={styles.links} >الفئــات</a>
//                             </Link>
//                             <Link href="/">
//                                 <a className={styles.links} >تواصل معنــا</a>
//                             </Link>
//                         </Col>
//                     </Row>
//                 </Container>
//             </>
//     )
// }

