import React, {useEffect, useState} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesFromServer} from "../../Redux/Store/Courses.jsx";
import CustomCheckBox from "../../Components/CustomCheckBox/CustomCheckBox.jsx";
import CustomRadioBox from "../../Components/CustomRadioBox/CustomRadioBox.jsx";
import {coursesCategory} from "../../data.jsx";
import { useLocation } from "react-router-dom";
import certificateImg from "../../assets/images/symbol/course-certificate.png"
import {Link} from "react-router-dom";
import CoursesBox from "../../Components/CoursesBox/CoursesBox.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import LearningPathsBox from "../../Components/LearningPathBox/LearningPathBox.jsx";
import {getLearningPathFromServer} from "../../Redux/Store/LearningPath.jsx";
import NoResults from "../../Components/NoResults/NoResults.jsx";

function ProductsPage(props) {
    const [categories, setCategories] = useState(coursesCategory);
    const [filteredType , setFilteredType] = useState("current");
    const [plan , setPlan ] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [activeIndexTab , setActiveIndexTab] = useState(0);
    const dispatch = useDispatch();
    const {courses , loading} = useSelector(state => state.courses);
    const learningPath = useSelector(state => state.learningPath);
    const courseFilterChangeHandler = () => setFilteredType(prev => prev === "current" ? "archive" : "current")
    const [finalCourses , setFinalCourses] = useState([])
    const location = useLocation();



    const changeSortHandler = (value) => {
        setPlan(null)
        setSortBy(value)
    }

    const changePlanHandler = (event) => {
        setSortBy(null)
        setPlan(event.target.value)
    }

    useEffect(() => {
        if (!courses.length) {
            dispatch(getCoursesFromServer("http://localhost:3000/courses"))
        }

        if (!learningPath.length) {
            dispatch(getLearningPathFromServer("http://localhost:3000/learningPath"))
        }
    } , [])

    useEffect(() => {
        let result = [...courses]

        if (plan === 'free') {
            result = result.filter(course => course.price === 0)
        }

        if (plan === 'cash') {
            result = result.filter(course => course.price !== 0)
        }

        switch (sortBy) {
            case "latest":
                result = result.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                )
                break

            case "oldest":
                result = result.sort(
                    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
                )
                break

            case "live":
                result = result.filter(course => course.status)
                break

            case "recorded":
                result = result.filter(course => !course.status)
                break
            case "hearing impaired":
                result = []
                break
        }
        setFinalCourses(result)

    }, [plan, sortBy, courses])

    useEffect(() => {
        location.state === 'free' ? setPlan('free') : setPlan('')
    }, [location.state]);

    return (
        <section className="container">
            {/*<!-- ! -------------------- Learning Path Wrapper -------------------- ! -->*/}
            <div className="w-full flex flex-col lg:flex-row items-center gap-x-10 mt-10 border-b border-gray-100 dark:border-gray-100/5 pb-10">
                <div className="w-full xl:w-3/6 flex flex-col items-center lg:items-start mb-10 lg:mb-0">
                    <h3 className="text-3xl font-YekanBakh-Fat text-biscay-700 dark:text-white mb-3">مسیر های یادگیری</h3>
                    <p className="text-xl font-YekanBakh-Medium text-gray-300 dark:text-gray-920 mb-3 text-center lg:text-right">در مسیرهای یادگیری شما با گذراندن چند دوره از دوره‌های آموزشی راکت و یادگیری موضوعات بصورت منظم به موضوع آن مسیر کاملا مسلط می‌شوید.</p>
                    <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-6">
                        <Link to="/" className="text-white hover:text-blue-700 text-xs bg-blue-700 hover:bg-white dark:hover:bg-transparent border border-blue-700 hover:shadow py-3 px-5 rounded-md transition-all">مشاهده همه مسیرها</Link>
                        {/*<!-- ! -------------------- Custom Swiper Btn -------------------- ! -->*/}
                        <div className="flex items-center gap-x-1.5">
                            <div className="custom-learnin-path-prev-btn">
                                <DynamicIcon name={'arrow'} className={'size-8 rotate-180 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'} />
                            </div>
                            <div className="custom-learnin-path-next-btn">
                                <DynamicIcon name={'arrow'} className={'size-8 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'} />
                            </div>
                        </div>
                    </div>
                </div>

                <Swiper
                    className="!w-full !overflow-hidden"
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.custom-learnin-path-next-btn',
                        prevEl: '.custom-learnin-path-prev-btn',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        720: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 1.5,
                        },
                        1280: {
                            slidesPerView: 2.5,
                        }
                    }}

                    onSlideChange={swiper=>setActiveIndexTab(swiper.activeIndex)}
                >
                    {
                        learningPath.map((item,index) => (
                            <SwiperSlide key={item.id}>
                                <LearningPathsBox {...item} isActive={activeIndexTab === index}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            {/*<!-- ! -------------------- Page Title -------------------- ! -->*/}
            <div className="mt-14 mb-8">
                <h2 className="text-biscay-700 dark:text-white font-YekanBakh-Fat text-3xl mb-2">دوره های آموزشی</h2>
                <p className="text-gray-300 dark:text-gray-920 text-xl font-YekanBakh-Medium">دوره ببین، تمرین کن، برنامه نویس شو</p>
            </div>
            {/*<!-- ! -------------------- Page Content -------------------- ! -->*/}
            <div className="grid grid-cols-12 gap-x-6 gap-y-20">
                {/*<!-- ! -------------------- Filters Wrapper -------------------- ! -->*/}
                <div className="col-span-12 xl:col-span-3 space-y-6">
                    {/*<!-- ! -------------------- Filters Wrapper -------------------- ! -->*/}
                    <div className="px-7 py-8 rounded-md border border-gray-210 dark:border-transparent bg-white dark:bg-dark-930">
                        <label htmlFor="course-status" className="flex items-center justify-between">
                            <input id="course-status" type="checkbox" className="peer size-0 opacity-0 hidden" onChange={courseFilterChangeHandler} />
                            <span className="text-biscay-700 dark:text-white peer-checked:text-biscay-700/60 dark:peer-checked:!text-white/60 font-YekanBakh-Bold">دوره های جاری</span>
                            <span className="inline-block relative w-14 h-7 bg-gray-300/30 dark:bg-gray-920 rounded-full cursor-pointer before:transition-all before:content-[''] before:absolute before:top-1 before:bottom-1 before:right-1 peer-checked:before:!right-8 before:my-auto before:bg-biscay-700 peer-checked:before:!bg-white before:size-5 before:rounded-full"></span>
                            <span className="text-biscay-700/60 dark:text-white/60 peer-checked:text-biscay-700 dark:peer-checked:!text-white font-YekanBakh-Bold">آرشیو شده</span>
                        </label>
                    </div>
                    {/*<!-- ! -------------------- Plans Wrapper -------------------- ! -->*/}
                    <div className="px-7 py-8 rounded-md border border-gray-210 dark:border-transparent bg-white dark:bg-dark-930">
                        {/*<!-- ! -------------------- Box Title -------------------- ! -->*/}
                        <span className="block pb-4 border-b border-gray-210 dark:border-gray-360/20 font-YekanBakh-Bold text-xl text-biscay-700 dark:text-white">نوع دوره</span>
                        {/*<!-- ! -------------------- Plans Items -------------------- ! -->*/}
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-x-3 cursor-pointer">
                                    <div className="relative size-6 ">
                                        <input  type="radio" name="plan" value="free" checked={plan === 'free'} onChange={changePlanHandler} className="appearance-none size-full bg-gray-100 dark:bg-gray-200 rounded-md  cursor-pointer checked:bg-gray-800 dark:checked:bg-gray-400 peer"/>
                                        <DynamicIcon name="check" className="!size-3.5 absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-all"/>
                                    </div>
                                    <span className="text-gray-800 dark:text-gray-920 font-YekanBakh-Bold text-lg"> رایگان</span>
                                </label>
                                <span className="text-gray-300">10</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-x-3 cursor-pointer">
                                    <div className="relative size-6 ">
                                        <input type="radio" name="plan" value="cash" checked={plan === 'cash'} onChange={changePlanHandler} className="appearance-none size-full bg-gray-100 dark:bg-gray-200 rounded-md  cursor-pointer checked:bg-gray-800 dark:checked:bg-gray-400 peer"/>
                                        <DynamicIcon name="check" className="!size-3.5 absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-all"/>
                                    </div>
                                    <span className="text-gray-800 dark:text-gray-920 font-YekanBakh-Bold text-lg"> فقط نقدی</span>
                                </label>
                                <span className="text-gray-300">10</span>
                            </div>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Sort Wrapper -------------------- ! -->*/}
                    <div className="px-7 py-8 rounded-md border border-gray-210 dark:border-transparent bg-white dark:bg-dark-930">
                        {/*<!-- ! -------------------- Box Title -------------------- ! -->*/}
                        <span className="block pb-4 border-b border-gray-210 dark:border-gray-360/20 font-YekanBakh-Bold text-xl text-biscay-700 dark:text-white">مرتب سازی براساس</span>
                        {/*<!-- ! -------------------- Sort Items -------------------- ! -->*/}
                        <div className="mt-6 space-y-4">
                            <CustomRadioBox radioName="sort" name="جدید‌ترین" value="latest" selected={sortBy} changePlan={changeSortHandler}/>
                            <CustomRadioBox radioName="sort" name="در حال برگزاری" value="live" selected={sortBy} changePlan={changeSortHandler}/>
                            <CustomRadioBox radioName="sort" name="تکمیل ضبط‌ شده‌ها" value="recorded" selected={sortBy} changePlan={changeSortHandler}/>
                            <CustomRadioBox radioName="sort" name="مخصوص ناشنوایان" value="hearing impaired" selected={sortBy} changePlan={changeSortHandler}/>
                            <CustomRadioBox radioName="sort" name="قدیمی‌ترین" value="oldest" selected={sortBy} changePlan={changeSortHandler}/>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Categories Wrapper -------------------- ! -->*/}
                    <div className="px-7 py-8 rounded-md border border-gray-210 dark:border-transparent bg-white dark:bg-dark-930">
                        {/*<!-- ! -------------------- Box Title -------------------- ! -->*/}
                        <span className="block pb-4 border-b border-gray-210 dark:border-gray-360/20 font-YekanBakh-Bold text-xl text-biscay-700 dark:text-white">دسته دوره‌</span>
                        {/*<!-- ! -------------------- Categories Items -------------------- ! -->*/}
                        <div className="space-y-4 mt-6">
                            {categories.map(category => (
                                <CustomCheckBox key={category.id} checkName="category" name={category.courseName} />
                            ))}
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Certificates Wrapper -------------------- ! -->*/}
                    <div className="flex flex-col items-center px-7 py-8 rounded-md border border-gray-210 dark:border-transparent bg-white dark:bg-dark-930">
                        <img src={certificateImg} alt="certificate image"/>
                        
                        <div className="relative mb-3">
                            <div className="absolute -top-7 -right-5">
                                <svg width="26" height="23" fill="none" viewBox="0 0 26 23">
                                    <circle r="6.765" fill="#3B82F6" transform="matrix(-1 0 0 1 18.265 16.235)"></circle>
                                    <circle r="4.735" fill="#FFA826" transform="matrix(-1 0 0 1 4.735 8.794)"></circle>
                                    <circle r="2.706" fill="#22C55E" fillOpacity="0.7" transform="matrix(-1 0 0 1 14.882 2.706)"></circle>
                                </svg>
                            </div>
                            <span className="text-biscay-700 dark:text-white font-YekanBakh-Fat text-2xl">گواهی پایان دوره</span>
                        </div>

                        <p className="text-gray-300 dark:text-gray-920 font-YekanBakh-Medium mb-3 text-center">شما می‌توانید در پایان هر دوره از راکت گواهی پایان دوره به همراه گواهی تاییدیه فنی دریافت کنید، برای مطالعه جزئیات بیشتر به صفحه زیر مراجعه کنید.</p>

                        <Link to="/" className="text-blue-700 hover:text-biscay-700 dark:hover:text-biscay-650 font-YekanBakh-Bold transition-all">گواهی پایان دوره چیست؟</Link>
                    </div>
                </div>
                {/*<!-- ! -------------------- Products Wrapper -------------------- ! -->*/}
                <div className="col-span-12 xl:col-span-9">

                    {finalCourses.length ? (<div className="grid grid-cols-12 gap-x-6 gap-y-20">
                        {finalCourses.map(course =>(
                            <CoursesBox key={course.id} {...course} gridClass={'sm:col-span-6 xl:col-span-4'}/>
                        ))}
                    </div>) : <NoResults />}

                </div>
            </div>
        </section>
    );
}

export default ProductsPage;