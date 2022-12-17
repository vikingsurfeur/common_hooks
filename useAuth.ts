import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate, Outlet } from 'react-router-dom';

interface IUserState {
    user: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        token: string;
    };
    isLoggedIn: boolean;
}

export const useAuth = () => {
    const user = useSelector<RootState, IUserState>(state => state.userLogin);
    return user?.isLoggedIn;
}

export const AuthProvider: FC = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
}

// Path: App.tsx App looks like this ->

import { AuthProvider } from './hooks/useAuth';

export default const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}>
                {/* Any other no secure routes */}
                <Route element={<AuthProvider />}>
                    <Route path="/home" element={<Home />} />
                    {/* Any other secure routes */}
                </Route>
            </Routes>
        </Router>
    );
}

