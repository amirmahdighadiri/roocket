import React from "react";

function CartPageLoader() {
    return (
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10 mt-10 mb-20 animate-pulse">
            {/*<!-- ! -------------------- Courses List -------------------- ! -->*/}
            <div className="col-span-12 lg:col-span-8">
                <div className="space-y-4">

                    {[1, 2, 3].map(item => (
                        <article
                            key={item}
                            className="w-full bg-white dark:bg-dark-body-100 px-5 py-6 sm:px-10 xl:px-14 sm:py-9 rounded-xl"
                        >
                            {/*<!-- ! -------------------- Course Info -------------------- ! -->*/}
                            <div
                                className="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between md:gap-x-8">

                                {/*<!-- ! -------------------- Image -------------------- ! -->*/}
                                <div
                                    className="w-full md:w-42 h-44 md:h-24 rounded bg-gray-300/40 dark:bg-white/10 shrink-0"></div>

                                {/*<!-- ! -------------------- Content -------------------- ! -->*/}
                                <div className="flex-1 space-y-4">

                                    {/*<!-- ! -------------------- Title -------------------- ! -->*/}
                                    <div className="h-5 w-3/4 rounded bg-gray-300/40 dark:bg-white/10"></div>

                                    {/*<!-- ! -------------------- Teacher -------------------- ! -->*/}
                                    <div className="h-4 w-1/3 rounded bg-gray-300/40 dark:bg-white/10"></div>

                                    {/*<!-- ! -------------------- Description -------------------- ! -->*/}
                                    <div className="space-y-2">
                                        <div className="h-3 w-full rounded bg-gray-300/40 dark:bg-white/10"></div>
                                        <div className="h-3 w-2/3 rounded bg-gray-300/40 dark:bg-white/10"></div>
                                    </div>

                                </div>

                                {/*<!-- ! -------------------- Price & Remove -------------------- ! -->*/}
                                <div className="flex md:flex-col items-center justify-between gap-y-5 shrink-0">

                                    <div className="h-6 w-24 rounded bg-gray-300/40 dark:bg-white/10"></div>

                                    <div className="h-8 w-8 rounded-lg bg-gray-300/40 dark:bg-white/10"></div>

                                </div>
                            </div>
                        </article>
                    ))}

                </div>
            </div>

            {/*<!-- ! -------------------- Payment Info -------------------- ! -->*/}
            <div className="col-span-12 lg:col-span-4">
                <div className="relative bg-white dark:bg-dark-body-100 p-6 rounded-xl overflow-hidden">

                    {/*<!-- ! -------------------- Circle Effect -------------------- ! -->*/}
                    <span className="absolute -top-13 -left-14 flex-center size-28 rounded-full bg-blue-700/5">
                        <span className="flex-center size-18 rounded-full bg-blue-700/5">
                            <span className="flex-center size-10 rounded-full bg-blue-700/5"></span>
                        </span>
                    </span>

                    {/*<!-- ! -------------------- Payment Title -------------------- ! -->*/}
                    <div className="h-9 w-40 rounded mb-6 bg-gray-300/40 dark:bg-white/10"></div>

                    {/*<!-- ! -------------------- Discount Input -------------------- ! -->*/}
                    <div className="pb-6 border-b border-gray-300/10 mb-8">

                        <div className="h-4 w-20 rounded mb-3 bg-gray-300/40 dark:bg-white/10"></div>

                        <div
                            className="h-11 flex items-center gap-x-5 bg-biscay-700/5 dark:bg-dark-890 p-2 rounded mt-2">
                            <div className="h-5 flex-4 rounded bg-gray-300/40 dark:bg-white/10"></div>
                            <div className="h-full flex-1 rounded-lg bg-gray-300/40 dark:bg-white/10"></div>
                        </div>

                    </div>

                    {/*<!-- ! -------------------- Payment Details -------------------- ! -->*/}
                    <div className="space-y-5 pb-6 border-b border-gray-300/10 mb-8">

                        {/*<!-- ! -------------------- Total Price -------------------- ! -->*/}
                        <div className="flex items-center justify-between">
                            <div className="h-4 w-20 rounded bg-gray-300/40 dark:bg-white/10"></div>
                            <div className="h-7 w-24 rounded bg-gray-300/40 dark:bg-white/10"></div>
                        </div>

                        {/*<!-- ! -------------------- Wallet Price -------------------- ! -->*/}
                        <div className="flex items-center justify-between">
                            <div className="h-4 w-28 rounded bg-gray-300/40 dark:bg-white/10"></div>
                            <div className="h-7 w-20 rounded bg-gray-300/40 dark:bg-white/10"></div>
                        </div>

                        {/*<!-- ! -------------------- Discount Price -------------------- ! -->*/}
                        <div className="flex items-center justify-between">
                            <div className="h-4 w-16 rounded bg-gray-300/40 dark:bg-white/10"></div>
                            <div className="h-7 w-20 rounded bg-gray-300/40 dark:bg-white/10"></div>
                        </div>

                    </div>

                    {/*<!-- ! -------------------- Final Payment -------------------- ! -->*/}
                    <div className="flex items-center justify-between mb-5">
                        <div className="h-5 w-28 rounded bg-gray-300/40 dark:bg-white/10"></div>
                        <div className="h-8 w-28 rounded bg-gray-300/40 dark:bg-white/10"></div>
                    </div>

                    {/*<!-- ! -------------------- Payment Link -------------------- ! -->*/}
                    <div className="w-full h-16 flex-center gap-x-3 bg-gray-300/40 dark:bg-white/10 rounded-lg">
                        <div className="h-5 w-36 rounded bg-gray-400/30 dark:bg-white/10"></div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CartPageLoader;
