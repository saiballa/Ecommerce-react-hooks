import React,{useContext,useEffect} from "react";
import { useLocation } from "react-router-dom";
import { FormContext } from "../../stateAndAction/appContextProviders";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ReviewPage:React.FC=()=>{

    const navigate = useNavigate();
    const location = useLocation();
    const context = useContext(FormContext);
    if(!context) return null;
    const{dispatch,state} = context;

    useEffect(()=>{
    dispatch({type:"current_step",payload:location.pathname});
    console.log(state.currentPage);
    },[]);

    const handlePreviousPage=()=>{
      navigate("/addressInfo");
    }

    return(
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
  <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
    
    {/* Left Side */}
    <div className="bg-blue-600 relative p-10 flex flex-col justify-between">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-white opacity-10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <p className="text-blue-100 text-sm uppercase tracking-[3px] font-medium">
          Final Step
        </p>

        <h1 className="text-4xl font-bold text-white leading-tight mt-4">
          Review Your Details
        </h1>

        <p className="text-blue-100 mt-5 leading-relaxed">
          Please verify your personal and address information
          before submitting your profile details.
        </p>
      </div>

      {/* Steps */}
      <div className="relative z-10 mt-10">
        <div className="flex items-center gap-4">
          
          <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
            ✓
          </div>

          <div className="flex-1 h-2 bg-blue-300"></div>

          <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
            ✓
          </div>
        </div>

        <div className="flex justify-between mt-3 text-sm text-blue-100">
          <span>User Info</span>
          <span>Address Info</span>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="p-8 sm:p-10">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-10">
        
        <button
          className="text-3xl text-blue-600 hover:scale-110 transition"
          onClick={handlePreviousPage}
        >
          <BsArrowLeftCircle />
        </button>

        <button
          disabled
          className="text-3xl text-gray-300 cursor-not-allowed"
        >
          <BsArrowRightCircle />
        </button>
      </div>

      {/* Personal Info Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
        
        <h2 className="text-xl font-bold text-gray-800 mb-5">
          Personal Information
        </h2>

        <div className="space-y-4">
          
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-gray-800 font-medium mt-1">
              {state.data.userInfo.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="text-gray-800 font-medium mt-1">
              {state.data.userInfo.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="text-gray-800 font-medium mt-1">
              {state.data.userInfo.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Address Info Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm mt-6">
        
        <h2 className="text-xl font-bold text-gray-800 mb-5">
          Address Information
        </h2>

        <div className="space-y-4">
          
          <div>
            <p className="text-sm text-gray-500">Street</p>
            <p className="text-gray-800 font-medium mt-1">
              {state.data.address.street}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">District</p>
            <p className="text-gray-800 font-medium mt-1">
              {state.data.address.district}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">City</p>
            <p className="text-gray-800 font-medium mt-1">
              {state.data.address.city}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Country</p>
            <p className="text-gray-800 font-medium mt-1">
              {state.data.address.country}
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Link
        to={"/infoSubmit"}
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition shadow-md hover:shadow-lg flex items-center justify-center"
      >
        Submit Information
      </Link>
    </div>
  </div>
</div>
        </>
    )
}

export default ReviewPage;