import React from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

function DashboardCourseBox({progress_percent, course}) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white dark:bg-dark-body-100 rounded-xl overflow-hidden">
            {/*<!-- ! -------------------- Image -------------------- ! -->*/}
            <Link to="/courses-page/react-js" className="block h-40 overflow-hidden">
                <img
                    src={`/images/courses/${course.src}.jpg`}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-110 transition-all"
                />
            </Link>

            <div className="p-5">
                {/*<!-- ! -------------------- Title -------------------- ! -->*/}
                <h4 className="text-biscay-700 dark:text-white font-Mult-Font-Bold text-lg line-clamp-1 mb-1">
                    {course.title.replace(/-/g, " ")}
                </h4>

                <span className="text-gray-300 text-sm font-YekanBakh-Medium">
            مدرس:       {course.teacher}
                </span>
                {/*<!-- ! -------------------- Progress Bar -------------------- ! -->*/}
                <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-gray-300 mb-1">
                        <span>پیشرفت شما</span>
                        <span>{progress_percent}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-gray-300/20 overflow-hidden">
                        <div
                            className="h-full bg-blue-700 rounded-full transition-all"
                            style={{ width: `${progress_percent}%` }}
                        ></div>
                    </div>
                </div>

                {/*<!-- ! -------------------- Button -------------------- ! -->*/}
                <Link
                    to={`/courses-page/${course.title}`}
                    className="flex-center gap-x-2 h-11 mt-5 border border-blue-700 bg-blue-700 text-white hover:bg-transparent hover:text-blue-700 rounded-lg font-YekanBakh-Bold transition-all"
                >
                    <span>ادامه یادگیری</span>
                    <DynamicIcon name="arrow" className="size-5 text-inherit" />
                </Link>
            </div>
        </div>
    );
}

export default DashboardCourseBox;