import React ,{useEffect} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import TagBox from "../../Components/Tags/TagBox/TagBox.jsx";
import {Link} from 'react-router-dom';
import instagramPhone from "../../assets/images/instagram.png";
import banner1 from "../../assets/images/banner/banner-1.gif";
import {displayFilters, timeFilters} from "../../data.jsx";
import podcastImage from "../../assets/images/symbol/podcast-archive.png";
import Tags from "../../Components/Tags/Tags.jsx";
import {getPodcastsFromServer} from "../../Redux/Store/Podcasts.jsx";
import {useDispatch, useSelector} from "react-redux";
import PodcastBox from "../../Components/PodcastBox/PodcastBox.jsx";
import ArticleBox from "../../Components/ArticleBox/ArticleBox.jsx";
import articles, {getArticlesFromServer} from "../../Redux/Store/Articles.jsx";
import ContentList from "../../Components/ContentList/ContentList.jsx";

function Articles(props) {
    const dispatch = useDispatch();
    const {podcasts, podcastLoading} = useSelector(state => state.podcasts);
    const {articles , articlesLoading} = useSelector(state => state.articles);

    useEffect(() => {
        if (!podcasts.length) {
            dispatch(getPodcastsFromServer("http://localhost:3000/episodes"))
        }
        if (!articles.length) {
            dispatch(getArticlesFromServer("http://localhost:3000/articles"))
        }
    }, [])

    return (
        <section className="container">
            <div className="grid grid-cols-12 gap-6 mt-12">
                {/*<!-- ! -------------------- Tags & Banner -------------------- ! -->*/}
                <aside className="hidden xl:block xl:col-span-3">
                    {/*<!-- ! -------------------- Aside Wrapper -------------------- ! -->*/}
                    <div className="pt-9 pb-9 px-5 dark:bg-dark-930 border border-primary-gray-185 dark:border-dark-930 mb-8 rounded-md">
                        {/*<!-- ! -------------------- Bookmark Article -------------------- ! -->*/}
                        <div className="flex items-center justify-between mb-6 text-biscay-700 dark:text-white font-Mult-Font-Bold">
                            <Link to="/articles" className="flex items-center gap-x-2 mb-3">
                                <DynamicIcon name="bookmark" className="size-5 text-inherit"/>
                                <span className="inline-block mt-2">پست‌های دخیره شده</span>
                            </Link>
                            <span className="">0</span>
                        </div>
                        {/*<!-- ! -------------------- Tags Wrapper -------------------- ! -->*/}
                        <div className="mb-10">
                            <div className="flex items-center gap-x-2 mb-3">
                                <DynamicIcon name="sharp" className="size-5 dark:text-gray-920 text-biscay-700"/>
                                <span className="inline-block mt-2 text-biscay-700 dark:text-white font-Mult-Font-Bold">تگ های محبوب</span>
                            </div>
                            {/*<!-- ! -------------------- Tags Item -------------------- ! -->*/}
                            <div className="flex flex-wrap gap-2">
                                <Tags />
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Instagram Section -------------------- ! -->*/}
                        <div className="relative flex items-center justify-between p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-md">
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
                    {/*<!-- ! -------------------- Podcast Wrapper -------------------- ! -->*/}
                    <div className="pt-9 pb-9 px-5 dark:bg-dark-930 border border-primary-gray-185 dark:border-dark-930 mb-8 rounded-md">
                        <div className="flex items-start gap-x-2 text-biscay-700 dark:text-white font-Mult-Font-Bold">
                            <DynamicIcon name="podcast" className="size-5 text-inherit"/>
                            <div className="">
                                <h3 className="">راکت کست ها</h3>
                                <p className="text-dark-550 dark:text-gray-920 text-xs">پادکست‌های اختصاصی طراحی و برنامه‌نویسی</p>
                            </div>
                        </div>
                        <div className="space-y-9 mt-6">
                            {
                                [...podcasts].reverse().slice(0,5).map(podcast => (
                                    <div key={podcast.episode_number} className="bg-white dark:bg-dark-890 rounded shadow-sm pt-2 pr-3 pl-10">
                                        <h3 className="h-12 text-biscay-700 dark:text-white font-YekanBakh-Bold line-clamp-2 mb-2">
                                            <Link to="/">{podcast.title}</Link>
                                        </h3>
                                        <div className="relative flex items-center justify-between border-t border-gray-300/10 py-2">
                                            <Link to="/" className="flex items-center gap-x-1 text-blue-450 hover:text-dark-700 dark:hover:text-white font-YekanBakh-Bold text-sm transition-all">
                                                <span className="">گوش کردن</span>
                                                <DynamicIcon name="arrow" className="size-4 text-inherit"/>
                                            </Link>
                                            <div className="absolute left-0 bottom-0 translate-y-1/3 size-14 rounded overflow-hidden">
                                                <img src={`/images/podcast/${podcast.image_url}.jpg`} alt={podcast.title} className="w-full h-full object-cover"/>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <Link to="/podcasts" className="inline-flex items-center justify-center gap-x-2.5 w-full border border-blue-700 font-bold px-7 rounded-lg h-11 transition-all bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white mt-11">
                            <span className="">مشاهده همه پادکست ها</span>
                            <DynamicIcon name="arrow" className="size-5 text-inherit"/>
                        </Link>
                    </div>
                </aside>
                {/*<!-- ! -------------------- Filter & Articles -------------------- ! -->*/}
                <div className="col-span-12 xl:col-span-9">
                    <ContentList itemsContent={articles} BoxComponent={ArticleBox} title="آرشیو مقالات"/>
                </div>
            </div>
        </section>
    );
}

export default Articles;