import React , {useState ,useEffect} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import podcastImage from "../../assets/images/symbol/podcast-archive.png";
import {timeFilters} from "../../data.jsx";
import {displayFilters} from "../../data.jsx";

function ContentList({itemsContent , BoxComponent , title}) {
    const [timeFilter, setTimeFilter] = useState({label: "بروزترین", value: "newest"});
    const [displayFilter, setDisplayFilter] = useState({label: "همه", value: "all"});
    const [finalItems, setFinalItems] = useState([]);

    useEffect(() => {
        setFinalItems([...itemsContent].reverse());
    },[itemsContent])


    useEffect(() => {
        if (displayFilter.value === "popular") {
            setFinalItems(prev=>{
                return [...prev].sort(
                    (a, b) => (b.likes ?? 0) - (a.likes ?? 0)
                )
            })
        } else if (displayFilter.value === "mostViewed") {
            setFinalItems(prev=>{
                return [...prev].sort(
                    (a, b) => (b.views ?? 0) - (a.views ?? 0)
                )
            })
        } else {
            setFinalItems((prev)=>{
                return [...prev].reverse()
            });
        }
    }, [displayFilter]);

    useEffect(() => {
        if (timeFilter.value === "newest" || timeFilter.value === "latest") {
            setFinalItems((prev)=>{
                return [...prev].reverse()
            })
        }
        if (timeFilter.value === "oldest"){
            setFinalItems(itemsContent)
        }

        if (timeFilter.value === "week" || timeFilter.value === "month" || timeFilter.value === "year"){
            setFinalItems(prev=>{
                return [...prev].sort(
                    (a, b) => new Date(b.release_date) - new Date(a.release_date)
                )
            })
        }
    },[timeFilter ]);

    return (
        <>
            {/*<!-- ! -------------------- Filter Wrapper -------------------- ! -->*/}
            <div className="flex flex-col md:flex-row items-center gap-x-2 gap-y-5 pb-6 border-b border-biscay-700/30 mb-7">
                <div className="relative w-full xl:w-auto inline-block group">
                    {/*<!-- ! -------------------- Filter Button -------------------- ! -->*/}
                    <div className="w-full inline-flex items-center justify-between gap-x-2 h-11 px-3 border border-biscay-700 dark:border-white/20 cursor-pointer rounded-md">
                        <div className="flex items-center gap-x-1 text-biscay-700 dark:text-white text-sm font-YekanBakh-Bold pl-2 border-0 xl:border-l border-biscay-700 dark:border-white/20">
                            <span className="">فیلتر زمانی</span>
                            <span className="text-dark-550 dark:text-gray-920 text-xs">(  )</span>
                        </div>
                        <div className="">
                            <DynamicIcon name="chartCircle" className="size-5 text-biscay-700 dark:text-white"/>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Sub Filter Wrapper -------------------- ! -->*/}
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute w-full p-3 bg-white dark:bg-dark-930 shadow-sm rounded-md mt-2 transition-all delay-75 z-10">
                        <ul className="">
                            {timeFilters.map(time => (
                                    <li key={time.id} onClick={() => setTimeFilter({
                                        label: time.label,
                                        value: time.value
                                    })}
                                        className="py-2 px-3 font-YekanBakh-Bold text-sm text-biscay-700 dark:text-gray-920 dark:hover:text-white hover:bg-gray-5 dark:hover:bg-dark-890 rounded-md transition-all cursor-pointer">
                                        <span className="">{time.label}</span></li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className="relative w-full xl:w-auto inline-block group">
                    {/*<!-- ! -------------------- Filter Button -------------------- ! -->*/}
                    <div className="w-full inline-flex items-center justify-between gap-x-2 h-11 px-3 border border-biscay-700 dark:border-white/20 cursor-pointer rounded-md">
                        <div className="flex items-center gap-x-1 text-biscay-700 dark:text-white text-sm font-YekanBakh-Bold pl-2 border-0 xl:border-l border-biscay-700 dark:border-white/20">
                            <span className="">فیلتر نمایش</span>
                            <span className="text-dark-550 dark:text-gray-920 text-xs">(  )</span>
                        </div>
                        <div className="">
                            <DynamicIcon name="chartCircle" className="size-5 text-biscay-700 dark:text-white"/>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Sub Filter Wrapper -------------------- ! -->*/}
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute w-full p-3 bg-white dark:bg-dark-930 shadow-sm rounded-md mt-2 transition-all delay-75 z-10">
                        <ul className="">
                            {
                                displayFilters.map(filter => (
                                    <li key={filter.id} onClick={() => setDisplayFilter({
                                        label: filter.label,
                                        value: filter.value
                                    })}
                                        className="py-2 px-3 font-YekanBakh-Bold text-sm text-biscay-700 dark:text-gray-920 dark:hover:text-white hover:bg-gray-5 dark:hover:bg-dark-890 rounded-md transition-all cursor-pointer">
                                        <span className="">{filter.label}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/*<!-- ! -------------------- Item Wrapper -------------------- ! -->*/}
            <div className="">
                {/*<!-- ! -------------------- Section Title -------------------- ! -->*/}
                <div className="flex items-center gap-x-1">
                    <img src={podcastImage} alt="podcast image" className=""/>
                    <span className="text-biscay-700 dark:text-white font-YekanBakh-Heavy text-3xl">{title}</span>
                </div>
                {/*<!-- ! -------------------- Items Wrapper -------------------- ! -->*/}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-12 mt-7">
                    {
                        finalItems.map(item => (
                            <BoxComponent key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ContentList;