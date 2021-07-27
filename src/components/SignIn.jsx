import React from 'react'
import Link from 'next/link'
import styles from '../../styles/component/signIn.module.scss'
import Button from '@material-ui/core/Button';

const SignUp = () => {
    return (
        <>
            
            <div className={styles.signInConParent}>
                <h4>تسـجـيـــل دخــــول</h4>
                <form className={styles.signInForm}>
                    <div className={styles.inputGroup}>
                        <input type="text" name="phoneNumber" required />
                        <label className={styles.floatingLabel}>رقم الهاتــف</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" name="password" required />
                        <label className={styles.floatingLabel}>كلمة المرور</label>
                    </div>

                  
                   
                    <Button type="submit" className={styles.signInBtn} variant="contained">دخــــول</Button>
                </form>
                <Link href="/signup"><a className={styles.createNewAccountBtn}>انشـــاء حســـاب جديــد</a></Link>


            </div>

        </>
    )
}

export default SignUp;