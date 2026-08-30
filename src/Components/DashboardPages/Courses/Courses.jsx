import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";

function Courses(props) {
    return (
        <div className="container">
            {/*<!-- ! -------------------- User Courses Details -------------------- ! -->*/}
            <div className="grid grid-cols-12 gap-x-5 mb-8">
                <div className="col-span-5 flex items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex items-center gap-x-4">
                        {/*<!-- ! -------------------- Icon -------------------- ! -->*/}
                        <div className="size-10 flex-center rounded-xl bg-blue-700">
                            <DynamicIcon name="calender" className="size-5" />
                        </div>
                        {/*<!-- ! -------------------- Details -------------------- ! -->*/}
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70 dark:text-white">ویدیو های مشاهده شده</span>
                            <div className="">
                                <span className="inline-block font-YekanBakh-Medium text-gary-70 text-xs pl-3 ml-3 border-l border-gray-100">7 روز گذشته<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">0 دقیقه</span></span>
                                <span className="font-YekanBakh-Medium text-gary-70 text-xs">مجموع کل<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">3 دقیقه</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 flex items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex items-center gap-x-4">
                        {/*<!-- ! -------------------- Icon -------------------- ! -->*/}
                        <div className="size-10 flex-center rounded-xl bg-green-600">
                            <DynamicIcon name="courses" className="size-5.5 text-white" />
                        </div>
                        {/*<!-- ! -------------------- Details -------------------- ! -->*/}
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70 dark:text-white">دوره های مشاهده شده</span>
                            <div className="">
                                <span className="inline-block font-YekanBakh-Medium text-gary-70 text-xs pl-3 ml-3 border-l border-gray-100">در حال یادگیری<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">0 دوره</span></span>
                                <span className="font-YekanBakh-Medium text-gary-70 text-xs">تکمیل شده<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">0 دوره</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex items-center gap-x-4">
                        {/*<!-- ! -------------------- Icon -------------------- ! -->*/}
                        <div className="size-10 flex-center rounded-xl bg-customOrange-700">
                            <DynamicIcon name="star" className="size-5 text-white fill-none" />
                        </div>
                        {/*<!-- ! -------------------- Details -------------------- ! -->*/}
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70">تجربه کاربری امروز</span>
                            <span className="text-gray-800 dark:text-white text-xl font-YekanBakh-Bold">0 امتیاز</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- ! -------------------- Courses Details Menu -------------------- ! -->*/}
            <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-dark-body-100 rounded-xl">
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="playSquare" className="size-5 text-inherit" />
                    <span className="">دوره های جاری</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="playSquareEye" className="size-5 text-inherit" />
                    <span className="">دوره های خریداری شده</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="playSquareEye" className="size-5 text-inherit" />
                    <span className="">دوره های گذرانده شده</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="playSquareEyeSlash" className="size-5 text-inherit" />
                    <span className="">دوره های غیر فعال</span>
                </button>
            </div>
            {/*<!-- ! -------------------- User Courses Content -------------------- ! -->*/}
            <div className="p-8 rounded-xl bg-white dark:bg-dark-body-100 mb-24 mt-8">
                <p className="text-biscay-700 dark:text-white font-YekanBakh-Medium">دوره‌ای در این فهرست نیست.</p>
            </div>
        </div>
    );
}

export default Courses;