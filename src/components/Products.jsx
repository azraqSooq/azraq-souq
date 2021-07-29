import styles from '../../styles/component/products.module.scss'
import Image from 'next/image'
import {Button} from '@material-ui/core'

import React from 'react'

const Products = () => {
    return (
        <div className={styles.productsContainerParent}>

            <div className={styles.productsContainer}>
                {[1, 2, 3, 4, 5].map((el, ind) => {
                    return (
                        <>
                            <div className={styles.product}>
                                    <div className={styles.imageColumn}>
                                        <Image src="/images/about.jpg" alt="" width={135} height={130} />
                                    </div>
                                    
                                    <div className={styles.descriptionColumn}>
                                        <p> أيبـــــــــــــد الجيــــل الثــامن</p>
                                        <p> أيبـــــــــــــد الجيــــل الثــامن</p>
                                        <div className={styles.productBtn}>
                                            <Button className={styles.saveProduct} variant="contained">أضــــف  </Button>
                                            <Button className={styles.callForProduct} variant="contained">اتصــــل</Button>


                                        </div>
                                    </div>
                                </div>
                        </>

                    )


                }) }
                   
                       
                   

            </div>



            
        </div>
    )
}

export default Products 