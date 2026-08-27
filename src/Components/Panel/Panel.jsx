import React from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

function Panel(props) {
    return (
        <div className="container">
            {/*<!-- ! -------------------- User Activity Details -------------------- ! -->*/}
            <div className="grid grid-cols-12 gap-x-8 mb-12">
                {/*<!-- ! -------------------- User Activity Summery -------------------- ! -->*/}
                <div className="col-span-9 flex items-center justify-between bg-white dark:bg-dark-body-100 px-4 py-7 rounded-lg divide-x divide-gray-210 dark:divide-gray-100">
                    <div className="flex items-center gap-x-4 pl-20">
                        <div className="size-10 flex-center rounded-xl bg-blue-700">
                            <DynamicIcon name="calender" className="size-5" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70">باقیمانده اشتراک</span>
                            <span className="text-gray-800 dark:text-white text-xl font-YekanBakh-Bold">عضو ویژه نیستید</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 pl-20">
                        <div className="size-10 flex-center rounded-xl bg-green-600">
                            <DynamicIcon name="courses" className="size-5.5 text-white" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70">درحال یادگیری</span>
                            <span className="text-gray-800 dark:text-white text-xl font-YekanBakh-Bold">0 دوره</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 pl-20">
                        <div className="size-10 flex-center rounded-xl bg-blue-450">
                            <DynamicIcon name="question" className="size-5 text-white" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70">پرسش‌های من</span>
                            <span className="text-gray-800 dark:text-white text-xl font-YekanBakh-Bold">0 گفتگو</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 pl-20">
                        <div className="size-10 flex-center rounded-xl bg-customOrange-700">
                            <DynamicIcon name="star" className="size-5 text-white fill-none" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xs text-gary-70">امتیازات</span>
                            <span className="text-gray-800 dark:text-white text-xl font-YekanBakh-Bold">0 ستاره</span>
                        </div>
                    </div>
                </div>
                {/*<!-- ! -------------------- User Wallet Details -------------------- ! -->*/}
                <div className="col-span-2 bg-white dark:bg-dark-body-100 flex items-center gap-x-4 px-4 py-7 rounded-lg">
                    <div className="size-10 flex-center rounded-xl bg-blue-700">
                        <DynamicIcon name="wallet" className="size-5 text-white fill-none" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <span className="text-xs text-gary-70">موجودی کیف پول</span>
                        <span className="flex items-center gap-x-2 text-gray-800 dark:text-white text-xl font-YekanBakh-Bold">
                            0
                            <DynamicIcon name="toman" className="size-3 text-gray-800 dark:text-gary-70" />
                        </span>
                    </div>
                </div>
            </div>
            {/*<!-- ! -------------------- Short Link Box -------------------- ! -->*/}
            <div className="space-y-12">
                <div className="">
                    <h3 className="relative text-blue-700 dark:text-white text-2xl font-YekanBakh-Heavy pr-2 before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-2 before:rounded-full dark:before:bg-white before:bg-blue-700 mb-4">دوره های جاری</h3>
                    <div className="w-8/12 border border-primary-gray-185 dark:border-white/10 rounded-2xl px-8 py-6">
                        <p className="text-biscay-700 dark:text-white font-YekanBakh-Bold text-lg mb-2">برای تبدیل شدن به یک برنامه‌نویس اولین دوره آموزشی‌ات از راکت رو شروع کن</p>
                        <p className="mb-3 text-dark-550 dark:text-gary-70 font-YekanBakh-Medium">اطمینان از کیفیت از طرف ما، تلاش و پشتکار از طرف شما، آخ نتیجه اش دیدنیه !</p>
                        <Link to="" className="inline-flex items-center gap-x-2 text-lg text-blue-700 hover:text-biscay-700 dark:hover:text-white transition-all" >
                            <span className="">شروع یادگیری برنامه‌نویسی</span>
                            <DynamicIcon name="arrow" className="size-5 text-inherit"/>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <h3 className="relative text-blue-700 dark:text-white text-2xl font-YekanBakh-Heavy pr-2 before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-2 before:rounded-full dark:before:bg-white before:bg-blue-700 mb-4">پرسش و پاسخ</h3>
                    <div className="w-8/12  border border-primary-gray-185 dark:border-white/10 rounded-2xl px-8 py-6">
                        <p className="text-biscay-700 dark:text-white font-YekanBakh-Bold text-lg mb-2">با ارسال اولین پرسش 80 تجربه کاربری دریافت کن</p>
                        <p className="mb-3 text-dark-550 dark:text-gary-70 font-YekanBakh-Medium">سایر کاربران به پرسش‌های شما پاسخ میدن و می‌تونید جواب سوالات خودتون رو زودتر پیدا کنید.</p>
                        <Link to="" className="inline-flex items-center gap-x-2 text-lg text-blue-700 hover:text-biscay-700 dark:hover:text-white transition-all" >
                            <span className="">ارسال اولین پرسش</span>
                            <DynamicIcon name="arrow" className="size-5 text-inherit"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;