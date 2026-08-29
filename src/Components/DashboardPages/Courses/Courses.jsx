import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";

function Courses(props) {
    return (
        <div className="container">
            {/*<!-- ! -------------------- User Courses Details -------------------- ! -->*/}
            <div className="flex items-center">
                <div className="col-span-9 flex items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex items-center gap-x-4 pl-20">
                        <div className="size-10 flex-center rounded-xl bg-blue-700">
                            <DynamicIcon name="calender" className="size-5" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70 dark:text-white">ویدیو های مشاهده شده</span>
                            <div className="">
                                <span className="inline-block font-YekanBakh-Medium text-gary-70 text-xs pl-3 ml-3 border-l border-gray-100">7 روز گذشته<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">0 دقیقه</span></span>
                                <span className="font-YekanBakh-Medium text-gary-70 text-xs">مجموع کل<span className="inline-block font-YekanBakh-Bold text-gray-800 dark:text-white text-lg pr-2">3 دقیقه</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-9 flex items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex items-center gap-x-4 pl-20">
                        <div className="size-10 flex-center rounded-xl bg-blue-700">
                            <DynamicIcon name="calender" className="size-5" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70">باقیمانده اشتراک</span>
                            <span className="text-gray-800 dark:text-white text-xl font-YekanBakh-Bold">عضو ویژه نیستید</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-9 flex items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex items-center gap-x-4 pl-20">
                        <div className="size-10 flex-center rounded-xl bg-customOrange-700">
                            <DynamicIcon name="star" className="size-5 text-white fill-none" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70">امتیازات</span>
                            <span className="text-gray-800 dark:text-white text-xl font-YekanBakh-Bold">0 ستاره</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;