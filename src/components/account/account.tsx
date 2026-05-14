import React,{useContext} from "react";
import { FormContext } from "../../stateAndAction/appContextProviders";
import { Link } from "react-router-dom";

const AccountPage:React.FC = () => {

    const context = useContext(FormContext);
        if(!context) return;
        const{state} = context;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
              { state?.data?.userInfo?.name  ?  state?.data?.userInfo?.name.charAt(0).toUpperCase() : "U"}
            </div>

            {/* User Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {state?.data?.userInfo?.name || "Unknown User"}
              </h1>

              <p className="text-gray-500 text-sm mt-1">
                {state?.data?.userInfo?.email || "No email available"}
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
            <Link to={"/personalInfo"}>Edit Profile</Link>
          </button>
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