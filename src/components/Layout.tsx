import React from 'react';
import SideBar from "./SideBar";
import HeaderComponent from "./HeaderComponent";
import DashboardComponent from "./DashboardComponent";

const Layout = () => {
    return (
        <div className="layout" >
        <SideBar/>
            <main className="layout-main">
                <HeaderComponent/>
                <div className="layout-content">
                <DashboardComponent/>
                    <div className={"mobile-scroll"}/>
                </div>
            </main>
        </div>
    );
};

export default Layout;
