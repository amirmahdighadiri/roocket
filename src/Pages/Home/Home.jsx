import HeroSection from '../../Components/HeroSection/HeroSection.jsx'
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import useTitle from "../../Hooks/useTitle/useTitle.jsx";
import SectionTitle from "../../Components/Title/sectionTitle.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesFromServer} from "../../Redux/Store/Courses.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Navigation, Pagination} from 'swiper/modules';
import CoursesBox from "../../Components/CoursesBox/CoursesBox.jsx";
import LearningPathsBox from "../../Components/LearningPathBox/LearningPathBox.jsx";
import {getLearningPathFromServer} from "../../Redux/Store/LearningPath.jsx";
{/*<!-- ! -------------------- Styles -------------------- ! -->*/}
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-cards';
{/*<!-- ! -------------------- Images -------------------- ! -->*/}
import instagramPhone from "../../assets/images/instagram.png"
import vahidProfile from "../../assets/images/profile/vahid.jpg"
import mahdiProfile from "../../assets/images/profile/mahdi.jpg"
import ArticleBox from "../../Components/ArticleBox/ArticleBox.jsx";
import useToggle from "../../Hooks/useToggle/useToggle.jsx";
import PodcastBox from "../../Components/PodcastBox/PodcastBox.jsx";
import {getPodcastsFromServer} from "../../Redux/Store/Podcasts.jsx";


function Home(props) {
    useTitle('آمورش برنامه نویسی صفر تا صد - ژاکت')

    const dispatch = useDispatch();
    const {courses , loading} = useSelector(state => state.courses);
    const learningPath = useSelector(state => state.learningPath);
    const {podcasts , podcastLoading} = useSelector(state => state.podcasts);
    const [isShowBox , toggleShowBox] = useToggle(false)

    useEffect(() => {
        dispatch(getCoursesFromServer("http://localhost:3000/courses"))
        dispatch(getLearningPathFromServer("http://localhost:3000/learningPath"))
        dispatch(getPodcastsFromServer("http://localhost:3000/episodes"))
    },[])

    return (
        <main className="">
            <HeroSection />
            {/*<!-- ! -------------------- Last Course Section -------------------- ! -->*/}
            <section className="container mt-28 xl:mt-50">
                <SectionTitle title="آخرین دوره ها" linkTitle="مشاهده همه دوره‌ها" LinkAddress="/products-page"/>
                {/*<!-- ! -------------------- Course Wrapper -------------------- ! -->*/}
                <div className="grid grid-cols-12 gap-x-6 gap-y-20">
                    {courses.map(course => (
                        <CoursesBox key={course.id} {...course} gridClass={'sm:col-span-6 lg:col-span-4 xl:col-span-3'}/>
                    ))}
                </div>
            </section>
            {/*<!-- ! -------------------- Learning Path Section -------------------- ! -->*/}
            <section className="container mt-13 md:mt-32">
                <SectionTitle title="مسیرهای یادگیری" linkTitle="مشاهده همه مسیر‌های یادگیری" LinkAddress="/skills"/>
                {/*<!-- ! -------------------- Swiper Wrapper -------------------- ! -->*/}
                <div className="-mt-10 md:-mt-5">
                    <Swiper
                        className="!overflow-hidden"
                        modules={[Navigation, Pagination]}
                        pagination={{clickable: true, el: '.custom-pagination'}}
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
                                slidesPerView: 3,
                            }
                        }}
                    >
                        {
                            learningPath.map(item => (
                                <SwiperSlide key={item.id}>
                                    <LearningPathsBox {...item} />
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                    <div className="flex items-center justify-center gap-x-5 mt-10">
                        <div className="custom-learnin-path-prev-btn">
                            <DynamicIcon name={'arrow'} className={'size-8 rotate-180 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'} />
                        </div>
                        <div className="custom-pagination !w-auto "></div>
                        <div className="custom-learnin-path-next-btn">
                            <DynamicIcon name={'arrow'} className={'size-8 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'} />
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- ! -------------------- About Rocket Section -------------------- ! -->*/}
            <section className="container grid grid-cols-24 my-24">
                {/*<!-- ! -------------------- Section Content -------------------- ! -->*/}
                <div className="col-span-24 xl:col-span-11 w-full xl:max-w-lg flex flex-col items-center justify-center">
                    {/*<!-- ! -------------------- Title Wrapper -------------------- ! -->*/}
                    <div className="flex items-center xl:self-start text-biscay-700 dark:text-white mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="34" fill="none" className="text-dark-550 xl:flex hidden" viewBox="0 0 37 34">
                            <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                            <circle cx="30" cy="13" r="7" fill="currentColor" fillOpacity="0.4"></circle>
                            <circle cx="15" cy="4" r="4" fill="currentColor" fillOpacity="0.7"></circle>
                        </svg>
                        <h3 className="font-YekanBakh-Fat text-2xl sm:text-4xl xl:mr-4">در مورد راکت چه میشنویم؟</h3>
                    </div>
                    {/*<!-- ! -------------------- Text Wrapper -------------------- ! -->*/}
                    <p className="text-gray-300 dark:text-gray-940 lg:text-lg font-YekanBakh-Medium mb-5 xl:pr-14 text-center xl:text-right">این‌ها،
                        بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد راکت دارند.</p>
                    {/*<!-- ! -------------------- Next & Prve Btn -------------------- ! -->*/}
                    <div className="w-full flex items-center justify-between xl:pr-14">
                        <div className="flex items-center gap-x-2">
                            <div className="custom-prev-card-btn">
                                <DynamicIcon name={'arrow'} className={'size-7 rotate-180 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'} />
                            </div>
                            <div className="custom-next-card-btn">
                                <DynamicIcon name={'arrow'} className={'size-7 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'} />
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="25" fill="none" className="dark:text-gray-930 text-gray-920 ml-16 transform sm:mt-0 mt-6 xl:rotate-0 rotate-215" viewBox="0 0 81 25">
                            <path fill="currentColor" d="M29.197 14.399a86 86 0 0 1-10.719-1.924c-1.686-.428-6.275-.878-7.112-2.413 3.113-.821 6.436-.395 9.545-1.624 1.344-.533 3.187-1.283 3.48-2.915.44-2.419-1.792-1.75-3.362-1.58-3.36.375-6.834.32-10.216.43C8.216 4.453 2.199 3.36.759 6.3s2.949 6.063 4.784 7.787c2.965 2.824 5.894 5.683 8.879 8.478.82.774 2.35 2.571 3.705 2.279 1.865-.42 1.255-2.173.61-3.396-.41-.794-6.388-8.22-6.405-8.215.58-.174 3.744 1.27 4.265 1.44a62 62 0 0 0 6.66 1.636c5.884 1.196 12.023 2.528 18.074 2.276 2.825-.124 4.933-1.143 7.46-2.183 2.39-.984 4.456.49 6.957 1.108a32.64 32.64 0 0 0 15.807-.198c3.506-.9 11.503-4.06 8.435-9.172-.799-1.33-2.336-2.242-2.277-.43.036 1.234.93 1.434.385 2.843a4.13 4.13 0 0 1-2.263 1.99c-4.482 2.253-10.856 2.784-15.721 2.244-1.847-.233-5.518-.943-7-2.16-1.318-1.075-.392-2.539-.622-4.452-.614-4.947-6.141-9.554-11.35-7.688-7.526 2.717 1.157 10.915 4.688 12.924-3.66 3.268-12.445 1.515-16.633.988M44.383 4.04c3.729.629 4.803 3 4.27 6.413-1.183-.748-10.046-7.14-4.27-6.413.64.112-.503-.064 0 0"></path>
                        </svg>
                    </div>
                </div>
                {/*<!-- ! -------------------- Swiper Wrapper -------------------- ! -->*/}
                <div className="col-span-24 xl:col-span-13 mt-20 xl:mt-0 px-12 lg:px-0">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Navigation]}
                        navigation={{
                            nextEl: '.custom-next-card-btn',
                            prevEl: '.custom-prev-card-btn',
                        }}
                    >
                        <SwiperSlide className="slide-effect-card !w-full xl:!max-w-165 !min-h-75 !flex !flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                {/*<!-- ! -------------------- Text Content -------------------- ! -->*/}
                                <p className="leading-7 lg:text-xl/10 text-center text-gray-800 dark:text-gray-940 mb-7">راکت
                                    شاید تنها ترین مجموعه در ایران باشد، که آموزش های کاربردی، بروز و پروژه محور متناسب
                                    با نیاز بازار داخلی و جهانی ارائه میده! دمتون گرم</p>
                                {/*<!-- ! -------------------- Image Wrapper -------------------- ! -->*/}
                                <div className="flex items-center gap-x-3">
                                    {/*<!-- ! -------------------- Image Wrapper -------------------- ! -->*/}
                                    <div className="size-14 border-4 border-white rounded-full overflow-hidden">
                                        <img src={mahdiProfile} alt="" className=""/>
                                    </div>
                                    {/*<!-- ! -------------------- Name Wrapper -------------------- ! -->*/}
                                    <div className="flex flex-col gap-y-2">
                                        <span className="text-biscay-700 dark:text-white lg:text-xl font-YekanBakh-Bold">مهدی علیپور</span>
                                        <span className="text-gray-300 text-xs font-YekanBakh-Medium">کارآفرین، طراح رفتار و مربی بین المللی</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-effect-card !w-full xl:!max-w-165 !min-h-75">
                            <div className="flex flex-col items-center justify-center">
                                {/*<!-- ! -------------------- Text Content -------------------- ! -->*/}
                                <p className="leading-7 lg:text-xl/10 text-center text-gray-800 dark:text-gray-940 mb-7">به
                                    واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها راکت رو نداشتم ولی هر کدوم از
                                    بچه های تیم‌ فنی‌مون که یک دوره از مجموعه راکت تهیه کرده،‌ هم رضایت بالایی داشتند هم
                                    دوره ها براشون خیلی کاربردی بوده. تبریک میگم به حسام موسوی عزیز برای دوره های
                                    ارزشمندی که خلق کرده</p>
                                {/*<!-- ! -------------------- Image Wrapper -------------------- ! -->*/}
                                <div className="flex items-center gap-x-3">
                                    {/*<!-- ! -------------------- Image Wrapper -------------------- ! -->*/}
                                    <div className="size-14 border-4 border-white rounded-full overflow-hidden">
                                        <img src={vahidProfile} alt="" className=""/>
                                    </div>
                                    {/*<!-- ! -------------------- Name Wrapper -------------------- ! -->*/}
                                    <div className="flex flex-col gap-y-2">
                                        <span className="text-biscay-700 dark:text-white lg:text-xl font-YekanBakh-Bold">وحید بهرامیان</span>
                                        <span className="text-gray-300 text-xs font-YekanBakh-Medium">مدیر محصول ژاکت</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/*<!-- ! -------------------- Article Section -------------------- ! -->*/}
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
                            <Link to="/" className="inline-flex items-center gap-x-2 py-3 px-4 border text-white bg-blue-700 hover:bg-dark-500 hover:border-dark-500 dark:bg-blue-950 dark:hover:bg-transparent border-blue-700 dark:hover:border-white dark:hover:text-white font-YekanBakh-Bold rounded transition-all">
                                مشاهده همه مطالب
                                <DynamicIcon name={'arrow'} className={'size-4 text-inherit'} />
                            </Link>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Articles Wrapper -------------------- ! -->*/}
                    <div className="xl:absolute -top-1/2 left-9 xl:w-1/2 grid grid-cols-12 gap-6 mt-13 xl:mt-0">
                        <div className="col-span-12 sm:col-span-6 space-y-6 xl:mt-10">
                            <ArticleBox/>
                            <ArticleBox/>
                        </div>
                        <div className="col-span-12 sm:col-span-6 space-y-6">
                            <ArticleBox/>
                            <ArticleBox/>
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
                            <Link to="/" className="h-6 text-gray-450 hover:text-white hover:bg-gray-700 font-YekanBakh-Bold text-sm rounded border border-biscay-700/10 px-2 transition-all"> #توسعه وب </Link>
                        </li>
                        <li className="">
                            <Link to="/" className="h-6 text-gray-450 hover:text-white hover:bg-gray-700 font-YekanBakh-Bold text-sm rounded border border-biscay-700/10 px-2 transition-all"> #جاوااسکریپت </Link>
                        </li>
                    </ul>
                </div>
            </section>
            {/*<!-- ! -------------------- Instagram Section -------------------- ! -->*/}
            <section className="container mb-32 lg:mt-80 mt-30 sm:px-10">
                <div className="relative flex flex-col xl:flex-row items-center justify-end gap-x-16 2xl:gap-x-45 px-9 pt-24 pb-12 sm:px-16 xl:py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl">
                    <img src={instagramPhone} alt="instagram" className="absolute -top-27 xl:top-auto xl:bottom-0 xl:right-0 scale-75 xl:scale-100"/>
                    <h6 className="font-YekanBakh-Fat text-lg md:text-2xl text-white text-center xl:text-right mb-5 xl:mb-0">ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!</h6>
                    <Link to="/" className="flex items-center px-5 py-3 font-YekanBakh-Bold text-purple-600 bg-white rounded text-xs xl:text-base border border-white hover:bg-transparent hover:text-white transition-all">
                        <span className="">مشاهده پست های اینستاگرام</span>
                        <DynamicIcon name={'arrow'} className={'size-4 text-inherit'} />
                    </Link>
                </div>
            </section>
            {/*<!-- ! -------------------- Podcast Section -------------------- ! -->*/}
            <section className="container">
                <SectionTitle title="راکت کست" linkTitle="مشاهده همه پادکست های صوتی" LinkAddress="/podcasts"/>
                {/*<!-- ! -------------------- Swiper Wrapper -------------------- ! -->*/}
                <div className="">
                    <Swiper
                        className="!pb-10"
                        modules={[Navigation, Pagination]}
                        pagination={{clickable: true, el: '.custom-podcast-pagination'}}
                        navigation={{
                            nextEl: '.custom-podcast-next-btn',
                            prevEl: '.custom-podcast-prev-btn',
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            720: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            }
                        }}
                    >
                        {
                            [...podcasts].reverse().slice(0,5).map(podcast => (
                                <SwiperSlide key={podcast.episode_number}>
                                    <PodcastBox {...podcast} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="flex items-center justify-center gap-x-5 mt-5">
                        <div className="custom-podcast-prev-btn">
                            <DynamicIcon name={'arrow'} className={'size-8 rotate-180 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'} />
                        </div>
                        <div className="custom-podcast-pagination !w-auto inline-flex items-center gap-x-2"></div>
                        <div className="custom-podcast-next-btn">
                            <DynamicIcon name={'arrow'} className={'size-8 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'} />
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- ! -------------------- Description Section -------------------- ! -->*/}
            <section className="container mt-24 mb-20">
                <div className={`relative bg-white dark:bg-transparent border border-gray-5 dark:border-gray-5/20 px-11 py-11 rounded-lg`}>
                    {/*<!-- ! -------------------- Vector -------------------- ! -->*/}
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-7 h-8 text-customOrange-700 mr-2 mb-4" viewBox="0 0 33 42">
                            <path fill="currentColor" fillOpacity="0.2" d="M33 0H6v9c0 14.912 12.088 27 27 27z"></path>
                            <path fill="currentColor" d="M27 6H0v9c0 14.912 12.088 27 27 27z"></path>
                        </svg>
                    </div>
                    {/*<!-- ! -------------------- Title -------------------- ! -->*/}
                    <div className="mb-10">
                        <h1 className="text-lg sm:text-2xl lg:text-3xl pr-3 font-YekanBakh-Heavy text-biscay-700 dark:text-white">آموزش برنامه نویسی با راکت</h1>
                    </div>
                    {/*<!-- ! -------------------- Description Content -------------------- ! -->*/}
                    <div className={`${isShowBox ? 'h-auto overflow-visible' : 'h-122 overflow-hidden'}  text-gray-360 dark:text-white space-y-7 font-Mult-Font-Medium text-justify text-xl/10`}>
                        <p>برنامه نویسی یکی از حوزه‌های داغ در دنیای کنونی است و افراد بسیار زیادی تصمیم دارند تا فرایند آموزش برنامه نویسی را آغاز کنند. دلایل بسیار زیادی برای این موضوع وجود دارد که در ادامه به آن‌ها خواهیم پرداخت. اما این نکته را در ذهن داشته باشید که یادگیری و آموزش برنامه نویسی می‌تواند آینده شما را تضمین کرده و مسیر کاری مشخصی را برای شما ایجاد کند.</p>
                        <p>در این مطلب از وبسایت راکت قصد داریم در ارتباط با ضرورت آموزش برنامه نویسی صحبت کنیم، تاریخچه‌ای کلی از آن را مورد ارزیابی قراردهیم، مسیری برای آموزش برنامه نویسی از صفر را به شما معرفی کنیم و همچنین از آموزش‌های رایگان و آموزش‌های مربوط به وب بگوییم. </p>
                        <h2 className="font-YekanBakh-Heavy text-lg sm:text-2xl lg:text-3xl">مزایا یادگیری و آموزش برنامه نویسی</h2>
                        <p>دلایل زیادی برای یادگیری و آموزش برنامه نویسی وجود دارد. در اینجا چند مورد از مهم ترین آن‌ها آورده شده است:</p>
                        <p>آینده شغلی: برنامه نویسی یکی از پرتقاضاترین مهارت ها در بازار کار امروز است. طبق گزارشی از مجمع جهانی اقتصاد، مهارت های نرم افزاری و فناوری اطلاعات در صدر لیست مهارت هایی قرار دارند که بیشترین تقاضا را در آینده دارند. یادگیری برنامه نویسی می تواند به شما کمک کند تا در دنیای کار رقابتی پیشی بگیرید و شغلی با درآمد بالا و رضایت بخش پیدا کنید.</p>
                        <p>خلاقیت: برنامه نویسی یک فعالیت خلاقانه است. شما می توانید از آن برای ایجاد محصولات و خدمات جدید و نوآورانه استفاده کنید. یادگیری برنامه نویسی می تواند به شما کمک کند تا خلاقیت خود را بیان کنید و دنیا را به روشی جدید ببینید.</p>
                        <p>حل مسئله: برنامه نویسی یک مهارت حل مسئله است. شما باید بتوانید مشکلات را به قطعات کوچکتر تقسیم کنید و راه حل هایی برای آنها پیدا کنید. یادگیری برنامه نویسی می تواند به شما کمک کند تا مهارت های حل مسئله خود را بهبود ببخشید و در زندگی و کار خود موفق تر باشید.</p>
                        <p>تفکر منطقی: برنامه نویسی یک فعالیت منطقی است. شما باید بتوانید از منطق برای فکر کردن به مشکلات و یافتن راه حل های مناسب استفاده کنید. یادگیری برنامه نویسی می تواند به شما کمک کند تا تفکر منطقی خود را بهبود ببخشید و در زندگی و کار خود تصمیمات بهتری بگیرید.</p>
                        <p>یادگیری سایر مهارت ها: برنامه نویسی می تواند به شما کمک کند تا سایر مهارت ها را نیز یاد بگیرید. به عنوان مثال، یادگیری برنامه نویسی می تواند به شما کمک کند تا مهارت های ریاضی، علوم کامپیوتر و زبان انگلیسی خود را بهبود ببخشید.</p>
                        <h2 className="font-YekanBakh-Heavy text-lg sm:text-2xl lg:text-3xl">تاریخچه مختصری از برنامه نویسی</h2>
                        <p>تاریخچه برنامه نویسی به دهه 1940 میلادی باز می گردد. در آن زمان، رایانه ها بسیار بزرگ و گران بودند و فقط در دسترس دانشگاه‌ها و شرکت‌های بزرگ بودند. برنامه نویسی علمی بود که تنها در اختیار افراد بسیار محدودی بود و تنها آن‌ها می‌توانستند فرایند آموزش برنامه نویسی را طی کنند.</p>
                        <h2 className="font-YekanBakh-Heavy text-lg sm:text-2xl lg:text-3xl">اولین زبان برنامه نویسی سطح بالا</h2>
                        <p>اولین زبان برنامه نویسی، Plankalkül  نام داشت که توسط Konrad Zuse در سال های 1942 تا 1945 توسعه یافت. این زبان یک زبان برنامه نویسی سطح بالا بود که از مفهوم تابع استفاده می کرد. Plankalkül هرگز به صورت گسترده‌ای استفاده نشد، اما تأثیر زیادی بر توسعه زبان‌های برنامه نویسی بعدی داشت.</p>
                    </div>
                    {/*<!-- ! -------------------- Effect -------------------- ! -->*/}
                    <div className={`${isShowBox ? 'hidden' : 'block'} h-56 absolute bottom-0 right-0 left-0 bg-gradient-to-t from-white to-transparent dark:from-dark-890 dark:to-dark-890/0 rounded-b-lg`}></div>
                    {/*<!-- ! -------------------- Btn -------------------- ! -->*/}
                    <button onClick={toggleShowBox} className="absolute -bottom-6 right-1/2 translate-x-1/2 inline-flex items-center gap-x-2 border border-gray-210 dark:border-white dark:hover:border-blue-450 hover:bg-gray-300 dark:bg-dark-890 dark:hover:bg-dark-890 px-4 py-2 rounded-lg text-gray-300 hover:text-white dark:text-white dark:hover:text-blue-450 cursor-pointer transition-all">
                        <span className="font-YekanBakh-Bold text-xl">{isShowBox ? 'بستن مطلب' : 'مشاهده بیشتر'}</span>
                        {isShowBox ? (<DynamicIcon name={'eyeSlash'} className={'size-5.5'}/> ) : <DynamicIcon name={'eye'} className={'size-5.5'}/>}
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Home;