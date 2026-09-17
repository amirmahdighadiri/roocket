import React,{useState} from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";
import Tabs from "../../Tabs/Tabs.jsx";
import {certificateTabs} from "../../../data.jsx";

function Certificates(props) {
    const [activeTab, setActiveTab] = useState({label: 'گواهی های مشاهده آنلاین' , key: 'online-certificates'});
    return (
        <div className="container">
            {/*<!-- ! -------------------- Tabs -------------------- ! -->*/}
            <Tabs activeTab={activeTab} tabs={certificateTabs} changeTab={setActiveTab}/>
            {/*<!-- ! -------------------- User Certificates Content -------------------- ! -->*/}
            <div className="flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-dark-body-100 border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm mt-8">
                <div className="relative size-32 flex-center mb-8">
                    <span className="absolute inset-0 rounded-4xl bg-gradient-to-br from-green-700/15 via-blue-700/10 to-transparent dark:from-green-500/20 dark:via-blue-450/10"></span>
                    <div className="absolute size-25 flex-center bg-white dark:bg-dark-910 shadow-sm ring-1 ring-green-700/10 dark:ring-white/10 rounded-3xl">
                        <DynamicIcon name="checkSquare" className="size-9 text-green-700 dark:text-green-600"/>
                    </div>
                </div>
                <p className="text-biscay-700 dark:text-white text-xl lg:text-2xl/9 font-YekanBakh-Bold mb-3">هنوز گواهی‌ای ثبت
                    نشده است</p>
                <p className="w-full lg:w-3/12 text-gray-500 dark:text-gray-360 text-sm/7 text-center mb-8">پس از تکمیل دوره‌ها و دریافت گواهی پایان دوره، فهرست گواهی‌های شما اینجا نمایش داده می‌شود.</p>
                <Link to="" className="flex-center h-11 px-6 border border-green-600 bg-green-400 text-white hover:bg-transparent hover:text-green-600 transition-all rounded-xl font-YekanBakh-Bold">مشاهده دوره‌های من</Link>
            </div>
        </div>
    );
}

export default Certificates;