import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";

function Comments(props) {
    return (
        <div className="container">
            {/*<!-- ! -------------------- Comments Details Menu & Notif Btn -------------------- ! -->*/}
            <div className="flex items-center justify-between">
                {/*<!-- ! -------------------- Menu -------------------- ! -->*/}
                <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-dark-body-100 rounded-xl">
                    <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                        <DynamicIcon name="document" className="size-5 text-inherit" />
                        <span className="">اعلانات خوانده نشده</span>
                    </button>
                    <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                        <DynamicIcon name="commentBox" className="size-5 fill-inherit text-inherit" />
                        <span className="">اعلانات خوانده شده</span>
                    </button>
                </div>
                {/*<!-- ! -------------------- Notif Btn -------------------- ! -->*/}
                <button type="button" className="flex-center gap-x-2 text-white bg-blue-700 hover:bg-blue-700/80 dark:bg-transparent dark:hover:bg-dark-body-100/80 border border-white px-4 py-3 text-xl font-YekanBakh-Bold rounded-md shadow-sm cursor-pointer transition-all">
                    <span className="">تنظیمات اعلانات</span>
                    <DynamicIcon name="settingBell" className="size-5.5 text-inherit" />
                </button>
            </div>
            {/*<!-- ! -------------------- User Comments Content -------------------- ! -->*/}
            <div className="flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-dark-body-100 border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm mt-8">
                <div className="flex-center size-24 rounded-full mb-8 bg-blue-700/10 dark:bg-blue-450/10">
                    <DynamicIcon name="bell" className="size-9 text-blue-700 dark:text-blue-450" />
                </div>
                <p className="text-biscay-700 dark:text-white text-2xl/9 font-YekanBakh-Bold mb-3">اعلان جدیدی جهت نمایش وجود ندارد</p>
                <p className="w-3/12 text-gray-500 dark:text-gray-360 text-sm/7 text-center mb-8">فعلاً اعلان خوانده‌نشده‌ای ندارید. اعلان‌های قبلی را می‌توانید در فهرست خوانده‌شده‌ها ببینید.</p>
                <button type="button" className="h-11 flex-center gap-x-2 text-white bg-blue-700 hover:bg-blue-700/80 dark:bg-transparent dark:hover:bg-dark-900 border border-white px-5 text-sm font-YekanBakh-Bold rounded-lg shadow-sm cursor-pointer transition-all">مشاهده اعلانات خوانده شده</button>
            </div>
        </div>
    );
}

export default Comments;