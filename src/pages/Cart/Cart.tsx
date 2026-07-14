import styles from "./Cart.module.css"

export const Cart = () => {
    return (
        <div className={styles.page}>
            <h1>Корзина</h1>
            <p>Здесь будут товары, добавленные в корзину</p>
        </div>
    )
}