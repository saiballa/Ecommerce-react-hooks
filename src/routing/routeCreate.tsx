import  React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import PersonalInfoPage from "../components/personalInfo/personalInfo";
import AddressPage from "../components/adressInfo/addressInfo";
import Layout from "../layout/rootLayout/layout";
import WelcomePage from "../components/home/home";
import ReviewPage from "../components/review/reviewPage";
import ProductsDeatilsPage from "../components/productDeatils/productDetails";
import CartPage from "../components/cart/cart";
import AccountPage from "../components/account/account";
import OrderSuccessPage from "../components/order/ordersPage";
import InfoSubmitSuccess from "../components/infoSubmit/accountInfoSubmit";
import Registration from "../components/registration/registartion";
import LoginPage from "../components/login/login";
import { Outlet,Navigate } from "react-router-dom";

const CreateRoutes:React.FC=()=>{

    const PublicWrapper = ()=>{
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return !token ? <Outlet/> : <Navigate to="/" replace/>;
};

const PrivateWrapper = ()=>{
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token ? <Outlet/> : <Navigate to="/login" replace/>;
};

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {index:true,element:<WelcomePage/>},
                {path:"/product/:id",element:<ProductsDeatilsPage/>},
                {
                    element:<PublicWrapper/>,
                    children:[
                        {path:"/register",element:<Registration/>},
                        {path:"/login",element:<LoginPage/>},
                    ]
                },
                {
                    element:<PrivateWrapper/>,
                    children:[
                        {path:"/personalInfo",element:<PersonalInfoPage/>},
                        {path:"/addressInfo",element:<AddressPage/>},
                        {path:"/review",element:<ReviewPage/>},
                        {path:"/cart",element:<CartPage/>},
                        {path:"/account",element:<AccountPage/>},
                        {path:"/orders",element:<OrderSuccessPage/>},
                        {path:"/infoSubmit",element:<InfoSubmitSuccess/>},
                    ]
                }
            ]
        }
    ])

    

    return(
        <>
            <RouterProvider  router={router}/>
        </>
    )
}

export default CreateRoutes;