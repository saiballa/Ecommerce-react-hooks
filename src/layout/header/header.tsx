import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FormContext } from "../../stateAndAction/appContextProviders";
import { FaBars, FaX } from "react-icons/fa6";

const Header:React.FC=()=>{

    const [isOpen,SetIsOpen] = useState<boolean>(false)
    const context = useContext(FormContext);
    if(!context) return;
    const{state} = context;


    return(
        <>
      <header className="bg-white shadow-md sticky top-0 z-50 relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-xl font-bold text-lg shadow">
              S
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              ShopEase
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">

            {/* Home */}
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <FiShoppingCart size={22} />

              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {state.no_Of_Items}
              </span>
            </Link>

            {/* Account */}
            <Link
              to="/account"
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-xl transition"
            >
              <AiOutlineUser size={20} />

              <span className="text-sm font-medium">
                Account
              </span>
            </Link>

            {/* Signin */}
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 border-2 border-blue-500 rounded-lg px-4 py-2 font-medium transition"
            >
              Signin
            </Link>
          </nav>

          <div className="flex items-center md:hidden">
            {/* Cart */}
            <Link
              to="/cart"
              onClick={() => SetIsOpen(false)}
              className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <FiShoppingCart size={24} />

              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {state.no_Of_Items}
              </span>
            </Link>

          {/* Mobile Hamburger */}
          <button className="text-3xl text-black ml-4.5" onClick={()=> SetIsOpen((prev)=> !prev)}>
            {isOpen ? <FaX/> : <FaBars/>}
          </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            isOpen
              ? "max-h-[400px] opacity-100 py-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 text-lg">

            {/* Home */}
            <Link
              to="/"
              onClick={() => SetIsOpen(false)}
              className=" text-black hover:text-blue-600 cursor-pointer px-5 py-2  transition"
            >
              Home
            </Link>

            {/* Account */}
            <Link
              to="/account"
              onClick={() => SetIsOpen(false)}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl transition"
            >
              <AiOutlineUser size={20} />
              <span className="text-sm font-medium">
                Account
              </span>
            </Link>

            {/* Signin */}
            <Link
              to="/login"
              onClick={() => SetIsOpen(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl transition"
            >
              Signin
            </Link>

          </ul>
        </div>
      </header>
        </>
    )
}
export default Header;