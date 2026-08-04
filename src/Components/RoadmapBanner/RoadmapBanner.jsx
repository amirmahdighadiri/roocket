import React from 'react';
import {Link} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

function RoadmapBanner({isEven , name , desc , iconSrc , bannerSrc}) {
    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row ' : 'lg:flex-row-reverse'} items-center justify-between gap-x-20`}>
            {/*<!-- ! -------------------- Skill Content -------------------- ! -->*/}
            <div className="w-full relative flex flex-col lg:even:flex-row lg:odd:flex-row-reverse items-start">
                {/*<!-- ! -------------------- Skill Icon  -------------------- ! -->*/}
                <div className={`lg:absolute ${isEven ? '-right-20' : '-left-20'}  size-13 flex-center bg-gray-5 dark:bg-gray-5/10 rounded mb-3`}>
                    <img src={iconSrc} alt={name} className="w-8/12"/>
                </div>
                {/*<!-- ! -------------------- Skill Banner Content -------------------- ! -->*/}
                <div className={`text-right ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <h3 className="font-Mult-Font-Bold text-3xl dark:text-white text-gray-800 mb-3">آموزش {name}</h3>
                    <p className="font-Mult-Font-Medium text-gray-500 dark:text-gray-920 mb-7 leading-7">{desc}</p>
                    <Link to="/" className="inline-flex items-center gap-3 bg-transparent hover:bg-blue-700 dark:hover:bg-blue-450 border border-blue-700 rounded-md dark:border-blue-450 text-blue-700 dark:text-blue-450 hover:text-white font-YekanBakh-Bold py-3 px-5 shadow-lg transition-all">
                        نقشه راه طراحی سایت
                        <DynamicIcon name={'arrow'} className={'size-6 text-inherit'} />
                    </Link>
                </div>
            </div>
            {/*<!-- ! -------------------- Skill Banner Image -------------------- ! -->*/}
            <div className="w-full relative bg-white dark:bg-dark-930 px-4 pt-3 pb-5 rounded-xl mt-5 lg:mt-0">
                <Link to="/" className="block rounded-xl overflow-hidden group">
                    <img src={bannerSrc} alt={`بنر ${name}`} className="w-full group-hover:scale-110 transition-all"/>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="68" fill="none" className={`absolute ${isEven ? '-bottom-2.5 -left-5' : '-top-2.5 -right-5'}  z-0`} viewBox="0 0 67 68">
                    <g fill="#CBD1DB" opacity="0.4">
                        <circle cx="2.398" cy="2.462" r="2.398"></circle>
                        <circle cx="2.398" cy="18.013" r="2.398"></circle>
                        <circle cx="2.398" cy="33.565" r="2.398"></circle>
                        <circle cx="2.398" cy="49.116" r="2.398"></circle>
                        <circle cx="2.398" cy="64.666" r="2.398"></circle>
                        <circle cx="17.949" cy="2.462" r="2.398"></circle>
                        <circle cx="17.949" cy="18.013" r="2.398"></circle>
                        <circle cx="17.949" cy="33.565" r="2.398"></circle>
                        <circle cx="17.949" cy="49.116" r="2.398"></circle>
                        <circle cx="17.949" cy="64.666" r="2.398"></circle>
                        <circle cx="33.499" cy="2.462" r="2.398"></circle>
                        <circle cx="33.499" cy="18.013" r="2.398"></circle>
                        <circle cx="33.499" cy="33.565" r="2.398"></circle>
                        <circle cx="33.499" cy="49.116" r="2.398"></circle>
                        <circle cx="33.499" cy="64.666" r="2.398"></circle>
                        <circle cx="49.05" cy="2.462" r="2.398"></circle>
                        <circle cx="49.05" cy="18.013" r="2.398"></circle>
                        <circle cx="49.05" cy="33.565" r="2.398"></circle>
                        <circle cx="49.05" cy="49.116" r="2.398"></circle>
                        <circle cx="49.05" cy="64.666" r="2.398"></circle>
                        <circle cx="64.601" cy="2.462" r="2.398"></circle>
                        <circle cx="64.601" cy="18.013" r="2.398"></circle>
                        <circle cx="64.601" cy="33.565" r="2.398"></circle>
                        <circle cx="64.601" cy="49.116" r="2.398"></circle>
                        <circle cx="64.601" cy="64.666" r="2.398"></circle>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default RoadmapBanner;