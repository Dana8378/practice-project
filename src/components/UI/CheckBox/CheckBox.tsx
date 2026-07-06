import styles from './CheckBox.module.css';
import checkIcon from './assets/check.svg';

interface CheckBoxProps {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}

export const CheckBox = ({
    label,
    checked = false,
    disabled = false,
    onChange,
}: CheckBoxProps) => {
    const handleToggle = () => {
        if (!disabled && onChange){
            onChange(!checked);
        }
    };

    return (
        <label className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleToggle}
                disabled={disabled}
                className={styles.hiddenInput}
            />

            <div className={`${styles.customCheckbox} ${checked ? styles.checked : ''}`}>
                {checked && <img src={checkIcon} alt="check" />}
            </div>

            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
};