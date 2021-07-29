import Products from '../src/components/Products'
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import CategoryBar from '../src/components/CategoryBar'

export default function products() {
    return (
        <div>
            <Header />
            <CategoryBar/>
            <Products />
            <Footer />
            
        </div>
    )
}
