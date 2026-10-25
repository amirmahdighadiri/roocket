import React from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

function BigCourseBox({course}) {
    return (
        <div className="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between md:gap-x-8 bg-white dark:bg-dark-body-100 px-5 py-6 sm:px-10 xl:px-14 sm:py-9 rounded-xl">
            {/*<!-- ! -------------------- Image & Title -------------------- ! -->*/}
            <div className="flex items-center gap-x-4">
                {/*<!-- ! -------------------- Image -------------------- ! -->*/}
                <Link to={`/products-page/${course.title}`}>
                    <img src={`/images/courses/${course.src}.jpg`} alt={course.title} className="w-42 h-24 object-cover rounded shrink-0"/>
                </Link>
                {/*<!-- ! -------------------- Title & Teacher -------------------- ! -->*/}
                <div>
                    <h4 className="text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-450 font-Mult-Font-Bold text-2xl transition-all mb-3 line-clamp-1">
                        <Link to={`/products-page/${course.title}`}>{course.title.replace(/-/g, " ")}</Link>
                    </h4>
                    <div className="flex items-center gap-x-2 text-dark-550 dark:text-gray-200 text-sm font-YekanBakh-Bold">
                        <DynamicIcon name="courses" className="size-4 text-blue-700 dark:text-gray-200"/>
                        <span>
                            <span>مدرس دوره : </span>
                            <span>{course.teacher}</span>
                        </span>
                    </div>
                </div>
            </div>
            {/*<!-- ! -------------------- Price & Remove Btn -------------------- ! -->*/}
            <div className="flex items-center justify-between gap-x-6 border-t border-gray-200 dark:border-white/10 pt-5 md:border-t-0 md:pt-0">
                <div className="flex flex-col gap-y-2">
                    {/*<!-- ! -------------------- Discount -------------------- ! -->*/}
                    <div className="hidden items-center gap-x-2">
                        <span
                            className="w-9.5 py-1 flex-center bg-red-450 text-white text-xs font-Mult-Font-Medium rounded-md">
                            % 50
                        </span>
                        <span
                            className="flex items-center gap-x-1 text-dark-550 dark:text-gray-400 text-sm line-through">
                            ۴٬۹۰۰٬۰۰۰
                            <DynamicIcon name="toman" className="size-3 text-inherit"/>
                        </span>
                    </div>
                    {/*<!-- ! -------------------- Final Price -------------------- ! -->*/}
                    <div className="flex items-baseline gap-x-1.5 text-gray-800 dark:text-white font-YekanBakh-Bold">
                        <span className="text-3xl">{course.price.toLocaleString()}</span>
                        <DynamicIcon name="toman" className="size-3 text-inherit"/>
                    </div>
                    <span className="hidden w-fit rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-YekanBakh-Bold px-3 py-1.5">
                        ۲٬۴۵۰٬۰۰۰ تومان سود شما
                    </span>
                </div>
                {/*<!-- ! -------------------- Remove Btn -------------------- ! -->*/}
                <button type="button" aria-label="حذف از سبد خرید" title="حذف از سبد خرید" className="p-2.5 rounded-lg text-dark-550 dark:text-gray-200 hover:text-red-500 hover:bg-red-500/10 transition-all cursor-pointer">
                    <DynamicIcon name="trash" className="size-5 text-inherit"/>
                </button>
            </div>
        </div>
    );
}

export default BigCourseBox;