import React from 'react'
import styles from '../../styles/component/savedCart.module.scss'
import Image from 'next/image'
import CloseIcon from '@material-ui/icons/Close';


const SavedCart = () => {
    return (
        <div className={styles.savedCartConParent}>
            <div className={styles.savedCartContainer}>
                <div className={styles.header}>
                    <p>العنـــاصر المحفـــوظة</p>
                    <p>5 عنـــاصر</p>
                </div>

                <div className={styles.cart}>
                    <Image src="/images/categoriesImage/cake.jpeg" alt="img" width={90} height={70}  />
                    <p>تشـــيز كــــيك</p>
                    <p>5 دنانـــيـر</p>
                    <CloseIcon />
                </div>

                <hr />

                <div className={styles.cart}>
                    <Image src="/images/categoriesImage/cake.jpeg" alt="img" width={90} height={70}  />
                    <p>تشـــيز كــــيك</p>
                    <p>5 دنانـــيـر</p>
                    <CloseIcon />
                </div>
                <hr />

                <div className={styles.cart}>
                    <Image src="/images/categoriesImage/cake.jpeg" alt="img" width={90} height={70}  />
                    <p>تشـــيز كــــيك</p>
                    <p>5 دنانـــيـر</p>
                    <CloseIcon />
                </div>
            </div>
            
            
        </div>
    )
}

export default SavedCart