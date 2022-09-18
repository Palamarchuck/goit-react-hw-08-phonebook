import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const RegisterPage = lazy(() => import('./components/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./components/LoginPage/LoginPage'));
const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));


// const MovieDetails = lazy(() => import ('Pages/MovieDetails/MovieDetails'));
// const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));
// const CastPage = lazy(() => import('Pages/CastPage/CastPage'));
// const ReviewsPage = lazy(() => import('./Pages/ReviewsPage/ReviewsPage'));

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
