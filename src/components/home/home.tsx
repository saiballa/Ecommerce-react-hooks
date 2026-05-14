import React,{useEffect,useRef,useState} from "react";
import type { FetchDataState } from "../../types/type";
import { allProducts,productsCategories } from "../../api/apiClient";
import { Link } from "react-router-dom";
import MySlider from "../swiper/swiper";

const Home:React.FC=()=>{

    const [productList,setProductList] = useState<FetchDataState[]>([]);
    const [sliceArray,setSliceArray] = useState<FetchDataState[]>([]);
    const [category,setCategory] = useState<string>("");
    const [searchProductInput,setSearchProductInput] = useState<string>("");
    const [isLoading,setLoading] = useState<boolean>(false);
    const [showError,setShowError] = useState<string>("");
    const categorieslIst:string[] = ["men's clothing","women's clothing","electronics","jewelery"];
    const indexOfSliceArray = 0;
    const LastindexOfSliceArray = useRef<number>(6);

    const dataFetching = async()=>{
      setLoading(true);
      setShowError("");
      try {
        const res = await allProducts();
        setProductList(res);
        setSliceArray(res);
      } catch (error) {
        setShowError("Data not fetched!");
      }
      finally{
        setLoading(false);
      }
    }

    const dataCategory = async()=>{
      setLoading(true);
      try {
        const res = await productsCategories(category);
        setProductList(res);
        // setSliceArray(res.slice(indexOfSliceArray,LastindexOfSliceArray.current));
      } catch (error) {
        setShowError("Data not fetched!");
      }
      finally{
        setLoading(false);
      }
    }

   useEffect(()=>{
    if(category){
        dataCategory();
    }
   },[category]);

   useEffect(()=>{
        dataFetching();
    },[]);

    const handleErrorImage = (e:React.SyntheticEvent<HTMLImageElement>)=>{
        e.currentTarget.onerror=null;
        e.currentTarget.src="https://demofree.sirv.com/nope-not-here.jpg";
    }

    const handleSubmit = (e:React.SyntheticEvent)=>{
      e.preventDefault();
      const filterData = productList.filter((product)=> product.title.toLowerCase().includes(searchProductInput.toLowerCase()));
      setProductList(filterData);
    }

    if(isLoading){
        return(
            <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    return(
        <>
            <div>
                <div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 mx-3"
                        >
                        <div className="flex w-full md:w-1/2 gap-2">
                            <input
                            type="text"
                            name="search"
                            value={searchProductInput}
                            onChange={(e)=>setSearchProductInput(e.target.value)}
                            placeholder="Search users..."
                            className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                            />
                            <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm whitespace-nowrap"
                            >
                            Search
                            </button>
                        </div>

                        <select value={category} onChange={(e)=> setCategory(e.target.value)}
                            className="border border-gray-200 rounded-lg px-3 py-2 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        >
                            <option value="">Categories</option>
                            {categorieslIst.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                            ))}
                        </select>

                        <button
                            type="button"
                            onClick={() =>{
                              LastindexOfSliceArray.current=6;
                              dataFetching();
                            }}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm whitespace-nowrap"
                        >
                            All Products
                        </button>
                        </form>
                </div>

                <div className="mb-5">
                     <MySlider/>       
                </div>

                <div className="min-h-screen bg-gray-100 py-10 px-4">
                <div className="max-w-7xl mx-auto">

                  {/* Heading */}
                  <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-gray-800 inline-block relative">
                      Products
                      <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-600 rounded-full"></span>
                    </h2>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {productList.length > 0 ? (
                      <>
                        {productList
                          .slice(indexOfSliceArray, LastindexOfSliceArray.current)
                          .map((item) => (
                            <Link
                              key={item.id}
                              to={`/product/${item.id}`}
                              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100 flex flex-col"
                            >

                              {/* Product Image */}
                              <div className="h-56 bg-gray-50 flex items-center justify-center overflow-hidden p-5">
                                <img
                                  src={item.image}
                                  alt="image"
                                  onError={handleErrorImage}
                                  className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>

                              {/* Product Details */}
                              <div className="p-5 flex flex-col flex-grow">

                                {/* Title */}
                                <p className="text-gray-700 text-sm font-semibold line-clamp-2 min-h-[45px]">
                                  {item.title}
                                </p>

                                {/* Price */}
                                <div className="mt-4">
                                  <p className="text-2xl font-bold text-green-600">
                                    ₹{item.price}
                                  </p>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-between mt-4">
                                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {item.rating.rate} ★
                                  </span>
                                </div>

                              </div>
                            </Link>
                          ))}
                      </>
                    ) : showError ? (
                      <div className="flex items-center justify-center min-h-[300px]">
    
                      <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center shadow-md max-w-md w-full">
                        
                        <div className="text-5xl mb-4">⚠️</div>

                        <h2 className="text-2xl font-bold text-red-600 mb-2">
                          Failed to Fetch Products
                        </h2>

                        <p className="text-gray-600 mb-4">
                          Something went wrong while loading the products.
                        </p>

                        <p className="text-sm text-red-500 bg-red-100 rounded-lg px-3 py-2 inline-block">
                          {showError}
                        </p>

                        <button
                          onClick={() => window.location.reload()}
                          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl transition-all duration-300"
                        >
                          Try Again
                        </button>
                      </div>

                    </div>
                    ) : (
                      <div className="col-span-full flex items-center justify-center py-20">
                        <p className="text-xl text-gray-500 font-medium">
                          No items are there
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Load More Button */}
                  <div className="flex justify-center mt-12">
                    <button
                      onClick={() => {
                        LastindexOfSliceArray.current += 6;
                        setProductList(
                          sliceArray.slice(indexOfSliceArray, LastindexOfSliceArray.current)
                        );
                      }}
                      className={`${
                        LastindexOfSliceArray.current <= productList.length
                          ? "flex"
                          : "hidden"
                      } items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Load More
                    </button>
                  </div>

                </div>
              </div>
            </div>
        </>
    )
}

export default Home;

