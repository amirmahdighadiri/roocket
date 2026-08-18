import React, {useState, useEffect, useContext} from 'react';
import {Link , useNavigate} from "react-router-dom"
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import Notification from "../../Components/Notification/Notification.jsx";

function Verify(props) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-full lg:w-1/4 flex flex-col items-center">
                {/*<!-- ! -------------------- Logo -------------------- ! -->*/}
                <Link to="/" className="block mb-9">
                    <DynamicIcon name={'darkLogo'} className={'hidden dark:block w-52 h-11.5'}/>
                    <DynamicIcon name={'lightLogo'} className={'dark:hidden block w-52 h-11.5'}/>
                </Link>
                {/*<!-- ! -------------------- Change Number OR Email -------------------- ! -->*/}
                <Link to="/auth" className="self-start flex items-center gap-x-2 text-gray-600 dark:text-gray-200 text-sm mb-4">
                    <DynamicIcon name="arrowRight" className="size-4 text-inherit" />
                    <span className="">ویرایش شماره همراه</span>
                </Link>
                {/*<!-- ! -------------------- Auth Box Wrapper -------------------- ! -->*/}
                <div className="bg-white dark:bg-dark-930 rounded-2xl py-9 px-12.5 dark:text-white">
                    {/*<!-- ! -------------------- Header Box -------------------- ! -->*/}
                    <div className="pb-5 border-b border-gray-300/30 font-YekanBakh-Bold">
                        <h2 className="mb-2 text-2xl text-dark-550 dark:text-white">کد تایید ارسال شده رو وارد کنید!</h2>
                        <span className="text-sm text-gray-300 dark:text-gray-210">رمز یک‌بار مصرف به 09199891684 ارسال شد.</span>
                    </div>
                    {/*<!-- ! -------------------- Form -------------------- ! -->*/}
                    <form className="mt-5">
                        <div className="flex items-center gap-x-4">
                            <input type="text" inputMode="numeric" className="w-full bg-gray-300/10 dark:bg-dark-890 rounded-lg px-4 py-2 outline-0 border border-transparent focus:border-blue-700 font-Mult-Font-Medium text-center text-lg" maxLength={1} required />
                            <input type="text" inputMode="numeric" className="w-full bg-gray-300/10 dark:bg-dark-890 rounded-lg px-4 py-2 outline-0 border border-transparent focus:border-blue-700 font-Mult-Font-Medium text-center text-lg" maxLength={1} required />
                            <input type="text" inputMode="numeric" className="w-full bg-gray-300/10 dark:bg-dark-890 rounded-lg px-4 py-2 outline-0 border border-transparent focus:border-blue-700 font-Mult-Font-Medium text-center text-lg" maxLength={1} required />
                            <input type="text" inputMode="numeric" className="w-full bg-gray-300/10 dark:bg-dark-890 rounded-lg px-4 py-2 outline-0 border border-transparent focus:border-blue-700 font-Mult-Font-Medium text-center text-lg" maxLength={1} required />
                        </div>

                        <p className="text-center gap-1 mt-4 font-YekanBakh-Medium text-gray-600 dark:text-gray-50">
                            01:35 مانده تا دریافت مجدد کد تایید
                        </p>
                        <button
                            className="w-full h-11 flex-center border text-white border-blue-700 dark:hover:bg-transparent bg-blue-700 hover:text-blue-700 hover:bg-white rounded-lg mt-6 cursor-pointer font-YekanBakh-Bold transition-all">تایید
                        </button>
                    </form>
                </div>
                {/*<!-- ! -------------------- Alarm Box -------------------- ! -->*/}
                <div className="flex items-start gap-x-2 text-yellow-700 dark:text-yellow-100 bg-yellow-50 dark:bg-yellow-500/20 rounded-2xl border border-yellow-500 p-3 mt-2">
                    <DynamicIcon name="informationCircle" className="size-5 text-inherit shrink-0" />
                    <p className="font-Mult-Font-Medium text-sm">در بعضی از تلفن‌های همراه کد تایید به Blacklist آن ارسال می‌شود. در صورتی عدم دریافت با پشتیبانی تماس بگیرید.</p>
                </div>
                {/*<!-- ! -------------------- Copy Right Text -------------------- ! -->*/}
                <span className="flex items-center gap-1 mt-4 text-gray-400 text-xs">
                همه حقوق برای راکت محفوظ است
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                     <path
                         d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m-32-88a32 32 0 0 0 57.6 19.2 8 8 0 0 1 12.8 9.61 48 48 0 1 1 0-57.62 8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128"></path>
                  </svg>
            </span>
            </div>
            {/*<Notification {...notificationValue} isOpen={isShowNotification}/>*/}
        </section>
    );
}

export default Verify;