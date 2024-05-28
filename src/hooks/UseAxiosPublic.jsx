import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-tau-ten-58.vercel.app',
    // withCredentials: true,
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;