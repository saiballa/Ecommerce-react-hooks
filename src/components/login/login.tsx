import React ,{useContext, useEffect}from "react";
import { FormContext } from "../../stateAndAction/appContextProviders";
import {useForm,type SubmitHandler} from "react-hook-form";
import { LoginFormSchema } from "../../utils/validate";
import type { LoginFormType } from "../../utils/validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { LoginToUser } from "../../api/apiClient";
import { useNavigate } from "react-router-dom";
import {toast} from "sonner";

const LoginPage:React.FC=()=>{

  const context = useContext(FormContext);
      if(!context) return null;
      const{dispatch,state} = context;

  const navigate = useNavigate();
    const {register,handleSubmit,reset,formState:{errors}} = useForm<LoginFormType>({
            defaultValues:{
                email:"",
                password:"",
            },
            resolver:yupResolver(LoginFormSchema),
            mode:"onChange",
        })
    
        const LoginFormSubmissionHnadle:SubmitHandler<LoginFormType> = async (data)=>{
            try {
                const response = await LoginToUser(data);
                localStorage.setItem("token",response?.token);
                localStorage.setItem("name",response?.user?.name);
                localStorage.setItem("email",response?.user?.email);
                toast.success(response?.message || "User logged in successfully");
                dispatch({type:"set_Auth",payload:"/"});
                dispatch({type:"set_logginUser",payload:{name:response?.user?.name,email:response?.user?.email}})
                reset();
            } catch (error) {
                if(error instanceof Error){
                  toast.error(error?.message);
                }else{
                  toast.error("user can't loggin")
                }
            }
        }

        useEffect(()=>{
          if(state.authState.navigateHome){
            navigate("/");
          }
        },[navigate,state.authState.navigateHome])

    return(
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center px-4">

    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden">

    {/* Top Section */}
    <div className="bg-linear-to-r from-blue-500 to-blue-600 p-6 text-white">
      <h1 className="text-3xl font-bold">Welcome Back</h1>
      <p className="text-sm text-blue-100 mt-1">
        Login to continue shopping
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit(LoginFormSubmissionHnadle)} className="p-6 space-y-5">

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        />

        {errors.email?.message && (
          <span className="text-sm text-red-600 mt-1 inline-block">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        />

        {errors.password?.message && (
          <span className="text-sm text-red-600 mt-1 inline-block">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        Login
      </button>

      {/* Bottom Text */}
      <p className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
          <Link to={"/register"}>Register</Link>
        </span>
      </p>

    </form>
  </div>
</div>
        </>
    )
}

export default LoginPage;