import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useLoader from '../../hooks/useLoader';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllInstructors = () => {
    const { loader, setLoader } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            setLoader(true)
            const res = await axiosSecure.get('/instructors');
            setLoader(false)
            return res.data;
        }
    })

    return (
        <div className="overflow-x-auto my-12 lg:px-4">
            { loader && useLoader()}
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instructors.map(instructor =>
                            <tr key={instructor._id} className='duration-500 hover:bg-slate-100'>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-circle w-16 h-16">
                                            <img src={instructor.instructorImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{instructor.instructorName}</div>
                                </td>
                                <td>
                                    <div className="font-bold">
                                        {instructor.instructorEmail}
                                    </div>
                                </td>
                                <th>
                                    <button className="btn btn-error text-white">Classes</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllInstructors;