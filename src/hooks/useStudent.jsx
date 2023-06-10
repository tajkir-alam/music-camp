import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
    const { user, loader } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loader,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get(`/users/student/${user?.email}`)
                return res.data.role
            }
        }
    })
    return [isStudent, isStudentLoading];
};

export default useStudent;