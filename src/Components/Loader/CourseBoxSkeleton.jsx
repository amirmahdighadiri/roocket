import React from 'react';

function CoursesBoxSkeleton({gridClass}) {
    return (
        <article className={`col-span-12 ${gridClass} w-full h-full relative bg-white dark:bg-dark-930 rounded-lg shadow-whiteShadow pt-38 animate-pulse`}>
            {/*<!-- ! -------------------- Image -------------------- ! -->*/}
            <div className="absolute -top-12 px-4 w-full">
                <div className="h-45 rounded-lg bg-gray-300/40 dark:bg-white/10"></div>
            </div>
            {/*<!-- ! -------------------- Content -------------------- ! -->*/}
            <div className="h-full flex flex-col justify-between">
                <div className="px-4">
                    {/*<!-- ! -------------------- Status -------------------- ! -->*/}
                    <div className="h-3 w-20 mb-3 rounded bg-gray-300/40 dark:bg-white/10"></div>
                    {/*<!-- ! -------------------- Title -------------------- ! -->*/}
                    <div className="h-6 w-3/4 mb-2 rounded bg-gray-300/40 dark:bg-white/10"></div>
                    {/*<!-- ! -------------------- Description (h-24 like the real card) -------------------- ! -->*/}
                    <div className="h-24 pt-2 space-y-3">
                        <div className="h-3 w-full rounded bg-gray-300/40 dark:bg-white/10"></div>
                        <div className="h-3 w-full rounded bg-gray-300/40 dark:bg-white/10"></div>
                        <div className="h-3 w-2/3 rounded bg-gray-300/40 dark:bg-white/10"></div>
                    </div>
                </div>
                <div className="mt-2 px-4">
                    {/*<!-- ! -------------------- Time, Like & Price -------------------- ! -->*/}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <span className="h-6 w-16 rounded-sm bg-gray-300/40 dark:bg-white/10"></span>
                            <span className="h-6 w-12 rounded-sm bg-gray-300/40 dark:bg-white/10"></span>
                        </div>
                        <span className="h-7 w-24 rounded bg-gray-300/40 dark:bg-white/10"></span>
                    </div>
                    {/*<!-- ! -------------------- Link -------------------- ! -->*/}
                    <div className="flex-center border-t border-gray-400/10 mt-2">
                        <span className="h-6 w-32 my-4 rounded bg-gray-300/40 dark:bg-white/10"></span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default CoursesBoxSkeleton;