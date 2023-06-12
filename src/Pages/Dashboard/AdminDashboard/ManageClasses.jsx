import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const ManageClasses = () => {
    const { loader, setLoader } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [selectId, setSelectId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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

    const closeModal = () => {
        setModalOpen(false);
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const feedBack = { feedback: data.feedback }
        axiosSecure.post(`/feedback/${selectId}`, feedBack)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    closeModal();
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Feedback sent to instructor',
                        showConfirmButton: false,
                        timer: 2000
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
                                    <button disabled={item.status !== 'Pending'} onClick={() => handleApprove(item._id)} className="btn btn-ghost hover:bg-transparent p-0 tooltip" data-tip="Approve"><FaCheckCircle className='text-3xl duration-300 hover:text-[#f87272]'></FaCheckCircle></button>
                                    <button disabled={item.status !== 'Pending'} onClick={() => handleDeny(item._id)} className="btn btn-ghost hover:bg-transparent p-0 tooltip" data-tip="Deny"><FaTimesCircle className='text-3xl duration-300 hover:text-[#f87272]'></FaTimesCircle></button>
                                    <button onClick={() => {
                                        // window.my_modal_5.showModal()
                                        setModalOpen(true);
                                        setSelectId(item._id)
                                    }}
                                        disabled = {item.status !== 'Denied'}
                                        className="btn btn-error text-white tracking-wide normal-case duration-300">Send Feedback</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <dialog id="my_modal_5" className={`modal modal-bottom sm:modal-middle ${modalOpen ? 'modal-open' : ''}`}>
                <form onSubmit={handleSubmit(onSubmit)} className='modal-box'>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Please let the instructor know the reason for Approve / Deny</p>

                    <textarea name="" {...register("feedback", { required: true })} id="feedback" placeholder='Enter your feedback here' rows="5" className='textarea textarea-bordered resize-none w-full'></textarea>

                    <div className="flex justify-between items-center">
                        <input type="submit" className='btn btn-error text-white' />
                        <p className="text-slate-400">Click outside to send feedback later.</p>
                    </div>
                </form>

                {/* for modal close */}
                <form method="dialog" className="modal-backdrop">
                    <button onClick={closeModal}>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;