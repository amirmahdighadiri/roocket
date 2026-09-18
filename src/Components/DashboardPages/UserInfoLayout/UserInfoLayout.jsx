import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import {Outlet , Link , useLocation} from "react-router-dom";

function UserInfoLayout(props) {
    const location = useLocation()
    const path =location.pathname.split("/").pop()

    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-6">
                {/*<!-- ! -------------------- Userinfo Dashboard Menu -------------------- ! -->*/}
                <div className="col-span-12 xl:col-span-3">
                    <ul className="space-y-2">
                        <li className="">
                            <Link to={"/dashboard/user-profile"} className={`flex items-center gap-x-4 ${path === "user-profile" ? "border-blue-700" : "border-transparent hover:border-blue-700"} text-gary-60 dark:text-gray-810 bg-white dark:bg-dark-body-100 px-6 py-4 border rounded-2xl font-YekanBakh-Bold transition-all group`}>
                                <span className={`flex-center size-9 ${path === "user-profile" ? "bg-blue-700" : "bg-gray-350/50 group-hover:bg-gray-350"} transition-all rounded-lg`}>
                                    <DynamicIcon name="calendarList" className="size-5 text-white"/>
                                </span>
                                <span className="inline-block mt-2 text-lg">اطلاعات حساب</span>
                            </Link>
                        </li>
                        <li className="">
                            <Link to={"/dashboard/user-profile/change-number"} className={`flex items-center gap-x-4 ${path === "change-number" ? "border-blue-700" : "border-transparent hover:border-blue-700"} text-gary-60 dark:text-gray-810 bg-white dark:bg-dark-body-100 px-6 py-4 border rounded-2xl font-YekanBakh-Bold transition-all group`}>
                                <span className={`flex-center size-9 ${path === "change-number" ? "bg-blue-700" : "bg-gray-350/50 group-hover:bg-gray-350"} transition-all rounded-lg`}>
                                    <DynamicIcon name="mobile" className="size-5 text-white"/>
                                </span>
                                <span className="inline-block mt-2 text-lg">شماره موبایل</span>
                            </Link>
                        </li>
                        <li className="">
                            <Link to={"/dashboard/user-profile/change-password"} className={`flex items-center gap-x-4 ${path === "change-password" ? "border-blue-700" : "border-transparent hover:border-blue-700"} text-gary-60 dark:text-gray-810 bg-white dark:bg-dark-body-100 px-6 py-4 border rounded-2xl font-YekanBakh-Bold transition-all group`}>
                                <span className={`flex-center size-9 ${path === "change-password" ? "bg-blue-700" : "bg-gray-350/50 group-hover:bg-gray-350"} transition-all rounded-lg`}>
                                    <DynamicIcon name="password" className="size-5 text-white"/>
                                </span>
                                <span className="inline-block mt-2 text-lg">تغییر رمز عبور</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/*<!-- ! -------------------- Userinfo Dashboard Content -------------------- ! -->*/}
                <div className="col-span-12 xl:col-span-9">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default UserInfoLayout;