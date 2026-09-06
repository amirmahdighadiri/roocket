import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";

function UserProfile(props) {
    return (
        <div className="container">
            <div className="grid grid-cols-12">
                <div className="col-span-4"></div>
                <div className="col-span-8">
                    <div className="rounded-2xl bg-white dark:bg-dark-body-100 px-11 py-8">
                        <h3 className="relative text-blue-700 dark:text-white text-xl font-YekanBakh-Heavy pr-2 before:content-[''] before:absolute before:top-0 before:bottom-0 before:-right-1 before:my-auto before:size-2 before:rounded-full dark:before:bg-white before:bg-blue-700 mb-4">اطلاعات حساب</h3>
                        <div className="relative">
                            <label className="">
                                <div className="flex flex-col items-center justify-center gap-y-1 py-15 bg-gradient-to-bl from-gray-100 to-gray-210 dark:from-dark-900 dark:to-dark-body-100 text-gray-300 dark:text-gray-810 cursor-pointer rounded-2xl transition-all hover:opacity-80">
                                    <DynamicIcon name="cameraOutline" className="size-10 text-inherit" />
                                    <span className="font-YekanBakh-Medium text-sm">تصویر کاور را انتخاب کنید</span>
                                </div>
                                <input type="file" className="size-0 hidden"/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;