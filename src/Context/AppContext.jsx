import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage/useLocalStorage.jsx";
import useToggle from "../Hooks/useToggle/useToggle.jsx";
import useCookie from "../Hooks/useCookie/useCookie.jsx";

export const AppContext = createContext()


function AppProvider({children}) {
    const location = useLocation();
    const [isOpenMenu, setIsOpenMenu] = useToggle(false);
    const [isShowOverlay, setIsShowOverlay] = useToggle(false);
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [isShowNotification, setIsShowNotification] = useState(false);
    const [userId, setUserId] = useCookie("userID" , "")
    const [isOpenProfileMenu , toggleProfileMenu] = useToggle()

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsOpenMenu(false)
        setIsShowOverlay(false)
    }, [location.pathname])

    const conectValue = {
        theme,
        setTheme,
        isOpenMenu,
        setIsOpenMenu,
        isShowOverlay,
        setIsShowOverlay,
        isLogin,
        setIsLogin,
        userInfo,
        setUserInfo,
        isShowNotification,
        setIsShowNotification,
        isOpenProfileMenu ,
        toggleProfileMenu
    }

    useEffect(() => {
        document.documentElement.className = String(theme);
    }, [theme])

    useEffect(() => {
        const userRegistrationHandler = async () => {
            if (!userId) {
                setIsLogin(false);
                return;
            }
            try {
                const res = await fetch(
                    `http://localhost:3000/users/${userId}`
                );

                if (!res.ok) {
                    setIsLogin(false);
                    return;
                }

                const data = await res.json();

                setIsLogin(true);
                setUserInfo(data);

            } catch (err) {
                console.log(err);
                setIsLogin(false);
            }
        };
        userRegistrationHandler();

    }, [userId]);

    return (
        <AppContext.Provider value={conectValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;