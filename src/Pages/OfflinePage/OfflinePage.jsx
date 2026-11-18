
function Offline({ isOnline, isServerAvailable }) {
    const isInternetDisconnected = !isOnline;

    const title = isInternetDisconnected
        ? "اتصال اینترنت برقرار نیست!"
        : "ارتباط با سرور برقرار نشد!";

    const description = isInternetDisconnected
        ? "اتصال اینترنت خودت رو بررسی کن. به محض برقراری ارتباط می‌تونی دوباره از Roocket استفاده کنی."
        : "اینترنتت وصله، اما در حال حاضر امکان ارتباط با سرور Roocket وجود نداره. لطفاً دوباره تلاش کن.";

    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-body px-4 py-10 dark:bg-dark-890">

            <section className="w-full max-w-xl rounded-3xl border border-gray-100 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-dark-930 sm:p-10">

                {/* Brand */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white dark:bg-blue-450 dark:text-dark-950">
                            <svg
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 2 4 13h7l-1 9 10-13h-7l1-7Z" />
                            </svg>
                        </div>

                        <span className="font-YekanBakh-Heavy text-xl text-gray-800 dark:text-white">
                            Roocket
                        </span>
                    </div>

                    <span className="rounded-full bg-red-450/10 px-3 py-1.5 text-xs font-YekanBakh-Bold text-red-450">
                        Offline
                    </span>
                </div>

                {/* Illustration */}
                <div className="relative mx-auto my-10 flex h-52 w-52 items-center justify-center">

                    <div className="absolute inset-0 rounded-full bg-blue-700/5 dark:bg-blue-450/5" />

                    <div className="absolute inset-4 rounded-full border border-dashed border-blue-700/20 dark:border-blue-450/20" />

                    <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] bg-blue-50 dark:bg-dark-890">

                        <svg
                            className="h-20 w-20 text-blue-700 dark:text-blue-450"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M2 8.82a15 15 0 0 1 20 0" />
                            <path d="M5 12.86a10 10 0 0 1 14 0" />
                            <path d="M8.5 16.43a5 5 0 0 1 7 0" />
                            <path d="M12 20h.01" />
                            <path d="m3 3 18 18" stroke="#E81C4D" strokeWidth="2" />
                        </svg>
                    </div>

                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-450 text-white shadow-lg shadow-red-450/20">
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="m18 6-12 12M6 6l12 12" />
                        </svg>
                    </div>

                    <span className="absolute left-8 top-8 h-2 w-2 rounded-full bg-blue-700 dark:bg-blue-450" />
                    <span className="absolute right-8 top-7 h-3 w-3 rounded-full bg-yellow-400" />
                </div>

                {/* Message */}
                <div className="text-center">
                    <h1 className="font-YekanBakh-Heavy text-2xl text-gray-800 dark:text-white sm:text-3xl">
                        {title}
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-gray-500 dark:text-gray-300">
                        {description}
                    </p>
                </div>

                {/* Connection Status */}
                <div className="mt-8 space-y-4 rounded-2xl bg-gray-50 p-4 dark:bg-dark-890">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-gray-500 dark:bg-dark-930 dark:text-gray-300">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                                    <path d="M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0M12 20h.01" />
                                </svg>
                            </div>

                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                اتصال اینترنت
                            </span>
                        </div>

                        <span className={`text-xs font-YekanBakh-Bold ${isOnline ? "text-green-600" : "text-red-450"}`}>
                            {isOnline ? "متصل" : "قطع شده"}
                        </span>
                    </div>

                    <div className="h-px bg-gray-200 dark:bg-white/10" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-gray-500 dark:bg-dark-930 dark:text-gray-300">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                                    <rect x="3" y="4" width="18" height="16" rx="2" />
                                    <path d="M8 8h8M8 12h8M8 16h4" />
                                </svg>
                            </div>

                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                سرور Roocket
                            </span>
                        </div>

                        <span className={`text-xs font-YekanBakh-Bold ${isServerAvailable ? "text-green-600" : "text-red-450"}`}>
                            {isServerAvailable ? "در دسترس" : "غیرقابل دسترس"}
                        </span>
                    </div>

                </div>

                {/* Retry */}
                <button
                    type="button"
                    onClick={handleRetry}
                    className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-700 font-YekanBakh-Bold text-white transition duration-200 hover:bg-blue-800 active:scale-[0.98] dark:bg-blue-450 dark:text-dark-950 dark:hover:bg-blue-500"
                >
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20 7v5h-5" />
                        <path d="M4 17v-5h5" />
                        <path d="M5.64 9A8 8 0 0 1 19.2 5.6L20 7" />
                        <path d="M4 17l.8 1.4A8 8 0 0 0 18.36 15" />
                    </svg>

                    تلاش مجدد
                </button>

                <p className="mt-5 text-center text-xs text-gray-400 dark:text-gray-500">
                    امیدواریم به‌زودی دوباره کنارت باشیم :)
                </p>

            </section>
        </main>
    );
}

export default Offline;
