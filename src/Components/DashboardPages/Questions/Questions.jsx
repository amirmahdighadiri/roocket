import React,{useState} from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import Tabs from "../../Tabs/Tabs.jsx";
import {questionTabs} from "../../../data.jsx";

function Questions(props) {
    const [activeTab, setActiveTab] = useState({label: 'پرسش های جاری' , key: 'active-questions'});
    return (
        <div className="container">
            {/*<!-- ! -------------------- Tabs -------------------- ! -->*/}
            <Tabs activeTab={activeTab} tabs={questionTabs} changeTab={setActiveTab}/>
            {/*<!-- ! -------------------- User Question Content -------------------- ! -->*/}
            <div className="p-8 rounded-xl bg-white dark:bg-dark-body-100 mb-24 mt-8">
                <p className="text-biscay-700 dark:text-white font-YekanBakh-Medium">پرسشی در این فهرست نیست.</p>
            </div>
        </div>
    );
}

export default Questions;