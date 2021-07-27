import React from 'react'
import styles from '../styles/signin.module.scss'
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import SignIn from '../src/components/SignIn'
import HeroSign from '../src/components/HeroSign'

export default function signin() {
    return (
        <>
            <Header/>
                <div className={styles.signInPageContainer}>
                {/* <div className={styles.HeroSign} >
                        <HeroSign />
                </div> */}
                <div className={styles.SignIn}>

                        <SignIn  />
                </div>
                </div>
            <Footer/> 

        </>
    )
}
