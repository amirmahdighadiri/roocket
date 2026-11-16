import {createContext, useEffect, useState} from "react";
import {useLocation,useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import useLocalStorage from "../Hooks/useLocalStorage/useLocalStorage.jsx";
import useToggle from "../Hooks/useToggle/useToggle.jsx";
import { supabase } from "../Lib/supabaseClient.js";
import {useSelector} from "react-redux";
import {getCoursesFromServer} from "../Redux/Store/Courses.jsx";
import {logoutUser} from "../Lib/Services/authService.js";
import DynamicIcon from "../DynamicIcon/DynamicIcon.jsx";
export const AppContext = createContext()


function AppProvider({children}) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
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
    const [isShowConfirmModal, setIsShowConfirmModal] = useToggle();
    const [confirmModalData, setConfirmModalData] = useState(null);
    const [logoutLoading, setLogoutLoading] = useState(false);
    const {courseLoading, courseHasFetched} = useSelector(
        state => state.courses
    );
    const [notificationValue, setNotificationValue] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsOpenMenu(false)
        setIsShowOverlay(false)
        toggleDashboardMenu(false)
        toggleProfileMenu(false)
        toggleCartDropDown(false)
    }, [location.pathname])

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

    const openConfirmModal = (data) => {
        setIsShowConfirmModal(true);
        setConfirmModalData(data);
        setIsShowOverlay(true)
        toggleProfileMenu()
    };

    const closeConfirmModal = () => {
        setIsShowConfirmModal(false);
        setConfirmModalData(null);
        setIsShowOverlay(false)
        toggleProfileMenu(false)
    }

    const confirmModalHandler = () => {
        confirmModalData.onConfirm();
    };

    const logoutHandler = async () => {
        setLogoutLoading(true);

        try {
            await logoutUser();

            setNotificationValue({
                title: "موفق!",
                message: "با موفقیت از حساب کاربری خارج شدید.",
                Icon: () => (
                    <DynamicIcon
                        name="checkCircle"
                        className="size-7 text-blue-700"
                    />
                ),
            });

            setIsShowNotification(true);

            setTimeout(() => {
                navigate("/", { replace: true });
            }, 2500);

        } catch (err) {
            setNotificationValue({
                title: "خطا!",
                message: "خروج از حساب انجام نشد. دوباره تلاش کنید.",
                Icon: () => (
                    <DynamicIcon
                        name="closeCircle"
                        className="size-7 text-blue-700"
                    />
                ),
            });

            setIsShowNotification(true);
        }finally {
            setLogoutLoading(false)
            closeConfirmModal();
        }
    };

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
        logoutHandler,
        notificationValue, setNotificationValue,
        openConfirmModal,
        closeConfirmModal,
        isShowConfirmModal,
        setIsShowConfirmModal,
        confirmModalHandler,
        confirmModalData,
        logoutLoading
    }

    return (
        <AppContext.Provider value={contentValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;