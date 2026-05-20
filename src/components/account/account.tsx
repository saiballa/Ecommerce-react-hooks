import React,{useContext} from "react";
import { FormContext } from "../../stateAndAction/appContextProviders";
import { Link,useNavigate } from "react-router-dom";

const AccountPage:React.FC = () => {

    const navigate = useNavigate();
    const context = useContext(FormContext);
    if(!context) return;
    const{dispatch,state} = context;

    const handleLoggOut = ()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.removeItem("phone");
      localStorage.removeItem("address");
      dispatch({type:"logOut",payload:{logoutStatus:false,navigateUser:null}})
      dispatch({type:"clear_data",payload:null});
      navigate("/login");
    }
        

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="bg-white border border-blue-100 rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-2xl transition-all duration-300">

        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full">

          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-3xl font-bold shadow-lg shrink-0">
            { state?.data?.userInfo?.name
              ? state?.data?.userInfo?.name.charAt(0).toUpperCase()
              : "U"
            }
          </div>

          {/* User Info */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {state?.data?.userInfo?.name || "Unknown User"}
            </h1>

            <p className="text-gray-500 text-sm sm:text-base mt-2 break-all">
              {state?.data?.userInfo?.email || "No email available"}
            </p>
          </div>
        </div>

        {/* Right Buttons */}
<div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">

      {/* Edit Button */}
      <button className="w-full sm:w-auto">
        <Link
          to={"/personalInfo"}
          className="flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg border border-blue-600 min-w-[160px]"
        >
          Edit Profile
        </Link>
      </button>

      {/* Logout Button */}
      <button
        onClick={handleLoggOut}
        className="flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-red-50 text-red-500 hover:text-red-600 font-semibold tracking-wide border border-red-200 hover:border-red-400 transition-all duration-300 shadow-sm hover:shadow-md min-w-[160px]"
      >
        Logout
      </button>
    </div>

    </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Personal Information
            </h2>

            <div className="space-y-4">
              
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="text-gray-800 font-medium mt-1">
                  {state?.data?.userInfo?.name || "Not Provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="text-gray-800 font-medium mt-1">
                  {state?.data?.userInfo?.email || "Not Provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-gray-800 font-medium mt-1">
                  {state?.data?.userInfo?.phone || "Not Provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Address Information
            </h2>

            <div className="space-y-4">
              
              <div>
                <p className="text-sm text-gray-500">Street</p>
                <p className="text-gray-800 font-medium mt-1">
                  {state?.data?.address?.street || "Not Provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">District</p>
                <p className="text-gray-800 font-medium mt-1">
                  {state?.data?.address?.district || "Not Provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">City</p>
                <p className="text-gray-800 font-medium mt-1">
                  {state?.data?.address?.city || "Not Provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Country</p>
                <p className="text-gray-800 font-medium mt-1">
                  {state?.data?.address?.country || "Not Provided"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;