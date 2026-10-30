import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import useLocalStorage from "../Hooks/useLocalStorage/useLocalStorage.jsx";
import useToggle from "../Hooks/useToggle/useToggle.jsx";
import {getCoursesFromServer} from "../Redux/Store/Courses.jsx";
import {getCommentsFromServer} from "../Redux/Store/Comments.jsx";
import {getPodcastsFromServer} from "../Redux/Store/Podcasts.jsx";
import {getLearningPathFromServer} from "../Redux/Store/LearningPath.jsx";
import {getArticlesFromServer} from "../Redux/Store/Articles.jsx";
import {getUsersFromServer} from "../Redux/Store/Users.jsx";
import {getCartsFromServer} from "../Redux/Store/Carts.jsx";
import {getDiscountFromServer} from "../Redux/Store/Discount.jsx";
import { supabase } from "../Lib/supabaseClient.js";

export const AppContext = createContext()


function AppProvider({children}) {
    const dispatch = useDispatch();
    const location = useLocation();
    const [isOpenMenu, setIsOpenMenu] = useToggle(false);
    const [isShowOverlay, setIsShowOverlay] = useToggle(false);
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [isShowNotification, setIsShowNotification] = useState(false);
    const [isOpenProfileMenu , toggleProfileMenu] = useToggle()
    const [isOpenDashboardMenu , toggleDashboardMenu] = useToggle()
    const [isOpenCartDropDown , toggleCartDropDown] = useToggle();
    const [isAuthLoading, setIsAuthLoading] = useToggle(true);

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsOpenMenu(false)
        setIsShowOverlay(false)
        toggleDashboardMenu(false)
        toggleProfileMenu(false)
        toggleCartDropDown(false)
    }, [location.pathname])

    const contentValue = {
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
        toggleProfileMenu,
        isOpenDashboardMenu ,
        toggleDashboardMenu,
        isOpenCartDropDown,
        toggleCartDropDown,
        isAuthLoading,
        setIsAuthLoading
    }

    useEffect(() => {
        document.documentElement.className = String(theme);
    }, [theme])

    useEffect(() => {
        const {data: { subscription },} = supabase.auth.onAuthStateChange((_event, session) => {

            setIsLogin(!!session);
            setUserInfo(session?.user.user_metadata ?? {});
            setIsAuthLoading(false);

        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    console.log(userInfo)

    return (
        <AppContext.Provider value={contentValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;