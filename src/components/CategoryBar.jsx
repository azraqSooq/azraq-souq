import React from 'react'
import styles from '../../styles/component/categoryBar.module.scss'
import CakeIcon from '@material-ui/icons/Cake';
import Image from 'next/image'
export const CategoryBar = () => {
    // const categories = ['ملابس', 'كيك', 'حلويات', 'سيارات', 'تلفونات', 'طعام', 'احذيـة', 'اثـاث', 'أدوات منزلية', 'ادوات كهربائية'
    // ]

    const categories = [
        { name: 'ملابس', icon: 'clothes' },
        { name: 'كيك', icon: 'cake' },
        { name: 'حلويات', icon: 'donut' },
        { name: 'سيارات', icon: 'car' },
        { name: 'تلفونات', icon: 'phone' },
        { name: 'طعام', icon: 'food' },
        { name: 'احذيـة', icon: 'shoes' },
        { name: 'اثـاث', icon: 'furniture' },
        { name: 'أدوات منزلية', icon: 'dish' }
        // { name: 'ادوات كهربائية', icon: '/images/categoriesImage/electricaltools.jpeg' }
    ]

    return (
        <div className={styles.categoryBarConParent}>
            <div className={styles.categoryBarContainer}>
                <div className={styles.categoryBar}>
                    {categories.map((category, idx) => {
                        return (
                            <>
                                <span key={idx} className={styles.category}>
                                    <Image src={`/images/iconBar/${category.icon}.png`} alt="" width={20} height={20} />
                                    <p>
                                        {category.name}
                                    </p>
                                </span>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default CategoryBar;