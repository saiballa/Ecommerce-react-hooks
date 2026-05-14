import { axiosInstace } from "./axiosInstance";
import { endpoints } from "./endpoints";
import type { FetchDataState } from "../types/type";

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