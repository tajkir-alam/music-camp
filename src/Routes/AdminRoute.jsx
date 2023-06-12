import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useLoader from '../hooks/useLoader';
import useAdmin from '../hooks/useAdmin';


const AdminRoute = ({ children }) => {
    const { user, loader } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loader && isAdminLoading) {
        return <div className='my-12'>{useLoader()}</div>
    }

    if (user && isAdmin) {
        return children;
    }

    return (
        <Navigate to={'/'} state={{ from: location }} replace ></Navigate>
    );
};

export default AdminRoute;