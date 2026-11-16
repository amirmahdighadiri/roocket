import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";

function FullPageLoader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-body dark:bg-dark-890">
            <div className="relative flex-center size-72">
                {/*<!-- ! -------------------- Circle Effect -------------------- ! -->*/}
                <span className="absolute size-72 rounded-full bg-blue-700/5 animate-pulse"></span>
                <span className="absolute size-52 rounded-full bg-blue-700/5 animate-pulse [animation-delay:300ms]"></span>
                <span className="absolute size-32 rounded-full bg-blue-700/10 animate-pulse [animation-delay:600ms]"></span>

                {/*<!-- ! -------------------- Orbit -------------------- ! -->*/}
                <div className="absolute size-56 rounded-full border border-dashed border-blue-700/30 animate-spin [animation-duration:4s]">
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 size-5 rounded-full bg-blue-700"></span>
                    <span className="absolute bottom-3 -left-1 size-4 rounded-full bg-customOrange-700"></span>
                    <span className="absolute bottom-3 -right-1 size-3 rounded-full bg-green-600/70"></span>
                </div>

                {/*<!-- ! -------------------- Logo -------------------- ! -->*/}
                <DynamicIcon name="mobileLogo" className="w-14 h-20 animate-float"/>
            </div>

            {/*<!-- ! -------------------- Text -------------------- ! -->*/}
            <div className="flex items-center gap-x-2 mt-6 text-biscay-700 dark:text-white font-YekanBakh-Bold text-xl">
                <span>در حال بارگذاری</span>
                <span className="flex items-center gap-x-1 mt-2">
                    <span className="size-1.5 rounded-full bg-blue-700 animate-bounce"></span>
                    <span className="size-1.5 rounded-full bg-blue-700 animate-bounce [animation-delay:150ms]"></span>
                    <span className="size-1.5 rounded-full bg-blue-700 animate-bounce [animation-delay:300ms]"></span>
                </span>
            </div>
        </div>
    );
}

export default FullPageLoader;