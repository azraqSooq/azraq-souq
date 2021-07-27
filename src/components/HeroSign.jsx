import styles from '../../styles/component/heroSign.module.scss'

import React from 'react'

const HeroSign = () => {
    return (
        <div className={styles.heroSignContainer}>
            <div className={styles.heroSignOpacity}>

                <div className={styles.heroSignHeader}>
                    <p>ســـوق منتجـــــاتك</p>

                </div>
                <div className={styles.heroSignMain}>
                    <h2>أزرق ستـــــور | Azraq Store</h2>

                </div>
                <div className={styles.heroSignFooter}>
                    <p>ســــــــــــــــــــــــــــارع بالتســــــــجيل</p>

                </div>
            </div>

            
        </div>
    )
}

export default HeroSign
