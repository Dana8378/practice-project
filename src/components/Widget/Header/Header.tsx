import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Button } from "../../UI/Button";
import styles from "./Header.module.css"

export const Header = () => {
    const {user, logout, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login")
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/">Каталог</Link>
                <Link to="/cart">Корзина</Link>
            </nav>
            <div className={styles.auth}>
                {isAuthenticated ? (
                    <>
                        <span className={styles.userName}>Привет, {user?.username}</span>
                        <Button onClick={handleLogout}>Выйти</Button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className={styles.link}>Войти</Link>
                        <Link to="/register" className={styles.link}>Регистрация</Link>
                    </>
                )}
            </div>
        </header>
    );
};