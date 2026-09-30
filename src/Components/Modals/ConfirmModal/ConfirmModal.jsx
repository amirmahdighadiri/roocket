import React from 'react';
import ReactDOM from "react-dom";

function ConfirmModal({isShowModal , logoutHandler}) {

    const btnClickHandler = (status) => {
        logoutHandler(status);
    }
    return ReactDOM.createPortal(
        <div className={`${isShowModal ? 'block' : 'hidden'} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-90 max-w-[calc(100%-32px)] rounded-xl bg-white dark:bg-dark-930 shadow-xl border border-gray-200 dark:border-gray-700 p-5 text-biscay-700 dark:text-white transition-all z-50`}>
                {/*<!-- ! -------------------- Title -------------------- ! -->*/}
                <p className="text-lg text-center mb-2 font-YekanBakh-Heavy">
                    خروج از حساب
                </p>
                {/*<!-- ! -------------------- Description -------------------- ! -->*/}
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-6 font-YekanBakh-Bold">
                    آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟
                </p>
                {/*<!-- ! -------------------- Buttons -------------------- ! -->*/}
                <div className="flex justify-center gap-3 mt-5 font-YekanBakh-Bold">
                    <button onClick={()=>btnClickHandler(true)} type="button" className="px-5 py-1.5 rounded-md border border-blue-700 bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 cursor-pointer transition-all">
                        تایید
                    </button>
                    <button onClick={()=>btnClickHandler(false)} type="button" className="px-5 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-all">
                        انصراف
                    </button>
                </div>
            </div>
    ,document.getElementById("modal-wrapper"));
}

export default ConfirmModal;