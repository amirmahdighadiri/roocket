import React from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

function SectionTitle({title , linkTitle , LinkAddress}) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between mb-20">
            {/*<!-- ! -------------------- Section Title -------------------- ! -->*/}
            <div className="flex items-center self-start  text-biscay-700 dark:text-white">
                <svg fill="none" className="w-9.25 h-8.5 text-dark-550 dark:text-white" viewBox="0 0 37 34">
                    <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                    <circle cx="30" cy="13" r="7" fill="currentColor" fillOpacity="0.4"></circle>
                    <circle cx="15" cy="4" r="4" fill="currentColor" fillOpacity="0.7"></circle>
                </svg>
                <h3 className="font-YekanBakh-Fat text-2xl sm:text-4xl mr-4">{title}</h3>
            </div>
            {/*<!-- ! -------------------- Section Link -------------------- ! -->*/}
            <Link to={LinkAddress ? LinkAddress : '/'} className="inline-flex self-end items-center gap-x-2 text-dark-550 dark:text-white hover:text-dark-700 dark:hover:text-gray-20 transition-all duration-300 font-YekanBakh-Bold">
                <span className="text-xl md:text-2xl">{linkTitle}</span>
                <DynamicIcon name={'arrow'} className={'size-6 md:size-7 text-inherit shrink-0'} />
            </Link>
        </div>
    );
}

export default SectionTitle;