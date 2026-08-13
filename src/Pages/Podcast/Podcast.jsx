import React, {useEffect, useState} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import TagBox from "../../Components/TagBox/TagBox.jsx";
import {getCoursesFromServer} from "../../Redux/Store/Courses.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import PodcastBox from "../../Components/PodcastBox/PodcastBox.jsx";
import {getPodcastsFromServer} from "../../Redux/Store/Podcasts.jsx";
import {timeFilters} from "../../data.jsx";
import {displayFilters} from "../../data.jsx";

{/*<!-- ! -------------------- Images -------------------- ! -->*/
}
import instagramPhone from "../../assets/images/instagram.png";
import banner1 from "../../assets/images/banner/banner-1.gif";
import podcastImage from "../../assets/images/symbol/podcast-archive.png";


function Podcast(props) {

    const dispatch = useDispatch();
    const {courses, coursesLoading} = useSelector(state => state.courses);
    const {podcasts, podcastLoading} = useSelector(state => state.podcasts);
    const [timeFilter, setTimeFilter] = useState({label: "بروزترین", value: "newest"});
    const [displayFilter, setDisplayFilter] = useState({label: "همه", value: "all"});
    const [finalPodcasts, setFinalPodcasts] = useState([]);

    useEffect(() => {
        if (!courses.length) {
            dispatch(getCoursesFromServer("http://localhost:3000/courses"))
        }
        if (!podcasts.length) {
            dispatch(getPodcastsFromServer("http://localhost:3000/episodes"))
        }
    }, [])

    useEffect(() => {
        setFinalPodcasts([...podcasts].reverse());
    }, [podcasts])

    useEffect(() => {
        if (displayFilter.value === "popular") {
            setFinalPodcasts(prev=>{
                return [...prev].sort(
                    (a, b) => (b.likes ?? 0) - (a.likes ?? 0)
                )
            })
        } else if (displayFilter.value === "mostViewed") {
            setFinalPodcasts(prev=>{
               return [...prev].sort(
                    (a, b) => (b.views ?? 0) - (a.views ?? 0)
                )
            })
        } else {
            setFinalPodcasts((prev)=>{
                return [...prev].reverse()
            });
        }
    }, [displayFilter]);

    useEffect(() => {
        if (timeFilter.value === "newest" || timeFilter.value === "latest") {
            setFinalPodcasts((prev)=>{
                return [...prev].reverse()
            })
        }
        if (timeFilter.value === "oldest"){
            setFinalPodcasts(podcasts)
        }

        if (timeFilter.value === "week" || timeFilter.value === "month" || timeFilter.value === "year"){
            setFinalPodcasts(prev=>{
                return [...prev].sort(
                    (a, b) => new Date(b.release_date) - new Date(a.release_date)
                )
            })
        }
    },[timeFilter ]);


    return (
        <section className="container">
            <div className="grid grid-cols-12 gap-6 mt-12">
                <aside className="hidden xl:block xl:col-span-3">
                    {/*<!-- ! -------------------- Aside Wrapper -------------------- ! -->*/}
                    <div className="pt-9 pb-9 px-5 dark:bg-dark-930 border border-primary-gray-185 dark:border-dark-930 mb-8 rounded-md">
                        {/*<!-- ! -------------------- Tags Wrapper -------------------- ! -->*/}
                        <div className="mb-10">
                            <div className="flex items-center gap-x-2 mb-3">
                                <DynamicIcon name="sharp" className="size-5 dark:text-gray-920 text-biscay-700"/>
                                <span className="inline-block mt-2 text-biscay-700 dark:text-white font-Mult-Font-Bold">تگ های محبوب</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    courses.map(course => (
                                        <TagBox key={course.id} tag={course.title}/>
                                    ))
                                }
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Instagram Section -------------------- ! -->*/}
                        <div
                            className="relative flex items-center justify-between p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-md">
                            <img src={instagramPhone} alt="instagram" className="absolute -top-7 -right-1 w-32 h-25"/>
                            <Link to="/"
                                  className="inline-block mr-auto p-2 font-YekanBakh-Bold text-purple-600 bg-white rounded text-xs border border-white hover:bg-transparent hover:text-white transition-all">
                                <span className="">مشاهده اینستاگرام</span>
                            </Link>
                        </div>
                        {/*<!-- ! -------------------- Banner Wrapper -------------------- ! -->*/}
                        <div className="w-full border border-primary-gray-185 rounded-lg overflow-hidden mt-4">
                            <Link to="/" className="">
                                <img src={banner1} alt="" className="w-full h-full object-cover"/>
                            </Link>
                        </div>
                    </div>
                </aside>
                <div className="col-span-12 xl:col-span-9">
                    {/*<!-- ! -------------------- Filter Wrapper -------------------- ! -->*/}
                    <div className="flex flex-col md:flex-row items-center gap-x-2 gap-y-5 pb-6 border-b border-biscay-700/30 mb-7">
                        <div className="relative w-full xl:w-auto inline-block group">
                            {/*<!-- ! -------------------- Filter Button -------------------- ! -->*/}
                            <div className="w-full inline-flex items-center justify-between gap-x-2 h-11 px-3 border border-biscay-700 dark:border-white/20 cursor-pointer rounded-md">
                                <div className="flex items-center gap-x-1 text-biscay-700 dark:text-white text-sm font-YekanBakh-Bold pl-2 border-0 xl:border-l border-biscay-700 dark:border-white/20">
                                    <span className="">فیلتر زمانی</span>
                                    <span className="text-dark-550 dark:text-gray-920 text-xs">( {timeFilter.label} )</span>
                                </div>
                                <div className="">
                                    <DynamicIcon name="chartCircle" className="size-5 text-biscay-700 dark:text-white"/>
                                </div>
                            </div>
                            {/*<!-- ! -------------------- Sub Filter Wrapper -------------------- ! -->*/}
                            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute w-full p-3 bg-white dark:bg-dark-930 shadow-sm rounded-md mt-2 transition-all delay-75 z-10">
                                <ul className="">
                                    {
                                        timeFilters.map(time => (
                                            <li key={time.id} onClick={() => setTimeFilter({
                                                label: time.label,
                                                value: time.value
                                            })}
                                                className="py-2 px-3 font-YekanBakh-Bold text-sm text-biscay-700 dark:text-gray-920 dark:hover:text-white hover:bg-gray-5 dark:hover:bg-dark-890 rounded-md transition-all cursor-pointer">
                                                <span className="">{time.label}</span></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="relative w-full xl:w-auto inline-block group">
                            {/*<!-- ! -------------------- Filter Button -------------------- ! -->*/}
                            <div className="w-full inline-flex items-center justify-between gap-x-2 h-11 px-3 border border-biscay-700 dark:border-white/20 cursor-pointer rounded-md">
                                <div className="flex items-center gap-x-1 text-biscay-700 dark:text-white text-sm font-YekanBakh-Bold pl-2 border-0 xl:border-l border-biscay-700 dark:border-white/20">
                                    <span className="">فیلتر نمایش</span>
                                    <span className="text-dark-550 dark:text-gray-920 text-xs">( {displayFilter.label} )</span>
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
                    {/*<!-- ! -------------------- Podcast Item Wrapper -------------------- ! -->*/}
                    <div className="">
                        {/*<!-- ! -------------------- Section Title -------------------- ! -->*/}
                        <div className="flex items-center gap-x-1">
                            <img src={podcastImage} alt="podcast image" className=""/>
                            <span className="text-biscay-700 dark:text-white font-YekanBakh-Heavy text-3xl">لیست پادکست ها</span>
                        </div>
                        {/*<!-- ! -------------------- Podcasts Wrapper -------------------- ! -->*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-12 mt-7">
                            {
                                finalPodcasts.map(podcast => (
                                    <PodcastBox key={podcast.episode_number} {...podcast} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Podcast;