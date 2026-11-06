function ArticleCardSkeleton({ gridClass }) {
    return (
        <div className={`${gridClass && gridClass} bg-white dark:bg-dark-930 p-4 rounded animate-pulse`}
            aria-hidden="true"
        >
            {/*<!-- ! -------------------- Image -------------------- ! -->*/}
            <div className="rounded overflow-hidden">
                <div className="w-full aspect-video bg-gray-200 dark:bg-gray-700/40"></div>
            </div>

            <div>
                {/*<!-- ! -------------------- Title -------------------- ! -->*/}
                <div className="h-16 mt-3 mb-4 flex flex-col gap-y-2">
                    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700/40"></div>
                    <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700/40"></div>
                </div>
                {/*<!-- ! -------------------- Author + Category -------------------- ! -->*/}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-x-2">
                        <div className="size-6 rounded-full bg-gray-200 dark:bg-gray-700/40"></div>
                        <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-700/40"></div>
                    </div>
                    <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700/40"></div>
                </div>
                {/*<!-- ! -------------------- Reactions + Read time -------------------- ! -->*/}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <div className="h-5 w-8 rounded bg-gray-200 dark:bg-gray-700/40"></div>
                        <div className="h-5 w-8 rounded bg-gray-200 dark:bg-gray-700/40"></div>
                        <div className="h-5 w-6 rounded bg-gray-200 dark:bg-gray-700/40"></div>
                    </div>
                    <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700/40"></div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCardSkeleton;