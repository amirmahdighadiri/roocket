import React from 'react';
import {Link} from "react-router-dom";

function ArticleBox() {
    return (
        <div className=" bg-white dark:bg-dark-930 p-4 rounded">
            {/*<!-- ! -------------------- Article Image -------------------- ! -->*/}
            <div className="rounded overflow-hidden">
                <Link to="/" className="">
                    <img src="/images/article/1.webp" alt="" className="hover:scale-110 transition-all"/>
                </Link>
            </div>
            {/*<!-- ! -------------------- Article Content -------------------- ! -->*/}
            <div className="">
                {/*<!-- ! -------------------- Article Tite -------------------- ! -->*/}
                <h4 className="h-16 mt-3 mb-4">
                    <Link to="/" className="font-Mult-Font-Bold text-xl line-clamp-2 text-gray-800 hover:text-blue-700 dark:text-white dark:hover:text-blue-450 transition-all">بررسی فریم‌ورک Remix و تفاوت آن با Next.js</Link>
                </h4>
                {/*<!-- ! -------------------- Author Info -------------------- ! -->*/}
                <div className="flex items-center justify-between mb-4">
                    {/*<!-- ! -------------------- Author Info -------------------- ! -->*/}
                    <div className="flex items-center gap-x-1">
                        <img src="/images/team-profile/arasto-abbasi.png" alt="" className="size-6 border-2 border-white rounded-full"/>
                        <Link to="/" className="text-gray-400 hover:text-gray-800 dark:text-white dark:hover:text-blue-450 font-YekanBakh-Bold text-xs transition-all">ارسطو عباسی</Link>
                    </div>
                    {/*<!-- ! -------------------- Article Category -------------------- ! -->*/}
                    <Link to="/" className="group inline-flex items-center font-Mult-Font-Bold text-xs bg-blue-40 hover:bg-blue-700 dark:bg-blue-700/10 dark:hover:bg-blue-700/10 text-blue-700 hover:text-white dark:text-blue-950 dark:hover:text-white px-2 py-1 transition-all rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" className="ml-1" viewBox="0 0 10 10">
                            <path d="M5.005 5a.417.417 0 1 0 0 .833h1.672a.417.417 0 0 0 0-.833zM3.334 6.672a.417.417 0 0 0 0 .834h3.344a.417.417 0 1 0 0-.834z" className="fill-current transition-all text-inherit"></path>
                            <path d="M7.083 2.178c-.447-.042-.965-.059-1.561-.059-3.682 0-4.563.659-4.993 3.732q-.1.702-.111 1.244m6.665-4.917c2.317.218 2.748 1.097 2.388 3.673-.43 3.074-1.311 3.732-4.993 3.732-3.12 0-4.097-.473-4.06-2.488m6.665-4.917s.064-.383 0-.888C6.927.046 1.793.208 1.25 1.29.417 2.948.418 7.095.418 7.095" className="stroke-current transition-all text-inherit"></path>
                        </svg>
                        جاوااسکریپت
                    </Link>
                </div>
                {/*<!-- ! -------------------- Article Info -------------------- ! -->*/}
                <div className="flex items-center justify-between">
                    {/*<!-- ! -------------------- Article Reaction Btn-------------------- ! -->*/}
                    <div className="flex items-center gap-x-2">
                        <button className="flex items-center h-5 px-1 bg-gray-500/10 text-gray-500 dark:bg-gray-500/10 dark:text-gray-940 dark:hover:bg-gray-940 dark:hover:text-gray-500 rounded xl:cursor-pointer transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="ml-1"
                                 viewBox="0 0 12 12">
                                <path stroke="#607496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.961"
                                      d="M5.996.828c1.179 0 2.096.053 2.813.191.715.138 1.196.353 1.532.65.669.589.94 1.654.94 3.802 0 1.384-.125 2.403-.46 3.066-.16.319-.363.543-.62.692-.258.151-.605.245-1.082.245-.615 0-1.077.138-1.439.383-.352.239-.565.552-.723.8l-.068.107c-.132.21-.218.347-.337.454-.106.095-.255.177-.555.177s-.45-.082-.556-.177c-.119-.107-.205-.243-.337-.454l-.068-.107c-.158-.248-.37-.561-.723-.8-.361-.245-.823-.383-1.439-.383-.475 0-.82-.096-1.079-.25-.256-.153-.461-.383-.623-.706-.336-.671-.46-1.692-.46-3.047 0-2.12.27-3.189.941-3.785.338-.3.82-.52 1.533-.66C3.903.884 4.82.828 5.996.828M6.477 4.67h1.921M3.595 6.592h4.803"></path>
                            </svg>
                            <span className="">0</span>
                        </button>
                        <button className="h-5 inline-flex items-center gap-x-1 rounded-sm px-1 bg-red-700/10 hover:bg-red-700 dark:hover:bg-red-650 hover:text-white text-red-450 dark:text-red-650 xl:cursor-pointer transition-all cursor-pointer">
                            <svg className="size-3" fill="none" viewBox="0 0 13 11">
                                <path stroke="currentColor" d="M3.95 1.229c.87 0 1.662.433 2.263.926.6-.493 1.393-.926 2.262-.926 1.875 0 3.394 1.394 3.394 3.113 0 3.466-3.945 5.485-5.246 6.056a1.02 1.02 0 0 1-.82 0C4.501 9.827.556 7.808.556 4.342c0-1.72 1.519-3.113 3.393-3.113Z"></path>
                            </svg>
                            <span id="course-like" className="font-YekanBakh-Medium text-xs">1</span>
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
                    {/*<!-- ! -------------------- Article Read Time -------------------- ! -->*/}
                    <div className="flex items-center text-gray-400 dark:text-gray-980">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" fill="none" className="ml-1"
                             viewBox="0 0 10 12">
                            <path fill="currentColor" fillRule="evenodd"
                                  d="M2.605 1.451a1 1 0 0 0-.275.555c.604-.116 1.355-.16 2.285-.16s1.681.044 2.285.16a1 1 0 0 0-.275-.555c-.25-.251-.798-.528-2.01-.528s-1.759.277-2.01.528M1.952.8c-.502.502-.567 1.114-.567 1.506C.3 2.838 0 3.925 0 6s.3 3.162 1.385 3.695c0 .392.065 1.003.567 1.506.499.499 1.337.799 2.663.799 1.327 0 2.165-.3 2.663-.799.503-.503.568-1.114.568-1.506C8.931 9.162 9.231 8.075 9.231 6s-.3-3.162-1.385-3.695c0-.392-.065-1.004-.568-1.506C6.78.3 5.942 0 4.615 0S2.451.3 1.952.799M6.9 9.994c-.604.116-1.355.16-2.285.16s-1.68-.044-2.285-.16a1 1 0 0 0 .275.555c.251.251.799.528 2.01.528 1.212 0 1.76-.277 2.01-.528a1 1 0 0 0 .275-.555m-5.4-1.32C1.157 8.364.923 7.733.923 6s.234-2.365.577-2.674c.174-.156.456-.304.972-.407.52-.104 1.212-.15 2.143-.15.932 0 1.623.046 2.144.15.515.103.798.251.972.407.343.31.577.941.577 2.674s-.234 2.365-.577 2.674c-.174.156-.457.304-.972.407-.52.104-1.212.15-2.144.15-.931 0-1.623-.046-2.143-.15-.516-.103-.798-.251-.972-.407" clipRule="evenodd"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.923" d="M4.615 4.154v1.384c0 .462 0 .462.462.462h1.846"></path>
                        </svg>
                        <span className="text-xs font-YekanBakh-Medium">
                            <span className="">زمان مطالعه:</span>
                            <span className=""> 9 </span>
                            <span className="">دقیقه</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleBox;