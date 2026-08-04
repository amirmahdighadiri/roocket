import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

import chatImage from "../../assets/images/chat_img.png"
import laravelBanner from "../../assets/images/banner/laravel.jpg"
import banner1 from "../../assets/images/banner/banner-1.gif"
import {getCoursesFromServer} from "../../Redux/Store/Courses.jsx";
import {getLearningPathFromServer} from "../../Redux/Store/LearningPath.jsx";

function ProductPage() {
    const [tab, setTab] = useState("description")
    const dispatch = useDispatch();
    const {courses , loading} = useSelector(state => state.courses);

    useEffect(() => {
        if (!courses.length) {
            dispatch(getCoursesFromServer("http://localhost:3000/courses"))
        }
    } , [])


    const changeTab = (event) => {
        event.preventDefault()
        setTab(event.target.id)
    }
    return (
        <section className="container">
            {/*<!-- ! -------------------- Courses Intro -------------------- ! -->*/}
            <div className="bg-white dark:bg-dark-930 py-3 px-3 xl:px-10 sm:pt-6 sm:pb-4 rounded-lg my-10">
                {/*<!-- ! -------------------- Courses Summary -------------------- ! -->*/}
                <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-15">
                    {/*<!-- ! -------------------- Courses Description -------------------- ! -->*/}
                    <div className="col-span-12 lg:col-span-8">
                        <h1 className="text-biscay-700 dark:text-white font-Mult-Font-Bold text-2xl lg:text-5xl mb-5 text-center lg:text-right">آموزش پروژه‌های ری اکت</h1>
                        <p className="text-gray-300 dark:text-gray-920 font-Mult-Font-Medium text-base lg:text-xl/8 mb-5 text-center lg:text-right">در این دوره پروژه محور لاراول، با ساخت ۱۰ پروژه واقعی مهارت‌های خود را در Laravel تقویت کنید! از احراز هویت چندگانه و مدیریت نقش‌ها تا چت زنده، سیستم پرداخت و بهینه‌سازی، همه چیز را در عمل یاد بگیرید.</p>
                        <div className="flex flex-col lg:flex-row gap-y-5 items-center justify-between">
                            <Link to="/" className="inline-flex items-center justify-center gap-x-2 bg-blue-700 border border-blue-700 text-white hover:text-blue-700 hover:bg-transparent rounded h-10 lg:h-14 px-9 transition-all">
                                <DynamicIcon name="educationIcon" className="size-5 text-inherit" />
                                <span className="font-YekanBakh-Bold">برای یادگیری وارد سایت شوید</span>
                            </Link>
                            <div className="inline-flex items-center gap-x-2 text-biscay-700 dark:text-white">
                                <span className="text-5xl font-YekanBakh-Heavy">4,900,000</span>
                                <DynamicIcon name="toman" className="size-6" />
                            </div>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Courses Image -------------------- ! -->*/}
                    <div className="col-span-12 lg:col-span-4 ">
                        <div className=" w-full h-full rounded overflow-hidden group">
                            <img src="/images/courses/8.jpg" alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all"/>
                        </div>
                    </div>
                </div>
                {/*<!-- ! -------------------- Courses Meta -------------------- ! -->*/}
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-900/10 pt-5 mt-10">
                    {/*<!-- ! -------------------- Courses Action Btn -------------------- ! -->*/}
                    <div className="flex items-center gap-x-5 lg:gap-x-7">
                        <button type="button" className="flex items-center gap-x-1 text-dark-550 dark:text-dark-200 hover:text-red-450 transition-all cursor-pointer">
                            <DynamicIcon name="heart" className="size-6 text-inherit" />
                            <span className="">71</span>
                        </button>
                        <button type="button" className="flex items-center gap-x-1 text-dark-550 dark:text-dark-200 hover:text-green-700 transition-all cursor-pointer">
                            <DynamicIcon name="document" className="size-6 text-inherit" />
                            <span className="">53</span>
                        </button>
                        <button type="button" className="flex items-center gap-x-1 text-dark-550 dark:text-dark-200 hover:text-blue-700 transition-all cursor-pointer">
                            <DynamicIcon name="bell" className="size-6 text-inherit" />
                            <span className="">23</span>
                        </button>
                    </div>
                    {/*<!-- ! -------------------- Courses Share Btn -------------------- ! -->*/}
                    <div className="flex items-center gap-x-3">
                        <span className="text-gray-300 dark:text-dark-200">اشتراک گذاری:</span>
                        <div className="flex items-center gap-x-2 lg:gap-x-3">
                            <Link to="/" className="text-dark-550 dark:text-dark-200 hover:text-blue-450 transition-all">
                                <DynamicIcon name="telegram" className="size-6 text-inherit" />
                            </Link>
                            <Link to="/" className="text-dark-550 dark:text-dark-200 hover:text-blue-450 transition-all">
                                <DynamicIcon name="twitter" className="size-6 text-inherit" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- ! -------------------- Courses Details -------------------- ! -->*/}
            <div className="grid grid-cols-12 gap-x-3">
                {/*<!-- ! -------------------- Courses Details Right -------------------- ! -->*/}
                <div className="col-span-9">
                    {/*<!-- ! -------------------- Courses Details Tabs -------------------- ! -->*/}
                    <div className="sticky top-4 z-10 bg-white dark:bg-dark-930 py-4 shadow-sm rounded">
                        <ul className="px-6 space-x-8">
                            <li className="inline-block">
                                <button id="description" type="button" onClick={changeTab} className={`relative ${tab === "description" ? 'text-blue-700 before:opacity-100' : 'text-gray-300 hover:text-gray-700 dark:hover:text-white before:opacity-0'} font-YekanBakh-Bold cursor-pointer pr-2 transition-all before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-1 before:rounded-full before:bg-blue-700`}>توضیحات</button>
                            </li>
                            <li className="inline-block">
                                <button id="guarantee " type="button" onClick={changeTab} className={`relative ${tab === "guarantee " ? 'text-blue-700 before:opacity-100' : 'text-gray-300 hover:text-gray-700 dark:hover:text-white before:opacity-0'} font-YekanBakh-Bold cursor-pointer pr-2 transition-all before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-1 before:rounded-full before:bg-blue-700`}>گارانتی بازگشت وجه</button>
                            </li>
                            <li className="inline-block">
                                <button id="curriculum " type="button" onClick={changeTab} className={`relative ${tab === "curriculum " ? 'text-blue-700 before:opacity-100' : 'text-gray-300 hover:text-gray-700 dark:hover:text-white before:opacity-0'} font-YekanBakh-Bold cursor-pointer pr-2 transition-all before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-1 before:rounded-full before:bg-blue-700`}>جلسات دوره</button>
                            </li>
                            <li className="inline-block">
                                <button id="reviews" type="button" onClick={changeTab} className={`relative ${tab === "reviews" ? 'text-blue-700 before:opacity-100' : 'text-gray-300 hover:text-gray-700 dark:hover:text-white before:opacity-0'} font-YekanBakh-Bold cursor-pointer pr-2 transition-all before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-1 before:rounded-full before:bg-blue-700`}>دیدگاه و پرسش</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*<!-- ! -------------------- Courses Details Left -------------------- ! -->*/}
                <div className="col-span-3">
                    {/*<!-- ! -------------------- Score Wrapper -------------------- ! -->*/}
                    <div className="flex justify-between bg-white dark:bg-dark-930 py-4 px-5 shadow-sm rounded overflow-hidden mb-4">
                        {/*<!-- ! -------------------- Course Status -------------------- ! -->*/}
                        <div className="w-full h-full relative">
                            <div className="inline-block absolute -top-7 -right-12">
                                <span className="flex-center size-28 rounded-full bg-blue-700/5">
                                    <span className="flex-center size-18 rounded-full bg-blue-700/5">
                                        <span className="flex-center size-10 rounded-full bg-blue-700/5">
                                            <span className="flex-center size-2 bg-blue-700 dark:bg-white rounded-full"></span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <span className="absolute top-4.5 right-5 block text-blue-700 dark:text-white font-YekanBakh-Bold text-sm">  در حال برگزاری</span>
                        </div>
                        {/*<!-- ! -------------------- Score Star Wrapper -------------------- ! -->*/}
                        <div className="flex flex-col items-center">
                            {/*<!-- ! -------------------- Score Star Icon -------------------- ! -->*/}
                            <div className="flex items-center gap-x-1">
                                <DynamicIcon name="star" className="size-5 text-yellow-300"/>
                                <DynamicIcon name="star" className="size-5 text-yellow-300"/>
                                <DynamicIcon name="star" className="size-5 text-yellow-300"/>
                                <DynamicIcon name="star" className="size-5 text-yellow-300"/>
                                <DynamicIcon name="star" className="size-5 text-yellow-300"/>
                            </div>
                            <span className="inline-block text-gray-300 dark:text-gray-200 font-YekanBakh-Heavy mt-3">4.8 از 5 رای</span>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Course Info Cards Wrapper -------------------- ! -->*/}
                    <div className="grid grid-cols-12 gap-3 mb-4">
                        <div className="col-span-4 flex flex-col items-center bg-white dark:bg-dark-930 shadow-sm rounded pt-3 pb-2">
                            <DynamicIcon name="clock" className="size-6 text-blue-700 dark:text-white mb-3"/>
                            <span className="text-gray-300 dark:text-white text-xs">مدت دوره</span>
                            <span className="text-chambray-700 dark:text-gray-200 font-YekanBakh-Bold">20:00:30</span>
                        </div>
                        <div className="col-span-4 flex flex-col items-center bg-white dark:bg-dark-930 shadow-sm rounded pt-3 pb-2">
                            <DynamicIcon name="layoutGrid" className="size-6 text-blue-700 dark:text-white mb-3"/>
                            <span className="text-gray-300 dark:text-white text-xs">تعداد جلسات:</span>
                            <span className="text-chambray-700 dark:text-gray-200 font-YekanBakh-Bold">73</span>
                        </div>
                        <div className="col-span-4 flex flex-col items-center bg-white dark:bg-dark-930 shadow-sm rounded pt-3 pb-2">
                            <DynamicIcon name="verified" className="size-6 text-blue-700 dark:text-white mb-3"/>
                            <span className="text-gray-300 dark:text-white text-xs">نوع دوره:</span>
                            <span className="text-chambray-700 dark:text-gray-200 font-YekanBakh-Bold">ویژه / نقدی</span>
                        </div>
                        <div className="col-span-4 flex flex-col items-center bg-white dark:bg-dark-930 shadow-sm rounded pt-3 pb-2">
                            <DynamicIcon name="users" className="size-8 text-blue-700 dark:text-white mb-3"/>
                            <span className="text-gray-300 dark:text-white text-xs">شرکت‌کنندگان:</span>
                            <span className="text-chambray-700 dark:text-gray-200 font-YekanBakh-Bold">127 نفر</span>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Certificate Wrapper -------------------- ! -->*/}
                    <div className="bg-white dark:bg-dark-930 py-4 px-5 shadow-sm rounded mb-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="size-12 flex-center rounded-full bg-blue-700/10">
                                <DynamicIcon name="educationIcon" className="size-6 text-blue-700" />
                            </div>
                            <div className="">
                                <span className="flex items-center gap-1 text-xs text-gray-300 dark:text-white mb-2">
                                    گواهی پایان دوره
                                    <DynamicIcon name="exclamationCircle" className="size-3.5" />
                                </span>
                                <span className="text-chambray-700 dark:text-gray-200 text-sm font-YekanBakh-Bold">
                                    وضعیت:
                                    <span className="inline-block text-xs bg-customOrange-700/60 py-1 px-2 rounded font-YekanBakh-Medium mr-1">ابتدا وارد سایت شوید</span>
                                </span>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Redirect Link -------------------- ! -->*/}
                        <Link to="/certifications" className="flex justify-center gap-x-2 text-blue-700 hover:text-gray-800 dark:text-white dark:hover:text-blue-450 border-t border-gray-300/10 transition-all pt-3">
                            <span className="">گواهی پایان دوره راکت چیست؟</span>
                            <DynamicIcon name="arrow" className="size-5 text-inherit" />
                        </Link>
                    </div>
                    {/*<!-- ! -------------------- Teacher Wrapper -------------------- ! -->*/}
                    <div className="flex flex-col items-center bg-white dark:bg-dark-930 py-4 px-5 shadow-sm rounded mb-4">
                        <div className="size-16 border-3 border-gray-200 rounded-full overflow-hidden mb-1">
                            <img src="/images/team-profile/hesam-mosavi.png" alt="hesam-mosavi" className=""/>
                        </div>
                        <h6 className="">
                            <Link to="/" className="flex items-center gap-1 text-chambray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-450 transition-all">
                                حسام موسوی
                                <DynamicIcon name="verified" className="size-4" />
                            </Link>
                        </h6>
                        <span className="text-gray-300 dark:text-gray-200 text-sm">مدرس دوره</span>
                        <p className="text-gray-360 dark:text-gray-920 text-center mt-2">بیشتر از ۱۵ سال هست که در حال برنامه‌نویسی و انجام پروژه های مختلف هستم و ۱۰ سالی هست که آموزش برنامه‌نویسی به علاقمندان حوزه برنامه نویسی میدیم در همه این مدت الان عاشق کدزنی و چالش‌های پروژه‌های مختلفم. به تدریس علاقه خاصی دارم و دوست دارم دانشی ک...</p>
                    </div>
                    {/*<!-- ! -------------------- Chat Wrapper -------------------- ! -->*/}
                    <div className="flex flex-col items-center border border-primary-gray-185/60 dark:border-primary-gray-185/5 py-4 px-12 shadow-sm rounded mb-4">
                        <img src={chatImage} alt="chat Image" className=""/>
                        <h6 className="text-chambray-700 dark:text-white font-YekanBakh-Heavy text-2xl mb-2">گفتگوی‌ برنامه نویسان</h6>
                        <p className="text-gray-360 dark:text-gray-920  mb-4 text-center">بخشی برای حل مشکلات برنامه‌نویسی و مباحث پیرامون آن</p>
                        <Link to="/" className="flex items-center justify-center gap-x-2 hovertext-blue-700 text-gray-800 dark:hover:text-white dark:text-blue-450 text-lg font-YekanBakh-Bold transition-all pt-3">
                            <span className=""> کلیک کن و وارد شو</span>
                            <DynamicIcon name="arrow" className="size-5 text-inherit" />
                        </Link>
                    </div>
                    {/*<!-- ! -------------------- Banner Wrapper -------------------- ! -->*/}
                    <div className="space-y-4 mb-4">
                        <div className="w-full border border-primary-gray-185 rounded-lg overflow-hidden">
                            <Link to="/" className="">
                                <img src={banner1} alt="" className="w-full h-full object-cover"/>
                            </Link>
                        </div>
                        <div className="w-full border border-primary-gray-185 rounded-lg overflow-hidden">
                            <Link to="/" className="">
                                <img src={laravelBanner} alt="" className="w-full h-full object-cover"/>
                            </Link>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- More Courses Wrapper -------------------- ! -->*/}
                    <div className="bg-white dark:bg-dark-930 py-7 px-5 shadow-sm rounded">
                        <div className="flex items-start gap-x-2">
                            <div className="text-biscay-700 dark:text-white">
                                <DynamicIcon name="starDocument" className='size-5 text-inherit'/>
                            </div>
                            <div className="">
                                <span className="text-biscay-700 dark:text-white text-lg font-YekanBakh-Bold">مطالب مرتبط</span>
                                <p className="text-xs text-dark-550 dark:text-gray-920 ">شما می‌توانید مطالب مرتبط به این مطلب را اینجا مشاهده کنید</p>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Courses Link -------------------- ! -->*/}
                        <div className="mt-4 space-y-3">
                            {
                                courses.map(course => (
                                    <div key={course.id} className="bg-white dark:bg-dark-890 rounded shadow-sm p-4">
                                        <Link to="/" className="relative text-biscay-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-450 font-Mult-Font-Bold transition-all">
                                            <span className="absolute -right-4 w-1 h-full bg-blue-700 dark:bg-blue-450"></span>
                                            {course.title}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductPage;