import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

function Missions(props) {
    return (
        <div className="container">
            {/*<!-- ! -------------------- Following Details Menu (Desktop) -------------------- ! -->*/}
            <div className="hidden md:inline-flex items-center justify-center w-full lg:w-auto px-4 py-2 bg-white dark:bg-dark-body-100 rounded-xl">
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-lg lg:text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <span className="">ماموریت های ضروری</span>
                    <span className="flex-center size-7 rounded-lg text-white bg-dark-900 text-sm">2</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-lg lg:text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <span className="">ماموریت های لازم</span>
                    <span className="flex-center size-7 rounded-lg text-white bg-dark-900 text-sm">2</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-lg lg:text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <span className="">ماموریت های معمولی</span>
                    <span className="flex-center size-7 rounded-lg text-white bg-dark-900 text-sm">2</span>
                </button>
            </div>
            {/*<!-- ! -------------------- Courses Details Menu (Mobile) -------------------- ! -->*/}
            <div className="block md:hidden">
                <button type="button" className="w-full h-14 flex items-center justify-between px-5 py-3 bg-white dark:bg-dark-body-100 rounded cursor-pointer">
                    <span className="flex items-center gap-x-2 text-blue-450">
                        <DynamicIcon name="chartBar" className="size-5 text-inherit" />
                        <span className="">دوره های جاری</span>
                    </span>
                    <span className="flex-center h-full pr-5 border-r border-blue-450 text-blue-450">
                        <DynamicIcon name="arrowDown" className="size-2 text-inherit" />
                    </span>
                </button>
                {/*<!-- ! -------------------- Submenu -------------------- ! -->*/}
                <div className=""></div>
            </div>
            {/*<!-- ! -------------------- User Missions Content -------------------- ! -->*/}
            <div className="p-6 bg-white dark:bg-dark-body-100 border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm mt-8 space-y-5">
                <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-dark-900 hover:border-blue-700/25 dark:hover:border-blue-450/30 transition-all hover:shadow-sm">
                    {/*<!-- ! -------------------- Missions Description -------------------- ! -->*/}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                        {/*<!-- ! -------------------- Missions Icon -------------------- ! -->*/}
                        <div className="size-14 flex-center rounded-2xl border border-black/0.04 dark:border-white/10 bg-red-500/10 dark:bg-red-500/15">
                            <DynamicIcon name="megaphone" className="size-6 text-red-500" />
                        </div>
                        {/*<!-- ! -------------------- Missions Details -------------------- ! -->*/}
                        <div className="font-YekanBakh-Bold">
                            <h3 className="text-biscay-700 dark:text-white mb-1.5">مدیریت اطلاع‌رسانی</h3>
                            <p className="text-biscay-700 dark:text-white/90 text-sm/9">
                                شما میتوانید نوتیفیکیشن‌های راکت را به شکل کامل مدیریت کنید، لطف به صفحه
                                <Link to="/" className="inline-block text-blue-500 hover:text-blue-500/80 underline mx-1"> مدیریت اطلاع‌رسانی</Link>
                                مراجعه فرمایید.
                            </p>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Missions Link -------------------- ! -->*/}
                    <div className="">
                        <Link to="" className="flex lg:inline-flex items-center justify-center h-11 text-white bg-blue-450 px-8 rounded-xl">انجام ماموریت</Link>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-dark-900 hover:border-blue-700/25 dark:hover:border-blue-450/30 transition-all hover:shadow-sm">
                    {/*<!-- ! -------------------- Missions Description -------------------- ! -->*/}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                        {/*<!-- ! -------------------- Missions Icon -------------------- ! -->*/}
                        <div className="size-14 flex-center rounded-2xl border border-black/0.04 dark:border-white/10 bg-yellow-500/10 dark:bg-yellow-500/15">
                            <DynamicIcon name="userSquare" className="size-6 text-yellow-500" />
                        </div>
                        {/*<!-- ! -------------------- Missions Details -------------------- ! -->*/}
                        <div className="font-YekanBakh-Bold">
                            <h3 className="text-biscay-700 dark:text-white mb-1.5">آپلود تصویر پروفایل</h3>
                            <p className="text-biscay-700 dark:text-white/90 text-sm/9">
                                یک تصویر، به عنوان تصویر پروفایل در سایت آپلود کنید.
                                <Link to="/" className="inline-block text-blue-500 hover:text-blue-500/80 underline mx-1"> آپلود تصویر</Link>
                            </p>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Missions Link -------------------- ! -->*/}
                    <div className="">
                        <Link to="" className="flex lg:inline-flex items-center justify-center h-11 text-white bg-blue-450 px-8 rounded-xl">انجام ماموریت</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Missions;