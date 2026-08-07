import React, {memo, useEffect, useState , useRef} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import useToggle from "../../Hooks/useToggle/useToggle.jsx";

function DescriptionAccordion({title , message , accordionNum}) {
    const [isShowMessage, toggleShowMessage] = useToggle(false);

    return (
        <div onClick={toggleShowMessage}>
            <div className={`relative flex items-center justify-between dark:bg-dark-930 ${isShowMessage ? 'text-blue-700 border-blue-700' : 'text-gray-300 dark:text-gray-100 border-transparent'} px-5 lg:px-12 py-5 lg:py-8 rounded-xl border-r-4 cursor-pointer transition-all`}>
                <div className="flex items-center gap-x-2 lg:gap-x-14 font-YekanBakh-Bold">
                    <span className="text-4xl">{'0' + accordionNum}</span>
                    <h4 className="text-lg lg:text-2xl">{title}</h4>
                </div>
                <div className="">
                    <DynamicIcon name={'arrow'} className={`${isShowMessage ? '-rotate-90' : 'rotate-0'} size-8 transition-all text-inherit`}/>
                </div>
            </div>
            <div className={`${isShowMessage ? 'max-h-100 overflow-auto opacity-100 mt-5' : 'max-h-0 overflow-hidden opacity-0 mt-0'}  rounded-xl dark:bg-dark-930 mr-20 transition-all duration-200`}>
                <p className="text-gray-300 dark:text-gray-920 text-xl/9 p-4 lg:p-8">
                    {message}
                </p>
            </div>
        </div>
    );
}

export default memo(DescriptionAccordion);