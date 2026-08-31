import React from 'react';
import {Link} from "react-router-dom";
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";

function Subscription(props) {
    return (
        <div className="">
            {/*<!-- ! -------------------- User Wallet Details -------------------- ! -->*/}
            <div className="grid grid-cols-12 gap-7">
                <div className="col-span-4 pt-7 bg-white dark:bg-dark-body-100 rounded-xl">
                    <div className="flex items-center gap-x-4 px-6 pb-6">
                            <div className="size-15 flex-center rounded-2xl bg-customOrange-700">
                                <DynamicIcon name="calender" className="size-6 text-white" />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <span className="text-xl text-gary-70">عضویت ویژه</span>
                                <span className="text-gray-800 dark:text-white text-2xl font-YekanBakh-Bold">عضو ویژه نیستید</span>
                            </div>
                        </div>
                    <Link to="/" className="flex items-center gap-x-2 text-blue-450 hover:text-biscay-700 dark:hover:text-white border-t border-biscay-650/10 transition-all py-3 px-6">
                        <span className="">تمدید اشتراک عضویت ویژه</span>
                        <DynamicIcon name="arrow" className="size-5 text-inherit" />
                    </Link>
                </div>
                <div className="col-span-4 pt-7 bg-white dark:bg-dark-body-100 rounded-xl">
                    <div className="flex items-center gap-x-4 px-6 pb-6">
                        <div className="size-15 flex-center rounded-2xl bg-blue-700">
                            <DynamicIcon name="calender" className="size-6 text-white" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xl text-gary-70">موجودی کیف پول</span>
                            <span className="flex items-center gap-x-2 text-gray-800 dark:text-white text-2xl font-YekanBakh-Bold">
                                0
                                <DynamicIcon name="toman" className="size-4 text-inherit" />
                            </span>
                        </div>
                    </div>
                    <Link to="/" className="flex items-center gap-x-2 text-blue-450 hover:text-biscay-700 dark:hover:text-white border-t border-biscay-650/10 transition-all py-3 px-6">
                        <span className="">افزایش موجودی</span>
                        <DynamicIcon name="arrow" className="size-5 text-inherit" />
                    </Link>
                </div>
                <div className="col-span-4 pt-7 bg-white dark:bg-dark-body-100 rounded-xl">
                    <div className="flex items-center gap-x-4 px-6 pb-6">
                        <div className="size-15 flex-center rounded-2xl bg-red-700">
                            <DynamicIcon name="star" className="size-6 text-white  fill-none" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-xl text-gary-70">تجربه کاربری</span>
                            <span className="text-gray-800 dark:text-white text-2xl font-YekanBakh-Bold">0</span>
                        </div>
                    </div>
                    <Link to="/" className="flex items-center gap-x-2 text-blue-450 hover:text-biscay-700 dark:hover:text-white border-t border-biscay-650/10 transition-all py-3 px-6">
                        <span className="">تبدیل امتیازات به جوایز</span>
                        <DynamicIcon name="arrow" className="size-5 text-inherit" />
                    </Link>
                </div>
            </div>
            {/*<!-- ! -------------------- User Wallet Details -------------------- ! -->*/}
            <div className="flex items-center justify-between mt-10">
                <h3 className="relative text-blue-700 dark:text-white text-2xl font-YekanBakh-Heavy pr-2 before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-2 before:rounded-full dark:before:bg-white before:bg-blue-700 mb-4">تاریخچه تراکنشها</h3>
                <button type="button" className="flex items-center h-10 px-3 border border-blue-450 text-blue-450 hover:text-white bg-transparent hover:bg-blue-450 rounded-md transition-all">
                    <span className="inline-block border-l border-inherit pl-5 ml-3">همه تراکنش ها</span>
                    <DynamicIcon name="arrowDown" className="size-3 text-inherit" />
                </button>
            </div>
            {/*<!-- ! -------------------- User Wallet Content -------------------- ! -->*/}
            <div className="p-8 rounded-xl bg-white dark:bg-dark-body-100 mb-24 mt-8">
                <p className="text-biscay-700 dark:text-white font-YekanBakh-Medium">تراکنشی یافت نشد.</p>
            </div>
        </div>
    );
}

export default Subscription;