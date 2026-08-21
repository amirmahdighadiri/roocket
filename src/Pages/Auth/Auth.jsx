import React, {useState, useEffect, useContext} from 'react';
import {Link , useNavigate} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import Notification from "../../Components/Notification/Notification.jsx";
import {AppContext} from "../../Context/AppContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import users, {getUsersFromServer} from "../../Redux/Store/Users.jsx";

function Auth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.users);
    const [username, setUsername] = useState("");
    const {isShowNotification, setIsShowNotification , setIsLogin , setUserInfo} = useContext(AppContext)
    const [notificationValue, setNotificationValue] = useState({
        title: "خطا !",
        message: "لطفا نام کاربر خود را به درستی وارد کنید.",
        Icon: () => <DynamicIcon name={'closeCircle'} className={'size-7 text-blue-700'}/>
    });

    const showNotificationHandler = ({title, message, Icon}) => {
        setNotificationValue({
            title,
            message,
            Icon
        })
        setIsShowNotification(true)
    }

    useEffect(() => {
        dispatch(getUsersFromServer("http://localhost:3000/users"))
    }, [])

    const checkUserHandler = async (event) => {
        event.preventDefault();
        const emailOrPhoneRegex = /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|(?:\+98|0)?9\d{9})$/;
        const isValid = emailOrPhoneRegex.test(username);

        if (isValid) {
            const userExist = users.find(user => user.phone === username || user.email === username);

            if (userExist) {
                setTimeout(() => {
                    navigate("/verify" , {
                        state: {
                            username,
                            userInfo: userExist
                        }
                    });
                },2600)
            } else {
                showNotificationHandler({
                    title: "خطا !",
                    message: "لطفا ابتدا در سایت ثبت نام نمایید.",
                    Icon: () => <DynamicIcon name={'closeCircle'} className={'size-7 text-blue-700'}/>
                })
            }

        } else {
            showNotificationHandler({
                title: "خطا !",
                message: "لطفا نام کاربر خود را به درستی وارد کنید.",
                Icon: () => <DynamicIcon name={'closeCircle'} className={'size-7 text-blue-700'}/>
            })
        }
    }

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
                    <span
                        className="text-sm text-gray-300 dark:text-gray-210">شماره موبایل یا ایمیل خود را وارد کنید</span>
                </div>
                {/*<!-- ! -------------------- Form -------------------- ! -->*/}
                <form className="mt-5">
                    <span className="block mr-2 mb-2 text-sm text-gray-300 dark:text-gray-210">موبایل یا ایمیل</span>
                    <input type="text"
                           className="w-full bg-gray-300/10 dark:bg-dark-890 rounded-lg px-4 py-2 outline-0 border border-transparent focus:border-blue-700 font-Mult-Font-Medium text-sm"
                           required value={username} onChange={(e) => setUsername(e.target.value)}/>
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
                    <button onClick={checkUserHandler}
                            className="w-full h-11 flex-center border text-white border-blue-700 dark:hover:bg-transparent bg-blue-700 hover:text-blue-700 hover:bg-white rounded-lg mt-6 cursor-pointer font-YekanBakh-Bold transition-all">ادامه
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