import React from "react";

const Footer:React.FC=()=>{
    return(
        <>
            <footer className="bg-white shadow-md rounded-t-2xl mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                
                {/* Brand Card */}
                <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                    ShopEase
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Discover amazing products with the best prices and smooth shopping experience.
                </p>
                </div>

                {/* Quick Links */}
                <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Quick Links
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer transition">
                    Home
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer transition">
                    Products
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer transition">
                    Categories
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer transition">
                    Contact
                    </li>
                </ul>
                </div>

                {/* Support */}
                <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Support
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer transition">
                    Help Center
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer transition">
                    Privacy Policy
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer transition">
                    Terms & Conditions
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer transition">
                    FAQs
                    </li>
                </ul>
                </div>

                
                <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Newsletter
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                    Subscribe to get latest updates and offers.
                </p>

                <div className="flex flex-col gap-3">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    Subscribe
                    </button>
                </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
                © 2026 ShopEase. All rights reserved.
            </div>
            </footer>
        </>
    )
}

export default Footer;