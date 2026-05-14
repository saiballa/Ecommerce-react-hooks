import React, { useEffect, useState,useContext} from "react";
import { useParams } from "react-router-dom";
import { productDetails} from "../../api/apiClient";
import type { FetchDataState } from "../../types/type";
import { FormContext } from "../../stateAndAction/appContextProviders";

const ProductsDeatilsPage:React.FC=()=>{

    const [data,setData] = useState<FetchDataState | null>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const [showError,setShowError] = useState<string>("");
    const {id} = useParams<{id:string}>();

    const context = useContext(FormContext);
        if(!context) return;
        const{dispatch} = context;

    const dataFetch= async()=>{
        if(id){
            try {
                setLoading(true);
                const res = await productDetails(id);
                setData(res);
            } catch (error) {
                setShowError("Data not fetched");
            }finally{
                setLoading(false);
            }
            }else{
                return;
            }
        }

    useEffect(()=>{
        if(id){
           dataFetch();
        }
    },[id]);
    
    if(loading){
        return(
             <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }
    return(
        <>
        {
        data ? (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            
            <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full grid md:grid-cols-2 gap-6 p-6">

                <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
                <img
                    src={data.image}
                    alt={data.title}
                    className="h-72 object-contain"
                />
                </div>

                <div className="flex flex-col justify-between">

                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {data.title}
                </h1>

                <p className="text-sm text-gray-500 mb-2">
                    Category: <span className="capitalize">{data.category}</span>
                </p>

                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                    {data.rating?.rate} ★
                    </span>

                    <span className="text-sm text-gray-500">
                    Rating
                    </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {data.description}
                </p>

                <div className="flex items-center justify-between mt-auto">

                    <span className="text-2xl font-semibold text-blue-600">
                    ₹ {data.price}
                    </span>

                    <button
                    onClick={() => {
                        dispatch({ type: "add_Item", payload: data });
                    }}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                    Add to Cart
                    </button>

                </div>

                </div>

            </div>

            </div>
        ) : (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full border border-red-100">

                <div className="text-5xl mb-4">😕</div>

                <h2 className="text-2xl font-bold text-red-500 mb-3">
                Failed to Load Product
                </h2>

                <p className="text-gray-500 mb-5">
                We could not fetch the product details.
                </p>

                <p className="bg-red-50 text-red-500 text-sm px-4 py-2 rounded-lg inline-block">
                {showError}
                </p>

                <button
                onClick={() => window.location.reload()}
                className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition-all duration-300"
                >
                Try Again
                </button>

            </div>

            </div>
        )
        }
        </>
    )
}

export default ProductsDeatilsPage;