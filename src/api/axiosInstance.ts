import axios, { type AxiosInstance } from "axios";
import { baseURL } from "./endpoints";

export const axiosInstace:AxiosInstance = axios.create({
    baseURL
});