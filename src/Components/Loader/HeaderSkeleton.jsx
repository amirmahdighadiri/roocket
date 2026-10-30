
function HeaderSkeleton() {
    return (
        <div className={`flex items-center gap-x-4 animate-pulse`}>
            <span className="hidden lg:block size-12 rounded-full bg-gray-300/40"></span>
            <span className="hidden lg:block size-12 rounded-full bg-gray-300/40"></span>
            <span className="size-12 rounded-full bg-gray-300/40"></span>
        </div>
    );
}

export default HeaderSkeleton;
