import React from 'react';
import instagramPhone from "../../../assets/images/instagram.png";
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import {Link} from "react-router-dom";

function InstagramSection(props) {
    return (
        <section className="container mb-32 lg:mt-80 mt-30 sm:px-10">
            <div className="relative flex flex-col xl:flex-row items-center justify-end gap-x-16 2xl:gap-x-45 px-9 pt-24 pb-12 sm:px-16 xl:py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl">
                <img src={instagramPhone} alt="instagram" className="absolute -top-27 xl:top-auto xl:bottom-0 xl:right-0 scale-75 xl:scale-100"/>
                <h6 className="font-YekanBakh-Fat text-lg md:text-2xl text-white text-center xl:text-right mb-5 xl:mb-0">ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!</h6>
                <Link to="/" className="flex items-center px-5 py-3 font-YekanBakh-Bold text-purple-600 bg-white rounded text-xs xl:text-base border border-white hover:bg-transparent hover:text-white transition-all">
                    <span className="">مشاهده پست های اینستاگرام</span>
                    <DynamicIcon name={'arrow'} className={'size-4 text-inherit'} />
                </Link>
            </div>
        </section>
    );
}

export default InstagramSection;