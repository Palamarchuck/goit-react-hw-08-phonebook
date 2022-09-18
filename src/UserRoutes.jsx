import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const RegisterPage = lazy(() => import('./components/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./components/LoginPage/LoginPage'));
const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));

const UserRoutes = () => {
    return (
        <Suspense fallback ={<p>....Load page</p>}>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<Phonebook />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;
