function PodcastCardSkeleton({ gridClass }) {
    return (
        <article
            className={`${gridClass} bg-white dark:bg-dark-930 rounded-md pt-4 animate-pulse`}
            aria-hidden="true"
        >
            {/*<!-- ! -------------------- Box Header -------------------- ! -->*/}
            <div className="flex items-center justify-between px-5">
                {/* Episode Number */}
                <div className="h-7 w-20 rounded bg-gray-300/40 dark:bg-white/10" />

                {/*<!-- ! -------------------- Podcast Actions -------------------- ! -->*/}
                <div className="flex items-center gap-x-2">
                    <div className="h-5 w-12 rounded bg-gray-300/40 dark:bg-white/10" />
                    <div className="h-5 w-10 rounded bg-gray-300/40 dark:bg-white/10" />
                    <div className="h-5 w-6 rounded bg-gray-300/40 dark:bg-white/10" />
                </div>
            </div>

            {/*<!-- ! -------------------- Box Body -------------------- ! -->*/}
            <div className="h-14 mt-2 mb-7 px-5 flex flex-col gap-y-2">
                <div className="h-4 w-full rounded bg-gray-300/40 dark:bg-white/10" />
                <div className="h-4 w-2/3 rounded bg-gray-300/40 dark:bg-white/10" />
            </div>

            {/*<!-- ! -------------------- Box Footer -------------------- ! -->*/}
            <div className="relative ml-4 border-t border-gray-300/10 dark:border-dark-910 py-2 pr-5">
                <div className="h-4 w-36 rounded bg-gray-300/40 dark:bg-white/10" />

                {/* Podcast Image */}
                <div className="absolute left-0 -top-4 size-20 rounded bg-gray-300/40 dark:bg-white/10" />
            </div>
        </article>
    );
}

export default PodcastCardSkeleton;