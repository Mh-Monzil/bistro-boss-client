import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from '../hooks/UseAuth';

const UseCart = () => {
    const axiosSecure = UseAxiosSecure()
    const {user} = UseAuth()
  const { refetch, data : cart = [] } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
        const res = await axiosSecure.get(`/carts?email=${user?.email}`)
        return res.data
    }
  });

  return [cart, refetch];
};

export default UseCart;
