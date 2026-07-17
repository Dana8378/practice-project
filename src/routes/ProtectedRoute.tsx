import type React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const { isAuthenticated, isLoading} = useAuth();
    
    if (isLoading) {
        return <div style={{ padding: '40px', textAlign: 'center' }}>Загрузка...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>
};