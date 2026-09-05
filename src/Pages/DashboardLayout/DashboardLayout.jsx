import React , {useContext} from 'react';
import {Link , Outlet , useLocation} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {AppContext} from "../../Context/AppContext.jsx";

function DashboardLayout(props) {
    const {theme, setTheme} = useContext(AppContext)
    const location = useLocation()
    const changeThemeHandler = () => theme === "dark" ? setTheme("light") : setTheme("dark")
    return (
        <section className="bg-white dark:bg-dark-body-100 grid grid-cols-12 min-h-screen overflow-hidden">
            <aside className="col-span-2 pt-11 flex flex-col min-h-screen pb-3">
                <Link to="/" className="flex-center">
                    <DynamicIcon name={'lightLogo'} className={'hidden sm:block dark:sm:hidden w-40 h-9 md:w-52 md:h-11.5'}/>
                    <DynamicIcon name={'darkLogo'} className={'hidden sm:dark:block w-40 h-9 md:w-52 md:h-11.5'}/>
                </Link>
                {/*<!-- ! -------------------- Menu -------------------- ! -->*/}
                <div className="mt-16">
                   <ul className="space-y-1 text-lg">
                       <li className="px-4">
                           <Link to="/dashboard/panel" className={`flex items-center gap-x-4 ${location.pathname.includes('panel') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'} transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="home" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2"> صفحه اصلی پنل</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/courses" className={`flex items-center gap-x-4 ${location.pathname.includes('courses') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="camera" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2">دوره ها</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/questions" className={`flex items-center gap-x-4 ${location.pathname.includes('questions') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="questionSquare" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2">پرسش ها</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/subscription" className={`flex items-center gap-x-4 ${location.pathname.includes('subscription') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="wallet" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2"> مالی و اشتراک</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/followings" className={`flex items-center gap-x-4 ${location.pathname.includes('followings') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="userMultiple" className="size-5 dark:fill-inherit"/>
                               <span className="inline-block mt-2">دنبل شده ها</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/comments" className={`flex items-center gap-x-4 ${location.pathname.includes('comments') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="document" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2">نظرات شما</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/notifications" className={`flex items-center gap-x-4 ${location.pathname.includes('notifications') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="bell" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2"> اعلانات</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/missions" className={`flex items-center gap-x-4 ${location.pathname.includes('missions') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="ticket" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2">ماموریت ها</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/certificates" className={`flex items-center gap-x-4 ${location.pathname.includes('certificates') ? 'text-blue-700 bg-blue-700/10' : 'text-gray-800 dark:text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="fileCheck" className="size-6 fill-inherit"/>
                               <span className="inline-block mt-2">گواهی و تاییدیه ها</span>
                           </Link>
                       </li>
                   </ul>
               </div>
                <div className="mt-auto px-4">
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
            </aside>
            {/*<!-- ! -------------------- Header Wrapper -------------------- ! -->*/}
            <div className="col-span-10 min-h-screen">
                <header className="flex items-center justify-between pt-9 pr-16 pb-5 pl-8">
                    {/*<!-- ! -------------------- User FullName Wrapper -------------------- ! -->*/}
                    <div className="flex items-center gap-x-5">
                        <span className="pl-5 border-l border-gray-300 text-gray-800 dark:text-white font-YekanBakh-Bold text-2xl">امیرمهدی عزیز ؛خوش اومدی. 👋</span>
                        <span className="text-gray-360 dark:text-gray-810">چهارشنبه, 04 شهریور 1405</span>
                    </div>
                    {/*<!-- ! -------------------- Header Action Btn -------------------- ! -->*/}
                    <div className="flex items-center gap-x-4">
                        {/*<!-- ! -------------------- Them Btn -------------------- ! -->*/}
                        <button onClick={changeThemeHandler} className="w-12 h-12 hidden lg:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'sun'} className={'dark:hidden block size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            <DynamicIcon name={'moon'} className={'hidden dark:block size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                        </button>
                        {/*<!-- ! -------------------- Basket Btn -------------------- ! -->*/}
                        <button className="w-12 h-12 hidden lg:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'shopping'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                            <span className="size-6 flex-center absolute -top-2 -right-2 bg-red-450 text-white rounded-full font-YekanBakh text-sm">0</span>
                        </button>
                        {/*<!-- ! -------------------- Notif Btn -------------------- ! -->*/}
                        <button className="w-12 h-12 hidden lg:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'bell'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                            <span className="size-6 flex-center absolute -top-2 -right-2 bg-red-450 text-white rounded-full font-YekanBakh text-sm">12</span>
                        </button>
                        {/*<!-- ! -------------------- Profile Btn -------------------- ! -->*/}
                        <button className="w-12 h-12 hidden lg:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'user'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                        </button>
                    </div>
                </header>
                <section className="h-full bg-gray-hover-100 dark:bg-dark-900 pt-10 px-8 pb-16 rounded-tr-3xl">
                    <Outlet />
                </section>
            </div>
        </section>
    );
}

export default DashboardLayout;