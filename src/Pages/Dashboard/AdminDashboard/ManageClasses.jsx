import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useLoader from '../../../hooks/useLoader';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const { loader, setLoader } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: allClasses = [], refetch } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            setLoader(true)
            const res = await axiosSecure.get('/all-classes');
            setLoader(false)
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

    const handleApprove = (id) => {
        axiosSecure.patch(`/approve-class/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Toast.fire({
                        icon: 'success',
                        title: 'Class Approved'
                    })
                }
            })
    }

    const handleDeny = (id) => {
        axiosSecure.patch(`/deny-class/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Toast.fire({
                        icon: 'success',
                        title: 'Class Deny'
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
                        <th>Instructor</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th className='flex justify-evenly'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allClasses.map((item, index) =>
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
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="font-medium">{item.instructorName}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm p-0">{item.instructorEmail}</span>
                                </td>
                                <td>{item.availableSeats}</td>
                                <td>${item.price}</td>
                                <td><span className='shadow p-2 rounded-3xl bg-green-300 text-slate-600 dark:text-white font-semibold'>{item.status}</span></td>
                                <td className='flex justify-evenly items-center gap-2'>
                                    <button onClick={() => handleApprove(item._id)} className="btn btn-ghost hover:bg-transparent p-0 tooltip" data-tip="Approve"><FaCheckCircle className='text-3xl duration-300 hover:text-[#f87272]'></FaCheckCircle></button>
                                    <button onClick={() => handleDeny(item._id)} className="btn btn-ghost hover:bg-transparent p-0 tooltip" data-tip="Deny"><FaTimesCircle className='text-3xl duration-300 hover:text-[#f87272]'></FaTimesCircle></button>
                                    <button onClick={() => window.my_modal_5.showModal()} className="btn btn-error text-white tracking-wide normal-case duration-300">Send Feedback</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>

                    <textarea name="" id="" rows="5" className='textarea textarea-bordered resize-none w-full'></textarea>
                    <input type="submit" value="Send Feedback" />

                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;