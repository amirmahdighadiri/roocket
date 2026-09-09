import React , {useState ,useEffect ,useContext} from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import defaultProfile from "../../../assets/images/profile/default.png"
import {AppContext} from "../../../Context/AppContext.jsx";

function UserProfile(props) {
    const {userInfo} = useContext(AppContext)
    const [emailInput, setEmailInput] = useState("");
    const [nameInput, setNameInput] = useState("");

    useEffect(() => {
        setEmailInput(userInfo?.email ?? "");
        setNameInput(userInfo?.fullName ?? "");
    }, [userInfo]);
    return (
        <div className="container">
            <div className="grid grid-cols-12">
                <div className="col-span-4"></div>
                <div className="col-span-8">
                    <div className="rounded-2xl bg-white dark:bg-dark-body-100 px-11 py-8">
                        <h3 className="relative text-blue-700 dark:text-white text-xl font-YekanBakh-Heavy pr-2 before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-2 before:rounded-full dark:before:bg-white before:bg-blue-700 mb-4">اطلاعات حساب</h3>
                        {/*<!-- ! -------------------- Chose Image Input -------------------- ! -->*/}
                        <div className="relative mb-20">
                            {/*<!-- ! -------------------- Big Chose Image Input -------------------- ! -->*/}
                            <label className="">
                                <div className="flex flex-col items-center justify-center gap-y-1 py-15 bg-gradient-to-bl from-gray-100 to-gray-210 dark:from-dark-900 dark:to-dark-body-100 text-gray-300 dark:text-gray-810 cursor-pointer rounded-2xl transition-all hover:opacity-80">
                                    <DynamicIcon name="cameraOutline" className="size-10 text-inherit" />
                                    <span className="font-YekanBakh-Medium text-sm">تصویر کاور را انتخاب کنید</span>
                                </div>
                                <input type="file" className="size-0 hidden"/>
                            </label>
                            {/*<!-- ! -------------------- Small Chose Image Input -------------------- ! -->*/}
                            <label className="absolute right-5 border-0 -translate-y-1/2 group">
                                <div className="relative size-24 rounded-full overflow-hidden cursor-pointer">
                                    <img src={defaultProfile} alt="default profile" className=""/>
                                    <div className="absolute inset-0 flex-center text-white bg-biscay-700/25 group-hover:bg-biscay-700/45 transition-all">
                                        <DynamicIcon name="cameraOutline" className="size-7 text-inherit" />
                                    </div>
                                </div>
                                <input type="file" className="size-0 hidden"/>
                            </label>
                        </div>
                        {/*<!-- ! -------------------- User Info Inputs -------------------- ! -->*/}
                        <div className="grid grid-cols-12 gap-x-14 gap-y-6">
                            {/*<!-- ! -------------------- Name Input -------------------- ! -->*/}
                            <div className="col-span-6">
                                <span className="text-gray-500 dark:text-gray-810 font-YekanBakh-Bold text-sm">نام و نام خانوادگی (فارسی)</span>
                                <input value={nameInput} onChange={(e)=>setNameInput(e.target.value)} type="text" className="w-full h-10 bg-gray-300/10 text-gray-300 dark:bg-dark-900 dark:text-white border border-transparent focus:border-blue-700 outline-0 px-3 py-2 font-Mult-Font-Bold text-sm rounded-lg mt-1"/>
                            </div>
                            {/*<!-- ! -------------------- Email Input -------------------- ! -->*/}
                            <div className="col-span-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-810 font-YekanBakh-Bold text-sm">ایمیل</span>
                                    <button type="button" className="text-blue-700 hover:underline font-YekanBakh-Bold text-sm transition-all cursor-pointer">ویراش</button>
                                </div>

                                <input dir="ltr" value={emailInput} onChange={(e)=>setEmailInput(e.target.value)} type="text" className="w-full h-10 bg-gray-300/10 text-gray-300 dark:bg-dark-900 dark:text-white border border-transparent focus:border-blue-700 outline-0 px-3 py-2 text-sm font-Mult-Font-Bold rounded-lg mt-1 cursor-not-allowed opacity-60" disabled/>
                            </div>
                            {/*<!-- ! -------------------- UserName Input -------------------- ! -->*/}
                            <div className="col-span-6">
                                <span className="text-gray-500 dark:text-gray-810 font-YekanBakh-Bold text-sm">آدرس پروفایل</span>
                                <div className="flex h-10 items-center mb-2 rounded-lg overflow-hidden">
                                    <input dir="ltr" type="text" className="w-full bg-gray-300/10 text-gray-300 dark:bg-dark-900 dark:text-white border border-transparent focus:border-blue-700 outline-0 px-3 py-2 text-sm font-Mult-Font-Bold"/>
                                    <div dir="ltr" className="flex h-full shrink-0 items-center border-r bg-opacity-10 px-3 text-sm font-Mult-Font-Bold bg-gray-300/10 dark:bg-dark-900 opacity-60 text-gray-300 ">https://roocket.ir/@</div>
                                </div>
                                <span className="text-gray-300 dark:text-gray-810 font-YekanBakh-Bold text-xs">فقط حروف انگلیسی، عدد و نقطه مجاز است</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;