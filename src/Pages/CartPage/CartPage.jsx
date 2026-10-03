import React , {useContext,useEffect} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {getCartsFromServer} from "../../Redux/Store/Carts.jsx";
import {AppContext} from "../../Context/AppContext.jsx";

function CartPage() {

    const dispatch = useDispatch();
    const {userInfo} = useContext(AppContext)
    const {carts , cartsLoading}=useSelector(state => state.carts);

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
                <Link to="/products-page" className="inline-flex items-center justify-center text-white bg-blue-700 hover:bg-gray-800 px-4 py-2 rounded-lg mt-6 transition-all">
                    <span className="">شروع یادگیری برنامه‌نویسی</span>
                </Link>
            </div>}
            <div className="grid grid-cols-12 gap-10 mt-10 mb-20">
                <div className="col-span-9">
                    <div className="bg-white dark:bg-dark-body-100 px-14 py-9 rounded-xl"></div>
                </div>
                <div className="col-span-3">
                    <div className="relative bg-white dark:bg-dark-body-100 p-6 rounded-xl overflow-hidden">
                        <span className="absolute -top-13 -left-14 flex-center size-28 rounded-full bg-blue-700/5">
                            <span className="flex-center size-18 rounded-full bg-blue-700/5">
                                <span className="flex-center size-10 rounded-full bg-blue-700/5"></span>
                            </span>
                        </span>
                        <h3 className="text-blue-700 dark:text-white text-3xl font-YekanBakh-Heavy border-b border-gray-300/10 pb-3 mb-6">اطلاعات پرداخت</h3>
                        <div className="pb-6 border-b border-gray-300/10 mb-8">
                            <span className="text-biscay-700 dark:text-white font-YekanBakh-Bold">کد تخفیف</span>
                            <div className="h-11 flex items-center gap-x-5 bg-biscay-700 dark:bg-dark-890 p-2 rounded mt-2">
                                <input type="text" className="flex-4 border-none outline-none text-dark-550 dark:text-white text-sm font-Mult-Font-Bold" placeholder="کد تخفیف را وارد کنید"/>
                                <button className="flex-1 px-2 h-full bg-blue-700 dark:bg-dark-930 text-white opacity-60 rounded-lg text-xs cursor-pointer">اعمال کد</button>
                            </div>
                        </div>
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

                        <div className="flex items-center justify-between font-YekanBakh-Bold mb-5">
                            <span className="text-biscay-700 dark:text-white">مبلغ قابل پرداخت</span>
                            <span className="flex items-center text-blue-700 dark:text-white text-3xl">
                                    <span className="">۳٬۱۴۵٬۰۰۰</span>
                                    <DynamicIcon name="toman" className="size-4 text-inherit"/>
                                </span>
                        </div>

                        <Link to="/" className="w-full h-16 flex-center gap-x-3 bg-blue-700 dark:bg-blue-450 border border-blue-700 dark:border-blue-450 hover:bg-transparent text-white hover:text-blue-700 dark:hover:text-blue-450 rounded-lg transition-all">
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