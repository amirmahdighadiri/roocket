import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import useLocalStorage from "../Hooks/useLocalStorage/useLocalStorage.jsx";
import useToggle from "../Hooks/useToggle/useToggle.jsx";
import { supabase } from "../Lib/supabaseClient.js";
import {useSelector} from "react-redux";
import {getCoursesFromServer} from "../Redux/Store/Courses.jsx";
import {logoutUser} from "../Lib/Services/authService.js";
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
    const {courseLoading, courseHasFetched} = useSelector(
        state => state.courses
    );

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsOpenMenu(false)
        setIsShowOverlay(false)
        toggleDashboardMenu(false)
        toggleProfileMenu(false)
        toggleCartDropDown(false)
    }, [location.pathname])

    const logoutHandler = async () => {
        try {
            await logoutUser()
        }catch (err){
            throw err;
        }

    }

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
        setIsAuthLoading,
        logoutHandler
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

    useEffect(() => {
        if (!courseHasFetched && !courseLoading) {
            dispatch(getCoursesFromServer());
        }
    }, [dispatch, courseHasFetched, courseLoading]);


    return (
        <AppContext.Provider value={contentValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;