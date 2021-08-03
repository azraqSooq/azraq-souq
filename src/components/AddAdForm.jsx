import React from 'react'
import styles from '../../styles/component/addAdForm.module.scss'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useRouter } from 'next/router'


const AddAdForm = () => {
    // add href to context to handle close click 
    const router = useRouter()    
    const handleCloseClick = () => {
        router.push('/')
    }

    return (
        <div className={styles.addAdFormConParent}>
            <div className={styles.addAdFormContainer}>
                <div className={styles.header}>
                    <CloseIcon onClick={handleCloseClick} className={styles.closeIcon} />
                    <p>أضـــف اعـــلان</p>
                </div>
                <form action="">
                    <label htmlFor="adImage">
                        <PhotoCameraIcon className={styles.uploadImage} />
                         <p>أضــف صـــورة</p>
                    </label>
                    <input  id="adImage" type="file" />
                    <select name="category" id="">
                        <option value="none">ما المنتج الذي تريد تسويقه  </option>
                        <option value="cake">كيــك</option>
                        <option value="car">سيــارات</option>
                        <option value="clothes">مــلابس</option>
                        <option value="phone">هواتـــف</option>
                        <option value="shoes">أحـــذيـة</option>
                        <option value="sweet">حلـــويـات</option>
                    </select>
                    <input placeholder=" اســم الاعلان ( ايباد الجيل الثامن  )" type="text" />
                    <textarea placeholder=" وصــف الاعـــلان ( أضف المزيــد من التفاصــيل )"  type="text" />
                    <div>
                        <input min="0" placeholder=" الســــعــر" type="number" />
                        <p>ديــنــار</p>
                    </div>
                    <Button variant="contained" type="submit" className={styles.shareBtn} > حفـظ ونشــر الاعـــلان</Button>
                </form>
            </div>
        </div>
    )
}

export default AddAdForm; 