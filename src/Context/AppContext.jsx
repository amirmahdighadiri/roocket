import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import useLocalStorage from "../Hooks/useLocalStorage/useLocalStorage.jsx";
import useToggle from "../Hooks/useToggle/useToggle.jsx";
import useCookie from "../Hooks/useCookie/useCookie.jsx";
import {getCoursesFromServer} from "../Redux/Store/Courses.jsx";
import {getCommentsFromServer} from "../Redux/Store/Comments.jsx";
import {getPodcastsFromServer} from "../Redux/Store/Podcasts.jsx";
import {getLearningPathFromServer} from "../Redux/Store/LearningPath.jsx";
import {getArticlesFromServer} from "../Redux/Store/Articles.jsx";
import {getUsersFromServer} from "../Redux/Store/Users.jsx";
import {getCartsFromServer} from "../Redux/Store/Carts.jsx";
import {getDiscountFromServer} from "../Redux/Store/Discount.jsx";

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
    const [userId, setUserId] = useCookie("userID" , "")
    const [isOpenProfileMenu , toggleProfileMenu] = useToggle()
    const [isOpenDashboardMenu , toggleDashboardMenu] = useToggle()
    const [isOpenCartDropDown , toggleCartDropDown] = useToggle();

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
        toggleCartDropDown
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

    useEffect(() => {
        dispatch(getUsersFromServer())
        dispatch(getCoursesFromServer())
        dispatch(getPodcastsFromServer())
        dispatch(getLearningPathFromServer())
        dispatch(getArticlesFromServer())
        dispatch(getCommentsFromServer())
        dispatch(getDiscountFromServer())
    } , [])

    useEffect(() => {
        if (isLogin) dispatch(getCartsFromServer())
    }, [isLogin])

    return (
        <AppContext.Provider value={contentValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;