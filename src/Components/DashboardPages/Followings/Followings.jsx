import React , {useState} from 'react';
import {Link} from "react-router-dom";
import NotfoundContent from "../../../assets/images/Error/notfound-content.svg";
import Tabs from "../../Tabs/Tabs.jsx";
import {followingTabs} from "../../../data.jsx";

function Followings(props) {
    const [activeTab, setActiveTab] = useState({label: 'مقالات' , key: 'articles'});

    return (
        <div className="container">
            {/*<!-- ! -------------------- Tabs -------------------- ! -->*/}
            <Tabs activeTab={activeTab} tabs={followingTabs} changeTab={setActiveTab}/>
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