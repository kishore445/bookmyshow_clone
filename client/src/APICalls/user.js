import axios from 'axios';

let response;
const axiosInstance = axios.create({
    headers:{
        credentials:"include",
        method: "post",
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage?.getItem('tokenForBookMyShow') || ""}`,
        'Cache-Control': 'no-cache'
    },
});

export const registerUser = async (payload)=>{
    try{
         response = await axiosInstance.post("/app/v1/users/register",payload);
            return response?.data;
        
    }catch(err){
        return err?.response?.data|| err;
    }
}

export const loginUser = async (payload)=>{
    try{
         response = await axiosInstance.post("/app/v1/users/login",payload);
        return response?.data;

    }catch(err){
        return err?.response?.data || err;
    }
};
export const GetCurrentUser =async()=>{
    try{
        const response = await axiosInstance.get("/app/v1/users/getCurrentUser");
   return  response?.data;
    }catch(err){
        return err?.response?.data || err;
    }
}
