import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useLoader from '../hooks/useLoader';
import useInstructor from '../hooks/useInstructor';


const InstructorRoute = ({ children }) => {
    const { user, loader } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loader && isInstructorLoading) {
        return <div className='my-12'>{useLoader()}</div>
    }

    if (user && isInstructor) {
        return children;
    }

    return (
        <Navigate to={'/'} state={{ from: location }} replace ></Navigate>
    );
};

export default InstructorRoute;