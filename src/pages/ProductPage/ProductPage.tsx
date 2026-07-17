import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.css';

import { products } from '../../data/products';

export const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === Number(id));
    
    if (!product) {
        return (
            <div className={styles.page}>
                <h1>Товар не найден</h1>
                <p>Товара с id {id} не существует</p>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.product}>
                <h2>{product.name}</h2>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className={styles.productImage}
                />
                <p className={styles.price}>Цена: {product.price} руб.</p>
                <p className={styles.description}>{product.description}</p>
            </div>
        </div>
    );
};