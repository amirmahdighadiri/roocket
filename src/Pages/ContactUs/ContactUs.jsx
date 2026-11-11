
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import SocialBox from "../../Components/SocialBox/SocialBox.jsx";
import {socialMediaLinks} from '../../data.jsx'

function ContactUs() {
    const [stepNumber, setStepNumber] = useState(1);

    const nextStep = () => {
        setStepNumber(prev => {
            if (prev < 5) {
                return prev + 1
            } else {
                return prev
            }
        })
    }

    const prevStep = () => {
        setStepNumber(prev => {
            if (prev > 1) {
                return prev - 1
            } else {
                return prev
            }
        })
    }
    useEffect(() => {
        document.title = "ارتباط با ما"
    }, [])
    return (
        <section className="container pt-20">
            {/*<!-- ! -------------------- page wrapper -------------------- ! -->*/}
            <div className="flex flex-col items-center">
                {/*<!-- ! -------------------- Information Of Page -------------------- ! -->*/}
                <div className="text-center mb-16">
                    {/*<!-- ! -------------------- Page Name -------------------- ! -->*/}
                    <h2 className="font-YekanBakh-Heavy text-2xl sm:text-5xl mb-4 text-gray-800 dark:text-white">ارتباط
                        با ما</h2>
                    {/*<!-- ! -------------------- Description Of Page -------------------- ! -->*/}
                    <span className="font-YekanBakh-Medium text-gray-300 dark:text-gray-200 sm:text-2xl">در این صفحه میتوانید اطلاعات ارتباطی گیاه لد را مشاهده کنید.</span>
                </div>
                {/*<!-- ! -------------------- Social Media Wrapper -------------------- ! -->*/}
                <div className="flex flex-col md:flex-row items-center gap-y-10 gap-x-14">
                    {/*<!-- ! -------------------- Right Wrapper -------------------- ! -->*/}
                    <div
                        className="text-center md:text-right inline-block md:border-l border-gray-300/30 dark:border-gray-920 md:pl-14">
                        <h3 className="font-YekanBakh-Bold text-dark-550 dark:text-gray-920 mb-4 sm:mb-9 text-xl sm:text-2xl">پل
                            های ارتباطی</h3>
                        <div className="flex items-center gap-3">
                            <SocialBox
                                boxClass="size-16 bg-blue-700/10 hover:bg-blue-700 text-blue-700 hover:text-white hover:fill-white rounded-lg">
                                <DynamicIcon name="telegram_2" className="size-6 text-inherit" />
                            </SocialBox>
                            <SocialBox
                                boxClass="size-16 bg-blue-700/10 hover:bg-blue-700 text-blue-700 hover:text-white rounded-lg">
                                <DynamicIcon name="mail" className="size-6 text-inherit" />
                            </SocialBox>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Left Wrapper -------------------- ! -->*/}
                    <div className="text-center md:text-right ">
                        <h3 className="font-YekanBakh-Bold text-dark-550 dark:text-gray-920 mb-4 sm:mb-9 text-xl sm:text-2xl">شبکه
                            های اجتماعی</h3>
                        <div className="flex items-center gap-3">
                            {
                                socialMediaLinks.map(social =>(
                                    <SocialBox key={social.id} boxClass="size-16 bg-blue-700/10 hover:bg-blue-700 text-blue-700 hover:text-white rounded-lg">
                                        <DynamicIcon name={social.iconName} className="size-6 text-inherit" />
                                    </SocialBox>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/*<!-- ! -------------------- Address Box -------------------- ! -->*/}
                <div className="w-full flex flex-col items-center lg:items-start gap-y-6 bg-light-gray-300 p-5 lg:p-11 rounded-2xl mt-24 bg-white dark:bg-dark-930 shadow-sm dark:shadow-whiteShadow">
                    {/*<!-- ! -------------------- Phone Number Wrapper -------------------- ! -->*/}
                    <div className="text-center lg:text-right">
                        <h4 className={`relative font-YekanBakh-Bold text-xl lg:text-2xl text-blue-700 dark:text-white mb-2 mr-5 before:hidden xl:before:block before:absolute before:top-0 before:bottom-0 before:-right-5 before:my-auto before:content-[""] before:size-2 before:rounded-full before:bg-blue-700 dark:before:bg-white`}>شماره
                            تماس دفتر</h4>
                        <span
                            className="text-gray-300 dark:text-gray-920 font-YekanBakh-Bold lg:text-2xl">01144422101</span>
                    </div>
                    {/*<!-- ! -------------------- Address Wrapper -------------------- ! -->*/}
                    <div className="text-center lg:text-right">
                        <h4 className={`relative font-YekanBakh-Bold text-xl lg:text-2xl text-blue-700 dark:text-white mb-2 mr-5 before:hidden xl:before:block before:absolute before:top-0 before:bottom-0 before:-right-5 before:my-auto before:content-[""] before:size-2 before:rounded-full before:bg-blue-700 dark:before:bg-white`}> آدرس
                            دفتر راکت</h4>
                        <span className="text-gray-300 dark:text-gray-920 font-YekanBakh-Bold lg:text-2xl">مازندران، بابل، تختی شرقی، کوچه حر 4، خیابان تختی، پلاک: 0, طبقه: پنجم</span>
                    </div>
                </div>
                {/*<!-- ! -------------------- Suggestions Section -------------------- ! -->*/}
                <div className="w-full md:w-7/12 mt-10">
                    <div className="flex flex-col items-center">
                        <h2 className="text-gray-800 text-2xl md:text-4xl dark:text-white font-YekanBakh-Heavy mb-2 text-center">ارسال
                            پیشنهادات و انتقادات</h2>
                        <h6 className="w-full md:w-2/3 text-gray-300 dark:text-gray-920 text-center leading-7 md:leading-8">اگر
                            مایل هستید که پیشنهادات یا انتقادات یا حتی سوال‌های خود را به شکل خصوصی برای ما ارسال کنید.
                            میتوایند از امکان گفتگو‌های خصوصی در راکت استفاده کنید.</h6>
                    </div>
                    {/*<!-- ! -------------------- Step Number Wrapper -------------------- ! -->*/}
                    <div className="relative mt-10 mb-9">
                        <span className={`absolute top-0 bottom-0 my-auto h-1 ${stepNumber === 1 ? 'w-0' :stepNumber === 2? 'w-1/4': stepNumber === 3? 'w-2/4':stepNumber === 4? 'w-3/4' : 'w-full'} bg-blue-700 dark:bg-blue-450 transition-all duration-200 -z-10`}></span>
                        <div className="flex items-center justify-between font-YekanBakh-Bold text-xl md:text-3xl">
                            <div className="size-12 md:size-16 flex-center rounded-full step-box-active transition-all">
                                1
                            </div>
                            <div className={`${stepNumber >= 2 ? 'step-box-active' : 'bg-blue-Violet-450 dark:bg-dark-930 text-gray-300 dark:shadow-whiteShadow'} size-12 md:size-16 flex-center rounded-full transition-all`}>
                                2
                            </div>
                            <div className={`${stepNumber >= 3 ? 'step-box-active' : 'bg-blue-Violet-450 dark:bg-dark-930 text-gray-300 dark:shadow-whiteShadow'} size-12 md:size-16 flex-center rounded-full transition-all`}>
                                3
                            </div>
                            <div className={`${stepNumber >= 4 ? 'step-box-active' : 'bg-blue-Violet-450 dark:bg-dark-930 text-gray-300 dark:shadow-whiteShadow'} size-12 md:size-16 flex-center rounded-full transition-all`}>
                                4
                            </div>
                            <div className={`${stepNumber >= 5 ? 'step-box-active' : 'bg-blue-Violet-450 dark:bg-dark-930 text-gray-300 dark:shadow-whiteShadow'} size-12 md:size-16 flex-center rounded-full transition-all`}>
                                5
                            </div>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Step Box -------------------- ! -->*/}
                    <div className="">
                        {/*<!-- ! -------------------- Step Content -------------------- ! -->*/}
                        <div className="grid grid-cols-12 gap-y-5 bg-white dark:bg-dark-930 shadow-sm dark:shadow-whiteShadow rounded-2xl pt-8 pb-11 font-YekanBakh-Medium">
                            {/*<!-- ! -------------------- Right Wrapper -------------------- ! -->*/}
                            <div className="col-span-12 xl:col-span-5 space-y-5 px-5 lg:px-11 lg:border-l dark:border-gray-920/10 border-gray-300/25">
                                <div className="text-center xl:text-right">
                                    <h5 className={`${stepNumber >= 1 ? 'text-blue-700 dark:text-white  before:bg-blue-700 dark:before:bg-white' : 'text-blue-700/20 before:bg-blue-700/20 dark:text-white/20 dark:before:bg-white/20'} relative font-YekanBakh-Bold text-xl sm:text-2xl mb-1 mr-5 before:hidden xl:before:block before:absolute before:top-0 before:bottom-0 before:-right-5 before:my-auto before:content-[""] before:size-2 before:rounded-full`}>قدم اول</h5>
                                    <p className={`${stepNumber >= 1 ? 'text-gray-300 dark:text-gray-920': 'text-gray-300/20 dark:text-gray-920/20'}  sm:text-xl/8 pr-2`}>وارد بخش بحث و گفتگو شوید.</p>
                                </div>
                                <div className="text-center xl:text-right">
                                    <h5 className={`${stepNumber >= 2 ? 'text-blue-700 dark:text-white  before:bg-blue-700 dark:before:bg-white' : 'text-blue-700/20 before:bg-blue-700/20 dark:text-white/20 dark:before:bg-white/20'} relative font-YekanBakh-Bold text-xl sm:text-2xl mb-1 mr-5 before:hidden xl:before:block before:absolute before:top-0 before:bottom-0 before:-right-5 before:my-auto before:content-[""] before:size-2 before:rounded-full`}>قدم دوم</h5>
                                    <p className={`${stepNumber >= 2 ? 'text-gray-300 dark:text-gray-920': 'text-gray-300/20 dark:text-gray-920/20'}  sm:text-xl/8 pr-2`}>بر روی ایجاد گفتگو بزنید.</p>
                                </div>
                                <div className="text-center xl:text-right">
                                    <h5 className={`${stepNumber >= 3 ? 'text-blue-700 dark:text-white  before:bg-blue-700 dark:before:bg-white' : 'text-blue-700/20 before:bg-blue-700/20 dark:text-white/20 dark:before:bg-white/20'} relative font-YekanBakh-Bold text-xl sm:text-2xl mb-1 mr-5 before:hidden xl:before:block before:absolute before:top-0 before:bottom-0 before:-right-5 before:my-auto before:content-[""] before:size-2 before:rounded-full`}>قدم سوم</h5>
                                    <p className={`${stepNumber >= 3 ? 'text-gray-300 dark:text-gray-920': 'text-gray-300/20 dark:text-gray-920/20'}  sm:text-xl/8 pr-2`}>در صفحه مربوط به ایجاد گفتگو بر روی گزینه گفتگو خصوصی کلیک کنید</p>
                                </div>
                            </div>
                            {/*<!-- ! -------------------- Left Wrapper -------------------- ! -->*/}
                            <div className="col-span-12 xl:col-span-7 space-y-5 px-5 lg:px-11">
                                <div className="text-center xl:text-right">
                                    <h5 className={`${stepNumber >= 4 ? 'text-blue-700 dark:text-white  before:bg-blue-700 dark:before:bg-white' : 'text-blue-700/20 before:bg-blue-700/20 dark:text-white/20 dark:before:bg-white/20'} relative font-YekanBakh-Bold text-xl sm:text-2xl mb-1 mr-5 before:hidden xl:before:block before:absolute before:top-0 before:bottom-0 before:-right-5 before:my-auto before:content-[""] before:size-2 before:rounded-full`}>قدم چهارم</h5>
                                    <p className={`font-Mult-Font-Medium ${stepNumber >= 4 ? 'text-gray-300 dark:text-gray-920': 'text-gray-300/20 dark:text-gray-920/20'} sm:text-xl/8 pr-2`}>برای اینکه گفتگو توسط ما قابل دیدن شود. آی‌دی roocketir و hesammousavi@ را در متن گفتگو تگ کنید.</p>
                                </div>
                                <div className="text-center xl:text-right">
                                    <h5 className={`${stepNumber >= 5 ? 'text-blue-700 dark:text-white  before:bg-blue-700 dark:before:bg-white' : 'text-blue-700/20 before:bg-blue-700/20 dark:text-white/20 dark:before:bg-white/20'} relative font-YekanBakh-Bold text-xl sm:text-2xl mb-1 mr-5 before:hidden xl:before:block before:absolute before:top-0 before:bottom-0 before:-right-5 before:my-auto before:content-[""] before:size-2 before:rounded-full`}>قدم پنجم</h5>
                                    <p className={`${stepNumber >= 5 ? 'text-gray-300 dark:text-gray-920': 'text-gray-300/20 dark:text-gray-920/20'}  sm:text-xl/8 pr-2`}>مابقی رو به ما بسپارید، چون خیلی زود سعی می‌کنیم بهترین پاسخ رو برای شما ارسال کنیم.</p>
                                </div>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Arrow And Btn -------------------- ! -->*/}
                        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-y-6">
                            {/*<!-- ! -------------------- Arrow Wrapper -------------------- ! -->*/}
                            <div className="flex items-center">
                                <div onClick={prevStep} className="">
                                    <DynamicIcon name="arrow" className="size-9 rotate-180 hover:scale-120 cursor-pointer transition-all text-blue-700 dark:text-blue-450 dark:hover:text-white" />
                                </div>
                                <div onClick={nextStep} className="">
                                    <DynamicIcon name="arrow" className="size-9 hover:scale-120 cursor-pointer transition-all text-blue-700 dark:text-blue-450 dark:hover:text-white" />
                                </div>
                            </div>
                            {/*<!-- ! -------------------- Btn -------------------- ! -->*/}
                            <Link to="/" className="inline-flex items-center h-13 text-white hover:text-blue-700 hover:bg-white bg-blue-700 dark:hover:text-blue-450 dark:hover:border-blue-450 dark:hover:bg-transparent gap-x-2.5 border border-blue-700 font-bold px-3 sm:px-6 rounded-md hover:shadow-sm transition-all">
                                ایجاد گفتگو خصوصی و تماس با ما
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;