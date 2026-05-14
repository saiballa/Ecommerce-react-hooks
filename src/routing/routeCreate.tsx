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

const CreateRoutes:React.FC=()=>{

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {index:true,element:<WelcomePage/>},
                {path:"/personalInfo",element:<PersonalInfoPage/>},
                {path:"/addressInfo",element:<AddressPage/>},
                {path:"/review",element:<ReviewPage/>},
                {path:"/product/:id",element:<ProductsDeatilsPage/>},
                {path:"/cart",element:<CartPage/>},
                {path:"/account",element:<AccountPage/>},
                {path:"/orders",element:<OrderSuccessPage/>},
                {path:"/infoSubmit",element:<InfoSubmitSuccess/>},
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