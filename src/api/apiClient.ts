import axios from "axios";
import { axiosInstace } from "./axiosInstance";
import { endpoints } from "./endpoints";
import type { FetchDataState } from "../types/type";
import type { LoginFormType } from "../utils/validate";
import type { RegisterFormType } from "../utils/validate";

export const allProducts=async():Promise<FetchDataState[]>=>{
    const response = await axiosInstace.get<FetchDataState[]>(endpoints.products);
    return response?.data;
};

export const productsCategories =async(category:string):Promise<FetchDataState[]>=>{
    const resData = await axiosInstace.get<FetchDataState[]>(`${endpoints.categories}/${category}`);
    return resData?.data;
};

export const productDetails = async(id:string):Promise<FetchDataState>=>{
    const res = await axiosInstace.get<FetchDataState>(`${endpoints.products}/${id}`);
    return res?.data;
}

export const RegisterUser = async(data:RegisterFormType):Promise<any>=>{
    const res = await axios.post("https://tureappapiforreact.onrender.com/api/register",data);
    return res?.data;
}

export const LoginToUser = async(data:LoginFormType):Promise<any>=>{
    const res = await axios.post("https://tureappapiforreact.onrender.com/api/login",data);
    return res?.data;
}