import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";

function Questions(props) {
    return (
        <div className="container">
            {/*<!-- ! -------------------- Question Details Menu -------------------- ! -->*/}
            <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-dark-body-100 rounded-xl">
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="questionSquare" className="size-5 text-inherit" />
                    <span className="">پرسش های جاری</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="securityQuestion" className="size-5 text-inherit" />
                    <span className="">پرسش های قفل شده</span>
                </button>
                <button type="button" className="h-12 flex items-center gap-x-2 text-chambray-400 hover:text-blue-450 text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer">
                    <DynamicIcon name="commentBox" className="size-5 text-inherit" />
                    <span className="">پاسخ های من</span>
                </button>
            </div>
            {/*<!-- ! -------------------- User Question Content -------------------- ! -->*/}
            <div className="p-8 rounded-xl bg-white dark:bg-dark-body-100 mb-24 mt-8">
                <p className="text-biscay-700 dark:text-white font-YekanBakh-Medium">پرسشی در این فهرست نیست.</p>
            </div>
        </div>
    );
}

export default Questions;