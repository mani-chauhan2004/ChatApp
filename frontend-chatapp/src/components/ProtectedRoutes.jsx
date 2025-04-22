import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { verifyToken } from '../redux/features/authSlice';

function ProtectedRoutes({ children }) {
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    useEffect(() => {
        dispatch(verifyToken());
    }, []);

    useEffect(() => {
        console.log('Authenticated:', isAuthenticated);
    }, [isAuthenticated]);

    if (loading) return <div>Loading...</div>;
    return isAuthenticated ? children : <Navigate to="/unauthorised" replace />;
}

export default ProtectedRoutes;