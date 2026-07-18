import type React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

interface PublicRouteProps {
    children: React.ReactNode;
}

export const PublicRoute = ({children}: PublicRouteProps) => {
    const {isAuthenticated, isLoading} = useAuth()

    if (isLoading) {
        return <div style={{padding: '40px', textAlign: 'center'}}>Загрузка...</div>;
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace/>;
    }

    return <>{children}</>
}