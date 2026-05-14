import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FormContext } from "../../stateAndAction/appContextProviders";

const Header:React.FC=()=>{

    const context = useContext(FormContext);
    if(!context) return;
    const{state} = context;

    return(
        <>
        <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-xl font-bold text-lg shadow">
            S
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            ShopEase
          </h1>
        </Link>

        <nav className="flex items-center gap-6">
          
          {/* Home */}
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FiShoppingCart size={22} />

            {/* Cart Count */}
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {state.no_Of_Items}
            </span>
          </Link>

          <Link
            to="/account"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-xl transition"
          >
            <AiOutlineUser size={20} />
            <span className="hidden sm:block text-sm font-medium">
              Account
            </span>
          </Link>
        </nav>
      </div>
    </header>
        </>
    )
}
export default Header;