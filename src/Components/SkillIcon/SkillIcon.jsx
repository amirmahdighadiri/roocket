import React from 'react';
import {Link} from "react-router-dom";

function SkillIcon({name , iconSrc}) {
    return (
        <div className="relative inline-flex flex-col items-center group cursor-pointer *:transition-all *:duration-400">
            <Link to="" className="relative flex-center size-25 bg-gray-5 rounded-md lg:grayscale lg:group-hover:filter-none lg:group-hover:-translate-y-5">
                <img src={iconSrc} alt="" className="w-14"/>
            </Link>
            <span className="hidden lg:block absolute -bottom-10 text-gray-800 dark:text-gray-920 font-Mult-Font-Bold text-center text-2xl opacity-0 lg:group-hover:opacity-100 whitespace-nowrap">آموزش {name}</span>
        </div>
    );
}

export default SkillIcon;