import { createContext, useContext, useState, useEffect } from 'react';

interface User {
    username: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (user: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (userData: User) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, isLoading, login, logout, isAuthenticated: !!user}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}