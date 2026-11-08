function LearningPathSkeleton() {
    return (
        <div className="w-full overflow-hidden">
            <div className="flex gap-x-7 w-max animate-pulse">

                {Array.from({ length: 3 }).map((_, index) => (
                    <article
                        key={index}
                        className="w-[calc(100vw-48px)] sm:w-[372px] shrink-0 bg-white dark:bg-dark-body-50 border border-primary-gray-185 dark:border-dark-500 rounded-lg"
                        aria-hidden="true"
                    >
                        {/*<!-- ! -------------------- Content -------------------- ! -->*/}
                        <div className="px-4 md:px-7 pt-6 pb-4">
                            {/*<!-- ! -------------------- Icon & Badge -------------------- ! -->*/}
                            <div className="flex items-center justify-between mb-8">
                                <div className="size-14 rounded-md bg-gray-300/40 dark:bg-white/10" />

                                <div className="h-7 w-24 rounded-sm bg-gray-300/40 dark:bg-white/10" />
                            </div>

                            {/*<!-- ! -------------------- Title -------------------- ! -->*/}
                            <div className="h-7 w-2/3 rounded bg-gray-300/40 dark:bg-white/10 mb-3" />

                            {/*<!-- ! -------------------- Description -------------------- ! -->*/}
                            <div className="flex flex-col gap-y-2">
                                <div className="h-4 w-full rounded bg-gray-300/40 dark:bg-white/10" />
                                <div className="h-4 w-full rounded bg-gray-300/40 dark:bg-white/10" />
                                <div className="h-4 w-3/4 rounded bg-gray-300/40 dark:bg-white/10" />
                            </div>

                        </div>
                        {/*<!-- ! -------------------- Footer -------------------- ! -->*/}
                        <div className="flex justify-end border-t border-gray-400/10 dark:border-dark-500 px-4 md:px-8 py-4">
                            <div className="h-5 w-44 rounded bg-gray-300/40 dark:bg-white/10" />
                        </div>
                    </article>
                ))}

            </div>
        </div>
    );
}

export default LearningPathSkeleton;