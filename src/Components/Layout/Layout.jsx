import React from 'react';
import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Notification from "../Notification/Notification.jsx";

function Layout(props) {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                <Outlet />
            </main>
            <Footer />
            <Notification />
        </>
    );
}

export default Layout;