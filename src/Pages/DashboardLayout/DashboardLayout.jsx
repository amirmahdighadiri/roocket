import React from 'react';
import {Link , Outlet , useLocation} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

function DashboardLayout(props) {

    const location = useLocation()
    return (
        <section className="bg-white dark:bg-dark-body-100 grid grid-cols-12 min-h-screen overflow-hidden">
            <aside className="col-span-2 pt-11 flex flex-col min-h-screen pb-3">
                <Link to="/" className="flex-center">
                    <svg xmlns='http://www.w3.org/2000/svg' width='202' height='44' fill='none' className='hidden dark:flex' viewBox='0 0 202 44'>
                        <path fill='#fff' d='m56.468 29.255-6.105-5.918h-8.188v5.918h-3.573V8.598h15.26c3.462 0 6.402 3.387 6.402 7.37 0 3.238-2.01 6.215-4.764 7.109l-.298.111 6.216 6.105h-4.95zm-14.293-9.9h11.538c1.6 0 3.015-1.601 3.015-3.425 0-1.86-1.377-3.387-3.015-3.387H42.175zM75.078 29.665c-7.37 0-11.613-3.722-11.613-10.236v-1.042c0-6.514 4.243-10.236 11.613-10.236S86.69 11.873 86.69 18.387v1.042c0 6.514-4.243 10.236-11.613 10.236m0-17.308c-4.169 0-8.04.744-8.04 6.141v.856c0 5.398 3.871 6.142 8.04 6.142 3.983 0 8.077-.744 8.077-6.142v-.856c0-5.434-4.094-6.141-8.077-6.141M101.242 29.665c-7.37 0-11.613-3.722-11.613-10.236v-1.042c0-6.514 4.243-10.236 11.613-10.236s11.613 3.723 11.613 10.236v1.042c0 6.514-4.206 10.236-11.613 10.236m0-17.308c-4.169 0-8.04.745-8.04 6.142v.856c0 5.397 3.871 6.141 8.04 6.141 3.983 0 8.077-.744 8.077-6.141v-.856c0-5.434-4.057-6.142-8.077-6.142M190.5 29.255V12.766h-7.891V8.598h19.355v4.168h-7.891v16.49zM127.373 29.59c-3.462 0-11.502-1.004-11.502-10.16v-1.08c0-9.157 8.04-10.162 11.502-10.162 5.322 0 7.332 1.08 7.704 1.34v3.462c-.856-.298-3.833-1.228-7.704-1.228-5.063 0-7.742 2.307-7.742 6.7v.893c0 4.392 2.679 6.7 7.742 6.7 3.871 0 6.848-.93 7.704-1.229v3.462c-.372.223-2.382 1.303-7.704 1.303M152.718 29.144l-10.459-9.678v9.677H138.5V8.673h3.759v9.863l10.236-9.863h6.067l-11.055 10.236 11.688 10.235zM161.356 29.144V8.671h18.35v3.499h-14.59v5.062h13.511v3.312h-13.511v5.063h14.59v3.535zM199.247 4.281h-.968v2.234h-.223V4.28h-1.005v-.223h2.233v.223zM201.74 4.057h.261v2.456h-.223V4.466a16 16 0 0 1-.819 1.563h-.224a11 11 0 0 1-.856-1.563v2.047h-.223V4.057h.261c.223.52.521 1.116.893 1.749.409-.633.707-1.228.93-1.75M14.332 43.4l-5.21-7.593 5.21-5.211 5.174 5.21z'></path>
                        <path fill='#fff' d='M28.66 14.442v17.196l-7.146-5.434s.781-6.7.93-11.8c.075-2.53-2.27-4.652-8.114-7.518-5.806 2.903-8.151 5.025-8.077 7.556.112 5.062.93 11.799.93 11.799L0 31.638V14.442C0 11.39 1.303 8.635 3.834 6.29c1.786-1.675 4.243-3.238 8.002-5.062L14.367 0l2.531 1.228c3.723 1.824 6.216 3.387 8.003 5.062 2.494 2.345 3.76 5.1 3.76 8.152'></path>
                    </svg>
                </Link>
                {/*<!-- ! -------------------- Menu -------------------- ! -->*/}
                <div className="mt-16">
                   <ul className="space-y-2 text-lg">
                       <li className="px-4">
                           <Link to="/dashboard/panel" className={`flex items-center gap-x-4 ${location.pathname.includes('panel') ? 'text-blue-700 bg-blue-700/10' : 'text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="home" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2"> صفحه اصلی پنل</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/courses" className={`flex items-center gap-x-4 ${location.pathname.includes('courses') ? 'text-blue-700 bg-blue-700/10' : 'text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="camera" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2">دوره ها</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/questions" className={`flex items-center gap-x-4 ${location.pathname.includes('questions') ? 'text-blue-700 bg-blue-700/10' : 'text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="questionSquare" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2">پرسش ها</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/subscription" className={`flex items-center gap-x-4 ${location.pathname.includes('subscription') ? 'text-blue-700 bg-blue-700/10' : 'text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="wallet" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2"> مالی و اشتراک</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/followings" className={`flex items-center gap-x-4 ${location.pathname.includes('followings') ? 'text-blue-700 bg-blue-700/10' : 'text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="userMultiple" className="size-5 dark:fill-inherit"/>
                               <span className="inline-block mt-2">دنبل شده ها</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/comments" className={`flex items-center gap-x-4 ${location.pathname.includes('comments') ? 'text-blue-700 bg-blue-700/10' : 'text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="document" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2">نظرات شما</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/" className={`flex items-center gap-x-4 ${location.pathname.includes('notifications') ? 'text-blue-700 bg-blue-700/10' : 'text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="bell" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2"> اعلانات</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/" className={`flex items-center gap-x-4 ${location.pathname.includes('missions') ? 'text-blue-700 bg-blue-700/10' : 'text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="ticket" className="size-5 fill-inherit"/>
                               <span className="inline-block mt-2">ماموریت ها</span>
                           </Link>
                       </li>
                       <li className="px-4">
                           <Link to="/dashboard/certificates" className={`flex items-center gap-x-4 ${location.pathname.includes('certificates') ? 'text-blue-700 bg-blue-700/10' : 'text-white bg-transparent hover:text-blue-450'}  transition-all px-4 py-3 rounded-3xl`}>
                               <DynamicIcon name="fileCheck" className="size-6 fill-inherit"/>
                               <span className="inline-block mt-2">گواهی و تاییدیه ها</span>
                           </Link>
                       </li>
                   </ul>
               </div>
               <div className="mt-auto">
                    <ul className="space-y-1">
                        <li className="px-4">
                            <Link to="/" className="flex items-center gap-x-4 text-white hover:text-blue-450 transition-all px-4 py-3">
                                <DynamicIcon name="user" className="size-5 fill-inherit"/>
                                <span className="inline-block mt-2">اطلاغات پروفایل</span>
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link to="/" className="flex items-center gap-x-4 text-white hover:text-red-450 transition-all px-4 py-3">
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
                    <div className="flex items-center gap-x-5">
                        <span className="pl-5 border-l border-gray-300 text-gray-800 dark:text-white font-YekanBakh-Bold text-2xl">امیرمهدی عزیز ؛خوش اومدی. 👋</span>
                        <span className="text-gray-360 dark:text-gray-810">چهارشنبه, 04 شهریور 1405</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <button className="w-12 h-12 hidden lg:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'moon'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                        </button>
                        <button className="w-12 h-12 hidden lg:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'shopping'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                            <span className="size-6 flex-center absolute -top-2 -right-2 bg-red-450 text-white rounded-full font-YekanBakh text-sm">0</span>
                        </button>
                        <button className="w-12 h-12 hidden lg:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'bell'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                            {/*<!-- ! -------------------- Notification Badge -------------------- ! -->*/}
                            <span className="size-6 flex-center absolute -top-2 -right-2 bg-red-450 text-white rounded-full font-YekanBakh text-sm">12</span>
                        </button>
                        <button className="w-12 h-12 hidden lg:flex items-center justify-center relative dark:bg-dark-900 dark:hover:bg-[#ECEEEF] bg-[#ECEEEF] hover:bg-dark-body-100 rounded-full transition-all shrink-0 group cursor-pointer">
                            <DynamicIcon name={'user'} className={'size-4 text-biscay-700 group-hover:text-gray-920 dark:text-gray-920 dark:group-hover:text-biscay-700'}/>
                        </button>
                    </div>
                </header>
                <section className="h-full bg-gray-200 dark:bg-dark-900 pt-10 px-8 pb-16 rounded-tr-3xl">
                    <Outlet />
                </section>
            </div>
        </section>
    );
}

export default DashboardLayout;