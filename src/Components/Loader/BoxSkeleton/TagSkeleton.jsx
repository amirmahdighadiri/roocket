
function TagSkeleton() {
    const tagWidths = [
        "w-36",
        "w-32",
        "w-44",
        "w-28",
        "w-48",
        "w-40",
        "w-24",
        "w-36",
        "w-28",
        "w-40",
        "w-32",
        "w-36",
    ];

    return (
        <>
            {tagWidths.map((width, index) => (
                <div
                    key={index}
                    className={`${width} h-8 rounded bg-gray-300/40 dark:bg-white/10 animate-pulse`}
                />
            ))}
        </>
    );
}

export default TagSkeleton;
