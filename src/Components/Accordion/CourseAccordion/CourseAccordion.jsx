import React , {useRef , useEffect ,useState} from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import CourseLinkBox from "../../CourseLinkBox/CourseLinkBox.jsx";
import useToggle from "../../../Hooks/useToggle/useToggle.jsx";

function CourseAccordion(props) {
    const [isShowMessage, toggleShowMessage] = useToggle(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    const showAccordionHandler =async () =>{
        // if (isShowMessage){
        //
        // }
        await setHeight(contentRef.current.scrollHeight);
        toggleShowMessage();
    }

    return (
        <>
            <div onClick={showAccordionHandler} className="flex items-center justify-between dark:bg-dark-900 border border-gray-210 dark:border-dark-900 rounded-lg cursor-pointer py-4 px-6 mb-4">
                <div className="">
                    <span
                        className="inline-block text-chambray-700 dark:text-white text-xl font-Mult-Font-Bold border-l border-gray-200 dark:border-gray-200/30 pl-7 ml-5">بخش اول</span>
                    <span
                        className="text-dark-550 dark:text-gray-200 font-Mult-Font-Medium text-xl">معرفی و مقدمه</span>
                </div>
                <div className="text-dark-550 dark:text-gray-200">
                    <DynamicIcon name="arrow" className={`size-7 text-inherit ${isShowMessage ? '-rotate-90' : 'rotate-0'} transition-all duration-600`} />
                </div>
            </div>
            <div ref={contentRef}  className={`${isShowMessage ? `mb-2` : 'mb-0'} overflow-hidden transition-all duration-600 delay-100 pr-8`} style={{height: isShowMessage ? `${height}px` : "0px"}}>
                <CourseLinkBox/>
                <CourseLinkBox/>
                <CourseLinkBox/>
            </div>
        </>


    );
}

export default CourseAccordion;