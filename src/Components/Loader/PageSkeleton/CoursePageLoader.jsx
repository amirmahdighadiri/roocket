
import React from "react";

function CoursePageLoader() {
    const Skeleton = ({ className = "" }) => (
        <div className={`rounded bg-gray-300/40 dark:bg-white/10 ${className}`}></div>
    );

    return (
        <section className="container animate-pulse">

            {/*<!-- ! -------------------- Courses Intro -------------------- ! -->*/}
            <div className="bg-white dark:bg-dark-930 py-3 px-3 xl:px-10 sm:pt-6 sm:pb-4 rounded-lg my-10">

                {/*<!-- ! -------------------- Courses Summary -------------------- ! -->*/}
                <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-15">

                    {/*<!-- ! -------------------- Courses Description -------------------- ! -->*/}
                    <div className="col-span-12 lg:col-span-8">

                        {/*<!-- ! -------------------- Title -------------------- ! -->*/}
                        <Skeleton className="h-9 lg:h-14 w-3/4 mb-5" />

                        {/*<!-- ! -------------------- Description -------------------- ! -->*/}
                        <div className="h-24 space-y-4 mb-5">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                        </div>

                        {/*<!-- ! -------------------- Action Buttons -------------------- ! -->*/}
                        <div className="flex flex-col lg:flex-row gap-y-5 items-center justify-between">

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                                <Skeleton className="h-12 lg:h-14 w-full sm:w-64 rounded" />
                                <Skeleton className="h-5 w-36" />
                            </div>

                            {/*<!-- ! -------------------- Price -------------------- ! -->*/}
                            <Skeleton className="h-12 w-32" />

                        </div>
                    </div>

                    {/*<!-- ! -------------------- Courses Image -------------------- ! -->*/}
                    <div className="col-span-12 lg:col-span-4">
                        <Skeleton className="w-full h-52 lg:h-full min-h-52 rounded" />
                    </div>

                </div>

                {/*<!-- ! -------------------- Courses Meta -------------------- ! -->*/}
                <div className="flex flex-wrap items-center justify-between gap-5 border-t border-gray-100 dark:border-gray-900/10 pt-5 mt-10">

                    <div className="flex items-center gap-x-5 lg:gap-x-7">
                        <Skeleton className="h-6 w-14" />
                        <Skeleton className="h-6 w-14" />
                    </div>

                    <div className="flex items-center gap-x-3">
                        <Skeleton className="size-9 rounded-full" />
                        <Skeleton className="h-5 w-28" />
                    </div>

                </div>
            </div>

            {/*<!-- ! -------------------- Course Content -------------------- ! -->*/}
            <div className="grid grid-cols-12 gap-x-6 gap-y-8 mb-20">

                {/*<!-- ! -------------------- Courses Details Right -------------------- ! -->*/}
                <div className="col-span-12 lg:col-span-9">

                    {/*<!-- ! -------------------- Course Tabs -------------------- ! -->*/}
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-5 bg-white dark:bg-dark-930 shadow-sm rounded px-5 py-5 mb-8">

                        <Skeleton className="h-7 w-24" />
                        <Skeleton className="h-7 w-24" />
                        <Skeleton className="h-7 w-24" />
                        <Skeleton className="h-7 w-24" />

                    </div>

                    {/*<!-- ! -------------------- Course Description -------------------- ! -->*/}
                    <div className="bg-white dark:bg-dark-930 shadow-sm rounded px-3 md:px-10 py-7 mb-8">

                        <Skeleton className="h-8 w-48 mb-7" />

                        <div className="space-y-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-4/5" />
                            <Skeleton className="h-4 w-full" />
                        </div>

                        <div className="mt-8 space-y-4">
                            <Skeleton className="h-6 w-40" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-11/12" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>

                    </div>

                    {/*<!-- ! -------------------- Courses Support -------------------- ! -->*/}
                    <div className="hidden md:block bg-white dark:bg-dark-930 shadow-sm rounded px-3 md:px-9 py-8 mb-8">

                        <Skeleton className="h-8 w-48 mb-6" />

                        <div className="flex flex-col md:flex-row items-center gap-8">

                            <Skeleton className="w-52 h-40 shrink-0 rounded" />

                            <div className="flex-1 w-full space-y-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-5 w-40 mt-5" />
                            </div>

                        </div>
                    </div>

                    {/*<!-- ! -------------------- Courses Curriculum -------------------- ! -->*/}
                    <div className="bg-white dark:bg-dark-930 shadow-sm rounded px-3 md:px-10 py-7 mb-8">

                        <Skeleton className="h-8 w-40 mb-7" />

                        <div className="space-y-4">

                            {[1, 2, 3, 4].map(item => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between gap-4 p-5 rounded-lg bg-gray-300/10 dark:bg-white/5"
                                >
                                    <div className="flex items-center gap-4 flex-1">
                                        <Skeleton className="size-9 rounded-full shrink-0" />
                                        <Skeleton className="h-5 w-2/3" />
                                    </div>

                                    <Skeleton className="h-5 w-16" />
                                </div>
                            ))}

                        </div>

                    </div>

                    {/*<!-- ! -------------------- Courses Comments -------------------- ! -->*/}
                    <div className="bg-white dark:bg-dark-930 shadow-sm rounded px-3 md:px-10 py-7">

                        {/*<!-- ! -------------------- Comments Title -------------------- ! -->*/}
                        <div className="flex items-center justify-between gap-4 mb-8">
                            <Skeleton className="h-8 w-40" />
                            <Skeleton className="h-10 w-44 rounded" />
                        </div>

                        {/*<!-- ! -------------------- Comment Items -------------------- ! -->*/}
                        <div className="space-y-6">

                            {[1, 2, 3].map(item => (
                                <div
                                    key={item}
                                    className="flex gap-4 border-b border-gray-300/10 pb-6"
                                >

                                    <Skeleton className="size-12 rounded-full shrink-0" />

                                    <div className="flex-1 space-y-4">

                                        <div className="flex items-center justify-between">
                                            <Skeleton className="h-5 w-28" />
                                            <Skeleton className="h-4 w-20" />
                                        </div>

                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-4/5" />

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/*<!-- ! -------------------- Courses Details Left -------------------- ! -->*/}
                <div className="col-span-12 lg:col-span-3">

                    {/*<!-- ! -------------------- Score Wrapper -------------------- ! -->*/}
                    <div className="flex justify-between bg-white dark:bg-dark-930 py-4 px-5 shadow-sm rounded overflow-hidden mb-4">

                        <div className="w-full flex flex-col justify-center gap-3">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-20" />
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-4 w-20" />
                        </div>

                    </div>

                    {/*<!-- ! -------------------- Course Info Cards -------------------- ! -->*/}
                    <div className="grid grid-cols-12 gap-3 mb-4">

                        {[1, 2, 3, 4].map(item => (
                            <div
                                key={item}
                                className="col-span-4 flex flex-col items-center bg-white dark:bg-dark-930 shadow-sm rounded pt-3 pb-3 gap-3"
                            >
                                <Skeleton className="size-6 rounded" />
                                <Skeleton className="h-3 w-12" />
                                <Skeleton className="h-4 w-14" />
                            </div>
                        ))}

                    </div>

                    {/*<!-- ! -------------------- Certificates Wrapper -------------------- ! -->*/}
                    <div className="bg-white dark:bg-dark-930 py-4 px-5 shadow-sm rounded mb-4">

                        <div className="flex items-center gap-3 mb-5">

                            <Skeleton className="size-12 rounded-full shrink-0" />

                            <div className="flex-1 space-y-3">
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-4 w-full" />
                            </div>

                        </div>

                        <Skeleton className="h-5 w-40 mx-auto" />

                    </div>

                    {/*<!-- ! -------------------- Teacher Wrapper -------------------- ! -->*/}
                    <div className="flex flex-col items-center bg-white dark:bg-dark-930 py-4 px-5 shadow-sm rounded mb-4">

                        <Skeleton className="size-16 rounded-full mb-3" />

                        <Skeleton className="h-5 w-28 mb-2" />
                        <Skeleton className="h-4 w-20 mb-4" />

                        <div className="w-full space-y-3">
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-5/6" />
                            <Skeleton className="h-3 w-4/5" />
                        </div>

                    </div>

                    {/*<!-- ! -------------------- Chat Wrapper -------------------- ! -->*/}
                    <div className="flex flex-col items-center bg-white dark:bg-dark-930 py-5 px-6 shadow-sm rounded mb-4">

                        <Skeleton className="w-40 h-28 rounded mb-5" />
                        <Skeleton className="h-7 w-40 mb-3" />

                        <div className="w-full space-y-3 mb-5">
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-4/5 mx-auto" />
                        </div>

                        <Skeleton className="h-5 w-28" />

                    </div>

                    {/*<!-- ! -------------------- Banner Wrapper -------------------- ! -->*/}
                    <div className="hidden lg:block space-y-4 mb-4">

                        <Skeleton className="w-full h-32 rounded-lg" />
                        <Skeleton className="w-full h-32 rounded-lg" />

                    </div>

                    {/*<!-- ! -------------------- More Courses Wrapper -------------------- ! -->*/}
                    <div className="bg-white dark:bg-dark-930 py-7 px-5 shadow-sm rounded">

                        <div className="flex items-start gap-x-3 mb-5">
                            <Skeleton className="size-6 rounded" />

                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-5 w-28" />
                                <Skeleton className="h-3 w-full" />
                            </div>
                        </div>

                        <div className="space-y-3">

                            {[1, 2, 3].map(item => (
                                <div key={item} className="bg-gray-300/10 dark:bg-white/5 rounded p-4">
                                    <Skeleton className="h-5 w-4/5" />
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default CoursePageLoader;
