import {Link} from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={styles.page}>
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <p>Извините, такой страницы не существует</p>
            <Link to="/" className={styles.link}>
                Вернуться на главную
            </Link>
        </div>
    );
};