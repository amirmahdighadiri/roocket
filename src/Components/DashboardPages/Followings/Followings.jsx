import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";
import NotfoundContent from "../../../assets/images/Error/notfound-content.svg";

function Followings(props) {
    return (
        <div className="container">
            {/*<!-- ! -------------------- Following Details Menu -------------------- ! -->*/}
            <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-dark-body-100 rounded-xl">
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="document" className="size-5 text-inherit" />
                    <span className="">مقالات</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="podcast" className="size-5 fill-inherit text-inherit" />
                    <span className="">پادکست ها</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="questionSquare" className="size-5 text-inherit" />
                    <span className="">پرسش ها</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="commentBox" className="size-5 text-inherit" />
                    <span className="">نظرات</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="user" className="size-5 text-inherit" />
                    <span className="">افراد</span>
                </button>
            </div>
            {/*<!-- ! -------------------- Following Page Content -------------------- ! -->*/}
            <div className="flex flex-col items-center justify-center mt-14">
                <p className="text-gray-300 dark:text-gary-70 text-2xl font-YekanBakh-Bold mb-6">هنوز مقاله‌ای دنبال نکرده‌اید</p>
                <img src={NotfoundContent} alt="" className="w-90 h-72" loading="lazy" />
                <p className="text-gray-500 dark:text-gray-360 text-sm/7 mb-5">مقاله‌های مورد علاقه‌تان را نشان کنید تا اینجا نمایش داده شوند.</p>
                <Link to="/" className="flex-center h-11 px-6 border border-blue-700 bg-blue-700 text-white hover:bg-transparent hover:text-blue-700 transition-all rounded-xl font-YekanBakh-Bold">مشاهده مقالات</Link>
            </div>
        </div>
    );
}

export default Followings;