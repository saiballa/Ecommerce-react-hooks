import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout:React.FC=()=>{
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className="grow">
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    )
}
export default Layout;