import React,{useContext, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { FormContext } from "../../stateAndAction/appContextProviders";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";


const AddressPage:React.FC=()=>{

      const context = useContext(FormContext);
      if(!context) return null;
      const{dispatch,state} = context;

      const [street,setStreet] = useState<string>(state.data.address.street || "");
      const [district,setDistrict] = useState<string>(state.data.address.district || "");
      const [city,setCity] = useState<string>(state.data.address.city || "");
      const [country,setCountry] = useState<string>(state.data.address.country || "");
      const location = useLocation();
      const navigate = useNavigate();

       useEffect(()=>{
              dispatch({type:"current_step",payload:location.pathname});
              console.log(state.currentPage);
          },[]);

    const handleNextPage = ()=>{
      if(!state.data.address.street || !state.data.address.district || !state.data.address.city || !state.data.address.country){
          alert("Please fill and update all fileds to navigate next page");
          return;
      }
      navigate("/review");
    }

    const handlePreviousPage=()=>{
      navigate("/personalInfo");
    }

    return(
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
  <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
    
    {/* Left Side */}
    <div className="bg-blue-600 relative p-10 flex flex-col justify-between">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-white opacity-10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <p className="text-blue-100 text-sm uppercase tracking-[3px] font-medium">
          Account Setup
        </p>

        <h1 className="text-4xl font-bold text-white leading-tight mt-4">
          Address Information
        </h1>

        <p className="text-blue-100 mt-5 leading-relaxed">
          Add your delivery address details to ensure smooth
          shipping and accurate order delivery experience.
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
            2
          </div>
        </div>

        <div className="flex justify-between mt-3 text-sm text-blue-100">
          <span>User Info</span>
          <span>Address Info</span>
        </div>
      </div>
    </div>

    {/* Right Side Form */}
    <div className="p-8 sm:p-10">
      
      {/* Navigation */}
      <div className="flex items-center justify-between mb-10">
        
        <button
          className="text-3xl text-blue-600 hover:scale-110 transition"
          onClick={handlePreviousPage}
        >
          <BsArrowLeftCircle />
        </button>

        <button
          className="text-3xl text-blue-600 hover:scale-110 transition"
          onClick={handleNextPage}
        >
          <BsArrowRightCircle />
        </button>
      </div>

      {/* Form */}
      <form className="space-y-7">
        
        {/* Street */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Street Address
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Enter your street"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "update_Field",
                  payload: {
                    fieldName: "street",
                    value: street,
                  },
                })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-medium transition shadow-md hover:shadow-lg"
            >
              Save
            </button>
          </div>
        </div>

        {/* District */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            District
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "update_Field",
                  payload: {
                    fieldName: "district",
                    value: district,
                  },
                })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-medium transition shadow-md hover:shadow-lg"
            >
              Save
            </button>
          </div>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            City
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "update_Field",
                  payload: {
                    fieldName: "city",
                    value: city,
                  },
                })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-medium transition shadow-md hover:shadow-lg"
            >
              Save
            </button>
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Country
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "update_Field",
                  payload: {
                    fieldName: "country",
                    value: country,
                  },
                })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-medium transition shadow-md hover:shadow-lg"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    )
}

export default AddressPage;