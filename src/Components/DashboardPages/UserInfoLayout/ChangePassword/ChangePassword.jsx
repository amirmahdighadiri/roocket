import React , {useContext ,useState,useEffect} from 'react';
import DynamicIcon from "../../../../DynamicIcon/DynamicIcon.jsx";
import {AppContext} from "../../../../Context/AppContext.jsx";

function ChangePassword(props) {
    const {userInfo} = useContext(AppContext)
    const [inputRules, setInputRules] = useState({
        minLength: false,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
    });
    const [currentPasswordInput, setCurrentPasswordInput] = useState("");
    const [newPasswordInput, setNewPasswordInput] = useState("");
    const [repeatPasswordInput, setRepeatPasswordInput] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const changePasswordHandler = async (event)=>{
        event.preventDefault();

        if (newPasswordInput === repeatPasswordInput && currentPasswordInput === userInfo.password) {

            fetch(`http://localhost:3000/users/${userInfo.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...userInfo,
                        password: newPasswordInput,
                    }),
                }
            ).then((res)=> {
                console.log(res)})
        }
    }

    useEffect(() => {
        setInputRules({
            minLength: newPasswordInput.length >= 8,
            hasUppercase: /[a-z]/.test(newPasswordInput),
            hasLowercase: /[A-Z]/.test(newPasswordInput),
            hasNumber: /[0-9]/.test(newPasswordInput),
        });
    }, [newPasswordInput]);

    useEffect(()=>{
        setIsPasswordValid(Object.values(inputRules).every(Boolean));
    },[inputRules])

    return (
        <div className="rounded-2xl bg-white dark:bg-dark-body-100 p-4 lg:px-11 lg:py-8">
            <h3 className="relative text-blue-700 dark:text-white text-xl font-YekanBakh-Heavy pr-2 before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-2 before:rounded-full dark:before:bg-white before:bg-blue-700 mb-4">تغییر رمز عبور</h3>
            <div className="p-5 border-gray-350/20 dark:border-white/10 bg-gray-350/5 dark:bg-dark-900 rounded-2xl mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1 mb-4">
                        <span className="text-gray-350 dark:text-gray-810 text-sm font-YekanBakh-Bold">امنیت حساب</span>
                        <span className="text-dark-550 dark:text-white text-lg font-YekanBakh-Bold">به‌روزرسانی رمز عبور</span>
                    </div>
                    <span className="px-3 py-1 rounded-lg border border-blue-700 text-blue-700 font-YekanBakh-Bold text-xs">
                        پیشنهاد امنیتی
                    </span>
                </div>
                <p className="text-gray-350 dark:text-gray-810 text-sm/7">بعد از تغییر موفق رمز، از همه دستگاه‌ها خارج می‌شوید و باید دوباره وارد شوید. رمزی انتخاب کنید که در سرویس‌های دیگر استفاده نکرده‌اید.</p>
            </div>
            <form onSubmit={changePasswordHandler} className="space-y-5">
                {/*<!-- ! -------------------- Current Password Input -------------------- ! -->*/}
                <div className="relative">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500 dark:text-gray-810 font-YekanBakh-Bold text-sm">رمز عبور فعلی</span>
                        <button type="button" className="text-blue-700 hover:underline font-YekanBakh-Bold text-sm transition-all cursor-pointer">فراموش کرده‌اید؟</button>
                    </div>
                    <input value={currentPasswordInput} onChange={e => setCurrentPasswordInput(e.target.value)} type="text" className="w-full h-10 bg-gray-300/10 text-gray-300 dark:bg-dark-900 dark:text-white border border-transparent focus:border-blue-700 outline-0 px-3 py-2 font-Mult-Font-Bold text-sm rounded-lg mt-1" placeholder="رمز فعلی را وارد کنید"/>
                    <button type="button" className="absolute left-3 top-1/2 rounded-md p-1 text-gray-350 dark:text-gray-810 hover:bg-gray-350/15 transition-all cursor-pointer">
                        <DynamicIcon name="eye" className="size-4 text-inherit" />
                    </button>
                </div>
                {/*<!-- ! -------------------- New Password Input -------------------- ! -->*/}
                <div className="relative">
                    <span className="text-gray-500 dark:text-gray-810 font-YekanBakh-Bold text-sm">رمز عبور جدید</span>
                    <input value={newPasswordInput} onChange={e => setNewPasswordInput(e.target.value)} type="text" className="w-full h-10 bg-gray-300/10 text-gray-300 dark:bg-dark-900 dark:text-white border border-transparent focus:border-blue-700 outline-0 px-3 py-2 font-Mult-Font-Bold text-sm rounded-lg mt-1" placeholder="رمز عبور جدید را وارد کنید"/>
                    <button type="button" className="absolute left-3 top-1/2 rounded-md p-1 text-gray-350 dark:text-gray-810 hover:bg-gray-350/15 transition-all cursor-pointer">
                        <DynamicIcon name="eye" className="size-4 text-inherit" />
                    </button>
                </div>
                {/*<!-- ! -------------------- Repeat New Password Input -------------------- ! -->*/}
                <div className="relative">
                    <span className="text-gray-500 dark:text-gray-810 font-YekanBakh-Bold text-sm">تکرار رمز جدید</span>
                    <input value={repeatPasswordInput} onChange={e=>setRepeatPasswordInput(e.target.value)} type="text" className="w-full h-10 bg-gray-300/10 text-gray-300 dark:bg-dark-900 dark:text-white border border-transparent focus:border-blue-700 outline-0 px-3 py-2 font-Mult-Font-Bold text-sm rounded-lg mt-1" placeholder="تکرار رمز جدید را وارد کنید"/>
                    <button type="button" className="absolute left-3 top-1/2 rounded-md p-1 text-gray-350 dark:text-gray-810 hover:bg-gray-350/15 transition-all cursor-pointer">
                        <DynamicIcon name="eye" className="size-4 text-inherit" />
                    </button>
                </div>
                {/*<!-- ! -------------------- Password Rule Content -------------------- ! -->*/}
                <div className="rounded-xl border border-blue-700 border-opacity-20 bg-blue-700/5 p-4">
                    <p className="mb-3 text-sm font-semibold text-blue-700">شرایط رمز عبور</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2">
                            <span className={`size-4 flex-center rounded-full ${inputRules.minLength ? 'bg-green-600' : 'bg-gray-350/25'}  text-gray-350 dark:text-gray-810`}></span>
                            <span className="text-sm text-gray-350 dark:text-gray-810">حداقل ۸ کاراکتر</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className={`size-4 flex-center rounded-full ${inputRules.hasUppercase ? 'bg-green-600' : 'bg-gray-350/25'}  text-gray-350 dark:text-gray-810`}></span>
                            <span className="text-sm text-gray-350 dark:text-gray-810">حداقل یک حرف کوچک</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className={`size-4 flex-center rounded-full ${inputRules.hasLowercase ? 'bg-green-600' : 'bg-gray-350/25'}  text-gray-350 dark:text-gray-810`}></span>
                            <span className="text-sm text-gray-350 dark:text-gray-810">حداقل یک حرف بزرگ</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className={`size-4 flex-center rounded-full ${inputRules.hasNumber ? 'bg-green-600' : 'bg-gray-350/25'}  text-gray-350 dark:text-gray-810`}></span>
                            <span className="text-sm text-gray-350 dark:text-gray-810">حداقل یک عدد</span>
                        </li>
                    </ul>
                </div>
                {/*<!-- ! -------------------- Submit Change Password Btn -------------------- ! -->*/}
                <button type="submit" disabled={!isPasswordValid} className={`flex-center h-11 px-6 ${isPasswordValid ? 'hover:bg-transparent hover:text-blue-700' : 'opacity-45'} border border-blue-700 bg-blue-700 text-white  transition-all rounded-lg font-YekanBakh-Bold cursor-pointer`}>ثبت رمز جدید</button>
            </form>
        </div>
    );
}

export default ChangePassword;