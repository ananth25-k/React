/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { data } from "react-router-dom";

const Url = axios.create({

    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

export const loginUser = async(data) => {
    try {
        const response =await  Url.post("/login", data)
        console.log(response.data);
        return response.data;
        
    } catch (error) {
        return error.response.data || "login failed"
    }
}

export const signupUser = async(data)=>{
try {
     const response = await Url.post("/signup",data)
     console.log(response.data);
     return response.data;
     
} catch (error) {
     return error.response.data || "Signup failed"
}
}

export const forgotPassword = async(data)=>{
    try {
        const res = await Url.post("/forgotpassword",data)
        console.log(res);
        return res;
        
    } catch (error) {
        return error.response.data || "email is not regsterd"
    }
}
export const resetPassword = async(data)=>{
    try {
        const res = await Url.post("/resetpassword",data)
        console.log(res);
      
        return res;
        
    } catch (error) {
        return error.response.data || "email is not regsterd"
    }
}
