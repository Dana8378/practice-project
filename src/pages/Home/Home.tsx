import { products } from "../../data/products"
import { ProductCard } from "../../components/Widget/ProductCard"
import styles from "./Home.module.css"

export const Home = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Каталог цветов</h1>
            <div className={styles.catalog}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}