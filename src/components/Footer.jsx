import React from 'react'
import styles from '../../styles/component/footer.module.scss'
import {Container, Row, Col} from 'react-bootstrap';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        <div className={styles.footerConParent}>
            <Container className={styles.footerContainer}>
                <Row className={styles.footerRowOne}>
                    <h3>يمكنــك التواصــل معــنا عبر :</h3>
                    <Col xs={7}  className={styles.footerContact}>
                        <div>
                            <MailOutlineIcon className={styles.footerIcon} />
                            <p>البريــد الالكتروني</p>
                        </div>
                        <div>
                          <SettingsPhoneIcon className={styles.footerIcon}/>
                            <p>الهــاتف الخلوي</p>
                        </div>
                        <div>
                            <WhatsAppIcon className={styles.footerIcon}/>
                            <p>واتــســاب</p>
                        </div>
                        <div>
                            <HeadsetMicIcon className={styles.footerIcon}/>
                            <p>مركــز المسـاعدة</p>
                        </div>
                     </Col>
                </Row>
                <Row className={styles.footerRowTwo}>
                    <h3>تابعنــــا علـــى</h3>
                    <Col className={styles.footerFollow}>
                    <MDBBtn floating tag='a'>
                        <MDBIcon fas icon='download' />
                     </MDBBtn>
                     </Col>
                </Row>
            </Container>

            
        </div>
    )
}

export default Footer