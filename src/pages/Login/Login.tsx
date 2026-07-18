import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';

import {Button} from '../../components/UI/Button';
import {useAuth} from '../../context/AuthContext';

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
    const {login} = useAuth();
    const navigate = useNavigate();
    const [authError, setAuthError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = (data: LoginFormData) => {
        const existingUsers = localStorage.getItem('users');
        const users = existingUsers ? JSON.parse(existingUsers) : [];

        const user = users.find((u: any) => u.username === data.username);

        if (!user) {
            setAuthError('Пользователь с таким именем не найден');
            return;
        }

        if (user.password !== data.password) {
            setAuthError('Неверный пароль');
            return;
        }

        login({username: data.username});
        reset();
        navigate('/');
    };

    return (
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
                        placeholder="Введите пароль"/>

                    {errors.password?.message && (
                        <span className={styles.errorText}>{errors.password?.message}</span>
                    )}

                    <Button>Войти</Button>
                </form>
            </div>
        </div>
    )
}