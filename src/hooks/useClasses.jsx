import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { setLoader } = useAuth();

    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            setLoader(true);
            const res = await axiosSecure.get('/classes');
            setLoader(false);
            return res.data;
        }
    })
    return [classes];
}

export default useClasses;