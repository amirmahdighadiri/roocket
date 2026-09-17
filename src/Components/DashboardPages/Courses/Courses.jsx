import React ,{useState} from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import {coursesTabs} from "../../../data.jsx";
import Tabs from "../../Tabs/Tabs.jsx";

function Courses(props) {

    const [activeTab, setActiveTab] = useState({label: 'دوره های جاری' , key: 'current-courses'});

    return (
        <div className="container">
            {/*<!-- ! -------------------- User Courses Details -------------------- ! -->*/}
            <div className="grid grid-cols-12 gap-5 mb-8">
                <div className="col-span-12 lg:col-span-5 flex flex-col xl:flex-row items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex flex-col xl:flex-row items-center gap-y-5 gap-x-4">
                        {/*<!-- ! -------------------- Icon -------------------- ! -->*/}
                        <div className="size-10 flex-center rounded-xl bg-blue-700">
                            <DynamicIcon name="calender" className="size-5" />
                        </div>
                        {/*<!-- ! -------------------- Details -------------------- ! -->*/}
                        <div className="flex flex-col items-center xl:items-start gap-y-4 xl:gap-y-1">
                            <span className="text-xs text-gary-70 dark:text-white">ویدیو های مشاهده شده</span>
                            <div className="">
                                <span className="inline-block font-YekanBakh-Medium text-gary-70 text-xs pl-3 ml-3 border-l border-gray-100">7 روز گذشته<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">0 دقیقه</span></span>
                                <span className="font-YekanBakh-Medium text-gary-70 text-xs">مجموع کل<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">3 دقیقه</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 flex flex-col xl:flex-row items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex flex-col xl:flex-row items-center gap-y-5 gap-x-4">
                        {/*<!-- ! -------------------- Icon -------------------- ! -->*/}
                        <div className="size-10 flex-center rounded-xl bg-green-600">
                            <DynamicIcon name="courses" className="size-5.5 text-white" />
                        </div>
                        {/*<!-- ! -------------------- Details -------------------- ! -->*/}
                        <div className="flex flex-col items-center xl:items-start gap-y-4 xl:gap-y-1">
                            <span className="text-xs text-gary-70 dark:text-white">دوره های مشاهده شده</span>
                            <div className="">
                                <span className="inline-block font-YekanBakh-Medium text-gary-70 text-xs pl-3 ml-3 border-l border-gray-100">در حال یادگیری<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">0 دوره</span></span>
                                <span className="font-YekanBakh-Medium text-gary-70 text-xs">تکمیل شده<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">0 دوره</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-2 flex flex-col xl:flex-row items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex flex-col xl:flex-row items-center gap-y-5 gap-x-4">
                        {/*<!-- ! -------------------- Icon -------------------- ! -->*/}
                        <div className="size-9 2xl:size-10 flex-center rounded-xl bg-customOrange-700">
                            <DynamicIcon name="star" className="size-5 text-white fill-none" />
                        </div>
                        {/*<!-- ! -------------------- Details -------------------- ! -->*/}
                        <div className="flex flex-col items-center xl:items-start gap-y-4 xl:gap-y-1">
                            <span className="text-xs text-gary-70">تجربه کاربری </span>
                            <span className="text-gray-800 dark:text-white text-xl font-YekanBakh-Bold">0 امتیاز</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- ! -------------------- Tabs -------------------- ! -->*/}
            <Tabs activeTab={activeTab} tabs={coursesTabs} changeTab={setActiveTab}/>
            {/*<!-- ! -------------------- User Courses Content -------------------- ! -->*/}
            <div className="p-8 rounded-xl bg-white dark:bg-dark-body-100 mb-24 mt-8">
                <p className="text-biscay-700 dark:text-white font-YekanBakh-Medium">دوره‌ای در این فهرست نیست.</p>
            </div>
        </div>
    );
}

export default Courses;