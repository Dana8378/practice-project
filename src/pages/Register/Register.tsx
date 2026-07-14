import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/UI/Button';

import styles from './Register.module.css';

const registerSchema = yup.object().shape({
    username: yup
        .string()
        .required('Имя пользователя обязательно')
        .min(3, 'Минимум 3 символа')
        .max(30, 'Максимум 20 символов'),
    password: yup
        .string()
        .required('Пароль обязателен')
        .min(6, 'Минимум 6 символов')
        .max(30, 'Максимум 30 символов'),
    confirmPassword: yup
        .string()
        .required('Подтверждение пароля обязательно')
        .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
});

type RegisterFormData = yup.InferType<typeof registerSchema>;

export const Register = () => {

    const [authError, setAuthError] = useState<string | null>(null);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = (data: RegisterFormData) => {
        const existingUsers = localStorage.getItem('users');
        const users = existingUsers ? JSON.parse(existingUsers) : [];

        const userExists = users.some((u: any) => u.username === data.username);

        if (userExists) {
            setAuthError('Пользователь с таким именем уже существует');
            return;
        }

        users.push({
            username: data.username,
            password: data.password,
            registeredAt: new Date().toISOString(),
        });

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem("user", JSON.stringify(data));
        reset()
    };

    return(
        <div className={styles.page}>
            <div className={styles.container}>

                {authError && (
                    <div className={styles.errorText}>{authError}</div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <input 
                        {...register('username')} 
                        placeholder="Введите имя пользователя"
                    />

                    {errors.username?.message && (
                        <span className={styles.errorText}>{errors.username?.message}</span>
                    )}

                    <input 
                        {...register('password')} 
                        type="password"
                        placeholder="Введите пароль" 
                    />

                    {errors.password?.message && (
                        <span className={styles.errorText}>{errors.password?.message}</span>
                    )}

                    <input 
                        {...register('confirmPassword')} 
                        type="password"
                        placeholder="Подтвердите пароль" 
                    />

                    {errors.confirmPassword?.message && (
                        <span className={styles.errorText}>{errors.confirmPassword?.message}</span>
                    )}

                    <Button>Зарегестрироваться</Button>
                </form>
            </div>
        </div>
    )
};