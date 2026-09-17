import React ,{useState} from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import NotfoundContent from "../../../assets/images/Error/notfound-content.svg";
import {Link} from "react-router-dom";
import Tabs from "../../Tabs/Tabs.jsx";
import {commentTabs} from "../../../data.jsx";


function Comments(props) {
    const [activeTab, setActiveTab] = useState({label: 'مقالات' , key: 'articles'});

    return (
        <div className="container">
            {/*<!-- ! -------------------- Tabs -------------------- ! -->*/}
            <Tabs activeTab={activeTab} tabs={commentTabs} changeTab={setActiveTab}/>
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