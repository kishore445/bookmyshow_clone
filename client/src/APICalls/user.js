import axios from 'axios';

const axiosInstance = axios.create({
    headers:{
        credentials:"include",
        method: "post",
        "Content-Type": "application/json",
    }
});

export const registerUser = async (payload)=>{
    try{
        const response = await axiosInstance.post("/app/v1/users/register",payload);
            return response?.data;
        
    }catch(err){
        return err;
    }
}

export const loginUser = async (payload)=>{
    try{
        const response = await axiosInstance.post("/app/v1/users/login",payload);
        return response?.data;

    }catch(err){
        return err;
    }
}