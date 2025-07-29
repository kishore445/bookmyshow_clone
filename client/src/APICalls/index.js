import axios from 'axios';

const axiosInstance = axios.create({
    headers:{
        credentials:"include",
        method: "post",
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage?.getItem('tokenForBookMyShow') || ""}`,
        'Cache-Control': 'no-cache'
    },
});

export default axiosInstance;
