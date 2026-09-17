import React , {useContext} from 'react';
import {Link , Outlet , useLocation} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {AppContext} from "../../Context/AppContext.jsx";
import useToggle from "../../Hooks/useToggle/useToggle.jsx";
import Overlay from "../../Components/Overlay/Overlay.jsx";

function DashboardLayout(props) {
    const date = new Date();
    const {theme, setTheme,userInfo,isOpenDashboardMenu , toggleDashboardMenu , setIsShowOverlay} = useContext(AppContext)
    const location = useLocation()
    const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
    });
    const parts = formatter.formatToParts(date);

    const getPart = (id)=>{
       return  parts.find(item=> item.type === id)?.value
    }
    
    const persianDate = `${getPart("weekday")}, ${getPart("day")} ${getPart("month")} ${getPart("year")}`;

    const changeThemeHandler = () => theme === "dark" ? setTheme("light") : setTheme("dark")

    const toggleOpenDashboardMenuHandler = (event)=>{
        event.preventDefault()
        setIsShowOverlay()
        toggleDashboardMenu()
    }

    return (
        <section className="relative bg-white dark:bg-dark-body-100 grid grid-cols-12 min-h-screen overflow-hidden">
            {/*<!-- ! -------------------- Dashboard Menu -------------------- ! -->*/}
            <aside className={`absolute z-20 xl:static ${isOpenDashboardMenu ? 'right-0' : '-right-75'} xl:right-0 w-75 xl:w-auto h-screen xl:min-h-screen xl:col-span-2 pt-5 xl:pt-11 flex flex-col bg-white dark:bg-dark-body-100 !xl:bg-transparent pb-3 px-4 xl:px-0 transition-all`}>
                {/*<!-- ! -------------------- Close Btn -------------------- ! -->*/}
                <button onClick={toggleOpenDashboardMenuHandler} className="block xl:hidden mr-auto cursor-pointer text-biscay-700 dark:text-white mb-5">
                    <DynamicIcon name="xMark" className="size-5 text-inherit"/>
                </button>
                {/*<!-- ! -------------------- Logo -------------------- ! -->*/}
                <Link to="/" className="flex-center mb-5 xl:mb-10">
                    <DynamicIcon name={'lightLogo'} className={'block dark:hidden w-52 h-11.5'}/>
                    <DynamicIcon name={'darkLogo'} className={'hidden dark:block w-52 h-11.5'}/>
                </Link>
                {/*<!-- ! -------------------- Action Btn -------------------- ! -->*/}
                <div className="block xl:hidden xl:px-4">
                    <ul className="border-y border-biscay-700/20 dark:border-white/10 space-y-3 py-5 *:flex *:items-center *:gap-x-3 *:cursor-pointer">
                        {/*<!-- ! -------------------- Them Btn -------------------- ! -->*/}
                        <li onClick={changeThemeHandler} className="">
                            <button  className="w-12 h-12 flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                                <DynamicIcon name={'sun'} className={'dark:hidden block size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                                <DynamicIcon name={'moon'} className={'hidden dark:block size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            </button>
                            <span className="text-biscay-700 dark:text-white font-YekanBakh-Bold">{theme === "dark" ? 'تم تاریک' : 'تم روشن'}</span>
                        </li>
                        {/*<!-- ! -------------------- Basket Btn -------------------- ! -->*/}
                        <li className="">
                            <button className="w-12 h-12 flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                                <DynamicIcon name={'shopping'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                                {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                                <span className="size-6 flex-center absolute -top-2 -right-2 bg-red-450 text-white rounded-full font-YekanBakh text-sm">0</span>
                            </button>
                            <span className="text-biscay-700 dark:text-white font-YekanBakh-Bold">سبد خرید</span>
                        </li>
                        {/*<!-- ! -------------------- Notif Btn -------------------- ! -->*/}
                        <li className="">
                            <Link to="/dashboard/notifications" className="w-12 h-12 flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                                <DynamicIcon name={'bell'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                                {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                                <span className="size-6 flex-center absolute -top-2 -right-2 bg-red-450 text-white rounded-full font-YekanBakh text-sm">12</span>
                            </Link>
                            <span className="text-biscay-700 dark:text-white font-YekanBakh-Bold">اعلانات</span>

                        </li>
                    </ul>
                </div>
                {/*<!-- ! -------------------- Menu -------------------- ! -->*/}
                <div className="flex-1 overflow-y-auto">
                    <div className="pt-5">
                        <ul className="space-y-1 text-lg">
                            <li className="xl:px-4">
                                <Link to="/dashboard/panel" className={`flex items-center gap-x-4 ${location.pathname.includes('panel') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'} transition-all px-4 py-3 rounded-3xl`}>
                                    <DynamicIcon name="home" className="size-5 fill-inherit"/>
                                    <span className="inline-block mt-2"> صفحه اصلی پنل</span>
                                </Link>
                            </li>
                            <li className="xl:px-4">
                                <Link to="/dashboard/courses" className={`flex items-center gap-x-4 ${location.pathname.includes('courses') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                                    <DynamicIcon name="camera" className="size-5 fill-inherit"/>
                                    <span className="inline-block mt-2">دوره ها</span>
                                </Link>
                            </li>
                            <li className="xl:px-4">
                                <Link to="/dashboard/questions" className={`flex items-center gap-x-4 ${location.pathname.includes('questions') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                                    <DynamicIcon name="questionSquare" className="size-5 fill-inherit"/>
                                    <span className="inline-block mt-2">پرسش ها</span>
                                </Link>
                            </li>
                            <li className="xl:px-4">
                                <Link to="/dashboard/subscription" className={`flex items-center gap-x-4 ${location.pathname.includes('subscription') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                                    <DynamicIcon name="wallet" className="size-5 fill-inherit"/>
                                    <span className="inline-block mt-2"> مالی و اشتراک</span>
                                </Link>
                            </li>
                            <li className="xl:px-4">
                                <Link to="/dashboard/followings" className={`flex items-center gap-x-4 ${location.pathname.includes('followings') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                                    <DynamicIcon name="userMultiple" className="size-5 dark:fill-inherit"/>
                                    <span className="inline-block mt-2">دنبال شده ها</span>
                                </Link>
                            </li>
                            <li className="xl:px-4">
                                <Link to="/dashboard/comments" className={`flex items-center gap-x-4 ${location.pathname.includes('comments') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                                    <DynamicIcon name="document" className="size-5 fill-inherit"/>
                                    <span className="inline-block mt-2">نظرات شما</span>
                                </Link>
                            </li>
                            <li className="xl:px-4">
                                <Link to="/dashboard/notifications" className={`flex items-center gap-x-4 ${location.pathname.includes('notifications') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                                    <DynamicIcon name="bell" className="size-5 fill-inherit"/>
                                    <span className="inline-block mt-2"> اعلانات</span>
                                </Link>
                            </li>
                            <li className="xl:px-4">
                                <Link to="/dashboard/missions" className={`flex items-center gap-x-4 ${location.pathname.includes('missions') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                                    <DynamicIcon name="ticket" className="size-5 fill-inherit"/>
                                    <span className="inline-block mt-2">ماموریت ها</span>
                                </Link>
                            </li>
                            <li className="xl:px-4">
                                <Link to="/dashboard/certificates" className={`flex items-center gap-x-4 ${location.pathname.includes('certificates') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                                    <DynamicIcon name="fileCheck" className="size-6 fill-inherit"/>
                                    <span className="inline-block mt-2">گواهی و تاییدیه ها</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto xl:px-4">
                        <ul className="space-y-1 border-t border-biscay-700/20 dark:border-white/10">
                            <li className="">
                                <Link to="/" className="flex items-center gap-x-4 text-gray-800 dark:text-white hover:text-blue-450 transition-all px-4 py-3">
                                    <DynamicIcon name="user" className="size-5 fill-inherit"/>
                                    <span className="inline-block mt-2">اطلاغات پروفایل</span>
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/" className="flex items-center gap-x-4 text-gray-800 dark:text-white hover:text-red-450 transition-all px-4 py-3">
                                    <DynamicIcon name="logout" className="size-5 fill-inherit"/>
                                    <span className="inline-block mt-2">خروج</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            {/*<!-- ! -------------------- Header Wrapper -------------------- ! -->*/}
            <div className="col-span-12 xl:col-span-10 min-h-screen">
                <header className="flex items-center justify-between px-4 pt-9 xl:pr-16 pb-5 xl:pl-8">
                    {/*<!-- ! -------------------- User FullName Wrapper -------------------- ! -->*/}
                    <div className="flex items-center gap-x-2">
                        <button onClick={toggleOpenDashboardMenuHandler} type="button" className="size-9 xl:hidden flex items-center justify-center rounded-lg bg-gray-800 text-white cursor-pointer">
                            <DynamicIcon name="document" className="size-4 fill-inherit" />
                        </button>
                        <div className="flex flex-col md:flex-row md:items-center gap-x-5 gap-y-1">
                            <span className="lg:pl-5 md:border-l border-gray-300 text-gray-800 dark:text-white font-YekanBakh-Bold text-sm lg:text-2xl">{userInfo.fullName} عزیز ؛خوش اومدی. 👋</span>
                            <span className="text-gray-360 dark:text-gray-810 text-xs md:text-sm lg:text-base">{persianDate}</span>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Header Action Btn -------------------- ! -->*/}
                    <div className="flex items-center gap-x-4">
                        {/*<!-- ! -------------------- Them Btn -------------------- ! -->*/}
                        <button onClick={changeThemeHandler} className="w-12 h-12 hidden md:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'sun'} className={'dark:hidden block size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            <DynamicIcon name={'moon'} className={'hidden dark:block size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                        </button>
                        {/*<!-- ! -------------------- Basket Btn -------------------- ! -->*/}
                        <button className="w-12 h-12 hidden md:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'shopping'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                            <span className="size-6 flex-center absolute -top-2 -right-2 bg-red-450 text-white rounded-full font-YekanBakh text-sm">0</span>
                        </button>
                        {/*<!-- ! -------------------- Notif Btn -------------------- ! -->*/}
                        <Link to="/dashboard/notifications" className="w-12 h-12 hidden md:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'bell'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                            <span className="size-6 flex-center absolute -top-2 -right-2 bg-red-450 text-white rounded-full font-YekanBakh text-sm">12</span>
                        </Link>
                        {/*<!-- ! -------------------- Profile Btn -------------------- ! -->*/}
                        <Link to="/dashboard/panel" className="w-12 h-12 flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'user'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                        </Link>
                    </div>
                </header>
                <section className="h-full bg-gray-hover-100 dark:bg-dark-900 pt-10 px-3 md:px-8 pb-16 xl:rounded-tr-3xl">
                    <Outlet />
                </section>
            </div>
            <Overlay />
        </section>
    );
}

export default DashboardLayout;