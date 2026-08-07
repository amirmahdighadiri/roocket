import React from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {Link} from 'react-router-dom';

function CourseLinkBox(props) {
    return (
        <div className="flex items-center justify-between dark:bg-dark-900 border border-gray-210 dark:border-dark-900 rounded-lg py-4 pl-5 mb-2">
            <div className="flex items-center">
                <div className="relative w-16 text-gray-500 font-YekanBakh-Heavy text-2xl text-center before:absolute before:content-[''] before:w-6 before:h-1 before:bottom-0 before:right-0 before:left-0 before:mx-auto before:bg-gray-500 before:rounded-full">
                    1
                </div>
                <Link to="/" className="text-dark-650 hover:text-blue-700 dark:text-white dark:hover:text-blue-450 text-xl/7 border-r border-gray-210 pr-5 transition-all cursor-pointer">معرفی دوره</Link>
            </div>
            <div className="flex items-center gap-x-1 text-gray-300">
                <span className="">05:10</span>
                <DynamicIcon name="clock" className="size-3.75 text-inherit"/>
            </div>
            <Link to="" type="button" className="flex-center gap-x-1 text-gray-500 hover:text-white bg-gray-500/10 hover:bg-gray-500 rounded-md text-xs px-3 py-2 transition-all">
                <span className="">مشاهده</span>
                <DynamicIcon name="eye" className="size-4 text-inherit"/>
            </Link>
        </div>
    );
}

export default CourseLinkBox;