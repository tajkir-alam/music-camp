import { useQuery } from '@tanstack/react-query';
import React from 'react';

const StudentCart = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            setLoader(true);
            const res = await fetch('http://localhost:5000/classes');
            setLoader(false);
            return res.json();
        }
    })
    return (
        <div>
            this is the student cart
        </div>
    );
};

export default StudentCart;