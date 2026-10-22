import React from 'react';
import {Link} from 'react-router-dom';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

function MiniCourseBox({course}) {
    return (
        <div className="w-full flex items-center justify-between py-5 px-2.5">
            <div className="flex items-center gap-x-4">
                {/*<!-- ! -------------------- Course Images -------------------- ! -->*/}
                <div className="rounded-md overflow-hidden">
                    <img src={`/images/courses/${course.src}.jpg`} alt={course.title} className="w-28 h-20 object-cover"/>
                </div>
                {/*<!-- ! -------------------- Course Details -------------------- ! -->*/}
                <div className="">
                    <Link to="" className="mb-2 text-biscay-700 dark:text-white text-lg font-Mult-Font-Bold line-clamp-1">{course.title.replace(/-/g, " ")}</Link>
                    {/*<!-- ! -------------------- Discount Price Course  -------------------- ! -->*/}
                    {/*<span className="flex items-center gap-x-1 text-biscay-650 text-sm line-through decoration-2 decoration-gray-20 dark:decoration-biscay-650">*/}
                    {/*    <span className="text-gray-20">۱٬۳۹۰٬۰۰۰</span>*/}
                    {/*    <DynamicIcon name="toman" className="size-3 text-inherit"/>*/}
                    {/*</span>*/}
                    <span className="flex items-center gap-x-1 text-biscay-650">
                        <span className="text-gray-20">{course.price.toLocaleString()}</span>
                        <DynamicIcon name="toman" className="size-3 text-inherit"/>
                    </span>
                </div>
            </div>
            {/*<!-- ! -------------------- Remove Course Box -------------------- ! -->*/}
            <button type="button" className="text-gray-300 cursor-pointer">
                <DynamicIcon name="trash" className="size-4 text-inherit"/>
            </button>
        </div>
    );
}

export default MiniCourseBox;