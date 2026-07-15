import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Cart } from '../pages/Cart/Cart';
import { Login } from '../pages/Login/Login';
import { NotFound } from '../pages/NotFound/NotFound';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { Register } from '../pages/Register/Register';
import { Header } from '../components/Widget/Header';

import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                    <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}