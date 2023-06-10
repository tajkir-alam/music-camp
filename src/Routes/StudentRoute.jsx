import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useLoader from '../hooks/useLoader';
import useStudent from '../hooks/useStudent';


const StudentRoute = ({ children }) => {
    const { user, loader } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if (loader && isStudentLoading) {
        return useLoader()
    }

    if (user && isStudent) {
        return children;
    }

    return (
        <Navigate to={'/'} state={{ from: location }} replace ></Navigate>
    );
};

export default StudentRoute;