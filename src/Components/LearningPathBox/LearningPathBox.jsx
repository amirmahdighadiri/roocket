import {Link} from "react-router-dom";
import {SwiperSlide} from "swiper/react";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

function LearningPathsBox({title,description,coursesCount,boxClass,icon,isActive}) {
    return (

            <div className={`w-auto ${isActive ? 'shadow-cardshadow bg-white dark:bg-dark-body-50 border-dark-body-200' : 'hover:shadow-cardshadow dark:hover:bg-dark-body-50 hover:bg-white dark:hover:border-dark-body-200'} border border-primary-gray-185 dark:border-dark-500 rounded-lg transition-all duration-200`}>
                {/*<!-- ! -------------------- Learning Routs Content -------------------- ! -->*/}
                <div className="pb-4 pt-6 px-4 md:px-7">
                    {/*<!-- ! -------------------- Learning Routs Logos-------------------- ! -->*/}
                    <div className="flex items-center justify-between mb-8">
                        {/*<!-- ! -------------------- Learning Routs Icon -------------------- ! -->*/}
                        <div className={`size-14 flex-center rounded-md ${boxClass}`}>
                            <img src={icon} alt="course logo" className="size-9"/>
                        </div>
                        {/*<!-- ! -------------------- Learning Routs Course Icon -------------------- ! -->*/}
                        <div className="h-7 flex items-center gap-x-2 border border-gray-100 dark:border-primary-blue-300 rounded-sm">
                            <svg className="size-6 text-blue-700" fill="none" viewBox="0 0 41 41">
                                <circle cx="21.416" cy="21.552" r="13.828" fill="currentColor" opacity="0.15" transform="rotate(-36.651 21.416 21.552)"></circle>
                                <path fill="currentColor" fillRule="evenodd" d="M19.043 3.459C16.17 1.906 14.305.973 12.38.973s-3.79.933-6.664 2.486l-.052.028c-1.42.768-2.551 1.379-3.322 1.899-.39.263-.742.539-1.003.839-.264.303-.502.709-.502 1.212v7.388a.923.923 0 1 0 1.847 0V9.71c.517.325 1.157.685 1.906 1.095-.06.742-.059 1.702-.059 2.941v.154c0 4.617 1.38 5.54 7.817 5.54 6.034 0 7.881-.923 7.881-5.54 0-1.312 0-2.32-.066-3.092.928-.507 1.689-.938 2.255-1.32.39-.264.742-.54 1.003-.84.264-.303.502-.708.502-1.212 0-.503-.238-.909-.502-1.212-.261-.3-.613-.576-1.003-.84-.77-.52-1.901-1.13-3.322-1.898zm-.678 8.321c-2.498 1.334-4.216 2.121-5.986 2.121s-3.489-.788-5.988-2.122a94 94 0 0 0-.014 2.122c0 2.276.382 2.76.71 2.99.245.173.704.37 1.603.509.893.137 2.074.195 3.657.195 1.478 0 2.613-.058 3.494-.195.885-.137 1.389-.337 1.687-.535.413-.275.853-.82.853-2.964 0-.88-.001-1.57-.017-2.12M3.374 6.916c-.342.231-.539.4-.644.521.105.12.302.29.644.521.685.463 1.734 1.03 3.218 1.833 2.984 1.613 4.416 2.263 5.786 2.263s2.802-.65 5.786-2.263c1.484-.802 2.533-1.37 3.218-1.833.342-.23.539-.4.644-.52-.105-.121-.302-.29-.644-.522-.685-.462-1.734-1.03-3.218-1.832C15.181 3.47 13.75 2.82 12.38 2.82s-2.802.65-5.786 2.264c-1.484.802-2.533 1.37-3.218 1.832m18.714.606v-.003zm0-.167v-.002zm-19.419 0-.001-.002z" clipRule="evenodd"></path>
                            </svg>
                            <span className="inline-block font-YekanBakh-Medium text-xs text-primary-gray-380 dark:text-white ml-1.5">
                            شامل
                            <span className="">{coursesCount}</span>
                            دوره
                        </span>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Learning Routs Link -------------------- ! -->*/}
                    <a href="" className="inline-block font-Mult-Font-Bold text-2xl text-biscay-700 hover:text-blue-700 dark:text-white mb-2 transition-all duration-300">{title}</a>
                    {/*<!-- ! -------------------- Learning Routs Description -------------------- ! -->*/}
                    <p className="h-21 font-Mult-Font-Medium text-gray-300 dark:text-gray-920 leading-7 text-justify mb-2 line-clamp-3">{description}</p>
                </div>
                {/*<!-- ! -------------------- Learning Routs link -------------------- ! -->*/}
                <div className="flex items-center justify-end border-t border-gray-400/10 dark:border-dark-500 md:px-8 px-4 py-4">
                    <Link to="/" className="flex items-center gap-x-1 font-YekanBakh-Bold text-blue-700 hover:text-dark-700 dark:text-blue-950 dark:hover:text-gray-20 transition-all">
                        <span className="">مشاهده اطلاعات مسیر یادگیری</span>
                        <DynamicIcon name={'arrow'} className={'size-6 text-inherit'} />
                    </Link>
                </div>
            </div>

    );
}

export default LearningPathsBox;