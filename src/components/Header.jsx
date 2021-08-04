import React from 'react';
import {Container,Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';
import styles from '../../styles/component/header.module.scss'
import Link from 'next/link'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
  

const  Header = () => {
    return (
    <>
        <div className={styles.firstNav}>

            <Navbar className={styles.mainNav} collapseOnSelect expand="md" bg="dark" variant="dark">

                {!true ?  <div className={styles.signPhone}>
                        <Link href="/signin"><a>تسجيل دخول</a></Link>
                        <p>|</p>
                        <Link href="/signup"><a>انشاء حساب</a></Link>
                </div> : <div className={styles.shopCart}>
                    <Link href="/save-products"><a><IconButton aria-label="cart" className={styles.btn}>
                        <StyledBadge badgeContent={5} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton></a></Link>
                </div>}
               

                
                <Container style={{width: "100% !important"}}>
                <Navbar.Brand  className={styles.logoTitle}>
                        <Link href="/"><a>أزرق ستـــور</a></Link>
                </Navbar.Brand>
                <Navbar.Toggle className={styles.headerToggle} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav  className={`me-auto ${styles.navCollapse}`}>
                        <Link href="/"><a>الرئيســية</a></Link>
                        <Link href="/"><a>تواصل معــنا</a></Link>
                        <Link href="/"><a>فئـــات</a></Link>

                        {true ? <Link href="/seller/dashboard"><a>لــوحـة التــحكم</a></Link> : ''}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

        <Container fluid="true" className={styles.secondNav}>
            <Row className={styles.firstRow}>
                <Col className={styles.colOne}>
                    <Link href="/"><a>أزرق ستـــور</a></Link>
                </Col>

                {!true ?   <Col className={styles.colTwo}>
                    <Link href="/signin"><a className={styles.links}>تسجـيل دخــول</a></Link>
                    <p>|  </p>
                    <Link href="/signup"><a  className={styles.links}>انشــاء حسـاب</a></Link>
                </Col> :  <Col className={styles.shopCart}>
                    <Link href="/save-products"><a><IconButton aria-label="cart" className={styles.btn}>
                        <StyledBadge badgeContent={4} color="secondary">
                            <ShoppingCartIcon className={styles.shopIcon} />
                        </StyledBadge>
                    </IconButton></a></Link>
                </Col> }
              
               
            </Row>

            <Row className={styles.secondRow}>
                <Col classNme={styles.colOne}>
                    <Link href="/"><a className={styles.links}>الرئيســية</a></Link>
                    <Link href="/"><a  className={styles.links}>تواصل معــنا</a></Link>
                    <Link href="/"><a  className={styles.links}>فئــــات</a></Link>
                    {true ? <Link href="/seller/dashboard"><a>لــوحـة التــحكم</a></Link> : ''}

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

