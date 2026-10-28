import React, {useState, useEffect, useContext} from 'react';
import {Link , useNavigate,useLocation} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import Notification from "../../Components/Notification/Notification.jsx";
import {AppContext} from "../../Context/AppContext.jsx";
import useTitle from "../../Hooks/useTitle/useTitle.jsx";
import { loginUser } from "../../Lib/Services/authService.js";

function Auth() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const {isShowNotification, setIsShowNotification , setIsLogin , setUserInfo} = useContext(AppContext)
    const [notificationValue, setNotificationValue] = useState({
        title: "خطا !",
        message: "لطفا نام کاربر خود را به درستی وارد کنید.",
        Icon: () => <DynamicIcon name={'closeCircle'} className={'size-7 text-blue-700'}/>
    });
    const from = location.state?.from;

    const showNotificationHandler = ({title, message, Icon}) => {
        setNotificationValue({
            title,
            message,
            Icon
        })
        setIsShowNotification(true)
    }


    const checkUserHandler = async (event) => {
        event.preventDefault();

        if (password.length < 8){
            showNotificationHandler({
                title: "خطا!",
                message: "رمز عبور باید حداقل ۸ کاراکتر باشد.",
                Icon: () => <DynamicIcon name="closeCircle" className="size-7 text-blue-700"/>,
            });
            return;
        }

        if (!password.trim() || !email.trim()){
            showNotificationHandler({
                title: "خطا!",
                message: "لطفاً تمام فیلدهای ضروری را تکمیل کنید.",
                Icon: () => <DynamicIcon name="closeCircle" className="size-7 text-blue-700"/>,
            });
            return;
        }

        try {
            setLoading(true);

            await loginUser({
                email,
                password,
            });

            showNotificationHandler({
                title: "موفق!",
                message: "با موفقیت وارد حساب کاربری خود شدید.",
                Icon: () => <DynamicIcon name="checkCircle" className="size-7 text-blue-700"/>,
            });

            setTimeout(() => {
                navigate(
                    from
                        ? `${from.pathname}${from.search}${from.hash}`
                        : "/",
                    { replace: true }
                );
            }, 2000);
        } catch (error) {
            let message = "ورود ناموفق.لطفا دوباره تلاش کنید.";

            if (error.message?.includes("Invalid login credentials")) {
                message = "ایمیل یا رمز عبور صحیح نیست."
            } else if (!navigator.onLine) {
                message = "اتصال اینترنت خود را بررسی کنید.";
            }else {
                message = "ورود ناموفق.لطفا دوباره تلاش کنید.";
            }
            showNotificationHandler({
                title: "خطا!",
                message,
                Icon: () => (
                    <DynamicIcon
                        name="closeCircle"
                        className="size-7 text-blue-700"
                    />
                ),
            });
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    useTitle('راکت | ورود')

    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            {/*<!-- ! -------------------- Logo -------------------- ! -->*/}
            <Link to="/" className="block mb-9">
                <DynamicIcon name={'darkLogo'} className={'hidden dark:block w-52 h-11.5'}/>
                <DynamicIcon name={'lightLogo'} className={'dark:hidden block w-52 h-11.5'}/>
            </Link>
            {/*<!-- ! -------------------- Auth Box Wrapper -------------------- ! -->*/}
            <div className="w-full lg:w-1/4 bg-white dark:bg-dark-930 rounded-2xl py-9 px-12.5 dark:text-white">
                {/*<!-- ! -------------------- Header Box -------------------- ! -->*/}
                <div className="pb-5 border-b border-gray-300/30 font-YekanBakh-Bold">
                    <h2 className="mb-2 text-2xl text-dark-550 dark:text-white">ورود/ثبت نام</h2>
                    <span className="text-sm text-gray-300 dark:text-gray-210">شماره موبایل یا ایمیل خود را وارد کنید</span>
                </div>
                {/*<!-- ! -------------------- Form -------------------- ! -->*/}
                <form className="mt-5" onSubmit={checkUserHandler}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full h-12 bg-gray-300/10 dark:bg-dark-890 rounded-xl px-4 outline-0 border border-gray-300/30 hover:border-gray-300/60 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 placeholder:text-gray-300 font-Mult-Font-Medium text-sm transition-all duration-200"
                        placeholder="ایمیل"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full h-12 bg-gray-300/10 dark:bg-dark-890 rounded-xl px-4 outline-0 border border-gray-300/30 hover:border-gray-300/60 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 placeholder:text-gray-300 font-Mult-Font-Medium text-sm transition-all duration-200 mt-4"
                        placeholder="رمز عبور"
                    />
                    <p className="flex items-center gap-1 mt-4 font-YekanBakh-Medium text-xs text-gray-600 dark:text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="text-blue-600" viewBox="0 0 256 256">
                            <path d="M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96" opacity="0.2"></path>
                            <path
                                d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88"></path>
                        </svg>
                        ورود/ثبت‌نام شما به معنای پذیرش
                        <Link to="/" className="inline-block font-YekanBakh-Bold text-blue-700 underline"> قوانین</Link>
                        میباشد
                    </p>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-11 flex-center border text-white border-blue-700 dark:hover:bg-transparent bg-blue-700 hover:text-blue-700 hover:bg-white rounded-lg mt-6 cursor-pointer font-YekanBakh-Bold transition-all disabled:opacity-50"
                    >
                        {loading ? "در حال ورود..." : "ورود"}
                    </button>
                </form>
            </div>
            {/*<!-- ! -------------------- Copy Right Text -------------------- ! -->*/}
            <span className="flex items-center gap-1 mt-4 text-gray-400 text-xs">
                همه حقوق برای راکت محفوظ است
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                     <path
                         d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m-32-88a32 32 0 0 0 57.6 19.2 8 8 0 0 1 12.8 9.61 48 48 0 1 1 0-57.62 8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128"></path>
                  </svg>
            </span>

            <Notification {...notificationValue} isOpen={isShowNotification}/>
        </section>
    );
}

export default Auth;