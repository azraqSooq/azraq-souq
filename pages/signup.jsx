import React from 'react'
import styles from '../styles/signup.module.scss'
import SignUp from '../src/components/SignUp';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import HeroSign from '../src/components/HeroSign';

export default function signup() {
    return (
        <>
            <Header />
            <div className={styles.SignUpPageContainer}>
                {/* <div className={styles.HeroSign}>
                    <HeroSign />
                </div> */}
                <div className={styles.SignUp}>
                    <SignUp />
                </div>
            </div>
            <Footer />
        </>
    )
}
