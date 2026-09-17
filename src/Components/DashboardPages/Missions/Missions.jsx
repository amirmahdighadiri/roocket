import React,{useState} from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";
import Tabs from "../../Tabs/Tabs.jsx";
import {missionTabs} from "../../../data.jsx";

function Missions(props) {
    const [activeTab, setActiveTab] = useState({label: 'ماموریت های ضروری' , key: 'urgent-missions'});
    return (
        <div className="container">
            {/*<!-- ! -------------------- Tabs -------------------- ! -->*/}
            <Tabs activeTab={activeTab} tabs={missionTabs} changeTab={setActiveTab}/>
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