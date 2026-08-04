import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage/useLocalStorage.jsx";
import useToggle from "../Hooks/useToggle/useToggle.jsx";

export const AppContext = createContext()


function AppProvider({children}) {
    const location = useLocation();
    const [isOpenMenu, setIsOpenMenu] = useToggle(false);
    const [isShowOverlay, setIsShowOverlay] = useToggle(false);
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [isLoggin, setIsLoggin] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
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
        isLoggin,
        userInfo,
    }

    useEffect(() => {
        document.documentElement.className = String(theme);
    }, [theme])

    useEffect(() => {
        const userRegistrationHandler = async () => {
            const userID = document.cookie.substring(document.cookie.indexOf('=') + 1)
            if (userID) {
                try {
                    const res = await fetch(`http://localhost:3000/users/${userID}`)
                    const data = await res.json()
                    setIsLoggin(true)
                    setUserInfo(data)
                } catch (err){
                    console.log(err)
                }
            }
        }
        userRegistrationHandler()
    }, [])

    return (
        <AppContext.Provider value={conectValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;