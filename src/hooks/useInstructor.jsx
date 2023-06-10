import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user, loader } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loader,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
                return res.data.role
            }
        }
    })
    return [isInstructor, isInstructorLoading];
}

export default useInstructor;