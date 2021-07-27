import React from 'react'
import styles from '../../styles/component/signUp.module.scss'
import Button from '@material-ui/core/Button';
import Link from 'next/link'

const SignUp = () => {
    return (
        <div className={styles.signUpConParent}>
            <form className={styles.signUpForm}>
                <div className={styles.fullNameInput}>
                    <input type="text" placeholder="الاسـم الاول" name="fName" required />
                    <input type="text" placeholder="الاسـم الثاني" name="lName" required />
                </div>
                <input type="text" placeholder="رقم الهاتــف" name="phoneNumber" required />
                <input type="password" placeholder="كلمة المرور" name="password" required />
                    <a>
                        <Button type="submit" className={styles.creatAccountBtn} variant="contained">انشــاء حســاب</Button>
                    </a>              
            </form>

        </div>
    )
}

export default SignUp;