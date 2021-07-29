import Products from '../src/components/Products'
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import CategoryBar from '../src/components/CategoryBar'
import styles from '../styles/product.module.scss';

export default function products() {
    return (
        <>
            <Header />
            <div className={styles.productsPageContainer}>
                <div className={styles.CategoryBar}>
                    <CategoryBar />

                </div>
                <div className={styles.Products}>
                    <Products />
                </div>
            </div>
            <Footer />

        </>
    )
}
