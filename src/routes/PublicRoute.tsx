import type React from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: React.ReactNode;
}

export const PublicRoute = ({children}: PublicRouteProps) => {
    const user = localStorage.getItem('user');
    
    if (user) {
        return <Navigate to="/login" replace />;
    }
    
    return <>{children}</>
}