import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    console.log(users);
    return (
        <div className="overflow-x-auto m-4">
            <table className='table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th className='flex justify-evenly'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <tr key={user._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-square rounded-md w-16 h-16">
                                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="font-medium">{user.instructorName}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm p-0">{user.instructorEmail}</span>
                                </td>
                                <td>{user.availableSeats}</td>
                                <td>${user.price}</td>
                                <td><span className='shadow p-2 rounded-3xl bg-green-300 text-slate-600 dark:text-white font-semibold'>{user.status}</span></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;