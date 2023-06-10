import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user, loader } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axiosSecure(`/cart?email=${user?.email}`);
            return res.data;
        },
    })

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    return [cart, refetch, totalPrice]
}

export default useCart;