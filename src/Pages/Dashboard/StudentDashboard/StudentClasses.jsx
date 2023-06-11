import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const StudentClasses = () => {
    const { setLoader } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: enrollClass = [] } = useQuery({
        queryKey: ['enrollClass'],
        queryFn: async () => {
            setLoader(true)
            const res = await axiosSecure.get('/payment');
            setLoader(false)
            return res.data;
        }
    })

    const handleStartClass = (img) => {
        Swal.fire({
            title: 'Keep Patience',
            text: 'Your class will start soon.',
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
                            <th>Instructor</th>
                            <th className='flex justify-evenly'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollClass.map((item, index) =>
                                <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-square rounded-md w-16 h-16">
                                                    <img src={item.classImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.className}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="font-medium">{item.instructorName}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm p-0">{item.instructorEmail}</span>
                                    </td>
                                    <td className='flex justify-evenly'>
                                        <button onClick={() => handleStartClass(item.classImg)} className="btn btn-error text-white tracking-wide normal-case duration-300">Start Class</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default StudentClasses;