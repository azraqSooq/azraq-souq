import React from 'react'
import styles from '../../styles/dashboard.module.scss'
import AddAdForm from '../../src/components/AddAdForm'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'



export default function ad() {
    return (
        <div>
            {/* <Header/> */}
            <div className={styles.adPageContainer}>
                <AddAdForm />
            </div>
            {/* <Footer/> */}
        </div>
    )
}