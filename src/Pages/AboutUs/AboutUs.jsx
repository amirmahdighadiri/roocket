import {Link} from "react-router-dom";

{/*<!-- ! -------------------- Images -------------------- ! -->*/}
import AboutUsIntro from '../../assets/images/about-us-image/aboutUsIntro.png'
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

function AboutUs(props) {
    return (
        <section className="container">
            {/*<!-- ! -------------------- AboutUS Intro -------------------- ! -->*/}
            <section className="grid grid-cols-12 pt-24 lg:gap-10 gap-y-15 px-10 mb-24">
                {/*<!-- ! -------------------- Intro Content -------------------- ! -->*/}
                <div className="col-span-12 lg:col-span-6 order-2">
                    <h1 className={`relative dark:text-white text-gray-800 font-YekanBakh-Fat text-3xl sm:text-5xl xl:text-6xl mb-8 text-center lg:text-right`}>
                        <span className={`relative before:content-[""] before:absolute before:-bottom-2 before:right-0 before:left-0 before:w-full before:h-2 before:rounded-full before:bg-customOrange-700/20 dark:before:bg-customOrange-700/50`}> داستان </span>
                        شکل‌گیری راکت
                    </h1>
                    <p className="dark:text-gray-920 text-gray-360 leading-7 sm:leading-8 text-base sm:text-2xl text-center lg:text-justify">داستان
                        راکت در اردیبهشت ۱۳۹۴ شکل گرفت است و تا به امروز که در اینجا هستیم تمام تلاش خود را کرده‌ایم تا
                        بتوانیم به کاربران ایرانی و علاقمند کمک کنیم تا بتوانند زبان‌ها و ابزارهای به‌روز جهانی را
                        فرابگیرند و خود را آماده شروع کسب‌ و کار یا استخدام در شرکت‌های مختلف کنند.</p>
                </div>
                {/*<!-- ! -------------------- Intro Image -------------------- ! -->*/}
                <div className="col-span-12 lg:col-span-6 order-1">
                    <img src={AboutUsIntro} alt="about-us intro" className="w-full h-full object-cover"/>
                </div>
            </section>
            {/*<!-- ! -------------------- Roocket Target Content -------------------- ! -->*/}
            <section className="text-center flex flex-col items-center">
                <h4 className="relative mb-12 text-gray-800 dark:text-white font-YekanBakh-Bold text-2xl lg:text-5xl">
                    هدف ما در راکت
                    <span
                        className={`absolute -bottom-7 right-0 left-0 mx-auto size-4 bg-customOrange-700 rounded-full border-4 border-white`}></span>
                    <span
                        className="absolute right-0 -bottom-5 left-0 w-32 h-px mx-auto bg-customOrange-700/40 -z-10"></span>
                </h4>
                <div className="text-gray-360 dark:text-gray-920 text-base sm:text-xl w-4/5 sm:leading-8 leading-7">
                    <p className="mb-10">ما به عنوان یک وبسایت آموزشی سعی داریم به همه شما عزیزان فارسی زبان کمک کنیم که
                        در این دنیای بی کران از زبان ها و فریمورک‌ها و ابزارهای مختلف برنامه نویسی مسیر فعالیت خود را
                        پیدا کنید و همچنین سعی داریم در این مسیر همراه شما باشیم تا این قابلیت را بدست بیاورید که از
                        دانش کسب شد در کسب و کار خود یا برای استخدام در شرکتی که قصد فعالیت در آن را دارید استفاده کنید
                        . هدف ما پیروزی شماست .</p>
                    <p className="">از این رو تصمیم ما ایجاد کردن یک فضای دوستانه است، که هم برای آموزش و هم برای ایجاد
                        ارتباط و حل مشکل برنامه نویسان مختلف در فضای وب فارسی مورد استفاده قرار بگیرد تا در کنار یادگیری
                        ابزارهای جدید، به عنوان یک برنامه نویس بتوانید مشکلاتتان را در راکت حل کنید یا حتی قادر باشید
                        شغل آینده خود را پیدا کنید.</p>
                </div>
            </section>
            {/*<!-- ! -------------------- Roocket Part Of The Activityt -------------------- ! -->*/}
            <section className="mt-28">
                <h6 className="text-gray-300 dark:text-gray-200 text-base sm:text-2xl mb-2 sm:mb-8 text-center">از
                    فعالیت های راکت برایتان بگوییم</h6>
                <h3 className="text-gray-800 dark:text-white font-YekanBakh-Heavy text-3xl sm:text-5xl mt-1 text-center">
                    بخشی از
                    <span className={`relative before:content-[""] before:absolute before:bottom-4 before:h-4 sm:before:h-5 before:w-full before:bg-customOrange-700/40 before:-z-10`}>فعالیت های </span>
                    راکت
                </h3>
                {/*<!-- ! -------------------- About Roocket -------------------- ! -->*/}
                <div className="space-y-40 mt-28">

                </div>
            </section>
            {/*<!-- ! -------------------- Roocket Team Wrapper -------------------- ! -->*/}
            <section className="mt-36">
                <h6 className="text-gray-300 dark:text-gray-200 text-base sm:text-2xl mb-2 sm:mb-8 text-center">در زیر لیستی بخشی از افرادی را مشاهده می‌کنید که به شکل مستقیم در راکت فعالیت دارند و به رشد آن کمک می‌کنند.</h6>
                <h3 className="text-gray-800 dark:text-white font-YekanBakh-Heavy text-3xl sm:text-5xl mt-1 text-center">
                    تیم
                    <span className={`relative before:content-[""] before:absolute before:bottom-4 before:h-4 sm:before:h-5 before:w-full before:bg-customOrange-700/40 before:-z-10`}> راکت </span>
                </h3>
                <div className="grid grid-cols-12 gap-10 mt-16">

                    <div className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 flex flex-col items-center justify-center bg-blue-50 dark:bg-dark-930 rounded-xl hover:shadow-sm transition-all py-16 px-8 cursor-pointer">
                        <h4 className="font-YekanBakh-Bold text-blue-700 dark:text-white text-xl">نفر بعدی شما باشید</h4>
                        <h6 className="text-dark-550 dark:text-gray-200 leading-6 text-center">اگر در شاخه‌ای متخصص هستید به کمک شما نیاز داریم</h6>
                        <Link to="/" className="flex items-center text-blue-700 hover:text-gray-900 dark:text-blue-450 text-sm dark:hover:text-white mt-2">
                            درخواست همکاری
                            <DynamicIcon name={'arrow'} className={'size-5 text-inherit'} />
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default AboutUs;