import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {AppContext} from "../../Context/AppContext.jsx";

{/*<!-- ! -------------------- Images ! -------------------- ! -->*/
}
import defaultProfile from "../../assets/images/profile/default.png"
import Overlay from "../Overlay/Overlay.jsx";
import useToggle from "../../Hooks/useToggle/useToggle.jsx";
import useCookie from "../../Hooks/useCookie/useCookie.jsx";


function Header(props) {
    const {theme, setTheme, isOpenMenu, setIsOpenMenu, setIsShowOverlay, isLogin, userInfo} = useContext(AppContext)
    const [isOpenCoursesSubmenu, toggleCoursesSubmenu] = useToggle(false)
    const [isOpenUsefullSubmenu, toggleUsefullSubmenu] = useToggle(false)

    console.log(isLogin)
    const changeThemeHandler = () => theme === "dark" ? setTheme("light") : setTheme("dark")

    const openMenuHandler = () => {
        setIsOpenMenu();
        setIsShowOverlay();
    }
    const closeMenuHandler = () => {
        setIsOpenMenu()
        setIsShowOverlay();
    }

    const closeSubMenus = event => {
        const target = event.target.closest("#useful-link-btn") || event.target.closest("#courses-btn")
        if (!target) {
            toggleCoursesSubmenu(false);
            toggleUsefullSubmenu(false)
        }
    }

    useEffect(() => {
        window.addEventListener("click", closeSubMenus);

        return () => window.removeEventListener("click", closeSubMenus);

    }, [])

    return (
        <header className="mt-7">
            <div className="container">
                {/*<!-- ! -------------------- Header Logo & SearchBox & Buttons -------------------- ! -->*/}
                <div className="flex items-center justify-between bg-white dark:bg-dark-890 rounded-2xl p-5 sm:px-11 sm:py-9 shadow-whiteShadow">
                    {/*<!-- ! -------------------- Header Menu Buttons In Mobile -------------------- ! -->*/}
                    <div onClick={openMenuHandler} className="block lg:hidden dark:text-white text-biscay-700">
                        <DynamicIcon name={'bar3'} className={'w-6 h-4.5'}/>
                    </div>
                    {/*<!-- ! -------------------- Header Logos -------------------- ! -->*/}
                    <Link to="/" className="block">
                        {/*<!-- ! -------------------- Header Logo In Mobile -------------------- ! -->*/}
                        <DynamicIcon name={'mobileLogo'} className={'sm:ml-0 -ml-6 block sm:hidden w-7 h-10.75'}/>
                        {/*<!-- ! -------------------- Header Logo In Desktop -------------------- ! -->*/}
                        <DynamicIcon name={'lightLogo'}
                                     className={'hidden sm:block dark:sm:hidden w-40 h-9 md:w-52 md:h-11.5'}/>
                        <DynamicIcon name={'darkLogo'} className={'hidden sm:dark:block w-40 h-9 md:w-52 md:h-11.5'}/>
                    </Link>
                    {/*<!-- ! -------------------- Header Search Input AND Change Theme Btn -------------------- ! -->*/}
                    <div className="hidden lg:flex w-1/2 items-center gap-x-4 font-YekanBakh-Medium text-xs">
                        {/*<!-- ! -------------------- Header Search Inpu Wrapper -------------------- ! -->*/}
                        <div
                            className="flex w-full h-12 items-center gap-x-2.5 py-4 px-3 bg-gray-210 dark:bg-dark-body-100 rounded-xl">
                            <DynamicIcon name={'search'} className={'dark:text-white w-4 h-4 text-primary-gray-300'}/>
                            <input type="text"
                                   className="w-full border-none outline-0 dark:text-white dark:placeholder:text-white"
                                   placeholder="دنبال چی میگردی ؟"/>
                        </div>
                        {/*<!-- ! -------------------- Change Them Btn -------------------- ! -->*/}
                        <div onClick={changeThemeHandler}
                             className="change-them-btn flex-center w-12 h-12 dark:bg-dark-body-100 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full cursor-auto md:cursor-pointer transition-all shrink-0 group">
                            <DynamicIcon name={'sun'}
                                         className={'block dark:hidden w-6 h-6 text-biscay-700 group-hover:text-gray-920'}/>
                            <DynamicIcon name={'moon'}
                                         className={'hidden dark:block w-6 h-6 text-gray-920 group-hover:text-biscay-700 pt-0.5 pr-0.5'}/>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Header Sign-in OR Sign-up Buttons -------------------- ! -->*/}
                    <div className={`${isLogin ? 'hidden' : 'flex'} items-center gap-x-1 font-YekanBakh-Medium`}>
                        <Link to="/auth">
                            <button
                                type="button"
                                data-href="login"
                                className="auth-buttons h-10 flex items-center justify-center gap-1 rounded-lg px-3 bg-blue-700/10 text-blue-700 hover:bg-blue-700 hover:text-white transition-all"
                            >
            <span className="hidden lg:block">
                ورود
            </span>

                                <DynamicIcon
                                    name="login"
                                    className="w-5.5 h-5.75"
                                />
                            </button>
                        </Link>
                        <Link to="/auth">
                            <button
                                type="button"
                                data-href="register"
                                className="auth-buttons hidden lg:flex items-center justify-center h-10 gap-1 rounded-lg px-3 bg-blue-700 text-white transition-all hover:opacity-80">
                                <span>عضویت</span>

                                <DynamicIcon
                                    name="profile"
                                    className="w-5.5 h-5.75"
                                />
                            </button>
                        </Link>
                    </div>
                    {/*<!-- ! -------------------- The Other Buttons Are Activated When The Users Is Login -------------------- ! -->*/}
                    <div className={`${isLogin ? 'flex' : 'hidden'} items-center gap-x-4`}>
                        {/*<!-- ! -------------------- Basket Btn -------------------- ! -->*/}
                        <div className="w-12 h-12 hidden lg:flex items-center justify-center dark:bg-dark-body-100 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group">
                            <DynamicIcon name={'shopping'}
                                         className={'w-6 h-6 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                        </div>
                        {/*<!-- ! -------------------- Message Btn -------------------- ! -->*/}
                        <div
                            className="w-12 h-12 hidden lg:flex items-center justify-center relative dark:bg-dark-body-100 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group">
                            <DynamicIcon name={'bell'}
                                         className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                            <span
                                className="size-6 flex-center absolute -top-2 -right-2 bg-red-450 text-white rounded-full font-YekanBakh text-sm">12</span>
                        </div>
                        {/*<!-- ! -------------------- Users Profile Image And Profile Menu -------------------- ! -->*/}
                        <div className="relative">
                            {/*<!-- ! -------------------- Profile Wrapper -------------------- ! -->*/}
                            <div className="relative size-12">
                                {/*<!-- ! -------------------- Profile Image Wrapper -------------------- ! -->*/}
                                <div
                                    className="w-full h-full overflow-hidden bg-gray-300 rounded-full border-2 border-primary-gray-185">
                                    <img src={defaultProfile} alt="user defult profile" className=""/>
                                </div>
                                {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                                <span
                                    className="size-6 flex-center absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full font-YekanBakh text-sm">6</span>
                            </div>
                            {/*<!-- ! -------------------- Profile Menu -------------------- ! -->*/}
                            <div className=""></div>
                        </div>
                    </div>
                </div>
                {/*<!-- ! -------------------- Header Menu Item ! =>(in mobile remove closed-position and add opened-position to show mwnu in mobile) ! -------------------- ! -->*/}
                <nav id="menu"
                     className={`fixed lg:static top-0 bottom-0 ${isOpenMenu ? 'right-0' : '-right-69'} h-full lg:h-auto w-69 lg:w-[92%] mx-auto bg-white lg:bg-[#CFD3DB] dark:bg-dark-910 lg:dark:bg-dark-body-100 py-5 px-5 lg:px-0 lg:rounded-b-3xl dark:shadow-whiteShadow transition-all z-20 overflow-y-auto lg:overflow-y-visible`}>
                    {/*<!-- ! -------------------- More Option Menu Wrapper -------------------- ! -->*/}
                    <div className="block lg:hidden">
                        {/*<!-- ! -------------------- Close Menu Btn In Mobile -------------------- ! -->*/}
                        <div onClick={closeMenuHandler} className="pb-2" dir="ltr">
                            <DynamicIcon name={'xMark'} className={'size-4'}/>
                        </div>
                        {/*<!-- ! -------------------- Header Logos -------------------- ! -->*/}
                        <Link to="/" className="flex justify-center mb-5">
                            {/*<!-- ! -------------------- Header Logo In Desktop -------------------- ! -->*/}
                            <svg className="hidden dark:block w-40 h-9" xmlns="http://www.w3.org/2000/svg"
                                 id="big-logo-dark" fill="none" viewBox="0 0 203 46">
                                <path fill="#fff"
                                      d="M56.743 30.607 50.61 24.58h-8.23v6.027h-3.59V9.568h15.336c3.479 0 6.434 3.45 6.434 7.506 0 3.298-2.02 6.33-4.788 7.24l-.3.114 6.247 6.217h-4.975zM42.38 20.524h11.595c1.609 0 3.03-1.63 3.03-3.488 0-1.895-1.384-3.45-3.03-3.45H42.38zM75.448 31.018c-7.406 0-11.67-3.791-11.67-10.425v-1.061c0-6.634 4.264-10.425 11.67-10.425s11.67 3.791 11.67 10.425v1.061c0 6.634-4.264 10.425-11.67 10.425m0-17.627c-4.19 0-8.08.758-8.08 6.255v.871c0 5.497 3.89 6.255 8.08 6.255 4.002 0 8.117-.758 8.117-6.255v-.871c0-5.535-4.115-6.255-8.117-6.255M101.743 31.018c-7.407 0-11.67-3.791-11.67-10.425v-1.061c0-6.634 4.263-10.425 11.67-10.425 7.406 0 11.67 3.791 11.67 10.425v1.061c0 6.634-4.227 10.425-11.67 10.425m0-17.627c-4.19 0-8.08.758-8.08 6.255v.871c0 5.497 3.89 6.255 8.08 6.255 4.002 0 8.117-.758 8.117-6.255v-.871c0-5.535-4.078-6.255-8.117-6.255M191.441 30.607V13.814h-7.93V9.568h19.451v4.246h-7.93v16.793zM128.003 30.944c-3.479 0-11.558-1.023-11.558-10.349v-1.099c0-9.325 8.079-10.349 11.558-10.349 5.349 0 7.369 1.1 7.743 1.365v3.525c-.861-.303-3.853-1.25-7.743-1.25-5.087 0-7.78 2.35-7.78 6.823v.91c0 4.473 2.693 6.823 7.78 6.823 3.89 0 6.882-.948 7.743-1.251v3.525c-.374.228-2.394 1.327-7.743 1.327M153.475 30.496l-10.511-9.855v9.855h-3.777V9.647h3.777v10.046l10.287-10.046h6.097l-11.109 10.425 11.745 10.424zM162.152 30.496V9.647h18.441v3.564H165.93v5.155h13.578v3.374H165.93v5.155h14.663v3.601zM200.232 5.174h-.973v2.274h-.224V5.174h-1.01v-.228h2.244v.228zM202.738 4.946H203v2.502h-.224V5.363a17 17 0 0 1-.823 1.592h-.225a11 11 0 0 1-.86-1.592v2.085h-.224V4.946h.261c.225.531.524 1.138.898 1.782.412-.644.711-1.251.935-1.782"></path>
                                <path fill="#FF8429" d="M14.405 45.013 9.168 37.28l5.237-5.307 5.2 5.307z"></path>
                                <path fill="#E81C4D"
                                      d="M28.802 15.518V33.03l-7.182-5.535s.786-6.823.935-12.016c.075-2.578-2.281-4.739-8.154-7.658-5.835 2.957-8.192 5.118-8.117 7.696.112 5.155.935 12.016.935 12.016L0 33.031V15.518c0-3.109 1.31-5.914 3.853-8.302C5.648 5.51 8.117 3.918 11.895 2.06L14.438.81l2.544 1.25c3.74 1.858 6.247 3.45 8.042 5.156 2.506 2.388 3.778 5.193 3.778 8.301"></path>
                            </svg>
                            <svg className="blcok dark:hidden w-40 h-9" xmlns="http://www.w3.org/2000/svg"
                                 xmlSpace="preserve" id="big-logo-light" width="220" x="0" y="0" version="1.1"
                                 viewBox="0 0 578 128">
                                <path fill="#f90" d="m46.3 124.7-14.5-21.3 14.5-14.5 14.6 14.5z"></path>
                                <path fill="#f33"
                                      d="M86.5 43.7v48l-20-15.1s2.2-18.7 2.6-32.9c.2-7-6.4-13-22.6-21-16.3 8.1-22.8 14-22.6 21 .4 14.2 2.6 32.9 2.6 32.9l-20 15.1v-48c0-8.5 3.6-16.2 10.7-22.8 5-4.7 11.9-9 22.3-14.1l7-3.5 7 3.5c10.4 5.1 17.3 9.5 22.3 14.1 7.1 6.6 10.7 14.3 10.7 22.8"></path>
                                <path fill="#637789"
                                      d="m163.7 86.1-17-16.5h-21.5v16.5h-12V26.4h43.7c10.3 0 18.9 9.9 18.9 21.6 0 9.2-5.5 17.7-13.2 20.5l17.9 17.6zm-7.3-29.6c3.9 0 7.4-4 7.4-8.5 0-4.6-3.4-8.5-7.4-8.5h-31.2v16.9h31.2zM216.1 87.4c-21.3 0-33.5-10.8-33.5-29.6v-2.9c0-18.8 12.2-29.7 33.5-29.7s33.5 10.8 33.5 29.7v2.9c0 18.8-12.2 29.6-33.5 29.6m0-48.4c-12.9 0-21.4 2.7-21.4 16.1v2.4c0 13.3 8.6 16.1 21.4 16.1 11.2 0 21.5-1.9 21.5-16.1V55c0-14.1-10.3-16-21.5-16M289.2 87.4c-21.3 0-33.5-10.8-33.5-29.6v-2.9c0-18.8 12.2-29.7 33.5-29.7s33.5 10.8 33.5 29.7v2.9c0 18.8-12.2 29.6-33.5 29.6m0-48.4c-12.9 0-21.4 2.7-21.4 16.1v2.4c0 13.3 8.6 16.1 21.4 16.1 11.2 0 21.5-1.9 21.5-16.1V55c.1-14.1-10.3-16-21.5-16M537.5 86.1v-46h-22.1V26.4h56.2v13.7h-22.1v46zM362.2 87.1c-10 0-33.2-2.9-33.2-29.4v-3c0-26.5 23.2-29.4 33.2-29.4 14.9 0 20.7 3 22.1 3.9l.5.3v11.7l-1.4-.5c-2.3-.8-10.4-3.4-21.2-3.4-13.7 0-20.6 5.9-20.6 17.6v2.5c0 11.7 6.9 17.6 20.6 17.6 10.7 0 18.9-2.6 21.2-3.4l1.4-.5v11.7l-.5.3c-1.4 1-7.2 4-22.1 4M432.6 85.8l-27.7-25.6v25.6h-12.6V26.6h12.6v26.2L432 26.6h18.4L420 56.2l32.3 29.6zM456 85.8V26.6h53.3v11.9h-40.7v12h37.7v11.4h-37.7v12h40.7v11.9z"></path>
                            </svg>
                        </Link>
                        {/*<!-- ! -------------------- Header Search Input Wrapper -------------------- ! -->*/}
                        <div
                            className="flex w-full h-12 items-center gap-x-2.5 py-4 px-3 bg-gray-210 dark:bg-dark-body-100 rounded-xl font-YekanBakh-Medium">
                            <DynamicIcon name={'search'} className={'size-4 text-primary-gray-300 shrink-0'}/>
                            <input type="text"
                                   className="w-full border-none outline-0 dark:text-white dark:placeholder:text-white text-sm"
                                   placeholder="دنبال چی میگردی ؟"/>
                        </div>
                        {/*<!-- ! -------------------- Menu Buttons For Mobile -------------------- ! -->*/}
                        <div
                            className="flex lg:hidden flex-col gap-y-5 font-YekanBakh-Medium py-5 border-y border-gray-200 dark:border-border-gray-100/10 mt-5">
                            {/*<!-- ! -------------------- Change Them Btn -------------------- ! -->*/}
                            <div onClick={changeThemeHandler} className="change-them-btn flex items-center gap-x-2">
                                <div
                                    className="flex-center w-12 h-12 dark:bg-dark-body-100 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group">
                                    <DynamicIcon name={'sun'}
                                                 className={'block dark:hidden w-6 h-6 text-biscay-700 group-hover:text-gray-920'}/>
                                    <DynamicIcon name={'moon'}
                                                 className={'hidden dark:block w-6 h-6 text-gray-920 group-hover:text-biscay-700 pt-0.5 pr-0.5'}/>
                                </div>
                                <span className="text-[#334155] dark:text-white" id="theme-text">تم تاریک</span>
                            </div>
                            {/*<!-- ! -------------------- Basket Btn -------------------- ! -->*/}
                            <div className="flex items-center gap-x-2">
                                <div
                                    className="w-12 h-12 flex-center dark:bg-dark-body-100 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group">
                                    <DynamicIcon name={'bag'}
                                                 className={'w-6 h-6 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                                </div>
                                <span className="text-[#334155] dark:text-white">سبد خرید</span>
                            </div>
                            {/*<!-- ! -------------------- Message Btn -------------------- ! -->*/}
                            <div className="flex items-center gap-x-2">
                                <div
                                    className="w-12 h-12 relative flex-center dark:bg-dark-body-100 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group">
                                    <DynamicIcon name={'bell'}
                                                 className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                                    <span
                                        className="w-6 h-6 flex-center absolute -top-1.5 -right-1.5 bg-red-450 text-white rounded-full font-YekanBakh text-sm">12</span>
                                </div>
                                <span className="text-[#334155] dark:text-white">اعلانات</span>
                            </div>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Menu Items -------------------- ! -->*/}
                    <ul className="font-YekanBakh-Medium flex flex-col lg:flex-row gap-y-7 lg:items-center lg:justify-center gap-x-10 pt-6 lg:pt-0 pr-2 lg:pr-0">
                        <li className="flex items-center h-6 gap-x-2 text-biscay-700 hover:text-gray-hover-200 dark:text-white dark:hover:text-gray-hover-150 transition-all">
                            <DynamicIcon name={'home'}
                                         className={'block lg:hidden w-5 h-5 dark:text-white text-biscay-700'}/>
                            <Link to="/">راکت</Link>
                        </li>
                        <li className={`lg:relative ${isOpenCoursesSubmenu ? 'h-auto' : 'h-6'} text-biscay-700 hover:text-gray-hover-200 dark:text-white dark:hover:text-gray-hover-150 transition-all`}>
                            <div onClick={toggleCoursesSubmenu} id="courses-submenu-btn"
                                 className="flex items-center gap-x-2">
                                <DynamicIcon name={'play'}
                                             className={`block lg:hidden w-5 h-5 dark:text-white text-biscay-700`}/>
                                <button type={"button"} id="courses-btn"
                                        className="flex items-center gap-x-2 cursor-pointer">
                                    دوره های آموزشی
                                    <DynamicIcon name={'arrowDown'}
                                                 className={`w-3.5 h-2 text-biscay-700 dark:text-white dark:group-hover:text-gray-20 transition-all ${isOpenCoursesSubmenu ? 'rotate-180' : 'rotate-0'}`}/>
                                </button>
                            </div>
                            {/*<!-- ! -------------------- Courses Item Sub Menu =>( remove closed class and add opened class to show submenu) -------------------- ! -->*/}
                            <div
                                className={`${isOpenCoursesSubmenu ? 'opened' : 'closed'} w-auto lg:w-119 lg:absolute lg:-right-2 lg:top-14 bg-white dark:bg-dark-890 lg:dark:bg-dark-body-100 rounded-lg pt-2 lg:pt-5 lg:p-5 mt-2.5 lg:mt-0 z-20 transition-all origin-[50%-0px]`}>
                                {/*<!-- ! -------------------- Courses Items Wrapper -------------------- ! -->*/}
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-6">
                                        <Link to="/products-page"
                                              className="flex items-start gap-x-2 pt-4 px-2 pb-2 hover:bg-gray-hover-100 dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 rounded-md transition-all">
                                            <DynamicIcon name={'courses'} className={'w-6.25 h-5.75 fill-blue-600'}/>
                                            <div className="">
                                                <h4 className="font-YekanBakh-Bold text-primary-gray-300 dark:text-white text-lg">دوره‌های
                                                    آموزش</h4>
                                                <p className="hidden lg:block font-YekanBakh-Medium text-sm text-[#95A0B1]">لیست
                                                    دوره‌های آموزشی
                                                    ویدیویی راکت</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <Link to="/skills"
                                              className="flex items-start gap-x-2 pt-4 px-2 pb-2 hover:bg-gray-hover-100 dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 rounded-md transition-all">
                                            <DynamicIcon name={'learningPaths'} className={'w-6.25 h-5.75'}/>
                                            <div className="">
                                                <h4 className="font-YekanBakh-Bold text-primary-gray-300 dark:text-white text-lg">
                                                    مسیرهای یادگیری
                                                </h4>
                                                <p className="hidden lg:block font-YekanBakh-Medium text-sm text-[#95A0B1]">مسیرهای
                                                    یادگیری قدم به
                                                    قدم برنامه‌نویسی</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <Link to="/"
                                              className="flex items-start gap-x-2 pt-4 px-2 pb-2 hover:bg-gray-hover-100 dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 rounded-md transition-all">
                                            <DynamicIcon name={'progressTracker'} className={'w-6.25 h-5.75'}/>
                                            <div className="">
                                                <h4 className="font-YekanBakh-Bold text-primary-gray-300 dark:text-white text-lg">پیشرفت
                                                    من</h4>
                                                <p className="hidden lg:block font-YekanBakh-Medium text-sm text-[#95A0B1]">مسیر
                                                    پیشرفت
                                                    آموزشی شما
                                                    در راکت</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <Link to="/products-page" state="free"
                                              className="flex items-start gap-x-2 pt-4 px-2 pb-2 hover:bg-gray-hover-100 dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 rounded-md transition-all">
                                            <DynamicIcon name={'courses'} className={'w-6.25 h-5.75 fill-purple-600'}/>
                                            <div className="">
                                                <h4 className="font-YekanBakh-Bold text-primary-gray-300 dark:text-white text-lg">دوره‌های
                                                    رایگان</h4>
                                                <p className="hidden lg:block font-YekanBakh-Medium text-sm text-[#95A0B1]">برای
                                                    شروع
                                                    بدون هزینه
                                                    آموزش ببینید</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <Link to="/certifications"
                                              className="flex items-start gap-x-2 pt-4 px-2 pb-2 hover:bg-gray-hover-100 dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 rounded-md transition-all">
                                            <DynamicIcon name={'courses'} className={'w-6.25 h-5.75 fill-green-600'}/>
                                            <div className="">
                                                <h4 className="font-YekanBakh-Bold text-primary-gray-300 dark:text-white text-lg">گواهی
                                                    پایان
                                                    دوره</h4>
                                                <p className="hidden lg:block font-YekanBakh-Medium text-sm text-[#95A0B1]">گواهیتاییدیه
                                                    کسب مهارت
                                                    فنی دوره‌ها</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                {/*<!-- ! -------------------- Popular Courses -------------------- ! -->*/}
                                <div
                                    className="w-full bg-[#F7F8F9] dark:bg-dark-950 lg:dark:bg-drak-890 rounded-lg pl-1 pr-3 lg:px-4 py-4 mt-4">
                                    <div className="relative">
                                        <h3 className="text-lg relative font-bold dark:text-white text-[#5D6878] mb-4 z-10">محبوب‌ترین
                                            آموزش‌ها</h3>
                                        <span
                                            className="w-4 h-4 absolute top-0 -right-2 inline-block bg-blue-700/20 rounded-full"></span>
                                    </div>
                                    <ul className="flex flex-wrap gap-3">
                                        <li className="bg-gray-hover-200/60 px-2 text-white font-YekanBakh-Medium rounded-lg inline-block text-sm lg:text-base">
                                            <Link to="/">آموزش جاوا اسکریپت</Link></li>
                                        <li className="bg-gray-hover-200/60 px-2 text-white font-YekanBakh-Medium rounded-lg inline-block text-sm lg:text-base">
                                            <Link to="/">آموزش لاراول</Link></li>
                                        <li className="bg-gray-hover-200/60 px-2 text-white font-YekanBakh-Medium rounded-lg inline-block text-sm lg:text-base">
                                            <Link to="/">آموزش وردپرس</Link></li>
                                        <li className="bg-gray-hover-200/60 px-2 text-white font-YekanBakh-Medium rounded-lg inline-block text-sm lg:text-base">
                                            <Link to="/">آموزش react</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center h-6 gap-x-2 text-biscay-700 hover:text-gray-hover-200 dark:text-white dark:hover:text-gray-hover-150 transition-all">
                            <DynamicIcon name={'question'}
                                         className={'block lg:hidden w-5 h-5 dark:text-white text-biscay-700'}/>
                            <Link to="/" className="">پرسش و پاسخ ها</Link>
                        </li>
                        <li className="flex items-center h-6 gap-x-2 text-biscay-700 hover:text-gray-hover-200 dark:text-white dark:hover:text-gray-hover-150 transition-all">
                            <DynamicIcon name={'document'}
                                         className={'block lg:hidden w-5 h-5 dark:text-white text-biscay-700'}/>
                            <Link to="/" className="">مقالات</Link>
                        </li>
                        <li className="flex items-center h-6 gap-x-2 text-biscay-700 hover:text-gray-hover-200 dark:text-white dark:hover:text-gray-hover-150 transition-all">
                            <DynamicIcon name={'podcast'}
                                         className={'block lg:hidden w-5 h-5 dark:text-white text-biscay-700'}/>
                            <Link to="/" className="">راکت کست</Link>
                        </li>
                        <li className={`lg:relative ${isOpenUsefullSubmenu ? 'h-auto' : 'h-6'}  text-biscay-700 hover:text-gray-hover-200 dark:text-white dark:hover:text-gray-hover-150 transition-all`}>
                            <div onClick={toggleUsefullSubmenu} id="usefull-submenu-btn"
                                 className="flex items-center gap-x-2">
                                <DynamicIcon name={'link'}
                                             className={'block lg:hidden w-5 h-5 dark:text-white text-biscay-700'}/>
                                {/*<!-- ! -------------------- Usefull Item Sub Menu =>( remove closed class and add opened class to show submenu) -------------------- ! -->*/}
                                <button type={"button"} id="useful-link-btn"
                                        className="flex items-center gap-x-2 cursor-pointer">
                                    لینک های مفید
                                    <DynamicIcon name={'arrowDown'}
                                                 className={`w-3.5 h-2 text-biscay-700 dark:text-white dark:group-hover:text-gray-20 transition-all ${isOpenUsefullSubmenu ? 'rotate-180' : 'rotate-0'}`}/>
                                </button>
                            </div>
                            {/*<!-- ! -------------------- Useful Links Sub Menu =>( remove closed class and add opened class to show submenu) -------------------- ! -->*/}
                            <div id="useful-link-submenu"
                                 className={`${isOpenUsefullSubmenu ? 'opened' : 'closed'} w-full lg:w-52 lg:absolute lg:-right-2 lg:top-14 bg-white dark:bg-dark-890 lg:dark:bg-dark-body-100 p-3 mt-2.5 lg:mt-0 pt-2.5 rounded-lg z-20 transition-all origin-[50%-0px]`}>
                                <ul className="flex flex-col font-YekanBakh-Medium text-lg">
                                    <li className="text-primary-gray-300 pr-3 py-4 hover:bg-gray-hover-100 rounded-md dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 dark:text-white transition-all">
                                        <Link to="/" className="block">کانال تلگرام</Link></li>
                                    <li className="text-primary-gray-300 pr-3 py-4 hover:bg-gray-hover-100 rounded-md dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 dark:text-white transition-all">
                                        <Link to="/" className="block">سوالات متداول</Link></li>
                                    <li className="text-primary-gray-300 pr-3 py-4 hover:bg-gray-hover-100 rounded-md dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 dark:text-white transition-all">
                                        <Link to="/about-us" className="block">درباره ما</Link></li>
                                    <li className="text-primary-gray-300 pr-3 py-4 hover:bg-gray-hover-100 rounded-md dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 dark:text-white transition-all">
                                        <Link to="/" className="block">ارتباط با ما</Link></li>
                                    <li className="text-primary-gray-300 pr-3 py-4 hover:bg-gray-hover-100 rounded-md dark:hover:bg-dark-950 lg:dark:hover:bg-drak-890 dark:text-white transition-all">
                                        <Link to="/" className="block">همکاری با ما</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                className="hidden dark:block w-full h-screen absolute top-0 right-0 bg-gradient-to-t from-transparent to-[#324456] -z-20"></div>
            <Overlay/>
        </header>
    );
}

export default Header;