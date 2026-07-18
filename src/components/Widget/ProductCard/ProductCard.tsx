import {Card} from "../../UI/Card"
import {Button} from "../../UI/Button"
import {Link} from "react-router-dom"
import {useAuth} from "../../../context/AuthContext"
import {useCart} from "../../../context/CartContext"
import type {Product} from "../../../data/products"
import styles from "./ProductCard.module.css"

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({product}: ProductCardProps) => {
    const {isAuthenticated} = useAuth();
    const {cart, addToCart} = useCart();

    const isInCart = cart.some(item => item.id === product.id);

    const formattedPrice = product.price.toLocaleString('ru-RU');

    const handleAddToCard = () => {
        addToCart(product);
    };

    return (
        <div className={styles.productCard}>
            <Card
                title={product.name}
                description={`${formattedPrice} руб.`}
                imageUrl={product.image}
            >
                <div className={styles.actions}>
                    <Link to={`/product/${product.id}`} className={styles.detailLink}>Подробнее</Link>

                    {isAuthenticated ? (
                        isInCart ? (
                            <span className={styles.inCart}>В корзине</span>
                        ) : (
                            <Button onClick={handleAddToCard}>В корзину</Button>
                        )
                    ) : (
                        <Link to={"/login"} className={styles.loginLink}>Войдите, чтобы купить</Link>
                    )}
                </div>
            </Card>
        </div>
    )
}