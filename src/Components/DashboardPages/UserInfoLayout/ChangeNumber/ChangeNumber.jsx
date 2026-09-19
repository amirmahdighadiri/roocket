import React , {useContext , useEffect , useState} from 'react';
import {AppContext} from "../../../../Context/AppContext.jsx";

function ChangeNumber(props) {
    const {userInfo} = useContext(AppContext)
    const [phoneNumberInput , setPhoneNumberInput] = useState({})
    useEffect(() => {
        setPhoneNumberInput(userInfo?.phone ?? "")
    }, []);

    return (
        <div className="rounded-2xl bg-white dark:bg-dark-body-100 p-4 lg:px-11 lg:py-8">
            <h3 className="relative text-blue-700 dark:text-white text-xl font-YekanBakh-Heavy pr-2 before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-2 before:rounded-full dark:before:bg-white before:bg-blue-700 mb-4">مدیریت شماره موبایل</h3>
            {/*<!-- ! -------------------- Content Wrapper -------------------- ! -->*/}
            <div className="p-5 border-gray-350/20 dark:border-white/10 bg-gray-350/5 dark:bg-dark-900 rounded-2xl mb-6">
                {/*<!-- ! -------------------- Change Number Roul Content -------------------- ! -->*/}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1 mb-4">
                        <span className="text-gray-350 dark:text-gray-810 text-sm font-YekanBakh-Bold">وضعیت شماره همراه</span>
                        <span className="text-dark-550 dark:text-white text-lg font-YekanBakh-Bold">تأیید شده</span>
                    </div>
                    <span className="px-3 py-1 rounded-lg border botext-green-600 text-green-600 font-YekanBakh-Bold text-xs">
                        فعال
                    </span>
                </div>
                {/*<!-- ! -------------------- Current PhoneNumber Input -------------------- ! -->*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                    {/*<!-- ! -------------------- Input -------------------- ! -->*/}
                    <div className="">
                        <span className="text-gray-500 dark:text-gray-810 font-YekanBakh-Bold text-sm">شماره همراه فعلی</span>
                        <input dir="ltr" value={phoneNumberInput} onChange={e => setPhoneNumberInput(e.target.value)} disabled type="text" className="w-full h-10 bg-gray-300/10 text-gray-300 dark:bg-dark-body-100 dark:text-white border border-transparent focus:border-blue-700 outline-0 px-3 py-2 font-Mult-Font-Bold text-sm rounded-lg mt-1"/>
                    </div>
                    <p className="flex-center text-gray-350 dark:text-gray-810 text-sm/7 mt-4">برای تغییر شماره باید شماره جدید را وارد و با کد پیامکی تأیید کنید.</p>
                </div>
            </div>
            <button type="button" className="flex-center h-11 px-6 border border-blue-700 bg-blue-700 text-white hover:bg-transparent hover:text-blue-700 transition-all rounded-lg font-YekanBakh-Bold cursor-pointer">ویرایش شماره همراه</button>
        </div>
    );
}

export default ChangeNumber;