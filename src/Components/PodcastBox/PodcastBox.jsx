import React from 'react';
import {Link} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

function PodcastBox({episode_number , title , like , duration , image_url}) {

    return (
        <div className="bg-white dark:bg-dark-930 rounded-md pt-4">
            {/*<!-- ! -------------------- Box Header-------------------- ! -->*/}
            <div className="flex items-center justify-between px-5">
                <div className="inline-flex border border-biscay-700/10 dark:border-dark-910 text-gray-450 dark:text-white pt-1 pl-2 rounded text-xs font-bold">
                    <svg width="20" height="22" fill="none" className="mr-1 ml-2" viewBox="0 0 20 22">
                        <ellipse fill="#3B82F6" opacity="0.15" rx="9.355" ry="8.69" transform="rotate(-.479 1546.258 -1251.265)skewX(.076)"></ellipse>
                        <path fill="#3B82F6" d="M2.206 5.485C2.206 3.135 2.574 0 5.882 0 9.192 0 9.56 3.134 9.56 5.485s-.368 5.486-3.677 5.486c-3.308 0-3.676-3.135-3.676-5.486"></path>
                        <path fill="#3B82F6" d="M.735 6.857c-.406 0-.735.307-.735.685a5.575 5.575 0 0 0 5.148 5.45v.721H3.675c-.406 0-.735.307-.735.686s.33.686.735.686h4.412c.406 0 .736-.307.736-.686s-.33-.686-.736-.686h-1.47v-.685l-.001-.037a5.575 5.575 0 0 0 5.148-5.449c0-.378-.33-.685-.736-.685s-.735.307-.735.685c0 1.799-1.406 4.114-4.412 4.114-3.005 0-4.411-2.315-4.411-4.114 0-.378-.33-.685-.736-.685"></path>
                    </svg>
                    <span className="">شماره {episode_number}</span>
                </div>
                {/*<!-- ! -------------------- Podcast Reaction Btn-------------------- ! -->*/}
                <div className="flex items-center gap-x-2">
                    <button className="flex items-center h-5 px-1 bg-gray-500/10 text-gray-500 dark:bg-gray-500/10 dark:text-gray-940 rounded xl:cursor-pointer transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" className="ml-1 text-gray-500 dark:text-gray-940" viewBox="0 0 16 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.729" d="M.365 8c0 1.639.088 2.93.314 3.95.226 1.016.584 1.739 1.108 2.263s1.247.882 2.263 1.108c1.02.226 2.311.314 3.95.314s2.93-.088 3.95-.315c1.016-.225 1.739-.583 2.263-1.107s.882-1.247 1.108-2.263c.226-1.02.314-2.311.314-3.95s-.088-2.93-.315-3.95c-.225-1.016-.583-1.739-1.107-2.263S12.966.905 11.95.68C10.93.453 9.64.365 8 .365S5.07.453 4.05.679c-1.016.226-1.739.584-2.263 1.108S.905 3.034.68 4.05C.453 5.07.365 6.36.365 8"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.729" d="M8 4v3.333C8 8 8 8 8.667 8H12"></path>
                        </svg>
                        <span className="text-xs"> {duration} </span>
                    </button>
                    <button className="h-5 inline-flex items-center gap-x-1 rounded-sm px-1 bg-red-700/10 hover:bg-red-700 dark:hover:bg-red-650 hover:text-white text-red-450 dark:text-red-650 xl:cursor-pointer transition-all cursor-pointer">
                        <svg className="size-3" fill="none" viewBox="0 0 13 11">
                            <path stroke="currentColor" d="M3.95 1.229c.87 0 1.662.433 2.263.926.6-.493 1.393-.926 2.262-.926 1.875 0 3.394 1.394 3.394 3.113 0 3.466-3.945 5.485-5.246 6.056a1.02 1.02 0 0 1-.82 0C4.501 9.827.556 7.808.556 4.342c0-1.72 1.519-3.113 3.393-3.113Z"></path>
                        </svg>
                        <span id="course-like" className="font-YekanBakh-Medium text-xs">{like}</span>
                    </button>
                    <button className="h-5 px-1 bg-blue-700/10 dark:bg-blue-700/10 dark:text-blue-970 dark:hover:bg-blue-970 dark:hover:text-blue-700 rounded transition-all xl:cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" fill="none" viewBox="0 0 10 12">
                            <path
                                d="m2.52 10.651-.004.003a.794.794 0 0 1-1.253-.59 53 53 0 0 1-.133-4.036v-.035c0-.777 0-1.453.056-2.018.056-.572.172-1.085.443-1.502C2.195 1.6 3.285 1.348 5 1.341s2.806.244 3.372 1.122c.27.42.387.934.443 1.508.056.567.056 1.245.056 2.022v.035c0 1.956-.076 3.301-.133 4.035a.794.794 0 0 1-1.253.591l-.004-.003c-.444-.303-.854-.63-1.174-.885L6.3 9.76c-.146-.115-.278-.22-.381-.297a2.4 2.4 0 0 0-.507-.303A1.1 1.1 0 0 0 5 9.08c-.117 0-.249.014-.412.08a2.4 2.4 0 0 0-.507.303c-.104.076-.236.182-.381.297l-.006.005c-.32.255-.73.582-1.174.885"
                                className="stroke-current text-blue-700 group-hover:text-white"></path>
                            <path d="M5.86 3.063c.43 0 .645-.002.967.32.323.321.323 1.398.323 1.828"
                                  className="stroke-current text-blue-700 group-hover:text-white"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/*<!-- ! -------------------- Box Body -------------------- ! -->*/}
            <h3 className="pr-5 mt-2 mb-7">
                <Link to="/" className="inline-block font-YekanBakh-Bold text-biscay-700 hover:text-blue-700 dark:text-white dark:hover:text-gray-20 text-xl line-clamp-2">{title}</Link>
            </h3>
            {/*<!-- ! -------------------- Box Footer -------------------- ! -->*/}
            <div className="relative ml-4 border-t border-gray-300/10 dark:border-dark-910 py-2 pr-5">
                <Link to="/" className="flex items-center font-YekanBakh-Bold text-xs text-blue-700 hover:text-biscay-700 dark:text-blue-950 dark:hover:text-blue-200 transition-all">
                    <span className=""> برای گوش کردن کلیک کنید</span>
                    <DynamicIcon name={'arrow'} className={'size-4 text-inherit'} />
                </Link>
                <Link to="/" className="absolute left-0 -top-4 inline-block size-20 overflow-hidden rounded">
                    <img src={`/images/podcast/${image_url}.jpg`} alt="" className="w-full h-full object-cover hover:scale-110 transition-all"/>
                </Link>
            </div>
        </div>
    );
}

export default PodcastBox;