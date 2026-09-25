import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import mahdiProfile from "../../../assets/images/profile/mahdi.jpg";
import vahidProfile from "../../../assets/images/profile/vahid.jpg";
import {EffectCards, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom";

{/*<!-- ! -------------------- Styles -------------------- ! -->*/}
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-cards';

function AboutSection(props) {
    return (
        <section className="container grid grid-cols-24 my-24">
            {/*<!-- ! -------------------- Section Content -------------------- ! -->*/}
            <div className="col-span-24 xl:col-span-11 w-full xl:max-w-lg flex flex-col items-center justify-center">
                {/*<!-- ! -------------------- Title Wrapper -------------------- ! -->*/}
                <div className="flex items-center xl:self-start text-biscay-700 dark:text-white mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="34" fill="none"
                         className="text-dark-550 xl:flex hidden" viewBox="0 0 37 34">
                        <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                        <circle cx="30" cy="13" r="7" fill="currentColor" fillOpacity="0.4"></circle>
                        <circle cx="15" cy="4" r="4" fill="currentColor" fillOpacity="0.7"></circle>
                    </svg>
                    <h3 className="font-YekanBakh-Fat text-2xl sm:text-4xl xl:mr-4">در مورد راکت چه میشنویم؟</h3>
                </div>
                {/*<!-- ! -------------------- Text Wrapper -------------------- ! -->*/}
                <p className="text-gray-300 dark:text-gray-940 lg:text-lg font-YekanBakh-Medium mb-5 xl:pr-14 text-center xl:text-right">این‌ها،
                    بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد راکت دارند.</p>
                {/*<!-- ! -------------------- Next & Prev Btn -------------------- ! -->*/}
                <div className="w-full flex items-center justify-between xl:pr-14">
                    <div className="flex items-center gap-x-2">
                        <div className="custom-prev-card-btn">
                            <DynamicIcon name={'arrow'}
                                         className={'size-7 rotate-180 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'}/>
                        </div>
                        <div className="custom-next-card-btn">
                            <DynamicIcon name={'arrow'}
                                         className={'size-7 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'}/>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="25" fill="none"
                         className="dark:text-gray-930 text-gray-920 ml-16 transform sm:mt-0 mt-6 xl:rotate-0 rotate-215"
                         viewBox="0 0 81 25">
                        <path fill="currentColor"
                              d="M29.197 14.399a86 86 0 0 1-10.719-1.924c-1.686-.428-6.275-.878-7.112-2.413 3.113-.821 6.436-.395 9.545-1.624 1.344-.533 3.187-1.283 3.48-2.915.44-2.419-1.792-1.75-3.362-1.58-3.36.375-6.834.32-10.216.43C8.216 4.453 2.199 3.36.759 6.3s2.949 6.063 4.784 7.787c2.965 2.824 5.894 5.683 8.879 8.478.82.774 2.35 2.571 3.705 2.279 1.865-.42 1.255-2.173.61-3.396-.41-.794-6.388-8.22-6.405-8.215.58-.174 3.744 1.27 4.265 1.44a62 62 0 0 0 6.66 1.636c5.884 1.196 12.023 2.528 18.074 2.276 2.825-.124 4.933-1.143 7.46-2.183 2.39-.984 4.456.49 6.957 1.108a32.64 32.64 0 0 0 15.807-.198c3.506-.9 11.503-4.06 8.435-9.172-.799-1.33-2.336-2.242-2.277-.43.036 1.234.93 1.434.385 2.843a4.13 4.13 0 0 1-2.263 1.99c-4.482 2.253-10.856 2.784-15.721 2.244-1.847-.233-5.518-.943-7-2.16-1.318-1.075-.392-2.539-.622-4.452-.614-4.947-6.141-9.554-11.35-7.688-7.526 2.717 1.157 10.915 4.688 12.924-3.66 3.268-12.445 1.515-16.633.988M44.383 4.04c3.729.629 4.803 3 4.27 6.413-1.183-.748-10.046-7.14-4.27-6.413.64.112-.503-.064 0 0"></path>
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
                    <SwiperSlide
                        className="slide-effect-card !w-full xl:!max-w-165 !min-h-75 !flex !flex-col items-center justify-center">
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
    );
}

export default AboutSection;