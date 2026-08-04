import React from 'react';
import {Link} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

{/*<!-- ! -------------------- Images -------------------- ! -->*/}
import Enamad from "../../assets/images/symbol/enamad.png"
import Samandehi from "../../assets/images/symbol/samandehi.png"

function Footer(props) {
    return (
        <footer className="container py-10">
            {/*<!-- ! -------------------- Icon And Social Lins -------------------- ! -->*/}
            <div className={`relative flex flex-col sm:flex-row items-center justify-between`}>
                {/*<!-- ! -------------------- Footer Divider -------------------- ! -->*/}
                <span className="absolute top-5 w-full h-px bg-chambray-100 dark:bg-blue-980 -z-10"></span>
                {/*<!-- ! -------------------- Footer Logo -------------------- ! -->*/}
                <Link to="/" className={`block px-5 sm:pl-8 sm:pr-0 bg-body dark:bg-dark-890 mb-6 sm:mb-0`}>
                    <svg className="hidden dark:block w-52 h-11.5" xmlns="http://www.w3.org/2000/svg" id="big-logo-dark" fill="none" viewBox="0 0 203 46">
                        <path fill="#fff"
                              d="M56.743 30.607 50.61 24.58h-8.23v6.027h-3.59V9.568h15.336c3.479 0 6.434 3.45 6.434 7.506 0 3.298-2.02 6.33-4.788 7.24l-.3.114 6.247 6.217h-4.975zM42.38 20.524h11.595c1.609 0 3.03-1.63 3.03-3.488 0-1.895-1.384-3.45-3.03-3.45H42.38zM75.448 31.018c-7.406 0-11.67-3.791-11.67-10.425v-1.061c0-6.634 4.264-10.425 11.67-10.425s11.67 3.791 11.67 10.425v1.061c0 6.634-4.264 10.425-11.67 10.425m0-17.627c-4.19 0-8.08.758-8.08 6.255v.871c0 5.497 3.89 6.255 8.08 6.255 4.002 0 8.117-.758 8.117-6.255v-.871c0-5.535-4.115-6.255-8.117-6.255M101.743 31.018c-7.407 0-11.67-3.791-11.67-10.425v-1.061c0-6.634 4.263-10.425 11.67-10.425 7.406 0 11.67 3.791 11.67 10.425v1.061c0 6.634-4.227 10.425-11.67 10.425m0-17.627c-4.19 0-8.08.758-8.08 6.255v.871c0 5.497 3.89 6.255 8.08 6.255 4.002 0 8.117-.758 8.117-6.255v-.871c0-5.535-4.078-6.255-8.117-6.255M191.441 30.607V13.814h-7.93V9.568h19.451v4.246h-7.93v16.793zM128.003 30.944c-3.479 0-11.558-1.023-11.558-10.349v-1.099c0-9.325 8.079-10.349 11.558-10.349 5.349 0 7.369 1.1 7.743 1.365v3.525c-.861-.303-3.853-1.25-7.743-1.25-5.087 0-7.78 2.35-7.78 6.823v.91c0 4.473 2.693 6.823 7.78 6.823 3.89 0 6.882-.948 7.743-1.251v3.525c-.374.228-2.394 1.327-7.743 1.327M153.475 30.496l-10.511-9.855v9.855h-3.777V9.647h3.777v10.046l10.287-10.046h6.097l-11.109 10.425 11.745 10.424zM162.152 30.496V9.647h18.441v3.564H165.93v5.155h13.578v3.374H165.93v5.155h14.663v3.601zM200.232 5.174h-.973v2.274h-.224V5.174h-1.01v-.228h2.244v.228zM202.738 4.946H203v2.502h-.224V5.363a17 17 0 0 1-.823 1.592h-.225a11 11 0 0 1-.86-1.592v2.085h-.224V4.946h.261c.225.531.524 1.138.898 1.782.412-.644.711-1.251.935-1.782"></path>
                        <path fill="#FF8429" d="M14.405 45.013 9.168 37.28l5.237-5.307 5.2 5.307z"></path>
                        <path fill="#E81C4D"
                              d="M28.802 15.518V33.03l-7.182-5.535s.786-6.823.935-12.016c.075-2.578-2.281-4.739-8.154-7.658-5.835 2.957-8.192 5.118-8.117 7.696.112 5.155.935 12.016.935 12.016L0 33.031V15.518c0-3.109 1.31-5.914 3.853-8.302C5.648 5.51 8.117 3.918 11.895 2.06L14.438.81l2.544 1.25c3.74 1.858 6.247 3.45 8.042 5.156 2.506 2.388 3.778 5.193 3.778 8.301"></path>
                    </svg>
                    <svg className="dark:hidden block w-52 h-11.5" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="big-logo-light" width="220" x="0" y="0" version="1.1" viewBox="0 0 578 128">
                        <path fill="#f90" d="m46.3 124.7-14.5-21.3 14.5-14.5 14.6 14.5z"></path>
                        <path fill="#f33"
                              d="M86.5 43.7v48l-20-15.1s2.2-18.7 2.6-32.9c.2-7-6.4-13-22.6-21-16.3 8.1-22.8 14-22.6 21 .4 14.2 2.6 32.9 2.6 32.9l-20 15.1v-48c0-8.5 3.6-16.2 10.7-22.8 5-4.7 11.9-9 22.3-14.1l7-3.5 7 3.5c10.4 5.1 17.3 9.5 22.3 14.1 7.1 6.6 10.7 14.3 10.7 22.8"></path>
                        <path fill="#637789"
                              d="m163.7 86.1-17-16.5h-21.5v16.5h-12V26.4h43.7c10.3 0 18.9 9.9 18.9 21.6 0 9.2-5.5 17.7-13.2 20.5l17.9 17.6zm-7.3-29.6c3.9 0 7.4-4 7.4-8.5 0-4.6-3.4-8.5-7.4-8.5h-31.2v16.9h31.2zM216.1 87.4c-21.3 0-33.5-10.8-33.5-29.6v-2.9c0-18.8 12.2-29.7 33.5-29.7s33.5 10.8 33.5 29.7v2.9c0 18.8-12.2 29.6-33.5 29.6m0-48.4c-12.9 0-21.4 2.7-21.4 16.1v2.4c0 13.3 8.6 16.1 21.4 16.1 11.2 0 21.5-1.9 21.5-16.1V55c0-14.1-10.3-16-21.5-16M289.2 87.4c-21.3 0-33.5-10.8-33.5-29.6v-2.9c0-18.8 12.2-29.7 33.5-29.7s33.5 10.8 33.5 29.7v2.9c0 18.8-12.2 29.6-33.5 29.6m0-48.4c-12.9 0-21.4 2.7-21.4 16.1v2.4c0 13.3 8.6 16.1 21.4 16.1 11.2 0 21.5-1.9 21.5-16.1V55c.1-14.1-10.3-16-21.5-16M537.5 86.1v-46h-22.1V26.4h56.2v13.7h-22.1v46zM362.2 87.1c-10 0-33.2-2.9-33.2-29.4v-3c0-26.5 23.2-29.4 33.2-29.4 14.9 0 20.7 3 22.1 3.9l.5.3v11.7l-1.4-.5c-2.3-.8-10.4-3.4-21.2-3.4-13.7 0-20.6 5.9-20.6 17.6v2.5c0 11.7 6.9 17.6 20.6 17.6 10.7 0 18.9-2.6 21.2-3.4l1.4-.5v11.7l-.5.3c-1.4 1-7.2 4-22.1 4M432.6 85.8l-27.7-25.6v25.6h-12.6V26.6h12.6v26.2L432 26.6h18.4L420 56.2l32.3 29.6zM456 85.8V26.6h53.3v11.9h-40.7v12h37.7v11.4h-37.7v12h40.7v11.9z"></path>
                    </svg>
                </Link>
                {/*<!-- ! -------------------- Social Lins Wrapper -------------------- ! -->*/}
                <div className="flex items-center gap-x-2 sm:pr-8 bg-body dark:bg-dark-890">

                </div>
            </div>
            {/*<!-- ! -------------------- AboutUS Roocket Wrapper -------------------- ! -->*/}
            <div className="grid grid-cols-12 xl:gap-20 gap-7 mt-12">
                {/*<!-- ! -------------------- AboutUS Roocket -------------------- ! -->*/}
                <div className="col-span-12 lg:col-span-4 flex flex-col items-center sm:items-start">
                    {/*<FooterSectionTitle title="درباره راکت"/>*/}
                    <p className={`relative text-biscay-650 dark:text-gray-920 sm:pr-2 mb-2 leading-7 text-center sm:text-justify before:hidden sm:before:inline-block before:content-[""] before:absolute before:top-2 before:-right-2 before:size-1 before:bg-blue-700/30`}>راکت
                        یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران است که همیشه تلاش کرده تا بتواند
                        جدیدترین و بروزترین مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل
                        کردن برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.</p>
                    <Link to="/"
                          className="inline-flex items-center gap-x-1 text-blue-700 dark:text-blue-950 xl:hover:text-dark-700 xl:dark:hover:text-gray-210 text-xs transition-all">
                        مشاهده اطلاعات مسیریادگیری
                        <DynamicIcon name={'arrow'} className={'size-4 text-inherit'} />
                    </Link>
                </div>
                {/*<!-- ! -------------------- Roocket Services -------------------- ! -->*/}
                <div className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row items-center lg:items-start justify-between gap-y-7 font-Mult-Font-Medium">
                    <div className="">
                        {/*<FooterSectionTitle title="بخش های سایت"/>*/}
                        <ul className="flex flex-col items-center sm:items-start space-y-3">
                            <li className="">
                                <Link to="/" className={`relative pr-2 text-biscay-650 dark:text-gray-920 dark:hover:text-blue-450 hover:text-dark-700 transition-all before:hidden sm:before:inline-block before:content-[""] before:absolute before:top-2 before:-right-2 before:size-1 before:bg-blue-700/30`}>قوانین و مقررات</Link>
                            </li>
                            <li className="">
                                <Link to="/" className={`relative pr-2 text-biscay-650 dark:text-gray-920 dark:hover:text-blue-450 hover:text-dark-700 transition-all before:hidden sm:before:inline-block before:content-[""] before:absolute before:top-2 before:-right-2 before:size-1 before:bg-blue-700/30`}>مدرسان راکت</Link>
                            </li>
                            <li className="">
                                <Link to="/" className={`relative pr-2 text-biscay-650 dark:text-gray-920 dark:hover:text-blue-450 hover:text-dark-700 transition-all before:hidden sm:before:inline-block before:content-[""] before:absolute before:top-2 before:-right-2 before:size-1 before:bg-blue-700/30`}>درباره راکت</Link>
                            </li>
                            <li className="">
                                <Link to="/" className={`relative pr-2 text-biscay-650 dark:text-gray-920 dark:hover:text-blue-450 hover:text-dark-700 transition-all before:hidden sm:before:inline-block before:content-[""] before:absolute before:top-2 before:-right-2 before:size-1 before:bg-blue-700/30`}>ارتباط با ما</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        {/*<FooterSectionTitle title="محبوب‌ترین آموزش‌ها"/>*/}
                        <ul className="flex flex-col items-center sm:items-start space-y-3">
                            <li className="">
                                <Link to="/" className={`relative pr-2 text-biscay-650 dark:text-gray-920 dark:hover:text-blue-450 hover:text-dark-700 transition-all before:hidden sm:before:inline-block before:content-[""] before:absolute before:top-2 before:-right-2 before:size-1 before:bg-blue-700/30`}>آموزش جاوا اسکریپت</Link>
                            </li>
                            <li className="">
                                <Link to="/" className={`relative pr-2 text-biscay-650 dark:text-gray-920 dark:hover:text-blue-450 hover:text-dark-700 transition-all before:hidden sm:before:inline-block before:content-[""] before:absolute before:top-2 before:-right-2 before:size-1 before:bg-blue-700/30`}>آموزش لاراول</Link>
                            </li>
                            <li className="">
                                <Link to="/" className={`relative pr-2 text-biscay-650 dark:text-gray-920 dark:hover:text-blue-450 hover:text-dark-700 transition-all before:hidden sm:before:inline-block before:content-[""] before:absolute before:top-2 before:-right-2 before:size-1 before:bg-blue-700/30`}>آموزش وردپرس</Link>
                            </li>
                            <li className="">
                                <Link to="/" className={`relative pr-2 text-biscay-650 dark:text-gray-920 dark:hover:text-blue-450 hover:text-dark-700 transition-all before:hidden sm:before:inline-block before:content-[""] before:absolute before:top-2 before:-right-2 before:size-1 before:bg-blue-700/30`}>آموزش react</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*<!-- ! -------------------- Roocket Contact-US -------------------- ! -->*/}
                <div className="col-span-12 lg:col-span-4">
                    {/*<FooterSectionTitle title="ارتباط با ما"/>*/}
                    {/*<!-- ! -------------------- Roocket Contact-US Link -------------------- ! -->*/}
                    <div className="">
                        {/*<!-- ! -------------------- Email Link -------------------- ! -->*/}
                        <div className="flex items-center justify-between mb-7">
                            <div className="flex items-center gap-x-2">
                                <svg width="17" height="15" fill="none" className="dark:text-blue-950 text-blue-980" viewBox="0 0 17 15">
                                    <path fill="currentColor"
                                          d="M15.563 4.172c-.145-.63-.334-1.094-.557-1.445-.727.69-1.647 1.526-2.646 2.26C10.983 6 9.616 6.694 8.5 6.694S6.017 6 4.64 4.987c-1-.734-1.92-1.57-2.646-2.26-.223.351-.412.814-.557 1.445l-.02.09c.66.608 1.443 1.29 2.284 1.908 1.406 1.033 3.131 2.012 4.8 2.012 1.667 0 3.392-.98 4.798-2.013.84-.618 1.625-1.3 2.284-1.907z"></path>
                                    <path fill="currentColor" fillRule="evenodd"
                                          d="M0 7.5C0 13.676 1.5 15 8.5 15S17 13.676 17 7.5 15.5 0 8.5 0 0 1.324 0 7.5m8.5 6.25c-1.718 0-3.001-.083-3.974-.274-.956-.187-1.523-.462-1.9-.794-.375-.332-.687-.832-.9-1.676-.215-.858-.31-1.99-.31-3.506s.095-2.648.31-3.506c.213-.844.525-1.344.9-1.676.377-.332.944-.607 1.9-.794C5.5 1.333 6.782 1.25 8.5 1.25s3.001.083 3.974.274c.956.187 1.523.462 1.9.794.375.332.687.832.9 1.676.216.858.31 1.99.31 3.506s-.095 2.648-.31 3.506c-.213.844-.525 1.345-.9 1.676-.377.332-.944.607-1.9.794-.973.191-2.256.274-3.974.274"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="text-sm text-dark-550 dark:text-gray-920">ایمیل:</span>
                            </div>
                            <Link to="/" className="text-sm hover:text-dark-700 dark:hover:text-blue-450 dark:text-white text-biscay-650 transition-all font-Mult-Font-Medium">info@roocket.ir</Link>
                        </div>
                        {/*<!-- ! -------------------- Telegram Link -------------------- ! -->*/}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-2">
                                <svg width="17" height="17" fill="none" className="dark:text-blue-950 text-blue-980" viewBox="0 0 17 17">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5"
                                          d="M7.147 9.857 8.806 8.2M7.147 9.857c-1.216 1.216-6.33-.923-5.412-3.628S12.713.222 14.745 2.256c2.034 2.035-1.282 12.132-3.973 13.016s-4.84-4.199-3.625-5.415"></path>
                                </svg>
                                <span className="text-sm text-dark-550 dark:text-gray-920">آی دی تلگرام:</span>
                            </div>
                            <Link to="/" className="text-sm hover:text-dark-700 dark:hover:text-blue-450 dark:text-white text-biscay-650 transition-all font-Mult-Font-Medium">roocket_support@</Link>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Roocket Symbol -------------------- ! -->*/}
                    <div className="flex items-center justify-center sm:justify-start mt-9">
                        <img src={Samandehi} alt="Samandehi" className="w-22.5 h-25 object-cover"/>
                        <img src={Enamad} alt="Enamad" className="size-25"/>
                    </div>
                </div>
            </div>
            {/*<!-- ! -------------------- Footer Copy Right -------------------- ! -->*/}
            <div className={`relative mt-2 before:hidden md:before:block before:content-[""] before:absolute before:inset-0 before:w-full before:h-px dark:before:bg-blue-980 before:bg-chambray-100 before:my-auto before:-z-10`}>
                <p className="inline-block bg-body dark:bg-dark-890 md:pl-3 text-xs text-chambray-400 dark:text-gray-970 text-center md:text-right">کليه حقوق محصولات و محتوای اين سایت متعلق به راکت می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.</p>
            </div>
        </footer>
    );
}

export default Footer;