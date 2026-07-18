import React from 'react';
import styles from './Input.module.css'

interface InputProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean
}

export const Input = ({
                          value,
                          onChange,
                          placeholder = 'input',
                          disabled = false
                      }: InputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value)
        }
    };

    return (
        <input
            type="text"
            className={styles.input}
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
        />
    )
}