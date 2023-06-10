import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const StudentCart = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loader } = useAuth();
    const [cart, refetch, totalPrice] = useCart();
    
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto m-4">
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th className='lg:pl-20'>Price</th>
                        <th className='flex justify-evenly'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) =>
                            <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-square rounded-md w-16 h-16">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="font-medium">{item.instructorName}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm p-0">{item.instructorEmail}</span>
                                </td>
                                <td className='font-medium text-slate-700 lg:pl-20'>$ {item.price}</td>
                                <td className='flex justify-evenly'>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-error text-2xl text-white duration-300 bg-[#FF0000]"><FaRegTrashAlt /></button>
                                </td>
                            </tr>
                        )
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='font-medium text-slate-700 text-lg'>Total: $ {totalPrice}</td>
                        <td>
                            <Link to='/dashboard/checkout'>
                                <button className="btn btn-outline btn-primary tracking-wide normal-case duration-300">Proceed to Pay</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentCart;