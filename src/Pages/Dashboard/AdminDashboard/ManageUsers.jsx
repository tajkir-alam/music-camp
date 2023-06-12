import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const ManageUsers = () => {
    const [nameIs, setNameIs] = useState('');
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Toast.fire({
                        icon: 'success',
                        title: nameIs + ' is Admin Now'
                    })
                }
            })
    }

    const handleMakeInstructor = (id) => {
        axiosSecure.patch(`/users/instructor/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Toast.fire({
                        icon: 'success',
                        title: nameIs + ' is Instructor Now'
                    })
                }
            })
    }

    return (
        <div className="overflow-x-auto m-4">
            <table className='table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Class</th>
                        <th>Role</th>
                        <th>Action</th>
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
                                                <img src={user.userImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div class="text-sm opacity-50">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="font-medium">{user.role}</span>
                                    {/* <br />
                                    <span className="badge badge-ghost badge-sm p-0">{user.instructorEmail}</span> */}
                                </td>
                                <td className='flex gap-4'>
                                    <button onClick={() => {
                                        handleMakeAdmin(user._id)
                                        setNameIs(user.name)
                                    }} 
                                    disabled = {user.role === 'Admin'}
                                    className='btn btn-error text-white'>Make Admin</button>
                                    <button onClick={() => {
                                        handleMakeInstructor(user._id)
                                        setNameIs(user.name)
                                    }} 
                                    disabled = {user.role === 'Instructor'}
                                    className='btn btn-error text-white'>Make Instructor</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;