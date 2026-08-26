import React, {useState, useEffect, useContext ,useRef} from 'react';
import {Link , useNavigate,useLocation} from "react-router-dom"
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import Notification from "../../Components/Notification/Notification.jsx";
import useToggle from "../../Hooks/useToggle/useToggle.jsx";
import {AppContext} from "../../Context/AppContext.jsx";
import useCookie from "../../Hooks/useCookie/useCookie.jsx";

function Verify(props) {
    const [verifyCode, setVerifyCode] = useState(["" , "" , "" , ""]);
    const [isShowVerifyCode, toggleIsShowVerifyCode] = useToggle()
    const inputRefs = useRef([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [randomNumber] = useState(()=>Math.floor(Math.random()*10000))
    const {isShowNotification, setIsShowNotification , setIsLogin , setUserInfo} = useContext(AppContext)
    const [notificationValue, setNotificationValue] = useState({
        title: "خطا !",
        message: "لطفا نام کاربر خود را به درستی وارد کنید.",
        Icon: () => <DynamicIcon name={'closeCircle'} className={'size-7 text-blue-700'}/>
    });
    const [userId , setUserId] = useCookie("userID" , "")

    useEffect(() => {
        inputRefs.current[0].focus()
        toggleIsShowVerifyCode()
    },[])

    const inputChangeHandler = (event , index)=>{

        const code = [...verifyCode]
        code[index] = event.target.value;

        if (event.target.value && index < verifyCode.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
        setVerifyCode(code);
    }

   const inputKeyDownHandler = (event , index) => {
        if (event.key === "Backspace") {
            if (!verifyCode[index] && index > 0){
                inputRefs.current[index - 1]?.focus();
            }
        }
   }

   const showVerifyCodeNotificationHandler = (event)=>{
        event.preventDefault()
        toggleIsShowVerifyCode()
   }

   const checkOPTCodeHandler = (event)=>{
        event.preventDefault()
        const code = verifyCode.join("")

       if (code === randomNumber.toString()){
           toggleIsShowVerifyCode()
           setIsShowNotification(true)
           setIsLogin(true);
           setUserInfo(location.state.userInfo)

           setNotificationValue({
               title: "موفق !",
               message: "به سایت راکت خوش آمدید.",
               Icon: () => <DynamicIcon name={'checkCircle'} className={'size-7 text-blue-700'}/>
           })

           setUserId(location.state.userInfo.id)

           setTimeout(() => {
               navigate("/");
           },2600)
       }
   }

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center">
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
                        <span className="text-sm text-gray-300 dark:text-gray-210">رمز یک‌بار مصرف به {location.state.username} ارسال شد.</span>
                    </div>
                    {/*<!-- ! -------------------- Form -------------------- ! -->*/}
                    <form className="mt-5">
                        <div dir="ltr" className="flex items-center gap-x-4">
                            {
                                verifyCode.map((item , index) => (
                                    <input value={item} ref={(element => inputRefs.current[index]=element)} key={index} onKeyDown={(event)=>inputKeyDownHandler(event,index)} onChange={(event)=>inputChangeHandler(event , index)} type="text" inputMode="numeric" className="w-full bg-gray-300/10 dark:bg-dark-890 rounded-lg px-4 py-2 outline-0 border border-transparent focus:border-blue-700 font-Mult-Font-Medium text-center text-lg" maxLength={1} required />
                                ))
                            }
                        </div>

                        <p className="text-center gap-1 mt-4 font-YekanBakh-Medium text-gray-600 dark:text-gray-50">
                            01:35 مانده تا دریافت مجدد کد تایید
                        </p>
                        <button onClick={checkOPTCodeHandler} className="w-full h-11 flex-center border text-white border-blue-700 dark:hover:bg-transparent bg-blue-700 hover:text-blue-700 hover:bg-white rounded-lg mt-6 cursor-pointer font-YekanBakh-Bold transition-all">تایید
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

            <div className={`absolute ${isShowVerifyCode ? 'top-5' : '-top-25'} flex flex-col items-center gap-y-4 w-90 h-25 rounded-lg bg-gray-200 dark:bg-dark-930 shadow p-4 font-YekanBakh-Bold text-biscay-700 dark:text-white transition-all`}>
                <p className="">کد تایید ورود به راکت : {randomNumber}</p>
                <button onClick={showVerifyCodeNotificationHandler} className="border border-blue-700 bg-blue-700 hover:bg-transparent rounded-sm cursor-pointer px-3 py-0.5 transition-all">تایید</button>
            </div>
            <Notification {...notificationValue} isOpen={isShowNotification}/>
        </section>
    );
}

export default Verify;