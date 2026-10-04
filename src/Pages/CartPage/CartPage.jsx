import React, {useContext, useEffect} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {getCartsFromServer} from "../../Redux/Store/Carts.jsx";
import {AppContext} from "../../Context/AppContext.jsx";

function CartPage() {

    const dispatch = useDispatch();
    const {userInfo} = useContext(AppContext)
    const {carts, cartsLoading} = useSelector(state => state.carts);

    useEffect(() => {
        if (!carts.length) {
            dispatch(getCartsFromServer(userInfo?.id))
        }
    }, [userInfo]);

    return (
        <section className="container">
            {!carts.length && <div className="flex flex-col items-center justify-center my-50">
                <span className="block text-gray-300 text-2xl font-YekanBakh-Bold mb-8">سبد خرید شما خالی است!</span>
                <DynamicIcon name="trash" className="size-30 opacity-60 mb-8"/>
                <Link to="/products-page"
                      className="inline-flex items-center justify-center text-white bg-blue-700 hover:bg-gray-800 px-4 py-2 rounded-lg mt-6 transition-all">
                    <span className="">شروع یادگیری برنامه‌نویسی</span>
                </Link>
            </div>}
            <div className="grid grid-cols-12 gap-10 mt-10 mb-20">
                <div className="col-span-8">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between md:gap-x-8 bg-white dark:bg-dark-body-100 px-5 py-6 sm:px-14 sm:py-9 rounded-xl">
                            {/*<!-- ! -------------------- Image & Title -------------------- ! -->*/}
                            <div className="flex items-center gap-x-4">
                                {/*<!-- ! -------------------- Image -------------------- ! -->*/}
                                <img src="/images/courses/4.jpg" alt="" className="w-42 h-24 object-cover rounded shrink-0"/>
                                {/*<!-- ! -------------------- Title & Teacher -------------------- ! -->*/}
                                <div>
                                    <h4 className="text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-450 font-YekanBakh-Bold text-2xl transition-all mb-3">
                                        <Link to="/">آموزش پروژه‌های لاراولی</Link>
                                    </h4>
                                    <div className="flex items-center gap-x-2 text-dark-550 dark:text-gray-200 text-sm font-YekanBakh-Bold">
                                        <DynamicIcon name="courses" className="size-4 text-blue-700 dark:text-gray-200" />
                                        <span>
                                            <span>مدرس دوره : </span>
                                            <span>حسام موسوی</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- ! -------------------- Price & Remove Btn -------------------- ! -->*/}
                            <div className="flex items-center justify-between gap-x-6 border-t border-gray-200 dark:border-white/10 pt-5 md:border-t-0 md:pt-0">
                                <div className="flex flex-col gap-y-2">
                                    {/*<!-- ! -------------------- Discount -------------------- ! -->*/}
                                    <div className="flex items-center gap-x-2">
                                        <span className="w-9.5 py-1 flex-center bg-red-450 text-white text-xs font-Mult-Font-Medium rounded-md">
                                            % 50
                                        </span>
                                        <span className="flex items-center gap-x-1 text-dark-550 dark:text-gray-400 text-sm line-through">
                                            ۴٬۹۰۰٬۰۰۰
                                            <DynamicIcon name="toman" className="size-3 text-inherit" />
                                        </span>
                                    </div>
                                    {/*<!-- ! -------------------- Final Price -------------------- ! -->*/}
                                    <div className="flex items-baseline gap-x-1.5 text-gray-800 dark:text-white font-YekanBakh-Bold">
                                        <span className="text-3xl">۲٬۴۵۰٬۰۰۰</span>
                                        <DynamicIcon name="toman" className="size-3 text-inherit" />
                                    </div>
                                    <span className="w-fit rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-YekanBakh-Bold px-3 py-1.5">
                                        ۲٬۴۵۰٬۰۰۰ تومان سود شما
                                    </span>
                                </div>
                                {/*<!-- ! -------------------- Remove Btn -------------------- ! -->*/}
                                <button type="button" aria-label="حذف از سبد خرید" title="حذف از سبد خرید" className="p-2.5 rounded-lg text-dark-550 dark:text-gray-200 hover:text-red-500 hover:bg-red-500/10 transition-all cursor-pointer">
                                    <DynamicIcon name="trash" className="size-5 text-inherit" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between md:gap-x-8 bg-white dark:bg-dark-body-100 px-5 py-6 sm:px-14 sm:py-9 rounded-xl">
                            {/*<!-- ! -------------------- Image & Title -------------------- ! -->*/}
                            <div className="flex items-center gap-x-4">
                                {/*<!-- ! -------------------- Image -------------------- ! -->*/}
                                <img src="/images/courses/4.jpg" alt="" className="w-42 h-24 object-cover rounded shrink-0"/>
                                {/*<!-- ! -------------------- Title & Teacher -------------------- ! -->*/}
                                <div>
                                    <h4 className="text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-450 font-YekanBakh-Bold text-2xl transition-all mb-3">
                                        <Link to="/">آموزش پروژه‌های لاراولی</Link>
                                    </h4>
                                    <div className="flex items-center gap-x-2 text-dark-550 dark:text-gray-200 text-sm font-YekanBakh-Bold">
                                        <DynamicIcon name="courses" className="size-4 text-blue-700 dark:text-gray-200" />
                                        <span>
                                            <span>مدرس دوره : </span>
                                            <span>حسام موسوی</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- ! -------------------- Price & Remove Btn -------------------- ! -->*/}
                            <div className="flex items-center justify-between gap-x-6 border-t border-gray-200 dark:border-white/10 pt-5 md:border-t-0 md:pt-0">
                                <div className="flex flex-col gap-y-2">
                                    {/*<!-- ! -------------------- Discount -------------------- ! -->*/}
                                    <div className="flex items-center gap-x-2">
                                        <span className="w-9.5 py-1 flex-center bg-red-450 text-white text-xs font-Mult-Font-Medium rounded-md">
                                            % 50
                                        </span>
                                        <span className="flex items-center gap-x-1 text-dark-550 dark:text-gray-400 text-sm line-through">
                                            ۴٬۹۰۰٬۰۰۰
                                            <DynamicIcon name="toman" className="size-3 text-inherit" />
                                        </span>
                                    </div>
                                    {/*<!-- ! -------------------- Final Price -------------------- ! -->*/}
                                    <div className="flex items-baseline gap-x-1.5 text-gray-800 dark:text-white font-YekanBakh-Bold">
                                        <span className="text-3xl">۲٬۴۵۰٬۰۰۰</span>
                                        <DynamicIcon name="toman" className="size-3 text-inherit" />
                                    </div>
                                    <span className="w-fit rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-YekanBakh-Bold px-3 py-1.5">
                                        ۲٬۴۵۰٬۰۰۰ تومان سود شما
                                    </span>
                                </div>
                                {/*<!-- ! -------------------- Remove Btn -------------------- ! -->*/}
                                <button type="button" aria-label="حذف از سبد خرید" title="حذف از سبد خرید" className="p-2.5 rounded-lg text-dark-550 dark:text-gray-200 hover:text-red-500 hover:bg-red-500/10 transition-all cursor-pointer">
                                    <DynamicIcon name="trash" className="size-5 text-inherit" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- ! -------------------- Payment Info -------------------- ! -->*/}
                <div className="col-span-4">
                    <div className="relative bg-white dark:bg-dark-body-100 p-6 rounded-xl overflow-hidden">
                        <span className="absolute -top-13 -left-14 flex-center size-28 rounded-full bg-blue-700/5">
                            <span className="flex-center size-18 rounded-full bg-blue-700/5">
                                <span className="flex-center size-10 rounded-full bg-blue-700/5"></span>
                            </span>
                        </span>
                        {/*<!-- ! -------------------- Payment Title -------------------- ! -->*/}
                        <h3 className="text-blue-700 dark:text-white text-3xl font-YekanBakh-Heavy border-b border-gray-300/10 pb-3 mb-6">اطلاعات
                            پرداخت</h3>
                        {/*<!-- ! -------------------- Payment Discount Input -------------------- ! -->*/}
                        <div className="pb-6 border-b border-gray-300/10 mb-8">
                            <span className="text-biscay-700 dark:text-white font-YekanBakh-Bold">کد تخفیف</span>
                            <div
                                className="h-11 flex items-center gap-x-5 bg-biscay-700/5 dark:bg-dark-890 p-2 rounded mt-2">
                                <input type="text"
                                       className="flex-4 border-none outline-none text-dark-550 dark:text-white text-sm font-Mult-Font-Bold"
                                       placeholder="کد تخفیف را وارد کنید"/>
                                <button
                                    className="flex-1 px-2 h-full bg-blue-700 dark:bg-dark-930 text-white opacity-60 rounded-lg text-xs cursor-pointer">اعمال
                                    کد
                                </button>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Payment Details -------------------- ! -->*/}
                        <div className="space-y-2 font-YekanBakh-Bold *:flex *:items-center *:justify-between pb-6 border-b border-gray-300/10 mb-8">
                            <div className="">
                                <span className="text-biscay-700 dark:text-white">جمع کل</span>
                                <span className="flex items-center text-gray-500 dark:text-gray-920 text-2xl">
                                    <span className="">۶٬۲۹۰٬۰۰۰</span>
                                    <DynamicIcon name="toman" className="size-4 text-inherit"/>
                                </span>
                            </div>
                            <div className="">
                                <span className="text-biscay-700 dark:text-white">موجودی کیف پول</span>
                                <span className="flex items-center text-red-500 dark:text-red-650 text-2xl">
                                    <span className="">0</span>
                                    <DynamicIcon name="toman" className="size-4 text-inherit"/>
                                </span>
                            </div>
                            <div className="">
                                <span className="text-biscay-700 dark:text-white">تخفیف</span>
                                <span className="flex items-center text-red-500 dark:text-red-650 text-2xl">
                                    <span className="">۳٬۱۴۵٬۰۰۰</span>
                                    <DynamicIcon name="toman" className="size-4 text-inherit"/>
                                </span>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Final Payment -------------------- ! -->*/}
                        <div className="flex items-center justify-between font-YekanBakh-Bold mb-5">
                            <span className="text-biscay-700 dark:text-white">مبلغ قابل پرداخت</span>
                            <span className="flex items-center text-blue-700 dark:text-white text-3xl">
                                    <span className="">۳٬۱۴۵٬۰۰۰</span>
                                    <DynamicIcon name="toman" className="size-4 text-inherit"/>
                                </span>
                        </div>
                        {/*<!-- ! -------------------- Payment Link -------------------- ! -->*/}
                        <Link to="/"
                              className="w-full h-16 flex-center gap-x-3 bg-blue-700 dark:bg-blue-450 border border-blue-700 dark:border-blue-450 hover:bg-transparent text-white hover:text-blue-700 dark:hover:text-blue-450 rounded-lg transition-all">
                            <span className="text-xl font-YekanBakh-Bold">تکمیل فرایند خرید</span>
                            <DynamicIcon name="arrowDown" className="size-3.5 text-inherit rotate-90"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartPage;