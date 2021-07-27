import React from 'react'
import styles from '../../styles/component/signUp.module.scss'
import Button from '@material-ui/core/Button';

const SignUp = () => {
    return (
        <div className={styles.signUpConParent}>
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

                <a>
                    <Button type="submit" className={styles.creatAccountBtn} variant="contained">انشــاء حســاب</Button>
                </a>
            </form>

        </div>
    )
}

export default SignUp;