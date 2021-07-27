import React from 'react'
import styles from '../../styles/component/signIn.module.scss'
import Button from '@material-ui/core/Button';

const SignUp = () => {
    return (
        <div className={styles.signInConParent}>
            <form className={styles.signInForm}>
                <div className={styles.inputGroup}>
                    <input type="text" name="phoneNumber" required />
                    <label className={styles.floatingLabel}>رقم الهاتــف</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="text" name="password" required />
                    <label className={styles.floatingLabel}>كلمة المرور</label>
                </div>

                <a>
                    <Button type="submit" className={styles.signInBtn} variant="contained">انشــاء حســاب</Button>
                </a>
            </form>

        </div>
    )
}

export default SignUp;