import React,{useEffect} from 'react';
import useTitle from "../../Hooks/useTitle/useTitle.jsx";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

function ComingSoon(props) {

    useTitle('در حال توسعه این بخش از سایت هستیم!')

    useEffect(()=>{
        document.body.className = "from-gray-80 bg-no-repeat"

        return ()=>{
            document.body.className = "overflow-x-hidden"
        }
    },[])

    return (
        <div className="container">
            {/*<!-- ! -------------------- Header For ComingSoon Page -------------------- ! -->*/}
            <nav className="flex items-center justify-center lg:justify-between pt-11">
                <ul className="hidden lg:flex items-center gap-x-8 text-xl font-YekanBakh-Medium">
                    <li className="">
                        <Link to="/" className="text-biscay-700 hover:text-biscay-400 transition-all">صفحه اصلی</Link>
                    </li>
                    <li className="">
                        <Link to="/products-page" className="text-biscay-700 hover:text-biscay-400 transition-all">دوره‌های
                            آموزشی</Link>
                    </li>
                    <li className="">
                        <Link to="" className="text-biscay-700 hover:text-biscay-400 transition-all">پرسش و پاسخ</Link>
                    </li>
                    <li className="">
                        <Link to="/articles" className="text-biscay-700 hover:text-biscay-400 transition-all">مقالات سایت</Link>
                    </li>
                </ul>
                <Link to="">
                    {/*<LightLogo iconClass="block"/>*/}
                </Link>
            </nav>
            {/*<!-- ! -------------------- Coming Soon Icon And Navigate Link -------------------- ! -->*/}
            <div className="flex flex-col items-center justify-center gap-y-10 pt-12.5 mb-14 xl:mb-24">
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 656.131 799.931"
                     className="w-52 sm:w-60 md:w-72 lg:w-82 h-auto max-w-full">
                    <g transform='translate(-232 -92)'>
                        <path
                            fill='#cbcbcb'
                            d='M864.432 891.93H232.786c-.434 0-.786-.5-.786-1.122s.352-1.122.786-1.122h631.646c.434 0 .786.5.786 1.122s-.352 1.122-.786 1.122'
                        ></path>
                        <path
                            fill='#3f3d56'
                            d='M693.047 281.932h-4.392V161.629A69.63 69.63 0 0 0 619.028 92H364.147a69.63 69.63 0 0 0-69.628 69.628v660a69.63 69.63 0 0 0 69.628 69.629h254.881a69.63 69.63 0 0 0 69.629-69.629V367.566h4.392Z'
                        ></path>
                        <path
                            fill='#fff'
                            d='M673.836 162.117v659.025a51.953 51.953 0 0 1-51.907 52h-256.2a51.963 51.963 0 0 1-52-51.926V162.117a51.963 51.963 0 0 1 51.926-52h31.141a24.7 24.7 0 0 0 22.874 34.03h146.025a24.7 24.7 0 0 0 22.874-34.03h33.267a51.953 51.953 0 0 1 52 51.906v.093Z'
                        ></path>
                        <g transform='translate(-364 -55.434)'>
                            <path
                                fill='#9f616a'
                                d='M1244.528 623.861c-4.381-5.219-9.629-8.765-14.341-10.13l-55.418-62.647s-4.628-58.316-8.331-78.681-28.7-14.811-28.7-14.811l2.777 58.316 15.743 62.946 64.848 55.055a38 38 0 0 0 4.184 6.106c7.889 9.4 18.592 13.4 23.905 8.937s3.225-15.695-4.665-25.091ZM978.325 623.861c4.381-5.219 9.629-8.765 14.34-10.13l55.418-62.647s4.628-58.316 8.331-78.681 28.7-14.811 28.7-14.811l-2.777 58.316-15.737 62.946-64.848 55.055a37.8 37.8 0 0 1-4.183 6.106c-7.889 9.4-18.592 13.4-23.905 8.937s-3.225-15.695 4.665-25.091ZM1105.082 449.725l4.517-24.714 17.6-1.2 5.265 34.067ZM1036.305 854.603l-23.456-1.34 3.077 71.987 15.894.909Z'
                            ></path>
                            <path
                                fill='#2f2e41'
                                d='m1012.952 902.489 9.4 3.715-.012 4.937s2.267-5.714 14.435-6.961l1.453 4.787s4.719 4.7 3.91 13.188l-3.1 22.743-9.177-.183-1.482-15.826s-2.528-3.591-14.172 13.473c0 0-12.827 2.8-32.691-2.971a5.914 5.914 0 0 1-4.591-5.5 3 3 0 0 1 2.633-3.107c5.072-1.162 10.024.311 13.3-3.2s20.094-25.095 20.094-25.095'
                            ></path>
                            <path
                                fill='#9f616a'
                                d='m1162.193 854.603-23.456-1.34 3.077 71.987 15.894.909Z'
                            ></path>
                            <path
                                fill='#2f2e41'
                                d='m1139.154 904.954 9.392 3.715-.012 4.937s2.266-5.714 14.428-6.961l1.452 4.787s4.717 4.7 3.908 13.188l-3.1 22.743-9.172-.183-1.481-15.826s-2.527-3.591-14.165 13.473c0 0-12.821 2.8-32.675-2.971a5.91 5.91 0 0 1-4.589-5.5 3 3 0 0 1 2.632-3.107c5.069-1.162 10.019.311 13.293-3.2s20.089-25.095 20.089-25.095'
                            ></path>
                            <circle
                                cx='27.77'
                                cy='27.77'
                                r='27.77'
                                fill='#9f616a'
                                transform='translate(1091.741 384.026)'
                            ></circle>
                            <path
                                fill='#2f2e41'
                                d='M1135.257 416.412s-12.209-19.977-24.431-17.772a171 171 0 0 0-18.593 4.2s-4.977-15.928 11.732-23.57c0 0-18-6.312 7.2-19.018s40.884-.392 40.884-.392 15.217 4.2-7.91 20.575c0 0 20.016 22.8-.2 44.581 0 0 3.569-16.584-1.286-13.184a56.5 56.5 0 0 1-7.394 4.585Z'
                            ></path>
                            <path
                                fill='#3B82F6'
                                d='m1138.206 451.576-37.952-4.628-29.158 23.6s-14.5 40.405-3.7 64.8c.259.584.463 41.192.463 41.192h80.631s-.078-27.64 3-37.65a7.76 7.76 0 0 1 1.523-3.079c4.628-4.628 15.736-34.249 10.182-47.208s-24.989-37.027-24.989-37.027'
                            ></path>
                            <path
                                fill='#2f2e41'
                                d='m1067.394 574.688-50.911 161.99-11.108 127.741h31.01l26.381-118.48 36.335-68.59 35.871 196.327h31.3l-.754-265.664-17.088-33.324Z'
                            ></path>
                            <g transform='translate(986.109 524.894)'>
                                <circle cx='124.491' cy='124.491' r='124.491' fill='#090814'></circle>
                                <circle
                                    cx='120.79'
                                    cy='120.79'
                                    r='120.79'
                                    fill='#f2f2f2'
                                    transform='translate(3.7 3.7)'
                                ></circle>
                                <g fill='#3B82F6'>
                                    <path d='M158.923 195.2H90.061a13.96 13.96 0 0 1-13.773-14.108v-14.108c0-27.228 21.624-49.379 48.2-49.379s48.2 22.151 48.2 49.379v14.108a13.96 13.96 0 0 1-13.765 14.108m-34.435-63.487c-18.986 0-34.431 15.822-34.431 35.27v14.109h68.875l-.009-14.108c0-19.449-15.446-35.271-34.435-35.271'></path>
                                    <path d='M90.061 53.781h68.862a13.96 13.96 0 0 1 13.773 14.109v14.108c0 27.228-21.624 49.38-48.2 49.38s-48.208-22.152-48.208-49.38V67.89a13.96 13.96 0 0 1 13.773-14.109m34.427 63.488c18.986 0 34.431-15.823 34.431-35.271V67.89H90.052l.009 14.108c0 19.449 15.445 35.271 34.427 35.271'></path>
                                    <path d='M86.08 93.239h74.977l-5.368 21.213-31.809 5.41-33.311-5.767ZM86.08 188.32h74.977l-1.656-14.409-34.98-9.615-36.03 9.615Z'></path>
                                </g>
                            </g>
                        </g>
                        <circle
                            cx='124.491'
                            cy='124.491'
                            r='124.491'
                            fill='#3B82F6'
                            transform='translate(369.293 221.46)'
                        ></circle>
                        <rect
                            width='216'
                            height='44'
                            fill='#f2f2f2'
                            rx='16'
                            transform='translate(386 531)'
                        ></rect>
                        <rect
                            width='216'
                            height='25'
                            fill='#f2f2f2'
                            rx='12.5'
                            transform='translate(386 604)'
                        ></rect>
                        <rect
                            width='216'
                            height='25'
                            fill='#f2f2f2'
                            rx='12.5'
                            transform='translate(386 641)'
                        ></rect>
                    </g>
                </svg>
                <div className=" flex flex-col items-center justify-center">
                    <h2 className="text-blue-700 font-YekanBakh-Bold text-3xl mb-3">این بخش در حال توسعه است</h2>
                    <p className="text-gray-880 font-YekanBakh-Medium text-sm sm:text-xl max-w-128 text-center mt-2 mb-5">با عرض پوزش، این بخش از سایت در حال توسعه و به‌روزرسانی است.
                        به‌زودی این قسمت با امکانات جدید در دسترس شما قرار خواهد گرفت.</p>
                    <Link to="/" className="flex items-center">
                        <span className="text-sm sm:text-lg text-blue-700 font-YekanBakh-Bold">بازگشت به سایت</span>
                        <DynamicIcon name={'arrow'} className={'size-7 text-blue-700'} />
                    </Link>
                </div>
            </div>
            {/*<!-- ! -------------------- Coming Soon Content -------------------- ! -->*/}
            <div className="flex flex-col-reverse xl:flex-row items-center gap-y-8 mb-10 md:mb-24">
                {/*<!-- ! -------------------- Coming Soon Content Link And Text -------------------- ! -->*/}
                <div className="flex-1 lg:pr-20">
                    <h1 className="text-3xl md:text-5xl/16.5 text-gray-800 font-YekanBakh-Heavy mb-5 text-center xl:text-right">دنبال
                        مسیر یادگیری
                        و نقشه راه برنامه‌نویسی میگردی ؟</h1>
                    <p className="text-gray-360 text-xl mb-8 text-center xl:text-justify">داشتن یک نقشه راه و مسیر
                        یادگیری
                        برنامه‌ نویسی می‌تواند کمک کند تا شما بتوانید راحت‌تر در حوزه برنامه‌ نویسی مورد نظر خود وارد
                        شوید. راکت این نقشه راه را در اخیتار شما قرار میدهد</p>
                    <div className="flex flex-col lg:flex-row items-center justify-center xl:justify-start gap-x-8 gap-y-4">
                        <Link to="/" className="inline-flex items-center justify-center gap-x-2.5 w-full border border-blue-700 font-bold px-7 rounded-lg h-16 transition-all bg-blue-700 hover:bg-transparent text-white hover:text-blue-700">
                            <DynamicIcon name={'arrow'} className={'size-6 text-inherit'} />
                        </Link>
                        <Link to="/" className=" inline-flex items-center justify-center gap-x-2.5 w-full border border-blue-700 font-bold px-7 rounded-lg h-16 transition-all bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white">
                            <DynamicIcon name={'document'} className={'text-inherit'} />
                        </Link>
                    </div>
                </div>
                {/*<!-- ! -------------------- Coming Soon Content Icon -------------------- ! -->*/}
                <div className="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="539" height="471" fill="none" className="md:w-auto w-full md:h-auto h-64" viewBox="0 0 539 471">
                        <g opacity="0.6">
                            <g filter="url(#filter0_d_299_4996)">
                                <path
                                    fill="#fff"
                                    d="M134.477 55.435A7.435 7.435 0 0 1 141.912 48h233.636a7.435 7.435 0 0 1 7.435 7.435v186.586a7.435 7.435 0 0 1-7.435 7.435H141.912a7.435 7.435 0 0 1-7.435-7.435z"
                                ></path>
                            </g>
                            <g filter="url(#filter1_f_299_4996)" opacity="0.2">
                                <rect
                                    width="39.652"
                                    height="39.652"
                                    x="320.348"
                                    y="68.769"
                                    fill="#FFA826"
                                    rx="4.626"
                                ></rect>
                            </g>
                            <rect
                                width="39.652"
                                height="39.652"
                                x="326.543"
                                y="62.869"
                                fill="#FFA826"
                                rx="4.626"
                            ></rect>
                            <rect
                                width="52.045"
                                height="14.127"
                                x="153.438"
                                y="75.882"
                                stroke="#E0E3EA"
                                strokeWidth="0.744"
                                rx="1.859"
                            ></rect>
                            <rect
                                width="108.551"
                                height="9.666"
                                x="257.898"
                                y="131.271"
                                fill="#ADB5C6"
                                rx="1.487"
                            ></rect>
                            <rect
                                width="124.908"
                                height="7.435"
                                x="153.809"
                                y="224.209"
                                fill="#ADB5C6"
                                rx="1.487"
                            ></rect>
                            <rect
                                width="215.616"
                                height="5.205"
                                x="150.836"
                                y="155.808"
                                fill="#E0E3EA"
                                rx="0.744"
                            ></rect>
                            <rect
                                width="179.928"
                                height="5.205"
                                x="186.523"
                                y="172.165"
                                fill="#E0E3EA"
                                rx="0.744"
                            ></rect>
                            <rect
                                width="134.574"
                                height="5.205"
                                x="231.874"
                                y="188.521"
                                fill="#E0E3EA"
                                rx="0.744"
                            ></rect>
                            <path
                                stroke="#98A3B8"
                                strokeOpacity="0.07"
                                strokeWidth="0.663"
                                d="M387.359 211.109H138.19"
                            ></path>
                        </g>
                        <g opacity="0.7">
                            <g filter="url(#filter2_d_299_4996)">
                                <path
                                    fill="#fff"
                                    d="M236.117 173.791a7.435 7.435 0 0 1 7.435-7.435h233.636a7.436 7.436 0 0 1 7.436 7.435v186.586a7.436 7.436 0 0 1-7.436 7.435H243.552a7.435 7.435 0 0 1-7.435-7.435z"
                                ></path>
                            </g>
                            <g filter="url(#filter3_f_299_4996)" opacity="0.2">
                                <rect
                                    width="39.652"
                                    height="39.652"
                                    x="421.988"
                                    y="187.126"
                                    fill="#FF2D20"
                                    rx="4.626"
                                ></rect>
                            </g>
                            <rect
                                width="39.652"
                                height="39.652"
                                x="428.184"
                                y="181.226"
                                fill="#FF2D20"
                                rx="4.626"
                            ></rect>
                            <rect
                                width="52.045"
                                height="14.127"
                                x="255.079"
                                y="194.238"
                                stroke="#E0E3EA"
                                strokeWidth="0.744"
                                rx="1.859"
                            ></rect>
                            <rect
                                width="108.551"
                                height="9.666"
                                x="359.539"
                                y="249.629"
                                fill="#ADB5C6"
                                rx="1.487"
                            ></rect>
                            <rect
                                width="124.908"
                                height="7.435"
                                x="255.449"
                                y="342.566"
                                fill="#ADB5C6"
                                rx="1.487"
                            ></rect>
                            <rect
                                width="215.616"
                                height="5.205"
                                x="252.477"
                                y="274.164"
                                fill="#E0E3EA"
                                rx="0.744"
                            ></rect>
                            <rect
                                width="179.928"
                                height="5.205"
                                x="288.156"
                                y="290.521"
                                fill="#E0E3EA"
                                rx="0.744"
                            ></rect>
                            <rect
                                width="134.574"
                                height="5.205"
                                x="333.515"
                                y="306.879"
                                fill="#E0E3EA"
                                rx="0.744"
                            ></rect>
                            <path
                                stroke="#98A3B8"
                                strokeOpacity="0.07"
                                strokeWidth="0.663"
                                d="M489 329.466H239.831"
                            ></path>
                        </g>
                        <g filter="url(#filter4_f_299_4996)" opacity="0.7">
                            <g filter="url(#filter5_d_299_4996)">
                                <path
                                    fill="#fff"
                                    d="M417 84.987c0-1.098.889-1.987 1.987-1.987h62.427c1.097 0 1.987.89 1.987 1.987v49.855c0 1.097-.89 1.987-1.987 1.987h-62.427a1.987 1.987 0 0 1-1.987-1.987z"
                                ></path>
                            </g>
                            <g filter="url(#filter6_f_299_4996)" opacity="0.2">
                                <rect
                                    width="10.595"
                                    height="10.595"
                                    x="466.664"
                                    y="88.55"
                                    fill="#A2ACBF"
                                    rx="1.236"
                                ></rect>
                            </g>
                            <rect
                                width="10.595"
                                height="10.595"
                                x="468.324"
                                y="86.973"
                                fill="#A2ACBF"
                                rx="1.236"
                            ></rect>
                            <rect
                                width="13.906"
                                height="3.775"
                                x="422.068"
                                y="90.45"
                                stroke="#E0E3EA"
                                strokeWidth="0.199"
                                rx="0.497"
                            ></rect>
                            <rect
                                width="29.005"
                                height="2.583"
                                x="449.98"
                                y="105.25"
                                fill="#ADB5C6"
                                rx="0.397"
                            ></rect>
                            <rect
                                width="33.375"
                                height="1.987"
                                x="422.168"
                                y="130.083"
                                fill="#ADB5C6"
                                rx="0.397"
                            ></rect>
                            <rect
                                width="57.612"
                                height="1.391"
                                x="421.375"
                                y="111.807"
                                fill="#E0E3EA"
                                rx="0.199"
                            ></rect>
                            <rect
                                width="48.077"
                                height="1.391"
                                x="430.902"
                                y="116.177"
                                fill="#E0E3EA"
                                rx="0.199"
                            ></rect>
                            <rect
                                width="35.958"
                                height="1.391"
                                x="443.026"
                                y="120.547"
                                fill="#E0E3EA"
                                rx="0.199"
                            ></rect>
                            <path
                                stroke="#98A3B8"
                                strokeOpacity="0.07"
                                strokeWidth="0.177"
                                d="M484.57 126.583h-66.577"
                            ></path>
                        </g>
                        <g filter="url(#filter7_f_299_4996)" opacity="0.7">
                            <g filter="url(#filter8_d_299_4996)">
                                <path
                                    fill="#fff"
                                    d="M27.168 133.674A2.674 2.674 0 0 1 29.842 131h84.03a2.674 2.674 0 0 1 2.674 2.674v67.108a2.674 2.674 0 0 1-2.674 2.674h-84.03a2.674 2.674 0 0 1-2.674-2.674z"
                                ></path>
                            </g>
                            <g filter="url(#filter9_f_299_4996)" opacity="0.2">
                                <rect
                                    width="14.261"
                                    height="14.261"
                                    x="94.019"
                                    y="138.471"
                                    fill="#A2ACBF"
                                    rx="1.664"
                                ></rect>
                            </g>
                            <rect
                                width="14.261"
                                height="14.261"
                                x="96.249"
                                y="136.349"
                                fill="#A2ACBF"
                                rx="1.664"
                            ></rect>
                            <rect
                                width="18.719"
                                height="5.081"
                                x="33.986"
                                y="141.028"
                                stroke="#E0E3EA"
                                strokeWidth="0.267"
                                rx="0.669"
                            ></rect>
                            <rect
                                width="39.042"
                                height="3.476"
                                x="71.559"
                                y="160.95"
                                fill="#ADB5C6"
                                rx="0.535"
                            ></rect>
                            <rect
                                width="44.925"
                                height="2.674"
                                x="34.124"
                                y="194.376"
                                fill="#ADB5C6"
                                rx="0.535"
                            ></rect>
                            <rect
                                width="77.549"
                                height="1.872"
                                x="33.055"
                                y="169.774"
                                fill="#E0E3EA"
                                rx="0.267"
                            ></rect>
                            <rect
                                width="64.713"
                                height="1.872"
                                x="45.883"
                                y="175.658"
                                fill="#E0E3EA"
                                rx="0.267"
                            ></rect>
                            <rect
                                width="48.401"
                                height="1.872"
                                x="62.202"
                                y="181.54"
                                fill="#E0E3EA"
                                rx="0.267"
                            ></rect>
                            <path
                                stroke="#98A3B8"
                                strokeOpacity="0.07"
                                strokeWidth="0.238"
                                d="M118.117 189.664H28.501"
                            ></path>
                        </g>
                        <g filter="url(#filter10_f_299_4996)" opacity="0.7">
                            <g filter="url(#filter11_d_299_4996)">
                                <path
                                    fill="#fff"
                                    d="M359 384.44a2.44 2.44 0 0 1 2.44-2.44h76.683a2.44 2.44 0 0 1 2.44 2.44v61.24a2.44 2.44 0 0 1-2.44 2.441H361.44a2.44 2.44 0 0 1-2.44-2.441z"
                                ></path>
                            </g>
                            <g filter="url(#filter12_f_299_4996)" opacity="0.2">
                                <rect
                                    width="13.014"
                                    height="13.014"
                                    x="420.008"
                                    y="388.817"
                                    fill="#A2ACBF"
                                    rx="1.518"
                                ></rect>
                            </g>
                            <rect
                                width="13.014"
                                height="13.014"
                                x="422.043"
                                y="386.881"
                                fill="#A2ACBF"
                                rx="1.518"
                            ></rect>
                            <rect
                                width="17.082"
                                height="4.637"
                                x="365.224"
                                y="391.151"
                                stroke="#E0E3EA"
                                strokeWidth="0.244"
                                rx="0.61"
                            ></rect>
                            <rect
                                width="35.628"
                                height="3.172"
                                x="399.511"
                                y="409.331"
                                fill="#ADB5C6"
                                rx="0.488"
                            ></rect>
                            <rect
                                width="40.997"
                                height="2.44"
                                x="365.348"
                                y="439.835"
                                fill="#ADB5C6"
                                rx="0.488"
                            ></rect>
                            <rect
                                width="70.768"
                                height="1.708"
                                x="364.372"
                                y="417.384"
                                fill="#E0E3EA"
                                rx="0.244"
                            ></rect>
                            <rect
                                width="59.055"
                                height="1.708"
                                x="376.078"
                                y="422.753"
                                fill="#E0E3EA"
                                rx="0.244"
                            ></rect>
                            <rect
                                width="44.169"
                                height="1.708"
                                x="390.973"
                                y="428.121"
                                fill="#E0E3EA"
                                rx="0.244"
                            ></rect>
                            <path
                                stroke="#98A3B8"
                                strokeOpacity="0.07"
                                strokeWidth="0.218"
                                d="M442 435.535h-81.781"
                            ></path>
                        </g>
                        <g filter="url(#filter13_d_299_4996)">
                            <path
                                fill="#fff"
                                d="M90 226.381a7.435 7.435 0 0 1 7.435-7.435h233.636a7.435 7.435 0 0 1 7.435 7.435v186.586a7.435 7.435 0 0 1-7.435 7.435H97.435A7.435 7.435 0 0 1 90 412.967z"
                            ></path>
                        </g>
                        <g filter="url(#filter14_f_299_4996)" opacity="0.2">
                            <rect
                                width="39.652"
                                height="39.652"
                                x="275.871"
                                y="239.715"
                                fill="#3B82F6"
                                rx="4.626"
                            ></rect>
                        </g>
                        <rect
                            width="39.652"
                            height="39.652"
                            x="282.066"
                            y="233.815"
                            fill="#3B82F6"
                            rx="4.626"
                        ></rect>
                        <rect
                            width="52.045"
                            height="14.127"
                            x="108.962"
                            y="246.828"
                            stroke="#E0E3EA"
                            strokeWidth="0.744"
                            rx="1.859"
                        ></rect>
                        <rect
                            width="108.551"
                            height="9.666"
                            x="213.422"
                            y="302.217"
                            fill="#ADB5C6"
                            rx="1.487"
                        ></rect>
                        <rect
                            width="124.908"
                            height="7.435"
                            x="109.332"
                            y="395.156"
                            fill="#ADB5C6"
                            rx="1.487"
                        ></rect>
                        <rect
                            width="215.616"
                            height="5.205"
                            x="106.359"
                            y="326.754"
                            fill="#E0E3EA"
                            rx="0.744"
                        ></rect>
                        <rect
                            width="179.928"
                            height="5.205"
                            x="142.047"
                            y="343.111"
                            fill="#E0E3EA"
                            rx="0.744"
                        ></rect>
                        <rect
                            width="134.574"
                            height="5.205"
                            x="187.397"
                            y="359.467"
                            fill="#E0E3EA"
                            rx="0.744"
                        ></rect>
                        <path
                            stroke="#98A3B8"
                            strokeOpacity="0.07"
                            strokeWidth="0.663"
                            d="M342.883 382.055H93.713"
                        ></path>
                        <g filter="url(#filter15_b_299_4996)">
                            <rect
                                width="539"
                                height="436"
                                y="32"
                                fill="#fff"
                                fillOpacity="0.07"
                                rx="10"
                            ></rect>
                        </g>
                        <g filter="url(#filter16_d_299_4996)">
                            <circle cx="275.595" cy="220.595" r="46.596" fill="#fff"></circle>
                        </g>
                        <path
                            fill="#3B82F6"
                            d="M269.938 240.595c-3.883 2.242-8.737-.56-8.737-5.044v-30.265c0-4.483 4.854-7.286 8.737-5.044l26.21 15.132c3.883 2.242 3.883 7.847 0 10.089z"
                        ></path>
                        <defs>
                            <filter
                                id="filter0_d_299_4996"
                                width="345.84"
                                height="298.79"
                                x="85.81"
                                y="0.614"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                ></feColorMatrix>
                                <feOffset dy="1.281"></feOffset>
                                <feGaussianBlur stdDeviation="24.333"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
                                <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_299_4996"
                                ></feBlend>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_299_4996"
                                    result="shape"
                                ></feBlend>
                            </filter>
                            <filter
                                id="filter1_f_299_4996"
                                width="72.565"
                                height="72.565"
                                x="303.891"
                                y="52.313"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    result="effect1_foregroundBlur_299_4996"
                                    stdDeviation="8.228"
                                ></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter2_d_299_4996"
                                width="345.84"
                                height="298.79"
                                x="187.45"
                                y="118.97"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                ></feColorMatrix>
                                <feOffset dy="1.281"></feOffset>
                                <feGaussianBlur stdDeviation="24.333"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
                                <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_299_4996"
                                ></feBlend>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_299_4996"
                                    result="shape"
                                ></feBlend>
                            </filter>
                            <filter
                                id="filter3_f_299_4996"
                                width="72.565"
                                height="72.565"
                                x="405.532"
                                y="170.67"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    result="effect1_foregroundBlur_299_4996"
                                    stdDeviation="8.228"
                                ></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter4_f_299_4996"
                                width="76.645"
                                height="62.904"
                                x="412.463"
                                y="78.463"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    result="effect1_foregroundBlur_299_4996"
                                    stdDeviation="2.269"
                                ></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter5_d_299_4996"
                                width="92.408"
                                height="79.837"
                                x="403.996"
                                y="70.338"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                ></feColorMatrix>
                                <feOffset dy="0.342"></feOffset>
                                <feGaussianBlur stdDeviation="6.502"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
                                <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_299_4996"
                                ></feBlend>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_299_4996"
                                    result="shape"
                                ></feBlend>
                            </filter>
                            <filter
                                id="filter6_f_299_4996"
                                width="19.389"
                                height="19.389"
                                x="462.267"
                                y="84.153"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    result="effect1_foregroundBlur_299_4996"
                                    stdDeviation="2.199"
                                ></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter7_f_299_4996"
                                width="97.91"
                                height="79.417"
                                x="23.688"
                                y="127.52"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    result="effect1_foregroundBlur_299_4996"
                                    stdDeviation="1.74"
                                ></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter8_d_299_4996"
                                width="124.385"
                                height="107.463"
                                x="9.664"
                                y="113.957"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                ></feColorMatrix>
                                <feOffset dy="0.461"></feOffset>
                                <feGaussianBlur stdDeviation="8.752"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
                                <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_299_4996"
                                ></feBlend>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_299_4996"
                                    result="shape"
                                ></feBlend>
                            </filter>
                            <filter
                                id="filter9_f_299_4996"
                                width="26.099"
                                height="26.099"
                                x="88.101"
                                y="132.552"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    result="effect1_foregroundBlur_299_4996"
                                    stdDeviation="2.959"
                                ></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter10_f_299_4996"
                                width="95"
                                height="78.121"
                                x="353"
                                y="376"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    result="effect1_foregroundBlur_299_4996"
                                    stdDeviation="3"
                                ></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter11_d_299_4996"
                                width="113.51"
                                height="98.067"
                                x="343.027"
                                y="366.447"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                ></feColorMatrix>
                                <feOffset dy="0.42"></feOffset>
                                <feGaussianBlur stdDeviation="7.987"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
                                <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_299_4996"
                                ></feBlend>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_299_4996"
                                    result="shape"
                                ></feBlend>
                            </filter>
                            <filter
                                id="filter12_f_299_4996"
                                width="23.817"
                                height="23.817"
                                x="414.607"
                                y="383.416"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    result="effect1_foregroundBlur_299_4996"
                                    stdDeviation="2.701"
                                ></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter13_d_299_4996"
                                width="345.84"
                                height="298.79"
                                x="41.333"
                                y="171.56"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                ></feColorMatrix>
                                <feOffset dy="1.281"></feOffset>
                                <feGaussianBlur stdDeviation="24.333"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
                                <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_299_4996"
                                ></feBlend>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_299_4996"
                                    result="shape"
                                ></feBlend>
                            </filter>
                            <filter
                                id="filter14_f_299_4996"
                                width="72.565"
                                height="72.565"
                                x="259.415"
                                y="223.259"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    result="effect1_foregroundBlur_299_4996"
                                    stdDeviation="8.228"
                                ></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter15_b_299_4996"
                                width="553"
                                height="450"
                                x="-7"
                                y="25"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feGaussianBlur
                                    in="BackgroundImage"
                                    stdDeviation="3.5"
                                ></feGaussianBlur>
                                <feComposite
                                    in2="SourceAlpha"
                                    operator="in"
                                    result="effect1_backgroundBlur_299_4996"
                                ></feComposite>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_backgroundBlur_299_4996"
                                    result="shape"
                                ></feBlend>
                            </filter>
                            <filter
                                id="filter16_d_299_4996"
                                width="373.191"
                                height="373.191"
                                x="89"
                                y="36"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                ></feColorMatrix>
                                <feOffset dy="2"></feOffset>
                                <feGaussianBlur stdDeviation="70"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                                <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_299_4996"
                                ></feBlend>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_299_4996"
                                    result="shape"
                                ></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;