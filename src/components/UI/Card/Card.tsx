import { Children } from 'react';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    description?: string;
    imageUrl?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Card = ({
    title,
    description,
    imageUrl,
    children,
    onClick,
}: CardProps) => {

    return(
        <div
        className={`${styles.card} ${onClick ? styles.clickable : ''}`}
        onClick={onClick}>
            <div className={styles.imageContainer}>
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt={title} 
                        className={styles.image}
                    />
                ) : (
                    <div className={styles.placeholder}>
                        <span className={styles.placeholderText}>Нет изображения</span>
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                {description && <p className={styles.description}>{description}</p>}
                {children && <div className={styles.actions}>{children}</div>}
            </div>
        </div>
    )
}