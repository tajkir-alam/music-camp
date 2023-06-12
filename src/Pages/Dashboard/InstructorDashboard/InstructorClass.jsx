import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const InstructorClass = () => {
    const [feedback, setFeedback] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const { data: instructorClasses = [] } = useQuery({
        queryKey: ['instructorClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/instructor-classes');
            return res.data;
        }
    });

    const handleClassUpdate = (img) => {
        Swal.fire({
            title: 'Keep Patience',
            text: 'Update feature will be implement soon.',
            imageUrl: img,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

    return (
        <>
            <h1 className='text-3xl text-center text-slate-600 underline dark:text-white py-5 w-4/5 mx-auto mt-4 font-semibold font-Courgette'>
                &nbsp; My Classes &nbsp;
            </h1>
            <div className="overflow-x-auto m-4">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Class</th>
                            <th>Status</th>
                            <th>Total Enrollment</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Feedback</th>
                            <th className='flex justify-evenly'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClasses.map((item, index) =>
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
                                                <div className="text-sm">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="font-medium">{item.status}</span>
                                    </td>
                                    <td>
                                        <span className="font-medium ml-2">{item.students}</span>
                                    </td>
                                    <td>
                                        <span className="font-medium ml-2">{item.availableSeats}</span>
                                    </td>
                                    <td>
                                        <span className="font-medium ml-2">${item.price}</span>
                                    </td>
                                    <td>
                                        {
                                            item.status === 'Denied' ?
                                                // <button className='btn btn-ghost px-1 normal-case'>Check Feedback</button>
                                                <button className="btn" onClick={() => {
                                                    window.my_modal_5.showModal()
                                                    setFeedback(item.feedBack)
                                                }}>Check modal</button>
                                                :
                                                <p className='px-2'>No Feedback</p>
                                        }
                                    </td>
                                    <td className='flex justify-evenly'>
                                        <button onClick={() => handleClassUpdate(item.image)} className="btn btn-error text-white tracking-wide normal-case duration-300">
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg mb-6">Thanks for your interest! But we are sorry to say that:</h3>
                    <p>{feedback}</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            {/* {console.log(feedback)} */}
        </>
    );
};

export default InstructorClass;