import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {useLocation , Link} from 'react-router-dom'

function Offline() {

    const location = useLocation()

    return (
        <section className="fixed inset-0 z-50 overflow-y-auto bg-body dark:bg-dark-890">
            {/*<!-- ! -------------------- Background Effects -------------------- ! -->*/}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <span className="absolute -top-40 -right-40 size-[28rem] rounded-full bg-blue-700/10 blur-3xl"></span>
                <span className="absolute -bottom-40 -left-40 size-[28rem] rounded-full bg-customOrange-700/10 blur-3xl"></span>
                <span className="absolute top-1/3 left-1/4 size-3 rounded-full bg-blue-700/30 animate-float"></span>
                <span className="absolute top-1/4 right-1/4 size-2 rounded-full bg-customOrange-700/50 animate-float [animation-delay:1s]"></span>
                <span className="absolute bottom-1/4 right-1/3 size-4 rounded-full bg-red-450/20 animate-float [animation-delay:2s]"></span>
            </div>

            <div className="relative container flex flex-col items-center justify-center py-10">
                {/*<!-- ! -------------------- Logo -------------------- ! -->*/}
                <div className="">
                    <DynamicIcon name={'darkLogo'} className={'hidden dark:block w-44 h-10'}/>
                    <DynamicIcon name={'lightLogo'} className={'dark:hidden block w-44 h-10'}/>
                </div>
                {/*<!-- ! -------------------- Content Box -------------------- ! -->*/}
                <div className="container flex flex-col items-center justify-center py-10">
                    <div className="relative w-full max-w-lg bg-white dark:bg-dark-930 rounded-2xl px-6 sm:px-12 py-12 text-center overflow-hidden shadow-sm animate-fade-up motion-reduce:animate-none">
                        {/*<!-- ! -------------------- Circle Effect -------------------- ! -->*/}
                        <span className="absolute -top-16 -left-16 flex-center size-40 rounded-full bg-blue-700/5 animate-pulse">
                            <span className="flex-center size-28 rounded-full bg-blue-700/5">
                                <span className="flex-center size-16 rounded-full bg-blue-700/5"></span>
                            </span>
                        </span>
                        <span className="absolute -bottom-16 -right-16 flex-center size-40 rounded-full bg-customOrange-700/10 animate-pulse [animation-delay:1s]">
                            <span className="flex-center size-28 rounded-full bg-customOrange-700/10"></span>
                        </span>
                        {/*<!-- ! -------------------- Icon -------------------- ! -->*/}
                        <div className="relative flex-center mx-auto size-48 mb-6 animate-float">
                            <span className={`absolute inset-0 rounded-full border-2 border-blue-700/30 animate-signal`}></span>
                            <span className={`absolute inset-0 rounded-full border-2 border-blue-700/30 animate-signal [animation-delay:.8s]`}></span>
                            <span className={`absolute inset-0 rounded-full border-2 border-blue-700/30 animate-signal [animation-delay:1.6s]`}></span>
                            <div className={`relative flex-center size-28 rounded-full bg-gradient-to-br from-blue-700 to-blue-450 shadow-contactUsShadow`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-14 text-white animate-glitch" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 8.8a15 15 0 0 1 4.6-2.8" opacity="0.5"/>
                                        <path d="M22 8.8A15 15 0 0 0 12 5.5" opacity="0.5"/>
                                        <path d="M5 12.9a10 10 0 0 1 4-2.2" opacity="0.7"/>
                                        <path d="M19 12.9a10 10 0 0 0-3-2" opacity="0.7"/>
                                        <path d="M8.5 16.4a5 5 0 0 1 3.5-1.4"/>
                                        <path d="M15.5 16.4A5 5 0 0 0 14 15.4"/>
                                        <circle cx="12" cy="19.5" r="1" fill="currentColor"/>
                                        <path d="M3 3l18 18" strokeWidth="2.2"/>
                                    </svg>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Title & Description -------------------- ! -->*/}
                        <h1 className="relative text-biscay-700 dark:text-white font-YekanBakh-Heavy text-3xl mb-3 animate-fade-up [animation-delay:.15s] motion-reduce:animate-none">اتصال به اینترنت برقرار نیست!</h1>
                        <p className="relative text-gray-300 dark:text-gray-920 font-YekanBakh-Medium text-lg/8 mb-8 animate-fade-up [animation-delay:.25s] motion-reduce:animate-none">
                            به نظر می‌رسه اینترنت شما قطع شده. اتصال خودتون رو بررسی کنید و دوباره تلاش کنید.
                        </p>
                        {/*<!-- ! -------------------- Tips -------------------- ! -->*/}
                        <ul className="relative text-right space-y-3 bg-gray-300/10 dark:bg-dark-890 rounded-xl p-5 mb-8 font-Mult-Font-Medium text-sm text-dark-550 dark:text-gray-200">
                            <li className="flex items-center gap-x-2 animate-fade-up [animation-delay:.35s] motion-reduce:animate-none">
                                <span className="size-2 shrink-0 rounded-full bg-blue-700"></span>
                                <span>مودم یا وای‌فای خودتون رو چک کنید.</span>
                            </li>
                            <li className="flex items-center gap-x-2 animate-fade-up [animation-delay:.45s] motion-reduce:animate-none">
                                <span className="size-2 shrink-0 rounded-full bg-blue-700"></span>
                                <span>حالت پرواز (Airplane Mode) خاموش باشه.</span>
                            </li>
                            <li className="flex items-center gap-x-2 animate-fade-up [animation-delay:.55s] motion-reduce:animate-none">
                                <span className="size-2 shrink-0 rounded-full bg-blue-700"></span>
                                <span>اگه از VPN استفاده می‌کنید، یک بار خاموش و روشنش کنید.</span>
                            </li>
                        </ul>
                        {/*<!-- ! -------------------- Retry Button -------------------- ! -->*/}
                        <Link to={location.pathname} type="button" className="group relative w-full h-14 flex-center gap-x-2 bg-blue-700 border border-blue-700 hover:bg-transparent text-white hover:text-blue-700 dark:hover:text-blue-450 dark:hover:border-blue-450 rounded-lg font-YekanBakh-Bold text-lg cursor-pointer transition-all animate-fade-up [animation-delay:.65s] motion-reduce:animate-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-inherit transition-transform duration-500 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.02 9.35h4.99V4.36M2.98 19.64v-4.99h4.99" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9a8 8 0 0 0-14.3-2.2L3 9m1.5 6a8 8 0 0 0 14.3 2.2L21 15" />
                            </svg>
                            <span>تلاش دوباره</span>
                        </Link>
                    </div>

                    {/*<!-- ! -------------------- Copy Right Text -------------------- ! -->*/}
                    <span className="mt-4 text-gray-400 text-xs animate-fade-up [animation-delay:.75s] motion-reduce:animate-none">همه حقوق برای راکت محفوظ است</span>
                </div>

            </div>
        </section>
    );
}

export default Offline;
