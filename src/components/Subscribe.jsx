import React from 'react'
import styles from '../../styles/component/subscribe.module.scss'
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import {Col} from 'react-bootstrap'

const Subscribe = () => {
    return (
        <div>
            <div className={styles.subscribeContainer}>
                <p className={styles.subscribeParagraph}>اشــترك الان وابــدأ فـي تســــويق منتــجــــاتــك</p>
               <Col>
            </Col>
               <Link href="/signup">
                   <a>
                    <Button className={styles.subscribeButton} variant="contained">انشـــر منتجــاتـك</Button>
                   </a>
                </Link>
            </div>
            
        </div>
    )
}


export default Subscribe