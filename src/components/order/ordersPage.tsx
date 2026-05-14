import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-xl p-8 text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <FaCheckCircle  className="text-green-600 w-14 h-14" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mt-6">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-500 mt-3 leading-relaxed">
          Thank you for your purchase. Your order has been confirmed
          and will be shipped soon.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-2xl p-6 mt-8 text-left">
          
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Order Summary
          </h2>

          <div className="space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Order ID</span>

              <span className="font-medium text-gray-800">
                #ORD-2026-4521
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Payment Method</span>

              <span className="font-medium text-gray-800">
                UPI Payment
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Delivery Address</span>

              <span className="font-medium text-gray-800 text-right max-w-220">
                Kolkata, West Bengal, India
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Estimated Delivery</span>

              <span className="font-medium text-green-600">
                3 - 5 Days
              </span>
            </div>

            <div className="border-t pt-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-800">
                Total Amount
              </span>

              <span className="text-2xl font-bold text-blue-600">
                ₹ 4,999
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link
            to="/"
            className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-3 rounded-xl font-medium transition"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 mt-6">
          A confirmation email has been sent to your registered email address.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccessPage;