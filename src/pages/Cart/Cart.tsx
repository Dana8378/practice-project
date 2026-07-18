import {Link} from 'react-router-dom';
import {useCart} from '../../context/CartContext';
import {Button} from '../../components/UI/Button';
import styles from './Cart.module.css';

export const Cart = () => {
    const {cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice} = useCart();

    const formatPrice = (price: number) => {
        return price.toLocaleString('ru-RU')
    }

    if (cart.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h2>Корзина пуста</h2>
                <h2>:(</h2>
                <p>Добавте товары из каталога</p>
                <Link to="/" className={styles.toCatalog}>Перейти в каталог</Link>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Корзина</h1>

            <div className={styles.cartContent}>
                <div className={styles.cartItems}>
                    {cart.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className={styles.itemImage}
                            />

                            <div className={styles.itemInfo}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <p className={styles.itemPrice}>{formatPrice(item.price)} ₽</p>
                            </div>

                            <div className={styles.itemQuantity}>
                                <button
                                    className={styles.quantityButton}
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    -
                                </button>
                                <span className={styles.quantityNumber}>{item.quantity}</span>
                                <button
                                    className={styles.quantityButton}
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>

                            <div className={styles.itemTotal}>
                                {formatPrice(item.price * item.quantity)} ₽
                            </div>

                            <button
                                className={styles.removeButton}
                                onClick={() => removeFromCart(item.id)}
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.summary}>
                    <h3 className={styles.summaryTitle}>Итого</h3>

                    <div className={styles.summaryRow}>
                        <span>Товаров:</span>
                        <span>{totalItems} шт</span>
                    </div>

                    <div className={styles.summaryRow}>
                        <span>Сумма:</span>
                        <span>{formatPrice(totalPrice)} руб</span>
                    </div>

                    <div className={styles.summaryActions}>
                        <Button>
                            Оформить заказ
                        </Button>
                        <button
                            className={styles.clearButton}
                            onClick={clearCart}
                        >
                            Очистить корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}