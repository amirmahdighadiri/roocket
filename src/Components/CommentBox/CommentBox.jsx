import React from 'react';
import {Link} from 'react-router-dom';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import defaultProfile from "../../assets/images/profile/default.png"
import ReplayBox from "../ReplyBox/ReplayBox.jsx";
import {getTimeAgo} from "../../Utils/getTimeAgo/getTimeAgo.js";

function CommentBox({id,text,createdAt , user, comments}) {

    const replyComments = comments.filter(comment => comment.parentId === id)


    return (

            <div className="overflow-hidden">
                <div className="relative z-10 p-6 border border-gray-210 dark:border-transparent rounded-lg bg-white dark:bg-dark-900">
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
                                <Link to="/" className="text-biscay-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-450 transition-all font-Mult-Font-Bold text-lg">{user.fullName}</Link>
                                <span className="text-gray-360 dark:text-gray-200 text-sm">{getTimeAgo(createdAt)}</span>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Comment Like Count Btn -------------------- ! -->*/}
                        <div className="flex items-center gap-x-2">
                            <button type="button" className="h-6 flex items-center gap-x-2 px-2 text-gray-450 hover:text-white dark:text-gray-920 bg-gray-500/10 dark:bg-dark-930 hover:bg-gray-500 dark:hover:bg-dark-450 cursor-pointer rounded transition-all">
                                <DynamicIcon name="reply" className="size-4 text-inherit"/>
                                <span className="text-sm">پاسخ</span>
                            </button>
                            <button type="button" className="h-6 flex items-center gap-x-2 px-2 text-red-450 dark:text-red-650 bg-red-700/10 dark:bg-red-700/20 cursor-pointer rounded">
                                <DynamicIcon name="heart" className="size-4 text-inherit"/>
                                <span className="">1</span>
                            </button>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Comment Content Wrapper -------------------- ! -->*/}
                    <div className="pt-5">
                        <p className="text-base/9 md:text-lg/9 text-biscay-700 dark:text-white font-Mult-Font-Medium">{text}</p>
                    </div>
                </div>
                <div className="relative">
                    <span className="absolute -top-32.5 right-7 w-0.75 h-full bg-white dark:bg-dark-900 "></span>
                    {replyComments.map(comment => (
                        <ReplayBox key={comment.id} {...comment} />
                    ))}
                </div>
            </div>
    );
}

export default CommentBox;