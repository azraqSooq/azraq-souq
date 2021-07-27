import React from 'react'
import Link from 'next/link'
import styles from '../../styles/component/signUp.module.scss'
import Button from '@material-ui/core/Button';

const SignUp = () => {
    return (
        <div className={styles.signUpConParent}>
            <h4>انشــــاء حســـاب</h4>

            <form className={styles.signUpForm}>
                <div className={styles.fullNameInput}>
                    <div className={styles.inputGroup}>
                        <input type="text" required />
                        <label className={styles.floatingLabel}>الاسـم الاول</label>
                    </div>

                    <div className={styles.inputGroup}>
                        <input type="text" required />
                        <label className={styles.floatingLabel}>الاسـم الثاني</label>
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <input type="text" name="phoneNumber" required />
                    <label className={styles.floatingLabel}>رقم الهاتــف</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="text" name="password" required />
                    <label className={styles.floatingLabel}>كلمة المرور</label>
                </div>

              
                    <Button type="submit" className={styles.creatAccountBtn} variant="contained">انشــــاء </Button>
                
            </form>

            <Link href="/signin"><a className={styles.createNewAccountBtn}>لـدي حسـاب | تسـجـيــل دخــول</a></Link>


        </div>
    )
}

export default SignUp;