import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import NotfoundContent from "../../../assets/images/Error/notfound-content.svg";
import {Link} from "react-router-dom";


function Comments(props) {
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
                    <DynamicIcon name="camera" className="size-5 text-inherit" />
                    <span className="">دوره ها</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="play" className="size-5 text-inherit" />
                    <span className="">جلسات</span>
                </button>
            </div>
            {/*<!-- ! -------------------- Following Page Content -------------------- ! -->*/}
            <div className="flex flex-col items-center justify-center mt-14">
                <p className="text-gray-300 dark:text-gary-70 text-2xl font-YekanBakh-Bold mb-6">هنوز نظری روی جلسات ثبت نکرده‌اید</p>
                <img src={NotfoundContent} alt="" className="w-90 h-72" loading="lazy" />
                <p className="text-gray-500 dark:text-gray-360 text-sm/7 mb-5">بعد از تماشای جلسات، دیدگاه خود را ثبت کنید.</p>
                <Link to="/products-page" className="flex-center h-11 px-6 border border-blue-700 bg-blue-700 text-white hover:bg-transparent hover:text-blue-700 transition-all rounded-xl font-YekanBakh-Bold">مشاهده دوره‌ها</Link>
            </div>
        </div>
    );
}

export default Comments;