import React from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

function AboutText({title, image, paragraphs, button, isEven}) {
    return (
        <div className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center`}>
            <span className={`absolute ${isEven ? '-right-1/3' : '-left-1/3'}  size-80 md:size-138 rounded-full border border-blue-800/20`}></span>
            {/*<!-- ! -------------------- Image -------------------- ! -->*/}
            <div className={`relative ${isEven ? 'ml-12' : 'mr-12'}`}>
                <span className={`absolute ${isEven ? '-right-6 rotate-12' : 'right-6 -rotate-12'} w-48 h-52 md:w-56 md:h-64  bg-blue-700/10 rounded-2xl`}></span>
                <div className="relative w-48 h-52 md:w-56 md:h-64 rounded-2xl overflow-hidden">
                    <img src={image} alt={title}/>
                    <span className="absolute inset-0 bg-blue-700/40 z-20"></span>
                </div>
            </div>
            {/*<!-- ! -------------------- Text Content -------------------- ! -->*/}
            <div className="">
                <h4 className="text-2xl sm:text-4xl text-blue-700 dark:text-blue-450 font-YekanBakh-Bold mb-4">{title}</h4>
                <div className="text-base/8 lg:text-lg/8 text-gray-360 dark:text-gray-920 mb-7 space-y-5 font-YekanBakh-Bold text-justify">
                    {
                        paragraphs.map(paragraph =>{
                            if (paragraph.type === "mixed"){
                                return (
                                    <p key={paragraph.id}>
                                        {paragraph.content.map(item => item.type === "link" ? <Link to={item.url} key={item.id} className="text-blue-700 hover:underline transition-all">{item.content}</Link> : <span key={item.id}>{item.content}</span>)}
                                    </p>
                                )
                            }

                            return <p key={paragraph.id}>{paragraph.content}</p>
                        })
                    }
                </div>
                <Link to={button.url} title={button.title} className="inline-flex items-center gap-x-3 sm:text-lg font-YekanBakh-Bold text-blue-700 hover:text-gray-700 dark:text-blue-450 dark:hover:text-white transition-all">
                    <span className="">{button.title}</span>
                    <DynamicIcon name="arrow" className="size-6 text-inherit"/>
                </Link>
            </div>
        </div>
    );
}

export default AboutText;