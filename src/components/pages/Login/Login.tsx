import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../UI/Input';
import { Button } from '../../UI/Button';

import styles from './Login.module.css';

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .required("Имя пользователя обязательно")
        .min(3, "Минимум 3 символа")
        .max(30, "Максимум 30 символов"),
    password: yup
        .string()
        .required("Пароль обязателен")
        .min(6, "Минимум 6 символов")
        .max(30, "Максимум 30 символов"),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

export const Login = () => {

    const {
        register, 
        handleSubmit, 
        formState: {errors}, 
        reset,} = useForm({
            resolver: yupResolver(loginSchema),
            defaultValues: {
                username: '',
                password: '',
            },
        });

    const onSubmit = (data: LoginFormData) => {
        localStorage.setItem("user", JSON.stringify(data));
        reset();
    };

    return(
        <div className={styles.page}>
            <div className={styles.container}>
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
                    placeholder="Введите пароль" />

                        {errors.password?.message && (
                            <span className={styles.errorText}>{errors.password?.message}</span>
                        )}

                    <Button>Войти</Button>
                </form>
            </div>
        </div>
    )
}