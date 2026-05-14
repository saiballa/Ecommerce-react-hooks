import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const InfoSubmitSuccess:React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Top Section */}
        <div className="bg-blue-600 px-8 py-12 flex flex-col items-center text-center relative overflow-hidden">
          
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-52 h-52 bg-white opacity-10 rounded-full blur-3xl"></div>

          {/* Success Icon */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl">
            <FaCheckCircle className="text-green-500 text-6xl" />
          </div>

          <h1 className="relative z-10 text-4xl font-bold text-white mt-6">
            Submission Successful 🎉
          </h1>

          <p className="relative z-10 text-blue-100 mt-4 max-w-lg leading-relaxed">
            Your personal and address information has been submitted
            successfully. You can now continue exploring your account
            and shopping experience.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="p-8 text-center">
          
          {/* Success Message */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="text-green-700 font-medium leading-relaxed">
              Your account information has been saved successfully and
              is ready for future orders and deliveries.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            
            <Link
              to="/account"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition shadow-md hover:shadow-lg"
            >
              Back to Account
            </Link>

            <Link
              to="/"
              className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold transition"
            >
              Continue Shopping
            </Link>
          </div>

          {/* Footer Text */}
          <p className="text-sm text-gray-400 mt-8">
            Thank you for keeping your account information updated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSubmitSuccess;
