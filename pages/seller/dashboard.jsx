import React from 'react'
import styles from '../../styles/dashboard.module.scss'
import OverViewDash from '../../src/components/OverViewDash'
import TableDash from '../../src/components/TableDash'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'



export default function dashboard() {
    return (
        <div>
            <Header/>
            <div className={styles.dashboardPageContainer}>
                <div className={styles.OverViewDash}>
                    <OverViewDash />
                </div>
                <div className={styles.TableDash}>
                    <TableDash />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
