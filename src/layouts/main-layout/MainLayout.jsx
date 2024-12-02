import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const MainLayout = () => {
    return (
        <div style={{
            display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                minHeight: "100vh",
                maxHeight: "100vh"
        }}>
            <div>
                <Header/>
                <hr/>
            </div>
            <main style={{flexGrow: 1}}>
                <Outlet/>
            </main>
            <div style={{marginBottom: "1rem"}}>
                <hr/>
                <Footer/>
            </div>
        </div>
    )
}

export default MainLayout;