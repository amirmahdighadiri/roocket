import React, {memo} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

function CoursesBox({title, src, price, status, description, courseTime, coursePrimary, userLike , gridClass}) {

    const regex = /\B(?=(\d{3})+(?!\d))/g
    const newPrice = String(price).replace(regex , ',')

    return (
        <div className={`col-span-12 ${gridClass} w-full h-full relative bg-white dark:bg-dark-930 rounded-lg shadow-whiteShadow pt-38`}>
            {/*<!-- ! -------------------- Image Wrapper -------------------- ! -->*/}
            <div className="absolute -top-12 px-4 w-full">
                {/*<!-- ! -------------------- Image Link -------------------- ! -->*/}
                <a href="#" className="block h-45 overflow-hidden rounded-lg group">
                    {/*<!-- ! -------------------- Image Link -------------------- ! -->*/}
                    <img id="course-image" src={`/images/courses/${src}.jpg`} alt=""
                         className="w-full h-full xl:group-hover:scale-110 transition-all object-cover"/>
                </a>
            </div>
            {/*<!-- ! -------------------- Box Content Wrapper -------------------- ! -->*/}
            <div className="h-full flex flex-col justify-between">
                {/*<!-- ! -------------------- Box Content Header -------------------- ! -->*/}
                <div className="px-4">
                    {/*<!-- ! -------------------- Status Of Course -------------------- ! -->*/}
                    <span className="flex items-center gap-x-1 text-blue-700 font-YekanBakh-Bold text-xs mb-2">
                        <svg className="size-2" fill="none" viewBox="0 0 7 7">
                            <circle cx="3.578" cy="3.288" r="2.749" fill="currentColor"></circle>
                        </svg>
                        <span>{status ? "تکمیل ضبط" : "در حال برگزاری"}</span>
                    </span>
                    {/*<!-- ! -------------------- Title Of Course -------------------- ! -->*/}
                    <a href="" id="course-title"
                       className="course-shearch-name inline-block font-Mult-Font-Bold text-xl text-gray-800 hover:text-blue-700 dark:text-white dark:hover:text-blue-450 transition-all hover:text-primary-blue-200 dark:hover:text-primary-blue-100 mb-2">{title}</a>
                    {/*<!-- ! -------------------- Description Of Course -------------------- ! -->*/}
                    <p id="course-description"
                       className="h-24 text-sm/6 text-gray-360 dark:text-gray-940 font-Mult-Font-Medium text-justify line-clamp-4">{description}</p>
                </div>
                {/*<!-- ! -------------------- Box Content Body -------------------- ! -->*/}
                <div className="mt-2 px-4">
                    {/*<!-- ! -------------------- For Primary User -------------------- ! -->*/}
                    {coursePrimary && <div id="course-primary" className="flex items-center gap-x-1 mb-2">
                        <svg className="size-6" width="24" height="25" fill="none" viewBox="0 0 24 25">
                            <circle cx="12.358" cy="13.507" r="7.948" fill="#FFA826" opacity="0.15"
                                    transform="rotate(-36.651 12.358 13.507)"></circle>
                            <path fill="#FFA826" fillRule="evenodd"
                                  d="M6.723.209c-.265 0-.462.144-.575.246a2 2 0 0 0-.326.395c-.19.286-.375.659-.544 1.04-.34.765-.646 1.646-.806 2.127a.02.02 0 0 1-.018.013 22 22 0 0 0-2.224.18c-.397.057-.796.137-1.107.253-.154.058-.32.136-.459.25a.79.79 0 0 0-.306.607c0 .201.076.38.145.506.074.136.172.271.276.399.21.255.486.529.772.789A24 24 0 0 0 3.17 8.338a.02.02 0 0 1 .006.02c-.146.477-.398 1.35-.559 2.16-.08.403-.141.812-.15 1.157-.005.171.002.349.037.512a.95.95 0 0 0 .282.523.83.83 0 0 0 .612.192c.172-.01.344-.06.498-.118.31-.117.66-.313.995-.524.677-.427 1.395-.981 1.803-1.307a.02.02 0 0 1 .025 0c.408.326 1.126.88 1.809 1.308.338.211.691.407 1.006.524.157.058.33.107.504.117.17.01.407-.014.608-.18a.94.94 0 0 0 .304-.525 2 2 0 0 0 .043-.52 7 7 0 0 0-.158-1.16c-.169-.81-.437-1.683-.591-2.163a.02.02 0 0 1 .006-.02c.38-.288 1.044-.803 1.617-1.324.285-.26.56-.532.77-.787a2.6 2.6 0 0 0 .274-.398c.068-.127.144-.304.144-.505a.79.79 0 0 0-.305-.607 1.6 1.6 0 0 0-.458-.25c-.312-.115-.71-.195-1.106-.253a22 22 0 0 0-2.224-.18.02.02 0 0 1-.017-.013 25 25 0 0 0-.788-2.127A7 7 0 0 0 7.622.85a2 2 0 0 0-.324-.395c-.112-.103-.31-.247-.575-.247"
                                  clipRule="evenodd"></path>
                        </svg>
                        <span className="text-sm text-primary-gray-380 dark:text-white font-YekanBakh-Bold">دسترسی رایگان برای اعضای ویژه</span>
                    </div>}
                    {/*<!-- ! -------------------- Details Of Product -------------------- ! -->*/}
                    <div className="flex items-center justify-between">
                        {/*<!-- ! -------------------- Details Of Time And Number Of like -------------------- ! -->*/}
                        <div className="flex items-center gap-x-2">
                            {/*<!-- ! -------------------- Time Wapper -------------------- ! -->*/}
                            <div className="h-6 inline-flex items-center gap-x-1 px-2 rounded-sm bg-gray-100 dark:bg-gray-960  text-gray-500 dark:text-white">
                                <svg className="size-3.5" fill="none" viewBox="0 0 15 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="0.859"
                                          d="M1.3 7.1c0 1.375.073 2.45.261 3.294.186.839.48 1.422.898 1.841s1.003.712 1.841.898c.844.188 1.92.262 3.294.262s2.45-.074 3.294-.262c.838-.186 1.422-.479 1.841-.898s.712-1.002.898-1.841c.188-.844.262-1.92.262-3.294s-.074-2.45-.262-3.293c-.186-.84-.48-1.423-.898-1.842s-1.002-.711-1.841-.898C10.044.88 8.968.806 7.594.806S5.144.88 4.3 1.067c-.838.187-1.422.48-1.841.898-.419.42-.712 1.003-.898 1.842-.188.844-.262 1.919-.262 3.293"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="0.859" d="M7.594 3.738V6.54c0 .56 0 .56.56.56h2.802"></path>
                                </svg>
                                <span id="course-time" className="text-xs font-YekanBakh-Medium">{courseTime}</span>
                            </div>
                            {/*<!-- ! -------------------- Like Wrapper -------------------- ! -->*/}
                            <div className="h-6 inline-flex items-center gap-x-1 rounded-sm px-2 bg-red-700/10 hover:bg-red-700 dark:hover:bg-red-650 hover:text-white text-red-450 dark:text-red-650 xl:cursor-pointer transition-all cursor-pointer">
                                <svg className="size-3" fill="none" viewBox="0 0 13 11">
                                    <path stroke="currentColor" strokeWidth="0.762"
                                          d="M3.95 1.229c.87 0 1.662.433 2.263.926.6-.493 1.393-.926 2.262-.926 1.875 0 3.394 1.394 3.394 3.113 0 3.466-3.945 5.485-5.246 6.056a1.02 1.02 0 0 1-.82 0C4.501 9.827.556 7.808.556 4.342c0-1.72 1.519-3.113 3.393-3.113Z"></path>
                                </svg>
                                <span id="course-like" className="font-YekanBakh-Medium text-xs"></span>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Price Of Product Wrapper -------------------- ! -->*/}
                        {price !== 0 ? (<div id="course-price-wrapper" className="flex items-center gap-x-1 dark:text-white text-biscay-700 font-Mult-Font-Bold">
                            <span id="course-price" className="text-xl lg:text-3xl">{newPrice}</span>
                            <svg className="w-3.5 h-4" fill="none" viewBox="0 0 14 16">
                                <path fill="currentColor"
                                      d="M1.149 6.918q.443 0 .775-.14.343-.142.575-.383.232-.243.352-.565.12-.312.141-.664H1.985q-.514 0-.846-.111a1.2 1.2 0 0 1-.524-.323 1.2 1.2 0 0 1-.272-.503 3 3 0 0 1-.07-.675q0-.382.11-.726t.323-.604q.21-.262.523-.413.322-.162.736-.161.332 0 .634.11a1.4 1.4 0 0 1 .534.353q.232.232.363.615.141.372.141.906v.836h.967q.12 0 .161.091.05.081.05.252 0 .181-.05.272-.04.08-.16.08h-.988q-.02.495-.202.937a2.4 2.4 0 0 1-.483.776 2.3 2.3 0 0 1-.746.524 2.3 2.3 0 0 1-.977.201H.141l-.06-.685zM.897 3.513q0 .252.05.434.06.18.192.302.141.11.372.171.233.05.585.05h.906v-.755q0-.745-.292-1.068-.292-.322-.806-.322-.483 0-.745.322-.262.323-.262.866m5.372.957q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H4.607q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm1.663 0q.13 0 .17.091.051.081.051.252 0 .181-.05.272-.04.08-.171.08H6.269q-.13 0-.17-.08a.5.5 0 0 1-.051-.252q0-.18.05-.272.04-.09.171-.09zm1.662 0q.131 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.17.08H7.931q-.13 0-.171-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.17-.09zm1.663 0q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H9.595q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm.907 0q.393 0 .624-.211.242-.212.242-.584v-1.39h.655v1.39q0 .715-.403 1.108-.393.383-1.078.383h-.947q-.13 0-.171-.081a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zM13.786.995h-.806V.28h.806zm-1.28 0H11.7V.28h.806zm-6.864 11.97q0 .542-.171 1.017a2.42 2.42 0 0 1-1.28 1.41 2.4 2.4 0 0 1-1.027.212h-.595q-1.128 0-1.753-.696-.624-.695-.624-1.904v-1.763h.644v1.743q0 .433.101.786.111.353.333.604.232.263.574.403t.826.141h.443q.474 0 .826-.16.352-.152.585-.414a1.6 1.6 0 0 0 .352-.614q.12-.352.121-.736v-2.71h.645zm-2.428-2.902h-.846v-.736h.846zm5.031 3.103q-.261 0-.503-.071a1.16 1.16 0 0 1-.434-.262 1.3 1.3 0 0 1-.292-.473 2.2 2.2 0 0 1-.11-.746V6.92h.654v4.573q0 .423.182.705.19.273.614.272h.171q.222 0 .222.343 0 .353-.222.353zm.448-.696q.393 0 .595-.191a.68.68 0 0 0 .201-.514v-.383q0-.875.443-1.37.454-.493 1.25-.493.413 0 .725.13.313.132.514.374.21.24.312.574.1.332.1.735 0 .867-.453 1.35t-1.239.484q-.402 0-.775-.152a1.2 1.2 0 0 1-.585-.564q-.09.232-.221.373a1.2 1.2 0 0 1-.272.222q-.141.07-.303.1-.15.02-.292.02h-.16q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zm3.496-1.078q0-.523-.232-.846-.232-.332-.796-.332-1.047 0-1.047 1.219 0 .512.282.776.292.261.745.261.514 0 .776-.282.272-.282.272-.796"
                                      className="text-[#98a3b8ab] dark:text-white"></path>
                            </svg>
                        </div>) : (<span className="text-blue-700 font-YekanBakh-Bold text-xl">رایگان!</span>)}
                    </div>
                    {/*<!-- ! -------------------- Box Content linke -------------------- ! -->*/}
                    <div className="flex-center border-t border-gray-400/10 mt-2">
                        <a href="#"
                           className="course-shearch-name flex items-center gap-x-1 my-4 font-YekanBakh-Bold text-blue-700 hover:text-dark-700 dark:text-blue-950 dark:hover:text-gray-20 transition-all">
                            <span className="">مشاهده اطلاعات دوره</span>
                            <DynamicIcon name={'arrow'} className={'size-6 text-inherit'} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(CoursesBox);