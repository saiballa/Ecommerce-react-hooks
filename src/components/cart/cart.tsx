import React,{useContext, useMemo,useCallback} from "react";
import { FormContext } from "../../stateAndAction/appContextProviders";
import { useNavigate } from "react-router-dom";

const CartPage:React.FC=()=>{

    const navigate = useNavigate();
    const context = useContext(FormContext);
    if(!context) return;
    const{dispatch,state} = context;

    const calculateAmount = ():number=>{
        let result = state.cartList.reduce((acc,cur)=> acc + (cur.price * cur.quantity),0)
        return Math.floor(result);
    }

    const TotalAmount = useMemo(()=> calculateAmount(),[state.no_Of_Items]);
    
    const OrdersFun = ()=>{
        if(state.cartList.length === 0){
            alert("No cart items is there to place order.Please add items to cart!");
            return
        }
        else if(!state.data.userInfo.name || !state.data.userInfo.email || !state.data.userInfo.phone || !state.data.address.street || !state.data.address.district || !state.data.address.city || !state.data.address.country){
            alert("Please fill your acount information to place order!");
            navigate("/account");
            return
        }else{
            dispatch({type:"clear_cart"})
            navigate("/orders");
        }
    }
    
    const handleOrders = useCallback(()=> OrdersFun(),[]);

    return(
        <>
            <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    state.cartList.length > 0 ? (
                        <div className="lg:col-span-2 flex flex-col gap-5">

                {state.cartList.map((item) => (
                    <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col sm:flex-row gap-5"
                    >
                    
                    {/* Product Image */}
                    <div className="w-full sm:w-40 h-40 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                        <img
                        src={item.image}
                        alt="image"
                        className="h-full object-contain"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                        
                        <div>
                        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                            {item.title}
                        </h2>

                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                            {item.description}
                        </p>

                        <p className="text-2xl font-bold text-green-600 mt-3">
                            ₹ {item.price}
                        </p>
                        </div>

                        {/* Quantity + Actions */}
                        <div className="flex flex-wrap items-center justify-between mt-5 gap-4">
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                            
                            <button
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition text-lg"
                            onClick={() =>
                                dispatch({
                                type:"remove_Qyantity",
                                payload: item.id,
                                })
                            }
                            >
                            -
                            </button>

                            <span className="px-5 py-2 font-medium">
                            {item.quantity}
                            </span>

                            <button
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition text-lg"
                            onClick={() =>
                                dispatch({
                                type: "add_quantity",
                                payload: item.id,
                                })
                            }
                            >
                            +
                            </button>
                        </div>

                        {/* Delete Button */}
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
                            onClick={() =>
                            dispatch({
                                type:"remove_item",
                                payload: item.id,
                            })
                            }
                        >
                            Delete
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                    ) : (
                       <p className="text-center text-3xl font-bold text-gray-500 mt-20">
                        No Cart Items Available 🛒
                        </p>
                )}

                {/* Order Summary */}
                <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-24">
                
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Order Summary
                </h2>

                <div className="space-y-4">
                    
                    <div className="flex justify-between text-gray-600">
                    <span>Total Items</span>
                    <span>{state.cartList.length}</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>₹ 50</span>
                    </div>

                    <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-800">
                    <span>Total Amount</span>

                    <span>
                        ₹{TotalAmount === undefined || TotalAmount === 0 ? 0 : TotalAmount + 50}
                    </span>
                    </div>
                </div>

                {/* Payment Button */}
                <button onClick={()=> handleOrders()} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                    Proceed to Payment
                </button>
                </div>
            </div>
            </div>
        </>
    )
}

export default CartPage;