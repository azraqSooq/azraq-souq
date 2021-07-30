import React from 'react'
import styles from '../../styles/component/overViewDash.module.scss'

const OverViewDah = () => {
    return (
        <div className={styles.overViewDashConParent}>
            <div className={styles.overViewContainer}>
                <div className={styles.overView}>
                    <p>نظــــرة عـــــامــة</p>
                </div>

                <div className={styles.analysis}>
                    <div>
                      <p>25</p>
                      <p>العـــدد الاجمـــالي</p>
                    </div>
                    <div>
                      <p>6</p>
                      <p>المنتجـــات الحــالية</p>
                    </div>
                    <div>
                      <p>6</p>
                      <p>عــدد العمــــلاء</p>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default OverViewDah
