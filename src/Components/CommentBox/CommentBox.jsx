import React from 'react';
import {Link} from 'react-router-dom';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import defaultProfile from "../../assets/images/profile/default.png"

function CommentBox(props) {
    return (
        <div className="p-6 border border-gray-210 dark:border-transparent rounded-lg bg-white dark:bg-dark-900">
            {/*<!-- ! -------------------- Profile & Comment Details -------------------- ! -->*/}
            <div className="flex items-start justify-between border-b border-gray-210 dark:border-gray-210/20 pb-5">
                {/*<!-- ! -------------------- User Profile details -------------------- ! -->*/}
                <div className="flex items-center gap-x-2">
                    {/*<!-- ! -------------------- Profile Image -------------------- ! -->*/}
                    <div className="size-14 rounded-full border-4 border-primary-gray-185 bg-gray-300 overflow-hidden">
                        <img src={defaultProfile} alt="default profile" className="w-full h-full object-cover"/>
                    </div>
                    {/*<!-- ! -------------------- Profile Name -------------------- ! -->*/}
                    <div className="flex flex-col items-start gap-y-1">
                        <Link to="/" className="text-biscay-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-450 transition-all font-Mult-Font-Bold text-lg">Amir</Link>
                        <span className="text-gray-360 dark:text-gray-200 text-sm">4 ماه پیش</span>
                    </div>
                </div>
                {/*<!-- ! -------------------- Comment Like Count Btn -------------------- ! -->*/}
                <button type="button" className="h-6 flex items-center gap-x-2 px-2 text-red-450 dark:text-red-650 bg-red-700/10 dark:bg-red-700/20 cursor-pointer rounded">
                    <DynamicIcon name="heart" className="size-4 text-inherit"/>
                    <span className="">1</span>
                </button>
            </div>
            {/*<!-- ! -------------------- Comment Content Wrapper -------------------- ! -->*/}
            <div className="pt-5">
                <p className="text-base/9 md:text-lg/9 text-biscay-700 dark:text-white font-Mult-Font-Medium">سلام و وقت بخیر امیدوارم سلامت باشی میخواستم بپرسم api ای که توی این دوره تکمیل میشه قابل استفاده برای vue و react next هم هست ؟</p>
            </div>
        </div>
    );
}

export default CommentBox;