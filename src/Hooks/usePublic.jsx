import axios from "axios";

export const axiosPublic = axios.create({
    // baseURL:'https://recharge-site-server.vercel.app/'
    baseURL:'http://localhost:8188/api/v1'
})
const usePublic = () => {
   return axiosPublic
};

export default usePublic;

// https://recharge-site-server.vercel.app