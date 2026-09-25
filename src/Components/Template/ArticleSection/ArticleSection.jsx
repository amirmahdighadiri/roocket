import React from 'react';
import {Link} from "react-router-dom";
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import ArticleBox from "../../ArticleBox/ArticleBox.jsx";

function ArticleSection({articles}) {
    return (
        <section className="container xl:mt-100">
            <div className="relative flex flex-col items-center justify-between ">
                {/*<!-- ! -------------------- Vector -------------------- ! -->*/}
                <div className="absolute right-0 top-0">
                    <svg className="absolute top-10 -right-2 lg:-right-7" width="49" height="46" viewBox="0 0 49 46" fill="none">
                        <circle cx="13.2432" cy="32.1084" r="13.2432" fill="#DC2626"></circle>
                        <circle cx="39.7298" cy="17.5407" r="9.27027" fill="#DC2626" fillOpacity="0.4"></circle>
                        <circle cx="19.865" cy="5.62176" r="5.2973" fill="#DC2626" fillOpacity="0.7"></circle>
                    </svg>
                </div>
                {/*<!-- ! -------------------- Section Content -------------------- ! -->*/}
                <div className="grid grid-cols-12  bg-dark-550/5 dark:bg-dark-950 py-20 px-9 rounded-2xl">
                    <div className="col-span-12 xl:col-span-5 flex flex-col items-center xl:items-start">
                        <h4 className="text-biscay-700 dark:text-white font-YekanBakh-Fat text-2xl md:text-4xl mb-2">از
                            گوشه و اطراف دنیای برنامه‌نویسی</h4>
                        <p className="text-lg text-gray-300 dark:text-gray-940 mb-4 font-YekanBakh-Medium text-center xl:text-justify">نوشتن
                            کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به روز باشیم، ما در راکت
                            فضای رو به شکلی آماده کردیم تا شما بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در
                            اختیار هزاران برنامه‌نویس عضو راکت قرار بدید.</p>
                        <Link to="/"
                              className="inline-flex items-center gap-x-2 py-3 px-4 border text-white bg-blue-700 hover:bg-dark-500 hover:border-dark-500 dark:bg-blue-950 dark:hover:bg-transparent border-blue-700 dark:hover:border-white dark:hover:text-white font-YekanBakh-Bold rounded transition-all">
                            مشاهده همه مطالب
                            <DynamicIcon name={'arrow'} className={'size-4 text-inherit'}/>
                        </Link>
                    </div>
                </div>
                {/*<!-- ! -------------------- Articles Wrapper -------------------- ! -->*/}
                <div className="xl:absolute -top-1/2 left-9 xl:w-1/2 grid grid-cols-12 gap-6 mt-13 xl:mt-0">
                    <div className="col-span-12 sm:col-span-6 space-y-6 xl:mt-10">
                        {[...articles].reverse().slice(0, 2).map(article => (
                            <ArticleBox key={article.id} {...article} />))}
                    </div>
                    <div className="col-span-12 sm:col-span-6 space-y-6">
                        {[...articles].reverse().slice(2, 4).map(article => (
                            <ArticleBox key={article.id} {...article} />))}
                    </div>
                </div>
            </div>
            {/*<!-- ! -------------------- Interesting Topics Wrapper -------------------- ! -->*/}
            <div className="flex items-center mt-4 px-14">
                <ul className="flex flex-wrap items-center gap-1">
                    <li className="">
                        <span className="inline-block text-gray-300 ml-2">موضوعات جذاب این هفته: </span>
                    </li>
                    <li className="">
                        <Link to="/"
                              className="h-6 text-gray-450 hover:text-white hover:bg-gray-700 font-YekanBakh-Bold text-sm rounded border border-biscay-700/10 px-2 transition-all"> #توسعه
                            وب </Link>
                    </li>
                    <li className="">
                        <Link to="/"
                              className="h-6 text-gray-450 hover:text-white hover:bg-gray-700 font-YekanBakh-Bold text-sm rounded border border-biscay-700/10 px-2 transition-all"> #جاوااسکریپت </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ArticleSection;