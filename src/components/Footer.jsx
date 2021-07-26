import React from 'react'
import styles from '../../styles/component/footer.module.scss'
import {Container, Row, Col} from 'react-bootstrap';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import  FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Footer = () => {
    return (
        <div className={styles.footerConParent}>
            <Container fluid="xxl" className={styles.footerContainer}>
                <Row className={styles.footerRowOne}>
                    <h3> تواصــل معــنا  :</h3>
                    <Col xs={7}  className={styles.footerContact}>
                        <Col className={styles.div} xs={6} md={3}>
                            <MailOutlineIcon className={styles.footerContactIcon} />
                            <p>البريــد الالكتروني</p>
                        </Col >
                        <Col className={styles.div} xs={6} md={3}>
                          <SettingsPhoneIcon className={styles.footerContactIcon}/>
                            <p>الهــاتف الخلوي</p>
                        </Col >
                        <Col className={styles.div} xs={6} md={3}>
                            <WhatsAppIcon className={styles.footerContactIcon}/>
                            <p>واتــســاب</p>
                        </Col>
                        <Col className={styles.div} xs={6} md={3}>
                            <HeadsetMicIcon className={styles.footerContactIcon}/>
                            <p>مركــز المسـاعدة</p>
                        </Col>
                     </Col>
                </Row>
                <Row className={styles.footerRowTwo}>
                    <h3> تابعنــــا علـــى :</h3>
                    <div  className={styles.footerFollow}>
                        <div className={styles.div} >
                                <FacebookIcon className={`${styles.faFollow} ${styles.footerFollowIcon}`} />
                        </div >
                        <div className={styles.div} >
                                <GitHubIcon className={`${styles.giFollow} ${styles.footerFollowIcon}`} />
                        </div >
                        <div className={styles.div} >
                                <LinkedInIcon className={`${styles.liFollow} ${styles.footerFollowIcon}`} />
                        </div >
                 
                    </div>
                </Row>
            </Container>
            <p className={styles.CopyRight}>© 2021 Copyright : Azraqstore.online </p>
           

            
        </div>
    )
}

export default Footer