import React from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

function PaginationBtn({pageCount, currentPage , setCurrentPage}) {


    const increaseCurrentPageHandler =(event) => {
        event.preventDefault()
        setCurrentPage(prev => {
            if (prev < pageCount) {
                return prev + 1;
            }
            return prev;
        })
    }

    const changeCurrentPageHandler=(event , pageId)=>{
        event.preventDefault()
        setCurrentPage(pageId)
    }

    const decreaseCurrentPageHandler = (event) => {
        event.preventDefault()
        setCurrentPage(prev => {
            if (prev >= pageCount ) {
                return prev - 1;
            }
            return prev;
        })
    }

    return (
        <div className={`${pageCount > 1 ? 'flex-center' : 'hidden'} col-span-12 gap-2`}>
            {/*<!-- ! -------------------- Next BTn -------------------- ! -->*/}
            <button type="button" onClick={increaseCurrentPageHandler} className="flex items-center justify-center size-10 rounded-md border border-gray-210 dark:border-gray-360/20 bg-white dark:bg-dark-930 text-biscay-700 dark:text-white hover:bg-biscay-700 hover:text-white dark:hover:bg-biscay-700 transition-all cursor-pointer">
                <DynamicIcon name="arrow" className="size-5 rotate-180"/>
            </button>
            {/*<!-- ! -------------------- Other Btn -------------------- ! -->*/}
            <div dir="ltr" className="flex items-center gap-x-2">
                {Array.from({ length: pageCount }, (_, index) => (
                    <button onClick={(event) => changeCurrentPageHandler(event , index+1)} key={index + '01'} type="button" className={`size-10 rounded-md font-YekanBakh-Bold transition-all ${currentPage === index + 1  ? 'bg-biscay-700 text-white' : 'bg-white dark:bg-dark-930 text-biscay-700 dark:text-white border border-gray-210 dark:border-gray-360/20 hover:bg-biscay-700 hover:text-white'} cursor-pointer`}>
                        {index + 1}
                    </button>
                ))}
            </div>
            {/*<!-- ! -------------------- Prev Btn -------------------- ! -->*/}
            <button type="button" onClick={decreaseCurrentPageHandler} className=" flex items-center justify-center size-10 rounded-md border border-gray-210 dark:border-gray-360/20 bg-white dark:bg-dark-930 text-biscay-700 dark:text-white hover:bg-biscay-700 hover:text-white transition-all cursor-pointer">
                <DynamicIcon name="arrow" className="size-5"/>
            </button>
        </div>
    );
}

export default PaginationBtn;